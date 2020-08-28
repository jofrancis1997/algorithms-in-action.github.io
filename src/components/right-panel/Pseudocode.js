/* eslint-disable no-prototype-builtins */
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import LineExplanation from './LineExplanation';
import LineNumHighLight from './LineNumHighLight';

function Pseudocode() {
  const { algorithm } = useContext(GlobalContext);
  const show = !!algorithm.hasOwnProperty('pseudocode');
  return (
    show ? (
      <div className="textAreaContainer">
        <LineNumHighLight />
        <LineExplanation />
      </div>
    ) : null
  );
}

export default Pseudocode;