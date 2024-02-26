import React from 'react'

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

}

 const Modal: React.FC<propTypes> = ({ open, onClose, children}) => {
  return (
    <div className={`fixed inset-5 flex justify-center items-center  bg-black-800
    transition-colors ${open ? "visible bg-black/20": "invisible"}`}
    onClick={onClose}
    >
         {/* <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold mt-5'>Open Modal</button> */}

      <div className={`bg-white rounded-lg shadow p-6 transition-all max-w-md
        ${open? "h-54 w-80  scale-150 opacity-100" : "scale-200 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
        >

          <button className="absolute top-2 right-2 py1 px-2 
            border border-neutral-200 rounded-md text-gray-400 bg-white 
            hover:bg-gray-50 hover:text-gray-600"
            onClick={onClose}
            >X</button>
            {children}
      </div>
    </div> 
  )
}

export default Modal