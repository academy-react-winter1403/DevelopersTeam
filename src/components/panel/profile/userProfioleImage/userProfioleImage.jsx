import React from "react";
import { BiImageAdd } from "react-icons/bi";
import img from "./../../../../assets/images/panel/img.svg";
import { CgMoreVertical } from "react-icons/cg";
import { useMutation, useQuery } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import { Dropdown, Menu, Tooltip, Upload } from "antd";

const UserProfioleImage = () => {
  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const selectProfile = async () => {
    const myData = new FormData();
    myData.append("ImageId", userImage.id);
    const res = await http.post("/SharePanel/SelectProfileImage", {
      data: myData,
    });
  };
  const { mutate: mutateSelectProfile } = useMutation({
    mutationFn: selectProfile,
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  const deleteProfileImg = async () => {
    const myData = new FormData();
    myData.append("DeleteEntityId", userImage.id);
    const res = await http.post("/SharePanel/DeleteProfileImage", {
      data: myData,
    });
  };
  const { mutate: mutateDeleteProfile } = useMutation({
    mutationFn: deleteProfileImg,
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  const addProfile = async () => {
    const myData = new FormData();
    myData.append("formFile", userImage.puctureAddress);
    const res = await http.post("/SharePanel/AddProfileImage", {
      data: myData,
    });
  };
  const { mutate: mutateAddProfile } = useMutation({
    mutationFn: addProfile,
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  const items = [
    {
      key: "1",
      label: (
        <span onClick={() => mutateSelectProfile()}>
          قراردادن به عنوان پروفایل
        </span>
      ),
    },
    {
      key: "2",
      label: <span onClick={() => mutateDeleteProfile()}>حذف</span>,
    },
  ];

  return (
    <div className="h-auto mb-10 flex space-x-8">
      <Upload>
        <div className="w-60 h-60 border-4 ml-8 rounded-2xl border-borderGray flex flex-col justify-center items-center">
          <BiImageAdd className="text-navyBlue w-10 h-10" />
          <h1 className="font-semibold">اضافه کردن عکس</h1>
          <span className="text-sm text-gray">اندازه فریم ( 236*236 )</span>
        </div>
      </Upload>
      {data?.userImage.map((item, index) => {
        return (
          <div
            key={index}
            className="w-60 h-60  rounded-2xl flex flex-col justify-center items-center overflow-hidden relative"
          >
            <Dropdown menu={{ items }} placement="topRight" arrow>
              <CgMoreVertical className=" w-10 h-10 bg-white p-2 rounded-full absolute top-3 right-3 cursor-pointer" />
            </Dropdown>
            <img src={item.puctureAddress} alt="" className="w-60 h-60" />
          </div>
        );
      })}
    </div>
  );
};

export default UserProfioleImage;
