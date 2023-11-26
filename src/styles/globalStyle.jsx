/* eslint-disable no-unused-vars */
import { styled, Box, Avatar } from "@mui/material";

export const AppWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
  background: theme.palette.primary.main,
}));

// CUSTOM BOX FLEX
export const BoxFlex = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "flex-start",
  display: "flex",
  alignItems: "center",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxFlexCenter = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxFlexEnd = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "flex-end",
  display: "flex",
  alignItems: "center",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxFlexSpaceBetween = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxFlexColumn = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "flex-start",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxFlexColumnSpaceBetween = styled(Box)(({ ...props }) => ({
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",
}));
export const BoxFlexColumnCenter = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxFlexColumnEnd = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "flex-start",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-end",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxImage = styled(Box)(({ theme }) => ({
  "& img": {
    width: "100%",
    height: "100%",
  },
}));
export const BoxAvatar = styled(Avatar)(({ ...props }) => ({
  width: `${props.sizes ? props.sizes : 40}px`,
  height: `${props.sizes ? props.sizes : 40}px`,
  border: "4px solid #bdbdbd",
}));
export const BoxAvatarTopic = styled(Box)(({ ...props }) => ({
  "& img": {
    width: props.width || "40px",
    height: props.height || "40px",
    border: "3px solid #bdbdbd",
  },
}));
// SIDE BAR
export const SideBarWrapper = styled(Box)(({ theme }) => ({
  height: "100vh",
  padding: "0 16px",
  overflow: "auto",
  width: "16.666667%",
  position: "fixed",
  top: 0,
  left: 0,
  borderRight: "2px solid #e5e5e5",
}));
export const SideBarMenuItem = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "8px 12px",
  borderRadius: "12px",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  "&.active": {
    background: "#ddf4ff",
    border: "2px solid #84d8ff ",
    color: "#84d8ff",
  },
  "&:hover": {
    background: "#f7f7f7",
  },
}));
// HEADER
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  padding: "15px 0px",
  position: "fixed",
  // position:"relative",
  width: "100%",
  top: 0,
  left: 0,
  transition: "all .2s linear",
  overflow: "hidden",
  zIndex: 10000,
  "&.active": {
    background: theme.palette.primary.main,
    boxShadow: "0px 2px 10px -6px rgba(0,0,0,0.5)",
  },
}));

export const NavItem = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  padding: "8px 16px",
  minWidth: "100px",
  transition: "all .3s linear",
  cursor: "pointer",
  "&.active": {
    background: theme.palette.secondary.main,
  },
  "&:hover": {
    background: theme.palette.secondary.main,
  },
}));
export const NavMobile = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: "-100%",
  bottom: 0,
  padding: "0 20px",

  height: "100vh",
  width: "80vw",
  zIndex: 1000,
  opacity: 0,
  transition: "all .3s linear",
  background: theme.palette.primary.main,
  boxShadow: "6px -2px 10px -6px rgba(0,0,0,0.5)",
  "&.active": {
    opacity: 1,
    left: 0,
  },
}));
export const NavMobileHeader = styled(Box)(({ theme }) => ({
  padding: "20px 0",
  width: "100%",
  borderBottom: "1px solid",
  borderColor: theme.palette.secondary.main,
}));
export const LightDarkModeBox = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  background: theme.palette.secondary.main,
}));

export const FlashCard = styled(Box)(({ theme }) => ({
  width: "300px",
  minHeight: "400px",
  borderRadius:'20px',
  position: "relative" ,
  transformStyle: "preserve-3d" ,
  animation: "flip 3s linear infinite",
  transition: " transform 1s",
  transform: "rotateY(0deg)",
  background: theme.palette.primary.main,
  boxShadow:' 0 .5rem 1rem rgba(0,0,0,.15)',
  "&.front": {
    transform: "rotateY(0deg)",
  },
  "&.back": {
    transform: "rotateY(180deg)",
  },
}));
export const FlashCardFront = styled(Box)(({ theme }) => ({
  position: "absolute",
  backfaceVisibility: 'hidden',
  width: " 100%",
  height: "100%",
  transform: "rotateY(0)",
}));
export const FlashCardBack = styled(Box)(({ theme }) => ({
  position: "absolute",
  backfaceVisibility:'hidden',
  width: " 100%",
  height: "100%",
  transform: "rotateY(180deg)",
}));
