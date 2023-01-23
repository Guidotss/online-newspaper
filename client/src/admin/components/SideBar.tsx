import { FC } from "react"
import { NavLink } from 'react-router-dom';
import { Box, Drawer, Divider, List, ListItem, ListItemIcon } from '@mui/material';
import { Text,Link, Image } from "@nextui-org/react";
import { Add,Edit,Delete,AdminPanelSettings, TrendingUp, Key } from '@mui/icons-material';
import { useUI } from "../../hooks";

const menuitems:string[] = [ "Create news", "Edit news", "Delete news", "Admin dashboard" ];


export const SideBar:FC = () => {

  const { IsDrawerOpen,OnToggleDrawer } = useUI();

  

  return (
    <Drawer
      anchor="left" 
      open={ IsDrawerOpen }
      onClose={ OnToggleDrawer }
      variant="temporary"   
      sx={{'& .MuiDrawer-paper':{ backgroundColor:'#16181A'}}}   
      >
        <Box sx={{width:'240px',background:'#1F0A33', textAlign:'center'}}>
          <Box sx={{ p: 2 }}>
            <Text h4 color="white">
              ADMIN PANEL
            </Text>
          </Box>
        </Box>

        <List>
          {
            menuitems.map((item:string,index:number) => (
              
              <div key={item}>
                
                <ListItem button>
                    <Link 
                      as={NavLink} 
                      to={
                        item === 'Create news' ? '/admin/newNews'
                          : item === 'Edit news' ? '/admin/edit'
                          : item === 'Delete news' ? '/admin/delete'
                          : item === 'Admin dashboard' ? '/admin/adminPanel'
                          : '/'
                      }>
                        <ListItemIcon sx={{marginBottom:'10px',color:'white'}}>
                          {
                            item === "Create news" ? <Add sx={{fontSize:'30px'}}/> :
                            item === "Edit news" ? <Edit sx={{fontSize:'30px'}}/> :
                            item === "Delete news" ? <Delete sx={{fontSize:'30px'}}/> :
                            item === "Admin dashboard" ? <AdminPanelSettings sx={{fontSize:'30px'}}/> :
                            null
                          }
                        </ListItemIcon>
                        <Text h5 color="white">
                          {item}
                        </Text>
                    </Link>    
                </ListItem>
                <Divider/>
              </div>
              
            ))
          }
          <Image
            src="../../../assets/journalLogo.png"
            alt="logo.png"
            width={100}
            css={{margin:'auto',marginTop:'60px'}}
          />
           <Text size={30} css={{color:'#CBB26A', marginLeft:'59px', marginTop:'10px'}}>JOURNAL</Text>
        </List>

    </Drawer>
  )
}
