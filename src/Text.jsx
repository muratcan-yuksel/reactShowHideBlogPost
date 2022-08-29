import { React, useState } from "react";
import "./styles/texts.css";

const Text = ({ body, id }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <div className="text" key={id}>
        {readMore ? body : `${body.substring(0, 80)}...`}
        <button className="btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "  read more"}
        </button>
      </div>
    </div>
  );
};

export default Text;
