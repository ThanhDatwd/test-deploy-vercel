import { ButtonStyle, ButtonWrapperStyle } from "@/styles/globalStyle";
import { BUTTON_MODE } from "@/utils/constans";
import React from "react";

export const ButtonCustom = ({ children, sx, type = "button", mode, disabled }) => {
  return (
    <ButtonWrapperStyle
      sx={{
        background: disabled ? BUTTON_MODE.DISABLED.BG_PARENT : mode.BG_PARENT,
        ...sx
      }}
    >
      <ButtonStyle
        sx={{
          background: disabled
            ? BUTTON_MODE.DISABLED.BG_BUTTON
            : mode.BG_BUTTON,
          color: mode.COLOR,
          top:disabled?0:'-5px',
          '&:hover':{
            background: disabled
            ? BUTTON_MODE.DISABLED.BG_BUTTON
            : mode.BG_BUTTON,
            color:mode.COLOR
          }
          
        }}
        type={type}
        disabled={disabled}
      >
        {children}{" "}
      </ButtonStyle>
    </ButtonWrapperStyle>
  );
};
