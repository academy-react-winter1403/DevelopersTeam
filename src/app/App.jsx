import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import MainLayout from "./mainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
=======
>>>>>>> origin/develop
import LandingPage from "../screens/landingPage";
import CoursesPage from "../screens/coursePage";
import CourseDetailPage from "../screens/courseDetailPage";
import NewsPage from "../screens/newsPage";
import NewsDetailPage from "../screens/newsDetailPage";
import LoginPage from "../screens/loginPage";
import RegisterPage from "../screens/registerPage";
import ForgetPasswordPage from "../screens/forgetPasswordPage";
<<<<<<< HEAD
=======
import AuthLayout from "./authLayout";
import MainLayout from "./mainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
>>>>>>> origin/develop

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
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
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
