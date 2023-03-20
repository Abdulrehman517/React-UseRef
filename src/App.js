import React, { useRef, useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const divRef = useRef(null);

  useEffect(() => {
    // add event listener to document object
    document.addEventListener('click', handleClickOutside);

    // cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (divRef.current && !divRef.current.contains(event.target)) {
      // clicked outside of the div, close the div
      closeDiv();
    }
  }

  function closeDiv() {
    // logic to close the div
    divRef.current.style.display = 'none';
  }

  return (
    <div ref={divRef} style={{ backgroundColor: 'red' }}>
      click outside to close the div
    </div>
  );
}
