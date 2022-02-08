// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  function handleChange(event) {
    const {value} = event.target
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username:
        </label>
        <input 
          id="username" 
          onChange={handleChange} 
          type="text" 
          value={userName}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

// WITH ERROR MESSAGE
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)

//   function handleSubmit(event) {
//     event.preventDefault()
//     console.dir(event.target)
//     const value = event.target.elements.username.value
//     onSubmitUsername(value)
//   }

//   function handleChange(event) {
//     const {value} = event.target
//     const isLowerCase = value === value.toLowerCase()
//     setError(isLowerCase ? null : "Username must be lower case")
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input id="username" type="text" onChange={handleChange}/>
//       </div>
//       <div style={{color: "red"}}>{error}</div>
//       <button type="submit" disabled={Boolean(error)}>
//         Submit
//       </button>
//     </form>
//   )
// }

// WITH REFS
// function UsernameForm({onSubmitUsername}) {
//   const usernameInputRef = React.useRef();
//   function handleSubmit(event) {
//     event.preventDefault()
//     console.dir(event.target)
//     const value = usernameInputRef.current.value
//     onSubmitUsername(value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={usernameInputRef} id="username" type="text" />
//       </div>
//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
