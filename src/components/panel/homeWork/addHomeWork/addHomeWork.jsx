import { useMutation } from "@tanstack/react-query";
import { Button, Modal, Spin, Upload, message } from "antd";
import React, { Fragment, useState } from "react";
import { TiDocumentAdd } from "react-icons/ti";
import http from "./../../../../core/services/interceptor";
import toast from "react-hot-toast";

const AddHomeWork = ({ courseStudentId, homeWorkId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await http.post(`/Session/AddCourseUserHomeWork`, {
        hwid: homeWorkId,
        cstudentId: courseStudentId,
      });
      return res;
    },
    onSuccess: () => {
      setIsModalOpen(true);
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const { mutate: mutateAdd } = useMutation({
    mutationFn: async (values) => {
      const formData = new FormData();
      formData.append("CouresUserHomeWorkId", homeWorkId);
      formData.append("ExersiceFiles", values.ExersiceFiles);
      formData.append("RootPath", "/panel/homework");

      const res = await http.post(`/Session/AddExerciseFile`, formData);
      return res;
    },
    onSuccess: () => {
      setIsModalOpen(false);
      toast.success("File uploaded successfully");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const handleUpload = () => {
    if (fileList.length === 0) {
      toast.warning("فایل را انتخاب کنید");
      return;
    }

    setUploading(true);
    const file = fileList[0];

    mutateAdd(
      {
        ExersiceFiles: file,
      },
      {
        onSettled: () => {
          setUploading(false);
        },
      }
    );
  };

  const uploadProps = {
    onRemove: (file) => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
    maxCount: 1,
  };

  return (
    <Fragment>
      <Button type="text" onClick={mutate}>
        <TiDocumentAdd className="w-6 h-6" />
      </Button>
      <Modal
        title="آپلود تکلیف"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            لغو
          </Button>,
          <Button
            key="upload"
            type="primary"
            onClick={handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
          >
            {uploading ? <Spin /> : "ارسال"}
          </Button>,
        ]}
        width="434px"
      >
        <Upload.Dragger {...uploadProps}>
          <p className="ant-upload-text">فایل را انتخاب کنید</p>
          <p>فایل را به صورت Zip ارسال کنید .</p>
        </Upload.Dragger>
      </Modal>
    </Fragment>
  );
};

export default AddHomeWork;
