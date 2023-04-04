import React, { useState } from 'react'

function Dropdown({options, selection, onClickChoose}) {
  const [showNow, setShowNow] = useState(true)

  const handleClick = () => {
    setShowNow(!showNow)
  }

  const chooseClick = (option) => {
    onClickChoose(option)
  }

  const renderedOptions = options.map((option) => {
    return <div key={option.label}>
      <p onClick={()=>chooseClick(option)}>{option.value}</p>
    </div>
  })

  let content = 'Select...';
  if (selection) {
    content = selection.label;
  }

  return <div onClick={handleClick}>
  <div >{content}</div>
   <div>
   {showNow && <div>{renderedOptions}</div>}
    </div>
    </div>
  
}

export default Dropdown