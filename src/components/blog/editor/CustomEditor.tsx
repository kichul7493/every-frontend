import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

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
  ],
  simpleUpload: {
    uploadUrl: "/api/post/upload",
  },
};

interface CustomEditorProps {
  initialData: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const CustomEditor = ({ initialData, setData }: CustomEditorProps) => {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={initialData}
      onChange={(event, editor) => {
        const data = editor.getData();
        setData(data);
      }}
    />
  );
};

export default CustomEditor;
