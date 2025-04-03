import React from "react";
import QuillWrite from "./../../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../../assets/images/view-stroke-rounded (1) 1.svg";
import { NavLink, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const NewsCard = ({
  addUserProfileImage,
  title,
  miniDescribe,
  addUserFullName,
  currentUserIsLike,
  mutate,
  currentLikeCount,
  currentUserIsDissLike,
  currentDissLikeCount,
}) => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const getDetail = async () => {
    const res = await http.get(`/News/${id}`);
    return res?.detailsNewsDto;
  };
  const { data } = useQuery({
    queryKey: "newsDetail",
    queryFn: getDetail,
  });

  const handleLike = async () => {
    const res = await http.post(`/News/NewsLike/${id}`);
    // return res
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
    },
  });

  const handleDelete = async () => {
    const res = await http.delete("/News/DeleteLikeNews", {
      data: { deleteEntityId: data?.likeId },
    });
    console.log(res);
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(`/News/NewsDissLike/${id}`);
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
    },
  });

  return (
    <div className="flex flex-col border-2 border-gray-50 rounded-2xl bg-gray-50 p-4 w-full  sm:max-w-[300px] md:max-w-[300px] mx-auto">
      <div className="h-40 w-full rounded-2xl overflow-hidden">
        <NavLink to={`/news/newsdetail/${id}`}>
          <img
            src={addUserProfileImage}
            alt=""
            className="h-full w-full object-cover mx-auto "
          />
        </NavLink>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-[#272727] overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </h2>
      </div>
      <div className="mt-2">
        <h2 className="text-[#787878] text-[10px] overflow-hidden text-ellipsis whitespace-nowrap">
          {miniDescribe}
        </h2>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <img src={QuillWrite} alt="Quill Write" className="h-4 w-5" />
        <span className="text-[12px] text-[#272727]">{addUserFullName}</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <img src={ViewStroke} alt="View Stroke" className="h-4 w-5" />
        <span className="text-[12px] text-[#272727]">225</span>
      </div>

      {/*button card*/}
      <div className="flex justify-between items-center m-2 gap-4 border-2">
        <div
          className="flex justify-between items-center m-2 gap-4"
          onClick={() =>
            data?.currentUserIsLike ? mutateDeleteLike() : mutateLike()
          }
        >
          <AiOutlineLike
            className={
              data?.currentUserIsLike
                ? "w-6 h-6 text-navyBlue"
                : "w-6 h-6 hover:text-navyBlue"
            }
          />
          <span className="text-sm font-bold text-[#272727]">
            {currentLikeCount}
          </span>
        </div>

        <div
          className="flex items-center gap-1"
          onClick={() =>
            data?.currentUserDissLike ? mutateDisLike() : mutateDisLike()
          }
        >
          <AiOutlineDislike
            className={
              data?.currentUserIsDissLike
                ? "w-6 h-6 text-navyBlue"
                : "w-6 h-6 hover:text-navyBlue"
            }
          />
          <span className="text-sm font-bold text-[#272727]">
            {currentDissLikeCount}
          </span>
        </div>

        <div>
          <NavLink>
            <h2 className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm text-center cursor-pointer">
              بیشتر بخوانید
            </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
