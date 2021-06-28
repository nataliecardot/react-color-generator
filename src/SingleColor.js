import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(); // comma is default separator
  // double curly braces explained here https://stackoverflow.com/a/51576729/8888320
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      single color
    </article>
  );
};

export default SingleColor;
