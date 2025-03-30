import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from './../../../../core/services/interceptor'

const DetailContainer = () => {
    const {id} = useParams()
    const [courseDetail, setCourseDetail] = useState([]);
    const getCourseDetail = async () => {
        const res = await http.get(`/Home/GetCoursesWithPagination/${id}`)
        setCourseDetail(res.courseFilterDtos)
      }
    useEffect(() => {
        getCourseDetail()
    }, []);
  return (
    <div>
        {courseDetail?.title}
    </div>
  )
}

export default DetailContainer