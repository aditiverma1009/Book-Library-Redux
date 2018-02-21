import React from 'react';
import './Book-Display.css';

const BookDisplay = props => (
  <div
    className="BookDisplay"
    index={props.indexSent} // receive index from store
    onClick={() => {
        props.onClickEdit(props.indexSent);
      }}
  >
    {/* <textarea className="NoteDeckTitle">{props.noteDeckT}</textarea>
    <textarea className="NoteDeckNote">{props.noteDeckN}</textarea> */}
  </div>
);
