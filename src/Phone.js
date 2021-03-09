import React, { useRef }from "react";
import TextInput from './TextInput'
const Phone = () => {
  const phoneEl = useRef(null)

  const handlePhone = () => {
    
    //1. Access Custom Defined Functions
    
    phoneEl.current.verify()
    phoneEl.current.validate()


    //2. Restrict to functions which we pass directly in createHandle function object

    // If below line is uncommented, then it will return in error as it is not defined in useImperitiveHandle Hook even it is native js function

    // phoneEl.current.focus()

  }

  return (
    <div>
      <TextInput ref={phoneEl} onChange={handlePhone}/>
    </div>
  )
}

export default Phone;