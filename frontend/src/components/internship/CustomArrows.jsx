/* eslint-disable react/prop-types */
// import React from 'react';

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} next-arrow`}
      style={{ ...style, display: 'block', background: '#1e40af', borderRadius: '50%', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} prev-arrow`}
      style={{ ...style, display: 'block', background: '#1e40af', borderRadius: '50%', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};
