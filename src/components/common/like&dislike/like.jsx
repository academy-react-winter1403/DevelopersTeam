import React, { useState } from "react";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Button, Spin } from "antd";

// ایجاد یک QueryClient
const queryClient = new QueryClient();

const LikeDislike = () => {
  const [userAction, setUserAction] = useState<string | null>(null);

  // دریافت داده‌ها از API با useQuery
  const {
    data: postStatus,
    isLoading,
    isError,
    error,
  } = useQuery("postStatus", async () => {
    const response = await axios.get("https://api.example.com/post-status");
    return response.data;
  });

  // ارسال تغییرات به API با useMutation
  const mutation = useMutation(
    async (variables: { likes: number; dislikes: number; userAction: string | null }) => {
      const response = await axios.post("https://api.example.com/post-status", variables);
      return response.data;
    },
    {
      onSuccess: () => {
        // پس از موفقیت، کوئری را به‌روزرسانی کن
        queryClient.invalidateQueries("postStatus");
      },
    }
  );

  // توابع هندلر برای لایک و دیسلایک
  const handleLike = () => {
    if (!postStatus) return;

    const newLikes = userAction === "like" ? postStatus.likes - 1 : postStatus.likes + 1;
    const newDislikes = userAction === "dislike" ? postStatus.dislikes - 1 : postStatus.dislikes;

    setUserAction(userAction === "like" ? null : "like");

    mutation.mutate({
      likes: newLikes,
      dislikes: newDislikes,
      userAction: userAction === "like" ? null : "like",
    });
  };

  const handleDislike = () => {
    if (!postStatus) return;

    const newLikes = userAction === "like" ? postStatus.likes - 1 : postStatus.likes;
    const newDislikes = userAction === "dislike" ? postStatus.dislikes - 1 : postStatus.dislikes + 1;

    setUserAction(userAction === "dislike" ? null : "dislike");

    mutation.mutate({
      likes: newLikes,
      dislikes: newDislikes,
      userAction: userAction === "dislike" ? null : "dislike",
    });
  };

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spin />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <span>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Button
        type={userAction === "like" ? "primary" : "default"}
        icon={<LikeOutlined />}
        onClick={handleLike}
        disabled={mutation.isLoading}
      >
        {postStatus?.likes}
      </Button>
      <Button
        type={userAction === "dislike" ? "primary" : "default"}
        icon={<DislikeOutlined />}
        onClick={handleDislike}
        style={{ marginLeft: "10px" }}
        disabled={mutation.isLoading}
      >
        {postStatus?.dislikes}
      </Button>
    </div>
  );
};

export default LikeDislike;
