/* eslint-disable no-unused-vars */
"use client"
import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { HeaderLearning } from "@/styles/learnStyle";
import LayoutSideBar from "@/components/LayoutSideBars";
import { BoxFlexColumn } from "@/styles/globalStyle";
import LevelCard from "@/components/learn/LevelCard";
const LessonPage = () => {
  return (
    <LayoutSideBar>
      <Grid container>
        <Grid item md={8}>
          <HeaderLearning>
            <Typography variant="h5" textAlign={"center"}>
              Học từ vựng
            </Typography>
          </HeaderLearning>
          <BoxFlexColumn>
            <LevelCard />
            <LevelCard />
            <LevelCard />
            <LevelCard />
            <LevelCard />
          </BoxFlexColumn>
        </Grid>
      </Grid>
    </LayoutSideBar>
  );
};

export default LessonPage;
