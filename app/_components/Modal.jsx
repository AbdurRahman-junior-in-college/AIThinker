import { createPortal } from "react-dom";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { cloneElement } from "react";
import React from "react";
// import { useOutsideClick } from "../hooks/useOutsideClick";

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover: {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-500);
//   }
// `;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  // const ref = useOutsideClick(close);
  if (name !== openName) return null;

  // const StyledModal = styled.div`
  //   position: fixed;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   background-color: var(--color-grey-0);
  //   border-radius: var(--border-radius-lg);
  //   box-shadow: var(--shadow-lg);
  //   padding: 3.2rem 4rem;
  //   transition: all 0.5s;
  // `;

  return (
    <div className="fixed inset-0 z-50  width-[100%] height-[80vh] bg-white/10 transition-all">
      <div
        // ref={ref}
        className="fixed top-[15%] w-[80%] left-[50%] -translate-x-[50%] bg-gray-100 rounded shadow-lg px-6 py-5 transition-all overflow-hidden"
      >
        <button
          onClick={close}
          className="text-center px-3 py-1.5 rounded-full hover:bg-red-400 hover:text-white cursor-pointer absolute translate-x-[0.8rem] -top-[0.1rem] right-[1.9rem]"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
  //   return createPortal(
  //     <Overlay>
  //       <StyledModal ref={ref}>
  //         <Button onClick={close}>
  //           <HiXMark />
  //         </Button>
  //         <div>{cloneElement(children, { onCloseModal: close })}</div>
  //       </StyledModal>
  //     </Overlay>,
  //     document.body
  //   );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
