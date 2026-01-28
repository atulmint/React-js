import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)

function increasenums(){
   setnum(num+1)
}

function decreasenum(){
console.log('decrease');
setnum(num-1)
}

function jumpby5(){
console.log('jumpby5');
setnum(num+5)
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenums}>increase</button>
      <button onClick={decreasenum}>decrease</button>
       <button onClick={jumpby5}>jumpby5</button>
    </div>
  )
}

export default App
