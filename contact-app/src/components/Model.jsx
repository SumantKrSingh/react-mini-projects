import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

function Model({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="flex justify-center wrap-normal absolute backdrop-blur h-screen w-screen top-0 z-40">
          <div className=" m-auto relative z-50 min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("model-root")
  );
}

export default Model;
