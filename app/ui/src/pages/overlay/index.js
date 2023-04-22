import { useRef, useState } from 'react';
import './index.css';
import manifest from './manifest';

function Overlay(props) {

  useState(()=>{
  },[])

  return (
    <div className='overlayRoot'>
      <div className='overlayPanels overlayTitle' style={manifest.events[0].panel.title || {}}>
        {manifest.events[0].content.title || ""}
      </div>
      <div className='overlayPanels overlayText' style={manifest.events[0].panel.text || {}}>
        {manifest.events[0].content.text[0] || ""}
      </div>
    </div>
  )

}

export default Overlay;