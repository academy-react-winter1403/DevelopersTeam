import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { CgMoreVertical } from "react-icons/cg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import { Dropdown, Upload, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const UserProfioleImage = ({ data }) => {
  const queryClient = useQueryClient();

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

  const deleteProfileImg = async (id) => {
    const myData = new FormData();
    myData.append("DeleteEntityId", id);
    const res = await http.delete("/SharePanel/DeleteProfileImage", myData);
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

  const uploadProfileImage = async (file) => {
    const formData = new FormData();
    formData.append("formFile", file);
    const res = await http.post("/SharePanel/AddProfileImage", formData);
    return res;
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

  return (
    <div className="h-auto mb-10 flex flex-wrap gap-4">
      <Upload onClick={mutateUploadProfile} name="formFile">
        <div className="w-60 h-60 border-4 rounded-2xl border-borderGray flex flex-col justify-center items-center cursor-pointer hover:border-blue-200 transition-colors">
          <BiImageAdd className="text-navyBlue w-10 h-10" />
          <h1 className="font-semibold">اضافه کردن عکس</h1>
          <span className="text-sm text-gray">اندازه فریم ( 236*236 )</span>
        </div>
      </Upload>

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
