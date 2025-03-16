import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../screens/mainLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import LandingPage from "../screens/landingPage";
import CoursesPage from "../screens/coursePage";
import CourseDetailPage from "../screens/courseDetailPage";
import NewsPage from "../screens/newsPage";
import NewsDetailPage from "../screens/newsDetailPage";
import LoginPage from "../screens/loginPage";
import RegisterPage from "../screens/registerPage";
import ForgetPasswordPage from "../screens/forgetPasswordPage";

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
