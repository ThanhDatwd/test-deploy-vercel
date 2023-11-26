/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { HeaderLearning } from "@/styles/learnStyle";
import Layout from "@/components/layouts";
import { BoxFlexColumn } from "@/styles/globalStyle";
import LevelCard from "@/components/learn/LevelCard";
const LessonPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default LessonPage;
