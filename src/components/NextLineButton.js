import React, { useContext } from 'react';
// eslint-disable-next-line import/named
import { GlobalContext } from '../context/GlobalState';
import { GlobalActions } from '../context/actions';
import '../styles/NextLineButton.scss';


function NextLineButton() {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div>
      <button
        type="button"
        className="nextLineButton"
        onClick={() => dispatch(GlobalActions.NEXT_LINE)}
      >
        Next Line
      </button>
    </div>
  );
}

export default NextLineButton;
