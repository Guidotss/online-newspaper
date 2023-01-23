import { NavLink } from 'react-router-dom';
import { Button, Container, Navbar, Text } from "@nextui-org/react"
import { MenuOutlined } from '@mui/icons-material'; 
import { IconButton } from '@mui/material';
import { useUI } from "../../hooks";
import { FC } from "react";




interface Props {
  title: string;
}

export const NavBar:FC<Props> = ({ title }) => {

    const { OnToggleDrawer,IsDrawerOpen } = useUI();

  return (
    <Container css={{width:`${IsDrawerOpen ? '85%' : '100%'}`}}>
        <Navbar>
            <Navbar.Brand>
              <IconButton onClick={ OnToggleDrawer } sx={{color:'white'}}>
                <MenuOutlined sx={{fontSize:'50px'}}/>
              </IconButton>
            </Navbar.Brand>
            <Text h1 color="white">
              { title }
            </Text>
            <Navbar.Content css={{}}>
              <Navbar.Link as={NavLink} to='/journal'>
                <Text h4 color="white"> 
                  Home
                </Text>
              </Navbar.Link>
            </Navbar.Content>
        </Navbar>
    </Container>
  )
}