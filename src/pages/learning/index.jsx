import { Box } from "@mui/material";
import { useState } from "react";
import { FlashCard, FlashCardBack, FlashCardFront } from "@/styles/globalStyle";

export default function LearningPage() {
  const [isFlashCardFront, setIsFlashCardFront]=useState(true)
  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Box
        sx={{
          height: "25px",
          background: "#E0E0E0",
          borderRadius: "17px",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(83.47deg, #FFCB08 9.02%, #FF9600 90.81%)",
            width: "5%",
            height: "25px",
            borderRadius: "17px",
            display: " inline-block",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "45px",
              position: "absolute",
              right: "-10px",
              top: "-12px",
            }}
            src="https://learn.mochidemy.com/image/9362859030ff2f1748657ae47ef40370.png"
            alt=""
          ></img>
        </Box>
      </Box>
      <Box>
        <FlashCard className={isFlashCardFront?'':'back'} onClick={()=>setIsFlashCardFront(!isFlashCardFront)}>
          <FlashCardFront>content front</FlashCardFront>
          <FlashCardBack>
            content back
          </FlashCardBack>
        </FlashCard>
      </Box>
    </Box>
  );
}
