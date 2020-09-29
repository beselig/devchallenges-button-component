import React from "react";

export const Button = ({
  variant,
  disableShadow,
  disabled,
  size,
  startIcon,
  endIcon,
  color,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`
	    btn
	  	color-${color}
		${variant || ""}
		${disableShadow ? "disableShadow" : ""}
		size-${size}
		`}
      disabled={disabled}
    >
      {startIcon ? <i className="material-icons startIcon">{startIcon}</i> : ""}
      Default
      {endIcon ? <i className="material-icons endIcon">{endIcon}</i> : ""}
    </button>
  );
};

Button.defaultProps = {
  variant: undefined,
  disableShadow: false,
  disabled: false,
  size: "md",
  startIcon: undefined,
  endIcon: undefined,
  color: "default",
};

type ButtonProps = {
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
  size?: string;
  startIcon?: string;
  endIcon?: string;
  color?: string;
};
