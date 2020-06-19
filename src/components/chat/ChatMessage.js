import React from 'react';

const ChatMessage = props => {

  let col1, col2, orientation, col1Size, col2Size

  const avatar = (<div className="chat-avatar">
    <img src={props.img} alt="prospect" />
  </div>)

  const message = (
    <p>
      <small>{props.time}</small>
      <br />
      <strong>{props.from}</strong>
      <br />
      {props.message}
    </p>
  )

  if (props.orientation === "left") {
    col1 = avatar
    col2 = (
      <div className="col text-left">
        {message}
      </div>
    )
    orientation = "d-flex justify-content-start"
    col1Size = "col-auto"
    col2Size = "col"

  } else {
    col1 = (
      <div className="col text-right">
        {message}
      </div>
    )
    col2 = avatar
    orientation = "d-flex justify-content-end"
    col1Size = "col"
    col2Size = "col-auto"
  }


  return (
    <div className={orientation}>
      <div className="container">
        <div className="row">
          <div className={col1Size}>
            {col1}
          </div>
          <div className={col2Size}>
            {col2}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;