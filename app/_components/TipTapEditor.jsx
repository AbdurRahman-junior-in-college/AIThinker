"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Blockquote from "@tiptap/extension-blockquote";

import React from "react";
import { useState } from "react";
import {
  store_blog,
  store_sample,
  update_blog,
} from "../../data_lib/data_services";
import { useUser } from "@clerk/nextjs";
import DownloadPdfBtn from "./DownloadPdfBtn";

const TipTapEditor = ({ content, id, title }) => {
  const { user } = useUser();
  const [editable, setEditable] = useState(true);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading,
      Bold,
      Italic,
      BulletList,
      ListItem,
      Underline,
      Link,
      Blockquote,
    ],
    content,
    editable,
  });

  if (!editor) return null;
  let html;
  if (editor) {
    html = editor.getHTML();
  }

  const saveBlog = async (content, id) => {
    const userId = user?.id;
    if (id === null) {
      // const res = await store_blog(content, userId);
      await store_sample(content);
    } else {
      await update_blog(content, id, userId);
    }
  };
  return (
    <>
      <div className="border p-4 rounded-xl bg-white">
        <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
          <EditorContent editor={editor} id="blog-content" />
        </div>
        <div className="flex gap-5 justify-end mt-5 px-5 py-3">
          <button
            //   href={`edit/id`}
            onClick={() => setEditable(true)}
            className="px-5 py-2 border-gray-200 rounded bg-green-600 text-white cursor-pointer"
          >
            Edit
          </button>
          <button
            //  html
            onClick={() => saveBlog(html, id)}
            className="px-5 py-2 border-gray-200 rounded bg-indigo-600 text-white cursor-pointer"
          >
            Save
          </button>

          <DownloadPdfBtn title={title} />
        </div>
      </div>
    </>
  );
};

export default TipTapEditor;
