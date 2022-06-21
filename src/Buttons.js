import React from "react";
import './Buttons.css';

const Buttons = ({ variant, size, disabled, hover, startIcon, endIcon, content, disableShadow, color, long, shadow }) => {
  // adds styles to class list based on inputs
  let classes = '';
  if (variant) { classes += variant };
  if (size) { classes += ` ${size}` };
  if (disabled) { classes += ' disabled' };
  if (disableShadow) { classes += ' disableShadow' };
  if (hover) { classes += ' hover' };
  if (color) { classes += ` ${color}` };
  if (long) { classes += ' long' };
  if (shadow) { classes += ' shadow' };
  if (startIcon || endIcon) { classes += ' icon' };
  classes = classes.replaceAll('undefined', '');
  // adds id's for hover+focus display purposes only
  let newid = `${variant}`;
  if (hover) { newid = `${variant}-hover` };
  if (color && hover) { newid = `${color}-hover` };
  // adds start or end icon if specified
  let iconLeft, iconRight = '';
  if (startIcon) {
    iconLeft = <span className="material-icons">{startIcon}</span>;
    classes += ' long';
  }
  if (endIcon) {
    iconRight = <span className="material-icons">{endIcon}</span>;
    classes += ' long';
  }

  return (
    <> {
      newid ?
        <button className={classes} id={newid}>
          {iconLeft}&nbsp;{!content ? 'Default' : content}&nbsp;{iconRight}
        </button> :
        <button className={classes}>
          {iconLeft}&nbsp;{!content ? 'Default' : content}&nbsp;{iconRight}
        </button>
    } </>
  );
}

export default Buttons;