import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { CgMoreVertical } from "react-icons/cg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import { Dropdown, message, Modal, Input } from "antd";
import toast from "react-hot-toast";
import { TiTickOutline } from "react-icons/ti";
import { RiAiGenerate } from "react-icons/ri";
import axios from "axios";
import { useDarkMode } from "../../../../context/theme/themeContext";

const UserProfileImage = ({ data }) => {
  const queryClient = useQueryClient();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState("یک تصویر پروفایل حرفه ای و مناسب برای شبکه های اجتماعی");
  const { darkMode, setDarkMode } = useDarkMode();

  const selectProfile = async (id) => {
    const myData = new FormData();
    myData.append("ImageId", id);
    const res = await http.post("/SharePanel/SelectProfileImage", myData);
    return res;
  };

  const { mutate: mutateSelectProfile } = useMutation({
    mutationFn: selectProfile,
    onMutate: async (newImageId) => {
      await queryClient.cancelQueries({ queryKey: ["profile"] });
      const previousProfile = queryClient.getQueryData(["profile"]);
      queryClient.setQueryData(["profile"], (old) => ({
        ...old,
        currentPictureAddress: old.userImage.find(
          (img) => img.id === newImageId
        )?.puctureAddress,
      }));
      return { previousProfile };
    },
    onSuccess: () => toast.success("تصویر پروفایل با موفقیت تغییر کرد"),
    onError: () => toast.error("خطا در تغییر تصویر پروفایل"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  const deleteProfileImg = async (id) => {
    const myData = new FormData();
    myData.append("DeleteEntityId", id);
    return http.delete("/SharePanel/DeleteProfileImage", { data: myData });
  };

  const { mutate: mutateDeleteProfile } = useMutation({
    mutationFn: deleteProfileImg,
    onMutate: async (deletedImageId) => {
      await queryClient.cancelQueries({ queryKey: ["profile"] });
      const previousProfile = queryClient.getQueryData(["profile"]);
      queryClient.setQueryData(["profile"], (old) => ({
        ...old,
        userImage: old.userImage.filter((img) => img.id !== deletedImageId),
        currentPictureAddress:
          old.currentPictureAddress ===
          old.userImage.find((img) => img.id === deletedImageId)?.puctureAddress
            ? null
            : old.currentPictureAddress,
      }));
      return { previousProfile };
    },
    onSuccess: () => toast.success("تصویر با موفقیت حذف شد"),
    onError: () => toast.error("خطا در حذف تصویر"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  const uploadProfileImage = async (file) => {
    const formData = new FormData();
    formData.append("formFile", file);
    return await http.post("/SharePanel/AddProfileImage", formData);
  };

  const { mutate: mutateUploadProfile } = useMutation({
    mutationFn: uploadProfileImage,
    onSuccess: () => message.success("تصویر با موفقیت آپلود شد"),
    onError: () => message.error("خطا در آپلود تصویر"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  const { mutate: mutateGenerateAIImage } = useMutation({
    mutationFn: async (promptText) => {
      setIsGenerating(true);
      try {
        const res = await axios.post(
          "https://img-generator-production.up.railway.app/generate-image",
          { prompt: promptText },
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJjYzk3M2QzN2Q2YjdmZTEzMTVkODEiLCJpYXQiOjE3NDc4MzMyNTd9.mDkDrws5jJNh4mXj3vrAzaY6YntnOU5KP8dOobT7Hlc",
            },
            responseType: "blob",
          }
        );

        const file = new File([res.data], "ai-profile.png", {
          type: "image/png",
        });

        const formData = new FormData();
        formData.append("formFile", file);
        const uploadRes = await http.post("/SharePanel/AddProfileImage", formData);

        return uploadRes;
      } finally {
        setIsGenerating(false);
      }
    },
    onSuccess: () => {
      toast.success("تصویر با موفقیت تولید و آپلود شد");
      setIsModalOpen(false);  
    },
    onError: () => toast.error("خطا در تولید یا آپلود تصویر"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  return (
    <>
      <div className="h-auto mb-10 flex flex-col sm:flex-row sm:flex-wrap items-center gap-4">
        {data?.userImage.map((item, index) => (
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
              <CgMoreVertical
                className={`w-10 h-10 bg-white p-2 rounded-full absolute top-3 ${
                  data.currentPictureAddress === item.puctureAddress
                    ? "right-16"
                    : "right-3"
                } cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity shadow-md`}
              />
            </Dropdown>
            <img
              src={item.puctureAddress}
              alt=""
              className="w-full h-full object-cover"
            />
            {data.currentPictureAddress === item.puctureAddress && (
              <div className="w-10 h-10 absolute top-3 right-3 bg-[#17C964] flex justify-center items-center rounded-full">
                <TiTickOutline className="text-white w-7 h-7" />
              </div>
            )}
          </div>
        ))}

         <label htmlFor="inp-1">
          <input
            type="file"
            className="hidden"
            id="inp-1"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                mutateUploadProfile(e.target.files[0]);
              }
            }}
          />
          <div className="w-60 h-60 border-4 rounded-2xl border-borderGray flex flex-col justify-center items-center cursor-pointer hover:border-blue-200 transition-colors">
            <BiImageAdd className="text-navyBlue w-10 h-10" />
            <h1 className="font-semibold">اضافه کردن عکس</h1>
            <span className="text-sm text-gray">اندازه فریم (236×236)</span>
          </div>
        </label>

         <div onClick={() => setIsModalOpen(true)} className="relative">
          <div className="w-60 h-60 border-4 rounded-2xl border-borderGray flex flex-col justify-center items-center cursor-pointer hover:border-blue-200 transition-colors">
            <RiAiGenerate className="text-navyBlue w-10 h-10" />
            <h1 className="font-semibold">
              {isGenerating ? "در حال تولید..." : "تولید عکس جدید"}
            </h1>
            <span className="text-sm text-gray">با هوش مصنوعی</span>
          </div>
        </div>
      </div>

       <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => mutateGenerateAIImage(prompt)}
        confirmLoading={isGenerating}
        okText="تولید تصویر"
        cancelText="انصراف"
        title="تولید تصویر با هوش مصنوعی"
 
      >
        <Input.TextArea
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="مثال: یک تصویر پروفایل حرفه‌ای با پس‌زمینه سفید"
        />
        
      </Modal>
    </>
  );
};

export default UserProfileImage;
