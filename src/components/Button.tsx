import React from "react";

export const Button = ({ variant }: ButtonProps): JSX.Element => {
  return (
    <button type="button" className={`btn-${variant}`}>
      foo
    </button>
  );
};

Button.defaultProps = {
  variant: "default",
};

type ButtonProps = {
  variant?: string;
};
