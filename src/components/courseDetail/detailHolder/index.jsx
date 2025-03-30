import React from 'react'
import DetailSection from '../detailSection/detailSection'
import CommentSection from '../commentSection/commentSection'
import MoreCourses from '../moreCourses/moreCourses'

const DetailHolder = () => {
  return (
    <div>
        <DetailSection/>
        <CommentSection/>
        <MoreCourses />
    </div>
  )
}

export default DetailHolder