import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import TipTapEditor from "./TipTapEditor";

const Blog = ({ content }) => {
  // const title = content.;

  return (
    <div className="shadow-xl bg-gray-300 rounded" >
      <h2 className="shadow-xl px-4 py-2 font-bold  bg-gray-900  text-gray-100 border-b-gray-600">
        {content?.title}
      </h2>

      <div className="mt-5">
        <Modal>
          <Modal.Open opens={"blog"}>
            <div className="text-center">
              <Button className="bg-indigo-600 text-white">View More</Button>
            </div>
          </Modal.Open>

          <Modal.Window name={"blog"}>
            {/* <HTMLPreview html={content.description} /> */}
            <TipTapEditor content={content.description} id={content._id} title={content.title} />

            {/* <div className="mt-5 flex justify-end gap-5">
              <Button className="bg-gray-600 text-gray-100 hover:bg-white hover:text-gray-900">
                Copy
              </Button>
              <Button className="bg-indigo-600 text-white/100 hover:bg-white hover:text-gray-900 ">
                Share
              </Button>
            </div> */}
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default Blog;
