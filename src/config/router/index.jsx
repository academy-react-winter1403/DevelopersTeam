import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../app/mainLayout";
import LandingPage from "../../screens/landingPage";
import CoursesPage from "../../screens/coursePage";
import CourseDetailPage from "../../screens/courseDetailPage";
import NewsPage from "../../screens/newsPage";
import NewsDetailPage from "../../screens/newsDetailPage";
import LoginPage from "../../screens/loginPage";
import RegisterPage from "../../screens/registerPage";
import ForgetPasswordPage from "../../screens/forgetPasswordPage";
import NotFoundPage from "../../screens/notFound";
import EnterEmail from "../../components/forgetPassword/enterEmail/enterEmail";
import NewPassword from "../../components/forgetPassword/newPassword/newPassword";
import PanelLayout from "../../app/panelLayout";
import DashboardPage from "../../screens/dashboardPage";
import MyCoursePage from "../../screens/myCoursePage";
import MyReserveCoursePage from "../../screens/myReserveCoursePage";
import FavCoursePage from "../../screens/favCoursePage";
import ProfilePage from "../../screens/profilePage";
import FavNewPage from "../../screens/favNewPage";
import MyCourseCommentsPage from "../../screens/myCourseCommentsPage/myCourseCommentsPage";
import MyNewsCommentsPage from "../../screens/myNewsCommentsPage/myNewsCommentsPage";
import PaymentPage from "../../screens/paymentPage/paymentPage";
import Login from "../../components/login";
import EnterNumberLogin from "../../components/login/enterNumberLogin/enterNumberLogin";
import VerifyCodeLogin from "../../components/login/verifyCodeLogin/verifyCodeLogin";
import JobPage from "../../screens/jobPage/jobPage";
import TicketPage from "../../screens/ticketPage";
import AddTicket from "../../components/ticket/addTicket/addTicket";
import AnswerFromAdmin from "../../components/ticket/ticketHolder/answerFromAdmin";
import SchedualPage from "../../screens/SchedualPage/SchedualPage";
import HomeWorkPage from "../../screens/HomeWorkPage";
import AiChat from "../../components/panel/AiChat/AiChat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/courses/coursedetail/:id",
        element: <CourseDetailPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/news/newsdetail/:id",
        element: <NewsDetailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    children: [
      {
        path: "/login",
        element: <EnterNumberLogin />,
      },
      {
        path: "/login/verifycode",
        element: <VerifyCodeLogin />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/forgetpass",
    element: <ForgetPasswordPage />,
    children: [
      {
        path: "/forgetpass",
        element: <EnterEmail />,
      },
      {
        path: "/forgetpass/setpassword/:id",
        element: <NewPassword />,
      },
    ],
  },
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [
      { path: "/panel/dashboard", element: <DashboardPage /> },
      {
        path: "/panel/mycourse",
        element: <MyCoursePage />,
      },
      {
        path: "/panel/myreservecourse",
        element: <MyReserveCoursePage />,
      },
      {
        path: "/panel/favcourse",
        element: <FavCoursePage />,
      },
      {
        path: "/panel/favnew",
        element: <FavNewPage />,
      },
      {
        path: "/panel/profile",
        element: <ProfilePage />,
      },
      {
        path: "/panel/mycommentscourse",
        element: <MyCourseCommentsPage />,
      },
      {
        path: "/panel/mycommentsnews",
        element: <MyNewsCommentsPage />,
      },
      {
        path: "/panel/payment",
        element: <PaymentPage />,
      },
      {
        path: "/panel/job",
        element: <JobPage />,
      },
      {
        path: "/panel/schedual",
        element: <SchedualPage />,
      },
      {
        path: "/panel/ticket",
        element: <TicketPage />,
      },
      {
        path: "/panel/ticket/:id",
        element: <AnswerFromAdmin />,
      },
      {
        path: "/panel/ticket/add",
        element: <AddTicket />,
      },
      {
        path: "/panel/homework",
        element: <HomeWorkPage />,
      },
      {
        path: "/panel/aiassistance",
        element: <AiChat />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
