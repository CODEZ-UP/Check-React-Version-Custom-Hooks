import React, { useState, useRef, createRef }from "react";
const RefDemo = () => {
  const [counter, setCounter] = useState(1)
  const useRefInput = useRef()
  const createRefInput = createRef()
  if (!useRefInput.current){
    console.log('----Called USEREF at Initial Render----')
    useRefInput.current = counter
  }
  if (!createRefInput.current){
    console.log('----Called CREATEREF at Every Render----')
    createRefInput.current = counter
  }

  const handleCounter = () => {
    setCounter(counter => counter + 1)
  }

  return (
    <>
      Counter : {counter}<br /><br /><br />
      UseRef Value : {useRefInput.current}<br /><br /><br />
      CreateRef Value : {createRefInput.current}<br /><br /><br />
      <button onClick={handleCounter}>
        Increment
      </button>
    </>
  )
}

export default RefDemo;