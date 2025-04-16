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
        element: <LoginPage />,
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
     
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
