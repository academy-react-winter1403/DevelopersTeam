import { Input } from "antd";
import { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import http from "./../../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDarkMode } from "../../../../context/theme/themeContext";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const MAX_LENGTH = 100;

// --- Toolbar Component ---
const TiptapToolbar = ({ editor, darkMode }) => {
  if (!editor) return null;
  return (
    <div
      className="flex flex-row-reverse gap-3 py-2 px-3 rounded-xl mb-2"
      style={{
        background: darkMode ? "#232f44" : "#f5f5f9",
        border: darkMode ? "1.5px solid #374151" : "1.5px solid #e8eefe",
        direction: "rtl",
      }}
      dir="rtl"
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bold") ? "bg-[#3772FF] text-white" : "text-[#232f44]"
        }`}
        title="بولد"
        type="button"
        style={{ fontWeight: "bold" }}
      >
        B
      </button>
      <span className="text-[#232f44]">/</span>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("italic")
            ? "bg-[#3772FF] text-white"
            : "text-[#232f44]"
        }`}
        title="مورب"
        type="button"
        style={{ fontStyle: "italic" }}
      >
        I
      </button>
      <span className="text-[#232f44]">/</span>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("strike")
            ? "bg-[#3772FF] text-white"
            : "text-[#232f44]"
        }`}
        title="خط خورده"
        type="button"
      >
        S
      </button>
      <span className="text-[#232f44]">•</span>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bulletList")
            ? "bg-[#3772FF] text-white"
            : "text-[#232f44]"
        }`}
        title="لیست"
        type="button"
      >
        لیست
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("paragraph")
            ? "bg-[#3772FF] text-white"
            : "text-[#232f44]"
        }`}
        title="متن ساده"
        type="button"
      >
        متن
      </button>
      {/* <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="px-2 py-1 rounded text-[#232f44]"
        type="button"
      >
        پاک
      </button> */}
    </div>
  );
};

const UserAddComment = ({ id }) => {
  const queryClient = useQueryClient();
  const { darkMode } = useDarkMode();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  // TIPTAP Editor setup
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        style: `direction: rtl; text-align: right; min-height: 110px; font-family: inherit; background:transparent; color:${
          darkMode ? "#fff" : "#232f44"
        };`,
      },
    },
    onUpdate: ({ editor }) => {
      if (editor.getText().length > MAX_LENGTH) {
        setError(`حداکثر ${MAX_LENGTH} کاراکتر مجاز است`);
      } else {
        setError("");
      }
    },
  });

  // تابع ارسال کامنت با اعتبارسنجی ۵ کاراکتر
  const addComment = async () => {
    const describe = editor?.getText() || "";

    if (!title.trim() || title.trim().length < 5) {
      setError("عنوان باید حداقل ۵ کاراکتر باشد.");
      return Promise.reject(new Error("عنوان باید حداقل ۵ کاراکتر باشد."));
    }
    if (!describe.trim() || describe.trim().length < 5) {
      setError("متن نظر باید حداقل ۵ کاراکتر باشد.");
      return Promise.reject(new Error("متن نظر باید حداقل ۵ کاراکتر باشد."));
    }
    if (describe.length > MAX_LENGTH) {
      setError(`حداکثر ${MAX_LENGTH} کاراکتر مجاز است`);
      return Promise.reject(new Error(`حداکثر ${MAX_LENGTH} کاراکتر مجاز است`));
    }
    setError(""); // پاک کردن پیام خطا

    const formData = new FormData();
    formData.append("CourseId", id);
    formData.append("Title", title);
    formData.append("Describe", editor.getHTML());

    const res = await http.post(`/Course/AddCommentCourse`, formData);
    return res;
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
      toast.success("نظرتان با موفقیت ثبت شد");
      setTitle("");
      editor.commands.clearContent();
    },
    onError: (error) => {
      // خطای بکند رو نمایش می‌ده مگر اینکه خطای کمتر از ۵ کاراکتر باشد که سمت کلاینت نمایش داده‌ای!
      toast.error(
        error?.message ||
          error?.response?.data?.ErrorMessage ||
          "خطا در ثبت نظر"
      );
    },
  });

  return (
    <div
      className={`w-full max-w-3xl mx-auto border-2 border-[#e8eefe] dark:border-gray-700 rounded-3xl mt-10 p-6 bg-white dark:bg-gray-800`}
      dir="rtl"
    >
      <h2 className="w-full h-10 bg-[#3772FF] dark:bg-blue-600 text-white rounded-3xl px-2 py-1 text-[12px] lg:text-lg text-center flex justify-center items-center gap-2">
        <TfiWrite />
        نظر خود را ثبت کنید
      </h2>
      <div className="mt-5 space-y-4">
        <Input
          name="Title"
          placeholder="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant={darkMode ? "" : "filled"}
          size="large"
          className="bg-[#f5f5f9] dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl border-none placeholder:text-gray-400"
          maxLength={50}
          style={{
            color: darkMode ? "#fff" : "#232f44",
            background: darkMode ? "#374151" : "#f5f5f9",
            borderColor: "transparent",
            borderRadius: 16,
          }}
        />
        <div
          className="p-2 rounded-xl"
          style={{
            border: "1.5px solid #3772FF",
            background: darkMode ? "#374151" : "#fff",
            minHeight: 110,
            marginTop: 0,
          }}
        >
          <EditorContent
            editor={editor}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              minHeight: 80,
              width: "100%",
              color: darkMode ? "#fff" : "#232f44",
              fontFamily: "inherit",
              textAlign: "right",
              direction: "rtl",
              padding: 6,
              boxShadow: "none",
            }}
          />
        </div>

        {/* شمارنده و دکمه ثبت کنار هم */}
        <div className="flex flex-row-reverse items-center justify-between mt-4">
          <button
            type="button"
            disabled={isLoading}
            className="bg-[#3772FF] dark:bg-blue-600 w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold transition-all duration-150"
            onClick={() => {
              setError("");
              mutate();
            }}
          >
            {isLoading ? "در حال ارسال..." : "ثبت"}
          </button>

          <TiptapToolbar editor={editor} darkMode={darkMode} />

          <span style={{ fontSize: 13, color: darkMode ? "#ccc" : "#3772FF" }}>
            {editor?.getText().length || 0}/{MAX_LENGTH}
          </span>
        </div>
        {error && (
          <div
            style={{
              color: "red",
              fontSize: 13,
              marginBottom: 3,
              marginTop: -8,
            }}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAddComment;
