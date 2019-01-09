import React from "react";

export default function AreYouSure(props) {
  console.log('props are you sure', props);
  return (
    <div className="popup">
      <div className="inner-popup">
        <p>Are you sure you want to delete this post? If you think your story is not good enough it is!</p><span role="image"> 😜</span>
        <button onClick={() => props.askDeletePopUp()}>No</button>
        <button onClick={() => {
          props.askDeletePopUp()
          props.dispatchDelete()
          }}>Yes</button>

      </div>
    </div>
  )
}