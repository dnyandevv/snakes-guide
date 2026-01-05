import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { fetchSnakeById } from "../../Utils/data_fetch";
import ComparisionMap from "./ComparisionMap";

const Modal = forwardRef(
  function Modal({id , id2}, ref) {
    const dialogRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [snakeDataById, setSnakeDataById] = useState({});
    const [comparedSnakes, setComparedSnakes] = useState({});
    useEffect(() => {
      if (isOpen) {
        dialogRef.current?.showModal();
        document.body.style.overflow = "hidden";
      }
      if(id2 === null)
        {  fetchSnakeById('spectacled-cobra').then((data) => {
            setComparedSnakes(data);
          });
        }

      else{
        fetchSnakeById(id2).then((data) => {
          setComparedSnakes(data);
        });
      }
      fetchSnakeById(id).then((data) => {
          setSnakeDataById(data);
      });
    }, [isOpen, id, id2]);

    const handleClose = () => {
      dialogRef.current?.close();
      setIsOpen(false);
      document.body.style.overflow = "auto";
    };

    useImperativeHandle(ref, () => ({
      open() {
        setIsOpen(true);
      },
      close() {
        handleClose();
      },
    }));

    if (!isOpen) return null;

    return createPortal(
      <dialog
        ref={dialogRef}
        onClose={handleClose}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85vh] rounded-[.4rem] p-0 z-[50]"
      >
        <div 
          className={`transition-all duration-300 ease-out
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
        >
        <div className="flex justify-between items-center overflow-y-auto no-scrollbar p-4 border-b">
          {/* <div className="bg-gray-200/50 rounded-[1rem] w-full p-2 flex-[5]">
              <h1>{snakeDataById.data?.commonName}</h1>
              <MapInfo snake_data={snakeDataById.data} />
          </div>
          <div className="bg-gray-200/50 rounded-[1rem] w-full p-2 flex-[5]">
              <h1>{comparedSnakes.data?.commonName}</h1>
             <MapInfo snake_data={comparedSnakes.data} />
          </div> */}

            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto no-scrollbar bg-[#f7f8f2]">
                <ComparisionMap 
                  snake_data_1={snakeDataById.data}
                  snake_data_2={comparedSnakes.data}
                  commonName1={snakeDataById.common_name}
                  commonName2={comparedSnakes.common_name}
                />
            </div>
          
          
        </div>
        <div className="p-6 bg-white border-t flex justify-center shrink-0">
          <button type="button" 

            onClick={handleClose}
          >
            Close
          </button>
        </div>
        </div>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default Modal;