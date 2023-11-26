/* eslint-disable no-unused-vars */
import { styled, Box, Avatar } from "@mui/material";

export const ListTopicWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 0,
  overflow: "hidden",
  transition: "all 0.3s linear",
  "&.active": {
    transition: "all 0.3s linear",
    height: "100%",
  },
}));
export const HeaderLearning = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: "20px 0",
  marginBottom:'16px',
  position: "sticky",
  top: 0,
  borderBottom: "2px solid rgb(175 175 175)",
  zIndex:100
}));
