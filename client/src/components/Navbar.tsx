import { FC, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Navbar as NextNavBar, Text, Image, Container, Spacer, Button, Link, useTheme, Grid } from '@nextui-org/react';
import { useAuth } from "../hooks";
import { NavBarAuthButton } from "./NavBarAuthButton";


export const Navbar:FC = () => {

  const { pathname } = useLocation();
  const { startLogout }  = useAuth(); 
  const navigate = useNavigate();




  return (
    <NextNavBar isBordered variant={ "sticky" } css={{position:'relative'}}>

      <NextNavBar.Brand css={{border:'solid #CBB26A 2px',borderRadius:4, padding:'$5', height:60}}>
        <Image
            src="../../../assets/journalLogo.png"
            alt="JournalLogo"
            width={30}
        />
        <Text size={30} css={{color:'#CBB26A', marginLeft:5}}>JOURNAL</Text>
      </NextNavBar.Brand>

      <NextNavBar.Content  enableCursorHighlight activeColor="error" hideIn="xs" variant="highlight-solid-rounded" >

        <NextNavBar.Link to="/journal" as={ NavLink } isActive={ pathname === '/journal' } className="link">
            <Text size={20}>
              Home
            </Text>
        </NextNavBar.Link>

        <NextNavBar.Link to="/journal/sports" as={ NavLink } isActive={pathname === '/journal/sports'}>
          <Text size={20}>
            Sports
          </Text>
        </NextNavBar.Link>

        <NextNavBar.Link to="/journal/politics" as={ NavLink } isActive={ pathname === '/journal/politics' }>
            <Text size={20}>
              Politics
            </Text>
        </NextNavBar.Link>

        <NextNavBar.Link to="/journal/tech" as={ NavLink } isActive={ pathname === '/journal/tech' }>
          <Text size={20}>
            Tech
          </Text>
        </NextNavBar.Link>

        <NextNavBar.Link to="/journal/books-arts" as={ NavLink } isActive={ pathname === '/journal/books-arts' }>
          <Text size={20}>
            Books & Arts
          </Text>
        </NextNavBar.Link>
      </NextNavBar.Content>

      <NextNavBar.Content hideIn="sm">
          <NavBarAuthButton/>
      </NextNavBar.Content>

    </NextNavBar>
  )
}