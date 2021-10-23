import React from 'react'
import avatar  from "../assets/Avatar.png"

const titlebar = () => {
    return (
      <>
        <div className="bg-pink text-white px-3 py-2 d-flex justify-content-between ">
          <div className="pt-4">
            <p className="mb-0">Chat with friends in</p>
            <h4>Spaces</h4>
          </div>
          <div classsName="position-relative">
            <div className="avatar-shift ">
              <img src={avatar} height="100px" alt="avatar" />
            </div>
          </div>
        </div>
      </>
    );
}

export default titlebar
