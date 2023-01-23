import { FC } from "react"
import { Container } from '@nextui-org/react';
import { SideBar } from '../components/SideBar';
import { NavBar } from "../components/NavBar";
import { useLocation } from "react-router-dom";

interface Props {
    children: JSX.Element | JSX.Element[]
}

const drawerWidth = 240;



export const AdminLayOut:FC<Props> = ({ children }) => {

  const { pathname } = useLocation(); 
  const urlName:unknown = pathname.split('/').pop()

  type Titles = {
    [key: string]: string
  }

  const titles:Titles = {
    'newNews': 'Create a news',
    'edit': 'Edit a news',
    'delete': 'Delete a news',
    'admin': 'Admin'
  }

  const checkTitle = Object.keys(titles).includes(urlName as string)
  const title = titles[urlName as unknown as string]; 

  return (
    <>
      <Container>
          <NavBar title={checkTitle ? title : 'Admin panel'}/>
          <SideBar/>
      </Container>
      <Container>
          {children}
      </Container>
    </>
  )
}