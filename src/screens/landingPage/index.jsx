import React from 'react'
import Landing from '../../components/landing'
import HeroSection from '../../components/landing/heroSection'
import FirstPartOfLanding from '../../components/landing/firstPartOfLanding'
import GoodTeacher from '../../components/landing/goodTeacher'
import TopCourses from '../../components/landing/topCourses'
import TopNews from '../../components/landing/topNews'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <FirstPartOfLanding/>
      <TopCourses/>
      <GoodTeacher/>
      <TopNews/>
    </div>
  )
}

export default LandingPage