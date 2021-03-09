import React from "react"

const App = () => {
  return (
    <div style={{width: '300px', height: '300px',border: '1px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <p>React Version is :  <strong>{React.version}</strong></p>
    </div>
  )
}

export default App