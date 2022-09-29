import { Button as NextUIButton, CSS } from "@nextui-org/react";
import React from "react";

interface IButtonProps {
  css?: CSS;
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  return (
    <NextUIButton
      {...props}
      data-testid={"button-id"}
      css={{
        borderRadius: "$xs", // radii.xs
        border: "$space$1 solid transparent",
        background: "$pink800", // colors.pink800
        color: "$pink100",
        height: "$12", // space[12]
        boxShadow: "$md", // shadows.md
        "&:hover": {
          background: "$pink100",
          color: "$pink800",
        },
        "&:active": {
          background: "$pink200",
        },
        "&:focus": {
          borderColor: "$pink400",
        },
      }}
    ></NextUIButton>
  );
};

export default Button;
