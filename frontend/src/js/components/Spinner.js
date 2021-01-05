import React from 'react'

const Spinner = props => {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui big text loader">{props?.message || "Loading..."}</div>
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner