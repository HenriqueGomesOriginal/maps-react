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

  useEffect(() => {
    //alert("Home: " + JSON.stringify(resultRequest));
  }, []);

  // Translate
  var resultsStr = Translator("Home.Results");
  var closestStr = Translator("Home.Closest");
  var furtherStr = Translator("Home.Further");

  return (
    <Container>
      {resultRequest.map((element, index) => (
        <div>
          <h1>{resultsStr}</h1>
          <div>
            <h2>{closestStr}</h2>
            <h2>{furtherStr}</h2>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Home;
