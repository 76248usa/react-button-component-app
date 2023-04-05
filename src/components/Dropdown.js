/*import React, { useState, useRef, useEffect } from 'react'
import {GoChevronDown} from 'react-icons/go'

function Dropdown({options, selection, onClickChoose}) {
  const [showNow, setShowNow] = useState(true)
  const divEl = useRef();

  const handleClick = () => {
    setShowNow(!showNow)
  }

  const chooseClick = (option) => {
    onClickChoose(option)
  }
  
  useEffect(() => {
    const handler = (event) => {
      console.log(divEl.current)
    }
    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, []);

  const renderedOptions = options.map((option) => {
    return <div>
    <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.label}
      onClick={()=>chooseClick(option)}>{option.value}</div>
      </div>   
  })

  let content = 'Select...';
  if (selection) {
    content = selection.label;
  }

  return <div ref={divEl.current} className='w-48 relative' >
  <div className='flexjustify-between items-center cursor-pointer
  border rounded p-3 shadow bg-white w-full' >{content}</div>
   <div className='absolute top-full border rounded p-3 bg-white w-full'>
   {showNow && <div>{renderedOptions}</div>}
    </div>
    </div>
  
}

export default Dropdown*/



import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      //console.log(divEl.current);
      if(!divEl.current){
        return
      }
      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
