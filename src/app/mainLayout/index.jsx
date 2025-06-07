import React from 'react'
import Header from '../../components/common/header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/common/footer'

const MainLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout


// import React from "react";
// import Header from "../../components/common/header";
// import { Outlet } from "react-router-dom";
// import Footer from "../../components/common/footer";

// const MainLayout = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
