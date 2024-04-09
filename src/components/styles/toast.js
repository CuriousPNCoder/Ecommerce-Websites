import React from 'react'

const Toast = ({message}) => {
  return (
    <>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded">
        {message}
      </div>
    </>
  );
}

export default Toast;