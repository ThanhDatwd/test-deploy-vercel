import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { BoxFlex, BoxFlexColumn, BoxImage } from "@/styles/globalStyle";
import TopicCard from "./TopicCard";
import { ListTopicWrapper } from "@/styles/learnStyle";
export default function LevelCard() {
  const [isOpenListTopic, setIsOpenListTopic] = useState(false);
  return (
    <Paper
      style={{
        padding: "20px",
        borderRadius: "16px",
        width: "100%",
        cursor: "pointer",
      }}
      elevation={4}
    >
      {" "}
      <BoxFlexColumn gap={20}>
        <BoxFlexColumn gap={20}>
          <Box
            onClick={() => setIsOpenListTopic(!isOpenListTopic)}
            sx={{
              background: "#FFCB09 ",
              padding: "22px 16px",
              width: "100%",
              borderRadius: "16px",
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              1000 từ cơ bản
            </Typography>
          </Box>
          <BoxFlexColumn>
            <BoxFlex>
              <BoxImage sx={{ width: "40px", height: "40px" }}>
                <img
                  src="https://learn.mochidemy.com/image/de636aefa645d2c9f4482b68aafce487.png"
                  alt=""
                />
              </BoxImage>
              <Typography>Củng cố nền tảng tiếng anh</Typography>
            </BoxFlex>
            <BoxFlex>
              <BoxImage sx={{ width: "40px", height: "40px" }}>
                <img
                  src="https://learn.mochidemy.com/image/e4dd21e9ad4131ae0908c4612ed53950.png"
                  alt=""
                />
              </BoxImage>
              <Typography>Củng cố nền tảng tiếng anh</Typography>
            </BoxFlex>
          </BoxFlexColumn>
        </BoxFlexColumn>
        <ListTopicWrapper className={`${isOpenListTopic ? "active" : ""}`}>
          <BoxFlexColumn gap={20}>
            <TopicCard />
            <TopicCard />
            <TopicCard />
          </BoxFlexColumn>
        </ListTopicWrapper>
      </BoxFlexColumn>
    </Paper>
  );
}
