import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import "./customEditor.css";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "undo",
    "redo",
    "codeBlock",
  ],
  simpleUpload: {
    uploadUrl: "/api/post/upload",
  },
};

interface CustomEditorProps {
  initData?: string;
}

const CustomEditor = ({ initData }: CustomEditorProps) => {
  const [content, setContent] = useState(initData || "");

  return (
    <>
      <input className="hidden" name="content" readOnly value={content} />

      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
    </>
  );
};

export default CustomEditor;
