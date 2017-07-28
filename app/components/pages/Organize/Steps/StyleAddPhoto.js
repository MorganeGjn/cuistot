import React from "react";
import styled from "styled-components";

function StyleAddPhoto(props) {
  const AddPhoto = styled.div`
    display: inline-blolck;
    width: ${props.width}px;
    height: ${props.height}px;
    border: dashed 2px #a9a9a9;
    border-radius: 4px;
  `;
  return (
    <div>
      <AddPhoto>
        {props.text}
      </AddPhoto>
    </div>
  );
}

export default StyleAddPhoto;
