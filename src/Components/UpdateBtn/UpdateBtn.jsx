import React from "react";

const UpdateBtn = () => {
  return (
    <button className="admin-btn btn-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          id="Icon_awesome-save"
          data-name="Icon awesome-save"
          d="M19.372,6.622,15.628,2.878a2.143,2.143,0,0,0-1.515-.628H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V8.138a2.143,2.143,0,0,0-.628-1.515ZM10,19.393a2.857,2.857,0,1,1,2.857-2.857A2.857,2.857,0,0,1,10,19.393ZM14.286,5.8v4.487a.536.536,0,0,1-.536.536H3.393a.536.536,0,0,1-.536-.536V5.643a.536.536,0,0,1,.536-.536h10.2a.536.536,0,0,1,.379.157l.155.155a.536.536,0,0,1,.157.379Z"
          transform="translate(0 -2.25)"
          fill="#fff"
        />
      </svg>
      UPDATE
    </button>
  );
};

export default UpdateBtn;
