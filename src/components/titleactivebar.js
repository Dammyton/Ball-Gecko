import React from 'react'
import avatar  from "../assets/Avatar.png"

const titleactivebar = () => {
    return (
      <>
        <div className="bg-pink text-white px-3 py-2 d-flex justify-content-between ">
          <div >
            <p className="mb-0">Lase’s Space</p>
            <h4>Lukaku: King<br/> or Not?</h4>
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

export default titleactivebar;
