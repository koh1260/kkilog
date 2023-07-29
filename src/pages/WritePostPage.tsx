import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import React, { useState } from "react";

type MDEditorOnChange = (
  value?: string,
  event?: React.ChangeEvent<HTMLTextAreaElement>,
  state?: ContextStore
) => void;

const WritePostPage = () => {
  const [value, setValue] = useState("**Hello world!!!**");

  const onClick: MDEditorOnChange = (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    console.log(value);
    setValue(event!.target.value);
  };

  return (
    <div className="container">
      <MDEditor value={value} onChange={onClick} preview="edit" />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
};

export default WritePostPage;
