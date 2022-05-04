import React, { useState } from "react";

import I18n, { Translator } from "../i18n";

import { Container } from "./styles";

const Aside: React.FC = () => {
  const [countAddress, setCountAddress] = useState(2);

  const submitData = () => {

  };

  return (
    <Container>
      <div className="content-div">
        <h1>{Translator("Aside.Title")}</h1>
        <h3>{Translator("Aside.Description")}</h3>
        <p>{Translator("Aside.Address")}</p>
          {[...Array(countAddress)].map((element, index) => (
            <input key={index} placeholder="test" />
          ))}
          <button
            onClick={() => {
              setCountAddress(countAddress + 1);
            }}
          >
            More
          </button>
          <button onClick={submitData}>Submit</button>
      </div>
      <I18n />
    </Container>
  );
};

export default Aside;
