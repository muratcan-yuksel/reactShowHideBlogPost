import { React, useState } from "react";
import "./styles/texts.css";
import Text from "./Text";

const Texts = ({ props }) => {
  return (
    <div className="textComponent">
      <div>
        {props.map((mappedProps) => {
          return <Text key={mappedProps.id} {...mappedProps} />;
        })}
      </div>

      {/* <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p> */}
      {/* <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div> */}
    </div>
  );
};

export default Texts;
