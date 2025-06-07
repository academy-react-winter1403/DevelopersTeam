import { Input } from "antd";
import { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDarkMode } from "../../../context/theme/themeContext";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import http from "./../../../core/services/interceptor";
import { useSelector } from "react-redux";

const MAX_LENGTH = 100;

// ----- Toolbar -----
const TiptapToolbar = ({ editor, darkMode }) => {
  if (!editor) return null;
  const iconColor = darkMode ? "white" : "#232f44";
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
        className={
          editor.isActive("bold")
            ? "px-2 py-1 rounded bg-[#3772FF] text-white"
            : `px-2 py-1 rounded text-[${iconColor}]`
        }
        title="بولد"
        type="button"
        style={{ fontWeight: "bold" }}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "px-2 py-1 rounded bg-[#3772FF] text-white"
            : `px-2 py-1 rounded text-[${iconColor}]`
        }
        title="ایتالیک"
        type="button"
        style={{ fontStyle: "italic" }}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "px-2 py-1 rounded bg-[#3772FF] text-white"
            : `px-2 py-1 rounded text-[${iconColor}]`
        }
        title="خط‌خورده"
        type="button"
      >
        S
      </button>
    </div>
  );
};

// ----- Main Comment Form -----
const AddUserNewsComment = ({ id }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const queryClient = useQueryClient();
  const { darkMode } = useDarkMode();
  const currentAccount = useSelector((state) => state.accounts.currentAccount);

  // Editor instance
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
  });

  // ---- Mutation for News Comment ----
  const addComment = async ({ title, content }) => {
    // اگر سرورت به FormData نیاز دارد استفاده کن
    // اگر نیاز به json ساده هست صرفاً همین آبجکت رو بفرست
    const data = {
      newsId: id,
      userId: currentAccount?.id,
      title,
      describe: content,
    };
    const res = await http.post(`/News/CreateNewsComment`, data);
    return res;
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsComment"]);
      toast.success("نظرتان با موفقیت ثبت شد");
      setError("");
      setTitle("");
      editor.commands.setContent('<p style="color:green;font-weight:bold">✅ نظر شما با موفقیت ثبت شد!</p>');
    },
    onError: (error) => {
      toast.error(error?.response?.data?.ErrorMessage || "خطا در ثبت نظر");
    },
  });

  // ---- Submit Handler ----
  const handleSubmit = () => {
    if (!title.trim() || !editor?.getText().trim()) {
      setError("عنوان و متن نظر نمی‌تواند خالی باشد");
      return;
    }
    if (editor.getText().length > MAX_LENGTH) {
      setError(`حداکثر ${MAX_LENGTH} کاراکتر مجاز است`);
      return;
    }
    setError("");
    mutate({
      title,
      content: editor.getHTML(),
    });
  };

  return (
    <div
      className={`w-full max-w-3xl mx-auto border-2 rounded-3xl mt-10 p-6 ${
        darkMode ? "border-gray-700 bg-gray-800" : "border-[#e8eefe] bg-white"
      }`}
      dir="rtl"
    >
      <h2 className="w-full h-10 bg-[#3772FF] text-white rounded-3xl px-2 py-1 text-center flex justify-center items-center gap-2">
        <TfiWrite />
        نظر خود را ثبت کنید
      </h2>
      <div className="mt-5 space-y-4">
        <Input
          name="Title"
          placeholder="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          className={`bg-[#f5f5f9] dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl border-none focus:border-navyBlue transition-all duration-300`}
          style={{
            color: darkMode ? "#fff" : "#232f44",
            background: darkMode ? "#374151" : "#f5f5f9",
            borderColor: "transparent",
            borderRadius: 16,
          }}
        />

        <div
          className="p-2 mt-4 rounded-xl"
          style={{
            background: darkMode ? "#374151" : "#f5f5f9",
            minHeight: 110,
          }}
        >
          <EditorContent
            editor={editor}
            placeholder="نظر خود را وارد کنید"
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

        <div className="flex flex-row-reverse items-center justify-between mt-4">
          <button
            type="button"
            disabled={isLoading}
            className="bg-[#3772FF] dark:bg-blue-600 w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold transition-all duration-150"
            onClick={handleSubmit}
          >
            {isLoading ? "در حال ارسال..." : "ثبت"}
          </button>

          <TiptapToolbar editor={editor} darkMode={darkMode} />

          <span style={{ fontSize: 13, color: darkMode ? "#ccc" : "#3772FF" }}>
            {editor?.getText().length || 0}/{MAX_LENGTH}
          </span>
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default AddUserNewsComment;
