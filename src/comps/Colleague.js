import React from "react";

function Colleague({colleague}) {
  return (
    <div style={{display: 'flex'}}>
      <input type="checkbox"/>
      <li style={{color: 'black', textDecoration: colleague.removed ? 'line-through' : null}}>
        {colleague.name}
      </li>
      <button>X</button>
    </div>
  )

}

export default Colleague;