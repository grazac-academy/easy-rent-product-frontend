import React from 'react'

function form(heading, label) {
  return (
    <div>
      <h3>{heading}</h3>
      <form>
          <input label={label} placeholder="" type="text"/>
      </form>
    </div>
  )
}

export default form
