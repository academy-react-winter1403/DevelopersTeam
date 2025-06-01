import React, { useEffect } from "react";
import http from "../../core/services/interceptor";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import NewsDetailCard from "./newsDetailCard";

const GetNewsDetailList = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const getDetail = async () => {
    const res = await http.get(`/News/${id}`);
    return res?.detailsNewsDto;
  };
  const { data } = useQuery({
    queryKey: ["newsDetail"],
    queryFn: getDetail,
  });

  const handleRate = async (rateValue) => {
    const res = await http.post(
      `/News/NewsRate?NewsId=${id}&RateNumber=${rateValue}`
    );
    return res;
  };
  const { mutate: mutateRate } = useMutation({
    mutationFn: handleRate,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
      toast.success("امتیاز با موفقیت ثبت شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const handleLike = async () => {
    const res = await http.post(`/News/NewsLike/${id}`);
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
      toast.success("لایک با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const handleDelete = async () => {
    const res = await http.delete("/News/DeleteLikeNews", {
      data: { deleteEntityId: data?.likeId },
    });
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
    },
    onError: (error) => {
      console.error("Error deleting like:", error);
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(`/News/NewsDissLike/${id}`);
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
      // toast.error("مقاله را دوست نداشتید");
    },
    onError: () => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const handleFavorite = async () => {
    const res = await http.post(`/News/AddFavoriteNews?NewsId=${id}`);
  };
  const { mutate: mutateFavorite } = useMutation({
    mutationFn: handleFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
      toast.success("دوره با موفقیت به علاقه مندی ها اضافه شد");
    },
    onError: () => {
      if (data?.isUserFavorite == true) {
        toast.error("این دوره در لیست علاقه مندی های شما موجود میباشد");
      } else toast.error("دوباره امتحان کنید");
    },
  });

  const handleDeleteFav = async () => {
    const res = await http.delete("/News/DeleteFavoriteNews", {
      data: { deleteEntityId: data?.currentUserFavoriteId },
    });
  };
  const { mutate: mutateDeleteFav } = useMutation({
    mutationFn: handleDeleteFav,
    onSuccess: () => {
      queryClient.invalidateQueries(["courseDetail"]);
    },
    onError: (error) => {
      console.error("Error deleting like:", error);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NewsDetailCard
      mutateRate={mutateRate}
      mutateLike={mutateLike}
      mutateDeleteLike={mutateDeleteLike}
      mutateDisLike={mutateDisLike}
      mutateFavorite={mutateFavorite}
      mutateDeleteFav={mutateDeleteFav}
      data={data}
      id={id}
    />
  );
};

export default GetNewsDetailList;
