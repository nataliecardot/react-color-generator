import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(); // comma is default separator
  // const hex = rgbToHex(...rgb);
  // double curly braces explained here https://stackoverflow.com/a/51576729/8888320
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
    </article>
  );
};

export default SingleColor;
