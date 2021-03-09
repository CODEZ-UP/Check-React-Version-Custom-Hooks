import React, { forwardRef, useImperativeHandle }from "react";
const TextInput = forwardRef((props, ref) => {
  const verify = () => {
    console.log("-----Verify() function called----")
    // You can actual verify and update your states here and also perform other stuff
  }

  const validate = () => {
    console.log("-----validate() function called----")
  }

  useImperativeHandle(ref, () => ({ verify, validate }), [ ])

  return (
    <input {...props} type="text" />
  )
})

export default TextInput