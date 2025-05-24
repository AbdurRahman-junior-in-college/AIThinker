"use client";

import axios from "axios";
import React, { useState } from "react";

import { store_blog } from "../../data_lib/data_services";
import Modal from "../_components/Modal";
import SpinnerMini from "../_components/SpinnerMini";
import TipTapEditor from "../_components/TipTapEditor";

const content_type = [
  {
    value: "Blog",
    lable: "Blog Post",
  },
  {
    value: "Email",
    lable: "Format Email",
  },
  {
    value: "Product",
    lable: "Product Description",
  },
];

const enhancement_options = [
  "Enhance Content",
  "SEO Optimize",
  "Check Grammar",
  "Format Content with Images",
];

const languages = ["English", "Arabic", "Pashto", "Dari", "Urdu"];

const BlogCreationPage = () => {
  const html =
    "<h1>A title A title A title</h1> <p>Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusionAfter Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusionAfter </p><ol>Like this</ol>";
  const data =
    " **A title** Include: ## Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusionAfter every main section, suggest an image description as: **Atitle** Include: ## Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusion After every main section, suggest an image description as: **A title** Include: ## Intro paragraph - Main content with 1-2 **A title** Include: ## Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusionAfter every main section, suggest an image description as: **Atitle** Include: ## Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusion After every main section, suggest an image description as: **A title** Include: ## Intro paragraph - Main content with 1-2 **A title** Include: ## Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusionAfter every main section, suggest an image description as: **Atitle** Include: ## Intro paragraph - Main content with 1-2 paragraphs - Bullet points or stackers if needed - A conclusion After every main section, suggest an image description as: **A title** Include: ## Intro paragraph - Main content with 1-2";
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [type, setType] = useState("Blog");
  const [enhancement, setEnhancement] = useState("Enhance Content");
  const [loading, setLoading] = useState(false);
  const [language, setLanguagae] = useState("English");
  // const [Images, setImages] = useState([]);

  const handleClick = async () => {
    setLoading(true);
    let content = "Stay away from unneccessary description lik: here is well format , this font etc.";
    if (type === "email") {
      content = `Generate a professional email format for the following purpose :
        ${prompt} in valid HTML
        Include:
        -Subject line <h1>
        -Greeting <h5>
        -Email body with bullet points if needed <p>
        -Clear call to action <p>
        -Signature <strong>
        -<strong> for emphasis
        Return the content in ${language} Lanuage and
        Return clear response that looks cool in TipTopEditor.
        `;
    } else {
      content = `Take the following idea and write a well-formatted ${type} in ${language} Language in valid HTML
        Include:
        - A title <h1> format
        - Intro paragraph <p> format bold
        - Main content with 1-2 paragraphs <p> semibold
        - Bullet points or stackers if needed <ul>
        - A conclusion in <p> bold
        After every main section, create and suggest an image description as:
        [IMAGE]: Description here
        Idea:
        ${prompt}
        Return clear response that looks cool in TipTopEditor.
        `;
    }
    try {
      const res = await axios.post("http://localhost:3000/api/blog", {
        text: content,
      });
      const generated_text = res.data.content;
      setAiResponse(generated_text);
      // const images = [...generated_text.match(/\[IMAGE\]: (.+)/g)].map(
      //   (match) => match[1]
      // );
      // console.log(res.data.content)
      // setImages(images);
      // console.log(res);
    } catch (error) {
      setAiResponse("Error generating response. Try again!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // console.log(Images)

  // const saveBlog = async (content) => {
  //   const res = await store_blog(content);
  // };

  return (
    <div className="flex gap-5 w-[100%] sm:flex-row flex-col">
      <div className="flex-1 mt-30 flex flex-col gap-6">
        <textarea
          placeholder="write anything you have in your mind I will structure and optimise for you."
          value={prompt}
          // name="prompt"
          onChange={(e) => setPrompt(e.target.value)}
          className="border-none outline-none resize-none border-indigo-600 rounded text-gray-600 bg-gray-100 px-4 py-2 w-[100%]"
          rows={5}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="border-gray-500 bg-gray-100 rounded px-4 py-2 font-bold cursor-pointer"
            disabled={loading}
            onClick={handleClick}
          >
            {loading ? <SpinnerMini /> : "Generate"}
          </button>
        </div>

        {/* <pre className="text-white text-xs">{aiResponse}</pre> */}

        <Modal>
          {aiResponse && (
            <Modal.Open opens={"output"}>
              <button className="px-8 py-3 rounded bg-indigo-600 text-white font-semibold">
                Check OutPut
              </button>
            </Modal.Open>
          )}

          <Modal.Window name={"output"}>
            <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">
              {/* <HTMLPreview html={aiResponse} /> */}
              <TipTapEditor content={aiResponse} id={null} title={""} />
            </div>
          </Modal.Window>
        </Modal>
      </div>

      <div className="sm:w-[30%] px-4 py-3  font-bold text-white flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="text-xs" htmlFor="type">
            Select Your Content Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            // name="type"
            className="px-4 py-2 border-gray-200 rounded bg-gray-600 mt-2"
          >
            {content_type.map((content, i) => (
              <option value={content.lable} key={content.lable}>
                {content.value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs" htmlFor="service">
            Select Enhancement Category.
          </label>
          <select
            value={enhancement}
            onChange={(e) => setEnhancement(e.target.value)}
            // name="enhancement"
            id="service"
            className="px-4 py-2 border-gray-200 rounded bg-gray-600 mt-2"
          >
            {enhancement_options.map((enhance, i) => (
              <option value={enhance} key={i}>
                {enhance}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-xs" htmlFor="type">
            Select Language
          </label>
          <select
            id="type"
            value={language}
            onChange={(e) => setLanguagae(e.target.value)}
            // name="language"
            className="px-4 py-2 border-gray-200 rounded bg-gray-600 mt-2"
          >
            {languages.map((language, i) => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

// function Button() {
//   // this hook is new in react and we can use this hook only inside the
//   //  form even if this components is not inside the form but where we want
//   // to use this it should be inside the form
//   const { pending } = useFormStatus();

//   return (
//     <button
//       className="border-none outline-none px-5 py-2 bg-yellow-600 text-gray-900 cursor-pointer"
//       disabled={pending}
//     >
//       {pending ? "Updating" : "Update Profile"}
//     </button>
//   );
// }

export default BlogCreationPage;
