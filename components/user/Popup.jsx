import React from 'react'
import "@/app/globals.css";
function Popup(props) {
  return (props.trigger) ? (
    <div className="fixed top-0 left-0 w-full h-screen color flex justify-center items-center">
        <div className="relative p-[32px] w-full max-w-[854px] bg-white rounded-xl">
            <button className='absolute z-1 top-[16px] right-[16px] flex justify-center items-center space-x-4' onClick={() => props.setTrigger(false)}>
                <span>დახურვა</span>
                <img src="/assets/icons/close.png" alt='close popup'/>
            </button>
            <div>
            { props.children }
            </div>
        </div>
    </div>
  ) : "";
}

export default Popup