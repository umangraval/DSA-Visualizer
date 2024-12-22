/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import hljs from "highlight.js";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { updateContent, deleteContent } from "utils/db";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { Quill } from "react-quill";
import { triggerToast } from "utils/handlers";
import { useAuth } from "utils/auth";
Quill.register("modules/imageResize", ImageResize);

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
});
const BaseImageFormat = Quill.import("formats/image");
const ImageFormatAttributesList = ["alt", "height", "width", "style"];

class ImageFormat extends BaseImageFormat {
  static formats(domNode) {
    return ImageFormatAttributesList.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }
  format(name, value) {
    if (ImageFormatAttributesList.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}

Quill.register(ImageFormat, true);

const modules = {
  syntax: true,
  toolbar: {
    container: "#toolbar",
    handlers: {},
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    // See optional "config" below
  },
};

const formats = [
  "header",
  "bold",
  "indent",
  "italic",
  "underline",
  "strike",
  "image",
  "video",
  "file",
  "link",
  "code-block",
  "video",
  "blockquote",
  "clean",
  "align",
];

function Editor({ uid, initcontent, dstype, setmain, setShow, page, setView }) {
  const [content, setContent] = useState(initcontent);
  const auth = useAuth();

  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  const handleUpdate = async () => {
    try {
      if (!content) triggerToast({ type: "error", message: "Empty Content" });

      // work around
      await updateContent(uid, content, dstype, page);
      setmain(content);
      setShow(false);
      triggerToast({ type: "success", message: "Content Updated" });
    } catch {
      triggerToast({ type: "error", message: "Content Failed To Update" });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteContent(uid, dstype, page);
      setView(null);
      triggerToast({ type: "success", message: "Example Deleted" });
    } catch {
      triggerToast({ type: "error", message: "Example Failed To Delete" });
    }
  };

  return (
    <div>
      {auth.user.isTeacher && (
        <>
          <div>
            <div id="toolbar" className="clear-both">
              <select
                className="ql-header"
                defaultValue={""}
                onChange={(e) => e.persist()}
              >
                <option value="1" />
                <option value="2" />
                <option value="" />
              </select>
              <button className="ql-bold" />
              <button className="ql-italic" />
              <button className="ql-underline" />
              <button className="ql-strike" />
              <button className="ql-link" />
              <button className="ql-code-block" />
              <button className="ql-image" />
              <button className="ql-clean" />
              <button className="ql-align" value=""></button>
              <button className="ql-align" value="center"></button>
              <button className="ql-align" value="right"></button>
              <button className="ql-align" value="justify"></button>
            </div>
            <ReactQuill
              value={content}
              onChange={setContent}
              theme="snow"
              modules={modules}
              formats={formats}
            />
          </div>
          <button
            className={
              // (!show && "hidden ") +
              " text-white inline-block bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg float-right mt-3 ml-3"
            }
            onClick={() => handleUpdate()}
          >
            Update
          </button>
          <button
            className={
              // (!show && "hidden ") +
              " text-white inline-block bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg float-right mt-3 ml-3"
            }
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </>
      )}
      <div className="clear-both"></div>
    </div>
  );
}

export default Editor;
