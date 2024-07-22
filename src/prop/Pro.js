import React from 'react'

import Pro2 from '../prop2/Pro2'

const Pro = () => {
  const value={
    value1:"Bob",
    value2:"ate",
    value3:"Mangoes"
  }
  return (
    <div>
      <center>
      <h1>
        Hello World
      </h1>
      <Pro2 data={value}/>
      </center>
    </div>
  )
}

export default Pro