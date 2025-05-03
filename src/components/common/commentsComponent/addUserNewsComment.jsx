import { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDarkMode } from "../../../context/theme/themeContext";
import { Input } from "antd";
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
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bold") ? "bg-[#3772FF] text-white" : "text-[#232f44]"
        }`}
        type="button"
        style={{ fontWeight: "bold" }}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("italic") ? "bg-[#3772FF] text-white" : "text-[#232f44]"
        }`}
        type="button"
        style={{ fontStyle: "italic" }}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("strike") ? "bg-[#3772FF] text-white" : "text-[#232f44]"
        }`}
        type="button"
      >
        S
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

const AddUserNewsComment = ({ id }) => {
  const queryClient = useQueryClient();
  const { darkMode } = useDarkMode();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

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
      const currentLength = editor.getText().trim().length;
      if (currentLength > MAX_LENGTH) {
        setError(`حداکثر ${MAX_LENGTH} کاراکتر مجاز است`);
      } else {
        setError("");
      }
    },
  });

  const addComment = async () => {
    const describe = editor?.getHTML() || "";
    if (!title.trim()) {
      setError("عنوان را وارد کنید");
      return;
    }
    if (!describe.trim()) {
      setError("متن نظر را وارد کنید");
      return;
    }
    if (editor.getText().trim().length > MAX_LENGTH) {
      setError(`حداکثر ${MAX_LENGTH} کاراکتر مجاز است`);
      return;
    }

    const values = {
      newsId: id,
      title,
      describe,
      userId: 40330,
      userIpAddress: "1.1.1.1",
    };

    const response = await http.post(`/News/CreateNewsComment`, values);
    return response;
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsComment"]);
      toast.success("نظر شما با موفقیت ثبت شد.");
      setTitle("");
      editor?.commands.clearContent();
    },
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.ErrorMessage || "خطا در ثبت نظر";
      setError(errorMessage);
      toast.error(errorMessage);
    },
  });

  return (
    <div
      className="w-full h-auto border-2 dark:border-gray-700 border-gray-300 rounded-2xl sm:rounded-3xl mt-6 sm:mt-10 p-4 sm:p-6 bg-white dark:bg-gray-800"
      dir="rtl"
    >
      <h2 className="w-full h-10 bg-[#3772FF] text-white rounded-3xl px-2 py-1 text-center flex justify-center items-center gap-3">
        <TfiWrite />
        نظر خود را ثبت کنید
      </h2>
      <div className="mt-5 space-y-4">
        <Input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان"
          maxLength={50}
          className="w-full p-2 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 placeholder:text-gray-400"
        />
        <div
          className="p-2 rounded-xl"
          style={{
            border: darkMode ? "1px solid #374151" : "1px solid #e8eefe",
            background: darkMode ? "#2d3748" : "#fff",
            minHeight: 120,
          }}
        >
          <EditorContent editor={editor} />
        </div>
        <div className="flex justify-between items-center">
          <button
            disabled={isLoading}
            onClick={() => mutate()}
            className="bg-[#3772FF] dark:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-150"
          >
            {isLoading ? "در حال ارسال..." : "ثبت نظر"}
          </button>
          <TiptapToolbar editor={editor} darkMode={darkMode} />

          <span className="text-xs mt-1 text-gray-500">
            {editor?.getText().length || 0}/{MAX_LENGTH}
          </span>
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default AddUserNewsComment;
