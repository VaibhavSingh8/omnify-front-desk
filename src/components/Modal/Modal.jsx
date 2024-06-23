import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  cloneElement,
} from "react";

import { HiXMark } from "react-icons/hi2";

const Overlay = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-backdrop backdrop-filter backdrop-blur-sm z-50">
      {children}
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-3 right-5 bg-transparent border-none p-1 rounded-sm translate-x-2 transition-all duration-200 hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState(""); // keep track of which window is open in case of multiple windows
  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  //achieve internal state for the button: clone the children element, add new props to it
  // this is done so that Modal manages it's own state instead of the button
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  return (
    <Overlay>
      <div className="relative bg-white p-4 rounded-lg w-3/6 h-3/5 overflow-auto">
        <Button onClick={close}>
          <HiXMark size={20} />
        </Button>
        {children}
      </div>
    </Overlay>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
