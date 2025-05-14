import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      courses: "Courses",
      news: "News",
      studentPanel: "Student Panel",
      loginRegister: "Login or Register",
      themeToggle: "Toggle Theme",
      joyrideLogo: "This is the site logo. Click to go to the homepage.",
      joyrideMenu: "Access different pages using this menu.",
      joyrideTheme: "Use this button to switch between dark and light mode.",
      joyrideAuth: "Use this section to log in or access the student panel.",
      pages: "Pages",
      aboutUs: "About Us",
      professors: "Professors",
      about: "About",
      contactUs: "Contact Us",
      academyName: "Bahr Coding Academy",
      academyDescription:
        "With over 13 years of experience in coding education from childhood to adulthood. Our goal has always been to equip students with the skills necessary to succeed in the world of technology and programming.",
      instagram: "Instagram",
      telegram: "Telegram",
      studentPanelTitle: "Exclusive Student Panel",
      studentPanelDescription: "Manage your courses and exercises",
      studentPanelManagement: "Designed for student needs",
      studentPanelImageAlt: "Student Panel",
      summerCoursesTitle: "New Summer Courses!",
      summerCoursesDescription1: "Beginner and advanced levels",
      summerCoursesDescription2: "Available this summer",
      summerCoursesImageAlt: "Summer Courses",
      aboutUsTitle: "About Us",
      readMore: "Read More",
      teachers: "Teachers",
      students: "Students in courses",
      courses: "Courses",
      aboutUsImageAlt: "About Us Image",
      heroSectionP1: "A unique experience compared to coding",
      heroSectionP2: "From ",
      heroSectionP3: "beginner ",
      heroSectionP4: "to ",
      heroSectionP5: "professional",
      heroSectionP6:
        "Specialized coding and programming academy from childhood to adulthood",
      heroSectionButton: "Start Learning",
      movingText: "Services we offer you",
      "the most popular courses": "The most popular courses",
      "Courses that were very popular among students":
        "Courses that were very popular among students",
      "News and articles of the week": "News and articles of the week",
      "News and articles published this week":
        "News and articles published this week",
      "Top professors of the week": "Top professors of the week",
      "Professors who gave the most positive votes to courses in a survey":"Professors who gave the most positive votes to courses in a survey"
    },
  },
  fa: {
    translation: {
      home: "خانه",
      courses: "دوره‌ها",
      news: "مقالات",
      studentPanel: "پنل دانشجویی",
      loginRegister: "ورود یا ثبت‌نام",
      themeToggle: "تغییر حالت تم",
      joyrideLogo: "این لوگوی سایت است. با کلیک روی آن به صفحه اصلی بروید.",
      joyrideMenu: "از طریق این منو به صفحات مختلف دسترسی داشته باشید.",
      joyrideTheme: "برای تغییر حالت تم (تاریک/روشن) از این دکمه استفاده کنید.",
      joyrideAuth:
        "برای ورود یا دسترسی به پنل دانشجویی از این بخش استفاده کنید.",
      pages: "صفحات",
      aboutUs: "ما",
      professors: "اساتید",
      about: "درباره ما",
      contactUs: "ارتباط با ما",
      academyName: "آکادمی کدنویسی بحر",
      academyDescription:
        "+13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا بزرگسال. هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم برای موفقیت در دنیای فناوری و برنامه نویسی مجهز کنیم.",
      instagram: "اینستاگرام",
      telegram: "تلگرام",
      studentPanelTitle: "پنل اختصاصی دانشجو",
      studentPanelDescription: "مدیریت دوره‌ها و تمرین‌ها",
      studentPanelManagement: "طراحی شده برای نیازهای دانشجویی",
      studentPanelImageAlt: "پنل دانشجویی",
      summerCoursesTitle: "دوره‌های جدید تابستانه!",
      summerCoursesDescription1: "سطوح مبتدی و پیشرفته",
      summerCoursesDescription2: "در دسترس برای تابستان جاری",
      summerCoursesImageAlt: "دوره‌های تابستانه",
      aboutUsTitle: "درباره ما",
      readMore: "بیشتر بخوانید",
      teachers: "اساتید",
      students: "دانشجویان در دوره‌ها",
      courses: "دوره‌ها",
      aboutUsImageAlt: "تصویر درباره ما",
      heroSectionP1: "تجربه ای بی نظیر در یادگیری کدنویسی",
      heroSectionP2: "از",
      heroSectionP3: "مبتدی",
      heroSectionP4: "تا",
      heroSectionP5: "حرفه ای",
      heroSectionP6:
        "آکادمی فوق تخصصی کدنویسی و برنامه نویسی از سنین کودکی تا بزرگسالی",
      heroSectionButton: "شروع یادگیری",
      movingText: "خدماتی که ما به شما ارائه می دهیم",
      "the most popular courses": "محبوب ترین دوره ها",
      "Courses that were very popular among students":
        "دوره هایی که بین دانشجویان محبوبیت بالایی داشتند",
      "News and articles of the week": "اخبار و مقالات هفته",
      "News and articles published this week":
        "خبرها و مقاله‌هایی که در این هفته منتشر شدند",
      "Top professors of the week": "برترین اساتید هفته",
      "Professors who gave the most positive votes to courses in a survey":"اساتیدی که با نظرسنجی در دوره‌ها به آنها بیشترین رای مثبت را دادند"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
