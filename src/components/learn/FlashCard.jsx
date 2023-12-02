/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  BoxFlexCenter,
  BoxFlexColumn,
  BoxFlexColumnCenter,
  BoxImage,
  FlashCardStyle,
  FlashCardBack,
  FlashCardFront,
  FlashCardWrapper,
  FlashCarFooter,
  FlashCarHeader,
} from "@/styles/globalStyle";
import { ButtonCustom } from "../CustomUi/ButtonCustom";
import { BUTTON_MODE } from "@/utils/constans";
export const FlashCard = ({vocab}) => {
  const [isFlashCardFront, setIsFlashCardFront] = useState(true);
  return (
    <FlashCardWrapper>
      <FlashCarHeader>
        <BoxFlexCenter>
          <ButtonCustom
            sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
            mode={BUTTON_MODE.PRIMARY}
          >
            <BoxImage>
              <img src="https://learn.mochidemy.com/svg/sound.svg" alt="" />
            </BoxImage>
          </ButtonCustom>
          <ButtonCustom
            sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
            mode={BUTTON_MODE.PRIMARY}
          >
            <BoxImage>
              <img
                src="https://learn.mochidemy.com/svg/sound_slow.svg"
                alt=""
              />
            </BoxImage>
          </ButtonCustom>
        </BoxFlexCenter>
      </FlashCarHeader>
      <FlashCardStyle
        className={isFlashCardFront ? "" : "back"}
        onClick={() => setIsFlashCardFront(!isFlashCardFront)}
      >
        <FlashCardFront>
          <BoxFlexColumn>
            <BoxImage>
              <img
                src={
                  "https://mochien3.1-api.mochidemy.com/public/images/question/student.png"
                }
                alt=""
              />
            </BoxImage>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography
                variant="subtitle2"
                fontWeight={300}
                textAlign={"center"}
              >
                I am a student at that university
              </Typography>
            </Box>
          </BoxFlexColumn>
        </FlashCardFront>
        <FlashCardBack>
          <BoxFlexColumnCenter gap={20}>
            <Typography variant="h4">Student</Typography>
            <Typography variant="title-md">/ˈstuːdnt/</Typography>
            <Typography variant="title-lg">Học sinh, sinh viên (n)</Typography>
          </BoxFlexColumnCenter>
        </FlashCardBack>
      </FlashCardStyle>
      <FlashCarFooter>
        <BoxFlexCenter>
          {/* <Button variant="contained">Tiếp tục</Button> */}
          <ButtonCustom mode={BUTTON_MODE.SUCCESS}>Tiếp tục</ButtonCustom>
        </BoxFlexCenter>
      </FlashCarFooter>
    </FlashCardWrapper>
  );
};
