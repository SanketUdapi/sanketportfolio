import React from 'react';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';
import styled from 'styled-components';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  div {
    color: ${props => props.theme.textColor};
    text-shadow: background-color: #edde9c;
    color: #bc2e1e;
    text-shadow:
      0 1px 0px #378ab4,
      1px 0 0px #5dabcd,
      1px 2px 1px #378ab4,
      2px 1px 1px #5dabcd,
      2px 3px 2px #378ab4,
      3px 2px 2px #5dabcd,
      3px 4px 2px #378ab4,
      4px 3px 3px #5dabcd,
      4px 5px 3px #378ab4,
      5px 4px 2px #5dabcd,
      5px 6px 2px #378ab4,
      6px 5px 2px #5dabcd,
      6px 7px 1px #378ab4,
      7px 6px 1px #5dabcd,
      7px 8px 0px #378ab4,
      8px 7px 0px #5dabcd;;
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 70px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            Sanket
          </span>
        </div>
        <div className="sub">
          <Typewriter
            string='Your Freindly Neighbourhood Web Developer'
            delay={60}
            cursor='|'
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;