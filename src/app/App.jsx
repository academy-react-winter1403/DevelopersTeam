import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../screens/landingPage";
import CoursesPage from "../screens/coursePage";
import CourseDetailPage from "../screens/courseDetailPage";
import NewsPage from "../screens/newsPage";
import NewsDetailPage from "../screens/newsDetailPage";
import LoginPage from "../screens/loginPage";
import RegisterPage from "../screens/registerPage";
import ForgetPasswordPage from "../screens/forgetPasswordPage";
import AuthLayout from "./authLayout";
import MainLayout from "./mainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  const router = createBrowserRouter([
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
          path: "/coursedetail/:id",
          element: <CourseDetailPage />,
        },
        {
          path: "/news",
          element: <NewsPage />,
        },
        {
          path: "/newsdetail/:id",
          element: <NewsDetailPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/register",
      element: <AuthLayout />,
      children: [
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/forgetpass",
      element: <AuthLayout />,
      children: [
        {
          path: "/forgetpass",
          element: <ForgetPasswordPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
