import { Typography } from "@mui/material";
import {
  BoxFlex,
  BoxFlexColumn,
  BoxImage,
  SideBarMenuItem,
  SideBarWrapper,
} from "@/styles/GlobalStyle";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <BoxFlexColumn>
        <BoxImage
          sx={{
            padding: "30px",
            paddingLeft: 0,
          }}
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
            alt=""
          />
        </BoxImage>
        <SideBarMenuItem className="active">
          <BoxFlex>
            <BoxImage
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg"
                alt=""
              />
            </BoxImage>
            <Typography variant="subtitle1" fontWeight={600}>
              Học
            </Typography>
          </BoxFlex>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <BoxFlex>
            <BoxImage
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/5187f6694476a769d4a4e28149867e3e.svg"
                alt=""
              />
            </BoxImage>
            <Typography variant="subtitle1" fontWeight={600}>
              Luyện tập
            </Typography>
          </BoxFlex>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <BoxFlex>
            <BoxImage
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg"
                alt=""
              />
            </BoxImage>
            <Typography variant="subtitle1" fontWeight={600}>
              Bảng xếp hạng
            </Typography>
          </BoxFlex>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <BoxFlex>
            <BoxImage
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg"
                alt=""
              />
            </BoxImage>
            <Typography variant="subtitle1" fontWeight={600}>
              Nhiệm vụ
            </Typography>
          </BoxFlex>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <BoxFlex>
            <BoxImage
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg"
                alt=""
              />
            </BoxImage>
            <Typography variant="subtitle1" fontWeight={600}>
              Cửa hàng
            </Typography>
          </BoxFlex>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <BoxFlex>
            <BoxImage
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg"
                alt=""
              />
            </BoxImage>
            <Typography variant="subtitle1" fontWeight={600}>
              Xem thêm
            </Typography>
          </BoxFlex>
        </SideBarMenuItem>
      </BoxFlexColumn>
    </SideBarWrapper>
  );
};

export default SideBar;
