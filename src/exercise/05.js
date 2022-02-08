// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// const smallBox = <div className="box box--small" style={{ backgroundColor: "lightblue", fontStyle: "italic" }}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{ backgroundColor: "pink", fontStyle: "italic" }}>medium pink box</div>
const largeBox = <div className="box box--large" style={{ backgroundColor: "orange", fontStyle: "italic" }}>large orange box</div>

// function Box({ size, color }) {
//   return (
//     <div 
//       className={`box box--${size}`} 
//       style={{ backgroundColor: color, fontStyle: "italic" }}
//     >
//       {size} {color} box
//     </div>
//   )
// }

function Box({className = "", size, style, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ""

  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: "italic", ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" id="small-box" style={{backgroundColor: "lightblue"}}>small lightblue box</Box>
      {mediumBox}
      {largeBox}
      <Box style={{backgroundColor: "red"}}>no size red box</Box>
    </div>
  )
}

export default App
