import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmunWM6Pnk-qL2lYqcFauyUi_OO8SeWT6WldPXolDMUQ&s=10' width={width} className='rounded-full' />
    </div>
  )
}

export default Logo
