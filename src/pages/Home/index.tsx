/**
 * Author: Henrique Gomes
 * Created: May, 03, 2022
 */

import React, { useEffect } from "react";

import { Container } from "./styles";
import I18n, { Translator } from "../../components/i18n";

import { useDashContext } from "../../context/dashboard-context";

// Assets
//import BackgroundImg from "../../assets/Dashboard/background.jpg";

const Home: React.FC = () => {
  const { resultRequest } = useDashContext();

  // Translate
  var resultsStr = Translator("Home.Results");
  var closestStr = Translator("Home.Closest");
  var furtherStr = Translator("Home.Further");

  return (
    <Container>
      {resultRequest.length > 0 && <h1>{resultsStr}</h1>}
      {resultRequest.map((element, index) => (
        <div className="content-div" key={index}>
          {element.addressArray.map((address, indexAddress) => (
            <h2 key={indexAddress}>
              {address.address}
            </h2>
          ))}
          {element.closest && (
            <h2>
              teste
            </h2>
          )}
          <h2>
            Distancia: {JSON.stringify(element.distance).substring(0, 5)} Km
          </h2>
        </div>
      ))}
    </Container>
  );
};

export default Home;
