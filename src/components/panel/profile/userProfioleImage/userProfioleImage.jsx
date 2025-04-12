// import React from "react";
// import { BiImageAdd } from "react-icons/bi";
// import img from "./../../../../assets/images/panel/img.svg";
// import { CgMoreVertical } from "react-icons/cg";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import http from "./../../../../core/services/interceptor";
// import { Dropdown, Menu, Tooltip, Upload } from "antd";

// const UserProfioleImage = ({ data }) => {

//   const queryClient = useQueryClient();

//   const selectProfile = async (id) => {
//     const myData = new FormData();
//     myData.append("ImageId", id);
//     const res = await http.post("/SharePanel/SelectProfileImage", myData);
//     return res;
//   };
//   const { mutate: mutateSelectProfile } = useMutation({
//     mutationFn: (id) => selectProfile(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries("profile");
//     },
//   });

//   const deleteProfileImg = async (id) => {
//     const myData = new FormData();
//     myData.append("DeleteEntityId", id);
//     const res = await http.delete("/SharePanel/DeleteProfileImage", {
//       data: myData,
//     });
//     return res;
//   };
//   const { mutate: mutateDeleteProfile } = useMutation({
//     mutationFn: (id) => deleteProfileImg(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries("profile");
//     },
//   });

//   const addProfile = async () => {
//     const myData = new FormData();
//     myData.append("formFile", userImage.puctureAddress);
//     const res = await http.post("/SharePanel/AddProfileImage", myData);
//     return res;
//   };
//   const { mutate: mutateAddProfile } = useMutation({
//     mutationFn: addProfile,
//     onSuccess: () => {
//       queryClient.invalidateQueries("profile");
//     },
//   });

//   return (
//     <div className="h-auto mb-10 flex space-x-8">
//       <Upload onClick={mutateAddProfile}>
//         <div className="w-60 h-60 border-4 ml-8 rounded-2xl border-borderGray flex flex-col justify-center items-center">
//           <BiImageAdd className="text-navyBlue w-10 h-10" />
//           <h1 className="font-semibold">اضافه کردن عکس</h1>
//           <span className="text-sm text-gray">اندازه فریم ( 236*236 )</span>
//         </div>
//       </Upload>
//       {data?.userImage.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className="w-60 h-60  rounded-2xl flex flex-col justify-center items-center overflow-hidden relative"
//           >
//             <Dropdown
//               menu={{
//                 items: [
//                   {
//                     key: "1",
//                     label: (
//                       <span onClick={() => mutateSelectProfile(item.id)}>
//                         قراردادن به عنوان پروفایل
//                       </span>
//                     ),
//                   },
//                   {
//                     key: "2",
//                     label: (
//                       <span onClick={() => mutateDeleteProfile(item.id)}>
//                         حذف
//                       </span>
//                     ),
//                   },
//                 ],
//               }}
//               placement="topRight"
//               arrow
//             >
//               <CgMoreVertical className=" w-10 h-10 bg-white p-2 rounded-full absolute top-3 right-3 cursor-pointer" />
//             </Dropdown>
//             <img src={item.puctureAddress} alt="" className="w-60 h-60" />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default UserProfioleImage;

import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { CgMoreVertical } from "react-icons/cg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import { Dropdown, Upload, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const UserProfioleImage = ({ data }) => {
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState(false);

  // Function to handle profile image selection
  const selectProfile = async (id) => {
    const myData = new FormData();
    myData.append("ImageId", id);
    const res = await http.post("/SharePanel/SelectProfileImage", myData);
    return res;
  };

  const { mutate: mutateSelectProfile } = useMutation({
    mutationFn: (id) => selectProfile(id),
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
      message.success("تصویر پروفایل با موفقیت تغییر کرد");
    },
    onError: () => {
      message.error("خطا در تغییر تصویر پروفایل");
    },
  });

  // Function to handle profile image deletion
  const deleteProfileImg = async (id) => {
    const myData = new FormData();
    myData.append("DeleteEntityId", id);
    const res = await http.delete("/SharePanel/DeleteProfileImage", {
      data: myData,
    });
    return res;
  };

  const { mutate: mutateDeleteProfile } = useMutation({
    mutationFn: (id) => deleteProfileImg(id),
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
      message.success("تصویر با موفقیت حذف شد");
    },
    onError: () => {
      message.error("خطا در حذف تصویر");
    },
  });

  // Function to handle profile image upload
  const uploadProfileImage = async (file) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("formFile", file);

      const response = await http.post(
        "/SharePanel/AddProfileImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response;
    } catch (error) {
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const { mutate: mutateUploadProfile } = useMutation({
    mutationFn: uploadProfileImage,
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
      message.success("تصویر با موفقیت آپلود شد");
    },
    onError: () => {
      message.error("خطا در آپلود تصویر");
    },
  });

  // Custom upload props for Ant Design Upload component
  // const uploadProps = {
  //   name: "formFile",
  //   multiple: false,
  //   showUploadList: false,
  //   beforeUpload: (file) => {
  //     // You can add validation here for file type/size if needed
  //     mutateUploadProfile(file);
  //     return false; // Prevent default upload behavior
  //   },
  //   accept: "image/*",
  // };

  return (
    <div className="h-auto mb-10 flex flex-wrap gap-4">
      {/* Upload Button */}
      <Upload name="formFile">
        <div className="w-60 h-60 border-4 rounded-2xl border-borderGray flex flex-col justify-center items-center cursor-pointer hover:border-blue-200 transition-colors">
          {uploading ? (
            <LoadingOutlined className="text-navyBlue text-2xl" />
          ) : (
            <>
              <BiImageAdd className="text-navyBlue w-10 h-10" />
              <h1 className="font-semibold">اضافه کردن عکس</h1>
              <span className="text-sm text-gray">اندازه فریم ( 236*236 )</span>
            </>
          )}
        </div>
      </Upload>

      {/* Display existing images */}
      {data?.userImage?.map((item, index) => (
        <div
          key={index}
          className="w-60 h-60 rounded-2xl flex flex-col justify-center items-center overflow-hidden relative group"
        >
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: (
                    <span onClick={() => mutateSelectProfile(item.id)}>
                      قراردادن به عنوان پروفایل
                    </span>
                  ),
                },
                {
                  key: "2",
                  label: (
                    <span onClick={() => mutateDeleteProfile(item.id)}>
                      حذف
                    </span>
                  ),
                },
              ],
            }}
            placement="topRight"
            arrow
            trigger={["click"]}
          >
            <CgMoreVertical className="w-10 h-10 bg-white p-2 rounded-full absolute top-3 right-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity shadow-md" />
          </Dropdown>
          <img
            src={item.puctureAddress}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default UserProfioleImage;
