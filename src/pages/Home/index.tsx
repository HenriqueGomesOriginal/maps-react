/**
 * Author: Henrique Gomes
 * Created: May, 03, 2022
 */

import React, { useEffect } from 'react';

import { Container } from './styles';
import I18n, { Translator } from "../../components/i18n";

// Assets
//import BackgroundImg from "../../assets/Dashboard/background.jpg";

const Home: React.FC = () => {
    useEffect(() => {
    }, [])

    return(
      <Container>
          test
          <img className="background-img" alt="bg" src={require('../../assets/Dashboard/background.jpg')}/>
      </Container>
  );
}

export default Home;