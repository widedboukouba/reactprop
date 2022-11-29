import React from 'react'

export const FullName = ({name,lastName,handleName}) => {
  return (
    <div>
    <h2>{name } {lastName} </h2>
       
      
       
       <button onClick={() => handleName(name)}>
         Hire Me!
       </button>
    </div>
  )
}

 