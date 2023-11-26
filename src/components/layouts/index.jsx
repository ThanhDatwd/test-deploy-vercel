/* eslint-disable react/prop-types */
import { Box, Container } from '@mui/material'
import SideBar from '../SideBar'

export default function Layout({children}) {
  return (
    <Box>
     <SideBar />
      <Box sx={{ width: "83.333333%", position: "absolute", right: 0 }}>
        <Container>
            {children}
        </Container>
      </Box>
    </Box>
  )
}
