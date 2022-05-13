import React from "react";
import './Buttons.css';

const Buttons = ({ variant, size, disabled, hover, startIcon, endIcon, content, disableShadow, color, long }) => {
  let classes = '';
  if (variant) {classes +=variant};
  if (size) {classes +=` ${size}`};
  if (disabled) {classes +=' disabled'};
  if (disableShadow) {classes +=' disableShadow'};
  if (hover) {classes +=' hover'};
  if (color) {classes +=` ${color}`};
  if (long) {classes +=' long'};
  if (startIcon || endIcon) {classes +=' icon'};
  classes = classes.replaceAll('undefined','');

  let newid = `${variant}`;
  if (hover) {newid = `${variant}-hover`};
  if (color && hover) {newid = `${color}-hover`};

  let iconLeft, iconRight = '';
  if (startIcon) {
    iconLeft = <span className="material-icons">{startIcon}</span>;
    classes +=' long';
  }
  if (endIcon) {
    iconRight = <span className="material-icons">{endIcon}</span>;
    classes +=' long';
  }

  return (
      <button className={classes} id={newid}>
        {iconLeft}&nbsp;{!content ? 'Default' : content}&nbsp;{iconRight}
        </button>
  );
}

export default Buttons;