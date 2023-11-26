import { Box, Typography } from "@mui/material";
import { BoxAvatar, BoxFlex } from "@/styles/globalStyle";

export default function TopicCard() {
  return (
    <Box onClick={()=>{}}
      sx={{
        width:'100%',
        boxShadow: " 5px 5px 5px rgba(189, 189, 189, 0.25)",
        borderRadius: "16px",
        background: "#e0e0e0",
      }}
    >
      <Box
        sx={{
          background: "#F8F8F8",
          borderRadius: "20px",
          cursor: "pointer",
          position: "relative",
          top: "-5px",
          padding:'30px'
        }}
      >
        <BoxFlex>
          <BoxAvatar
            sizes="60"
            src="https://mochien3.1-api.mochidemy.com/public/images/lesson/TACB_lesson_35.png"
          />
          <Box>
            <Typography variant="h5" fontWeight={600}>Schools</Typography>
            <Typography>1.Trường học</Typography>
          </Box>
        </BoxFlex>
      </Box>
    </Box>
  );
}
