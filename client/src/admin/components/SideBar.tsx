import { FC } from "react"
import { Box, Drawer, Divider } from '@mui/material';
import { Text } from "@nextui-org/react";
import { useUI } from "../../hooks";


export const SideBar:FC = () => {

  const { IsDrawerOpen,OnToggleDrawer } = useUI();

  return (
    <Drawer
      anchor="left" 
      open={ IsDrawerOpen }
      onClose={ OnToggleDrawer }
      variant="temporary"      
    >
        <Box sx={{width:'240px' }}>
          <Box sx={{ p: 2 }}>
            <Text h4 color="black">
                Sidebar
            </Text>
            <Divider/>
          </Box>
        </Box>
    </Drawer>
  )
}