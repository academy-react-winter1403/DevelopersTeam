import LazyComponent from './LazyComponent';

import React from 'react'

export const lazy = () => {
  LazyComponent = () =>{  
    return <LazyComponent />;
   }
  return (
    <div>
      
    </div>
  )
}

export default lazy
