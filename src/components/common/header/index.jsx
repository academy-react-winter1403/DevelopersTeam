import React, { useEffect, useState } from "react";
import Joyride from "react-joyride";
import { NavLink, useNavigate } from "react-router-dom";
import { FiUser, FiMic, FiMicOff } from "react-icons/fi";
import { Button } from "antd";
import HeaderDrawer from "../../headerDrawer/headerDrawer";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import { useDarkMode } from "../../../context/theme/themeContext";
import { getData } from "../../../core/localStorage/localStorage";
import { useTranslation } from "react-i18next";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { HiMiniLanguage } from "react-icons/hi2";

function useIsLargeScreen(minWidth = 1024) {
  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWidth >= minWidth
  );
  useEffect(() => {
    const onResize = () => setIsLargeScreen(window.innerWidth >= minWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [minWidth]);
  return isLargeScreen;
}

const Header = () => {
  const navigate = useNavigate();
  const token = getData("authToken");
  const { darkMode, setDarkMode } = useDarkMode();
  const isLargeScreen = useIsLargeScreen();
  const { t, i18n } = useTranslation();

  const [listening, setListening] = useState(false);
  const {
    transcript,
    resetTranscript,
    listening: isListening,
  } = useSpeechRecognition();

  const commands = {
    fa: {
      home: ["خانه", "صفحه اصلی"],
      courses: ["دوره‌ها", "دوره ها", "کلاس"],
      news: ["خبرها", "مقالات", "اخبار"],
    },
    en: {
      home: ["home", "homepage"],
      courses: ["courses", "classes"],
      news: ["news", "articles"],
    },
  };

  useEffect(() => {
    const languageCommands = commands[i18n.language];

    const sanitizedTranscript = transcript.toLowerCase();

    for (const [key, keywords] of Object.entries(languageCommands)) {
      if (keywords.some((keyword) => sanitizedTranscript.includes(keyword))) {
        switch (key) {
          case "home":
            navigate("/");
            resetTranscript();
            break;
          case "courses":
            navigate("/courses");
            resetTranscript();
            break;
          case "news":
            navigate("/news");
            resetTranscript();
            break;
          default:
            break;

           
        }
      }
    }
  }, [transcript, i18n.language, navigate, resetTranscript]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLanguage);
    document.body.dir = i18n.dir(newLanguage);
  };

  const toggleListening = () => {
    if (!isListening) {
      SpeechRecognition.startListening({
        continuous: true,
        language: i18n.language,
      });
      setListening(true);
    } else {
      SpeechRecognition.stopListening();
      setListening(false);
    }
  };

  const steps = [
    { target: ".header-logo", content: t("joyrideLogo") },
    { target: ".header-menu", content: t("joyrideMenu") },
    { target: ".header-darkmode", content: t("joyrideTheme") },
    { target: ".header-language", content: t("joyrideLanguage") },
    { target: ".header-mic", content: t("joyrideMic") },
    { target: ".header-auth", content: t("joyrideAuth") },
  ];

  return (
    <div className="border-[#E4E4E4] dark:border-gray-700 cursor-pointer mt-5 mx-auto flex flex-nowrap justify-between px-4 sm:px-6 lg:px-10 items-center">
      {isLargeScreen && (
        <Joyride
          steps={steps}
          continuous
          showSkipButton
          locale={{
            next: t("next"),
            back: t("back"),
            skip: t("skip"),
            last: t("last"),
          }}
        />
      )}

      <NavLink
        to="/"
        className="flex w-1/4 xs:w-1/5 justify-center items-center header-logo"
      >
        <img src={logo} alt="لوگو" className="w-10 h-10 xs:w-12 xs:h-14" />
        <img src={logoText} alt="متن لوگو" className="w-24 h-10" />
      </NavLink>

      <div className="w-3/5 lg:flex justify-center items-center gap-10 hidden header-menu">
        {["home", "courses", "news"].map((key, index) => {
          const paths = ["/", "/courses", "/news"];
          return (
            <NavLink
              key={key}
              to={paths[index]}
              className={({ isActive }) =>
                isActive
                  ? "text-navyBlue dark:text-blue-400"
                  : "dark:text-gray-300"
              }
            >
              {t(key)}
            </NavLink>
          );
        })}
      </div>

      <div className="w-2/7 hidden lg:flex justify-center items-center space-x-2 header-settings">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="header-darkmode border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full mr-1"
        >
          {darkMode ? (
            <GoSun className="size-5 text-white cursor-pointer" />
          ) : (
            <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
          )}
        </div>

        <div
          onClick={toggleLanguage}
          className="header-language border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full cursor-pointer"
          title={i18n.language === "en" ? "فارسی" : "English"}
        >
          <HiMiniLanguage className="size-4" />
          <span className="text-xs ml-1">
            {i18n.language === "en" ? "Fa" : "En"}
          </span>
        </div>

        <div
          onClick={toggleListening}
          className="header-mic border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full cursor-pointer"
        >
          {listening ? <FiMic className="text-red-500" /> : <FiMicOff />}
        </div>

        <div className="header-auth">
          {token ? (
            <NavLink to="/panel/dashboard">
              <Button
                type="primary"
                shape="round"
                icon={<FiUser />}
                style={{
                  fontFamily: "yekan",
                  marginRight: "4px",
                  fontSize: "12px",
                }}
              >
                {t("studentPanel")}
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <Button
                type="primary"
                shape="round"
                style={{ fontFamily: "yekan" }}
              >
                {t("loginRegister")}
              </Button>
            </NavLink>
          )}
        </div>
      </div>

      <div className="flex lg:hidden items-center space-x-3">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="header-darkmode dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full mr-1"
        >
          {darkMode ? (
            <GoSun className="size-5 text-white cursor-pointer" />
          ) : (
            <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
          )}
        </div>

        <div
          onClick={toggleLanguage}
          className="header-language border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full cursor-pointer"
          title={i18n.language === "en" ? "فارسی" : "English"}
        >
          <HiMiniLanguage className="size-4" />
        </div>

        <div className="header-auth">
          {token ? (
            <NavLink to="/panel/dashboard">
              <Button
                size="small"
                type="primary"
                shape="round"
                icon={<FiUser />}
                style={{
                  fontFamily: "yekan",
                  fontSize: "12px",
                  padding: "0 12px",
                }}
              >
                {t("studentPanel")}
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <Button
                size="small"
                type="primary"
                shape="round"
                style={{
                  fontFamily: "yekan",
                  fontSize: "12px",
                  padding: "0 12px",
                }}
              >
                {t("loginRegister")}
              </Button>
            </NavLink>
          )}
        </div>

        <HeaderDrawer />
      </div>
    </div>
  );
};

export default Header;





// import React, { useEffect, useState } from "react";
// import Joyride from "react-joyride";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FiUser, FiMic, FiMicOff } from "react-icons/fi";
// import { Button, Select } from "antd";
// import HeaderDrawer from "../../headerDrawer/headerDrawer";
// import { IoMoonOutline } from "react-icons/io5";
// import { GoSun } from "react-icons/go";
// import logo from "./../../../assets/images/logo.svg";
// import logoText from "./../../../assets/images/logoText.svg";
// import { useDarkMode } from "../../../context/theme/themeContext";
// import { getData } from "../../../core/localStorage/localStorage";
// import { useTranslation } from "react-i18next";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

// function useIsLargeScreen(minWidth = 1024) {
//   const [isLargeScreen, setIsLargeScreen] = React.useState(
//     window.innerWidth >= minWidth
//   );
//   useEffect(() => {
//     const onResize = () => setIsLargeScreen(window.innerWidth >= minWidth);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [minWidth]);
//   return isLargeScreen;
// }

// const Header = () => {
//   const navigate = useNavigate();
//   const token = getData("authToken");
//   const { darkMode, setDarkMode } = useDarkMode();
//   const isLargeScreen = useIsLargeScreen();
//   const { t, i18n } = useTranslation();

//   const [listening, setListening] = useState(false);
//   const {
//     transcript,
//     resetTranscript,
//     listening: isListening,
//   } = useSpeechRecognition();

//   const commands = {
//     fa: {
//       home: ["خانه", "صفحه اصلی"],
//       courses: ["دوره‌ها", "دوره ها", "کلاس"],
//       news: ["خبرها", "مقالات", "اخبار"],
//       // --- کد اضافه شده برای پادکست ---
//       podcast: ["پادکست", "پادکست‌ها", "پادکست ها"],
//     },
//     en: {
//       home: ["home", "homepage"],
//       courses: ["courses", "classes"],
//       news: ["news", "articles"],
//       // --- کد اضافه شده برای پادکست ---
//       podcast: ["podcast", "podcasts"],
//     },
//   };

//   useEffect(() => {
//     const languageCommands = commands[i18n.language];

//     const sanitizedTranscript = transcript.toLowerCase();

//     for (const [key, keywords] of Object.entries(languageCommands)) {
//       if (keywords.some((keyword) => sanitizedTranscript.includes(keyword))) {
//         switch (key) {
//           case "home":
//             navigate("/");
//             resetTranscript();
//             break;
//           case "courses":
//             navigate("/courses");
//             resetTranscript();
//             break;
//           case "news":
//             navigate("/news");
//             resetTranscript();
//             break;
//           // --- کد اضافه شده برای پادکست ---
//           case "podcast":
//             navigate("/podcast");
//             resetTranscript();
//             break;
//           default:
//             break;
//         }
//       }
//     }
//   }, [transcript, i18n.language, navigate, resetTranscript]);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     document.body.dir = i18n.dir(lng);
//   };

//   const toggleListening = () => {
//     if (!isListening) {
//       SpeechRecognition.startListening({
//         continuous: true,
//         language: i18n.language,
//       });
//       setListening(true);
//     } else {
//       SpeechRecognition.stopListening();
//       setListening(false);
//     }
//   };

//   const steps = [
//     { target: ".header-logo", content: t("joyrideLogo") },
//     { target: ".header-menu", content: t("joyrideMenu") },
//     { target: ".header-darkmode", content: t("joyrideTheme") },
//     { target: ".header-mic", content: t("joyrideMic") },
//     { target: ".header-auth", content: t("joyrideAuth") },
//   ];

//   // آرایه ای که آیتم‌های منو را مدیریت می‌کند
//   const menuItems = [
//     { key: "home", path: "/" },
//     { key: "courses", path: "/courses" },
//     { key: "news", path: "/news" },
//     // --- کد اضافه شده برای پادکست ---
//     { key: "podcast", path: "/podcast" },
//   ];

//   return (
//     <div className="border-[#E4E4E4] dark:border-gray-700 cursor-pointer mt-5 mx-auto flex flex-nowrap justify-between px-4 sm:px-6 lg:px-10 items-center">
//       {isLargeScreen && (
//         <Joyride
//           steps={steps}
//           continuous
//           showSkipButton
//           locale={{
//             next: t("next"),
//             back: t("back"),
//             skip: t("skip"),
//             last: t("last"),
//           }}
//         />
//       )}

//       <NavLink
//         to="/"
//         className="flex w-1/4 xs:w-1/5 justify-center items-center header-logo"
//       >
//         <img src={logo} alt="لوگو" className="w-10 h-10 xs:w-12 xs:h-14" />
//         <img src={logoText} alt="متن لوگو" className="w-24 h-10" />
//       </NavLink>

//       <div className="w-3/5 lg:flex justify-center items-center gap-10 hidden header-menu">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.key}
//             to={item.path}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-navyBlue dark:text-blue-400"
//                 : "dark:text-gray-300"
//             }
//           >
//             {t(item.key)}
//           </NavLink>
//         ))}
//       </div>

//       <div className="w-2/7 hidden lg:flex justify-center items-center space-x-2 header-settings">
//         <Select
//           defaultValue={i18n.language}
//           onChange={changeLanguage}
//           style={{ width: 90, background: "#ccc", borderRadius: "40px" }}
//           options={[
//             { value: "fa", label: "فارسی" },
//             { value: "en", label: "English" },
//           ]}
//         />

//         <div
//           onClick={() => setDarkMode(!darkMode)}
//           className="header-darkmode border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full mr-1"
//         >
//           {darkMode ? (
//             <GoSun className="size-5 text-white cursor-pointer" />
//           ) : (
//             <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
//           )}
//         </div>

//         <div
//           onClick={toggleListening}
//           className="header-mic border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full cursor-pointer"
//         >
//           {listening ? <FiMic className="text-red-500" /> : <FiMicOff />}
//         </div>

//         <div className="header-auth">
//           {token ? (
//             <NavLink to="/panel/dashboard">
//               <Button
//                 type="primary"
//                 shape="round"
//                 icon={<FiUser />}
//                 style={{
//                   fontFamily: "yekan",
//                   marginRight: "4px",
//                   fontSize: "12px",
//                 }}
//               >
//                 {t("studentPanel")}
//               </Button>
//             </NavLink>
//           ) : (
//             <NavLink to="/login">
//               <Button
//                 type="primary"
//                 shape="round"
//                 style={{ fontFamily: "yekan" }}
//               >
//                 {t("loginRegister")}
//               </Button>
//             </NavLink>
//           )}
//         </div>
//       </div>

//       <div className="flex lg:hidden items-center space-x-3">
//         <div
//           onClick={() => setDarkMode(!darkMode)}
//           className="header-darkmode  dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full mr-1"
//         >
//           {darkMode ? (
//             <GoSun className="size-5 text-white cursor-pointer" />
//           ) : (
//             <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
//           )}
//         </div>

//         <div className="header-auth">
//           {token ? (
//             <NavLink to="/panel/dashboard">
//               <Button
//                 size="small"
//                 type="primary"
//                 shape="round"
//                 icon={<FiUser />}
//                 style={{
//                   fontFamily: "yekan",
//                   fontSize: "12px",
//                   padding: "0 12px",
//                 }}
//               >
//                 {t("studentPanel")}
//               </Button>
//             </NavLink>
//           ) : (
//             <NavLink to="/login">
//               <Button
//                 size="small"
//                 type="primary"
//                 shape="round"
//                 style={{
//                   fontFamily: "yekan",
//                   fontSize: "12px",
//                   padding: "0 12px",
//                 }}
//               >
//                 {t("loginRegister")}
//               </Button>
//             </NavLink>
//           )}
//         </div>

//         <HeaderDrawer />
//       </div>
//     </div>
//   );
// };

// export default Header;
