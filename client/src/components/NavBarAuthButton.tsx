import { Button, Grid, Image, Text } from "@nextui-org/react";
import { FC } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { Fab, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { AdminComponent } from "./AdminComponent";

export const NavBarAuthButton:FC = () => {

    const navigate = useNavigate();
    const { status,isCeo,isJournalist,startLogout } = useAuth();

    const goToLogin = () => {
        navigate('/auth/login')
      }
      const onRegister = () => {
        navigate('/auth/register')
      }
      
      const onLogout = () => {
        startLogout();
      }

  return (
    <Grid.Container gap={2}>
        {
            (status === 'authenticated') 
            ?
            <Grid xs={ 6 } md={ 6 } sm={ 6 } xl={ 6 }>
                <Button shadow color="gradient" ghost as={NavLink} onPress={ onLogout } size="sm" css={{height:'40px'}}>
                    <Text size={20}>
                        Log Out
                    </Text>
                </Button>
            </Grid>
            :
            <>            
            <Grid xs={ 6 } md={ 6 } sm={ 4 } xl={6}>
                <Button shadow color="gradient" ghost as={NavLink} onPress={ goToLogin } size="sm" css={{height:38}}>
                    <Text size={20}>
                        Login
                    </Text>
                </Button>
            </Grid>
            <Grid xs={ 6 } md={ 6 } sm={ 4 } xl={6}>
                <Button shadow color="gradient" ghost as={NavLink} onPress={ onRegister } size="sm" css={{height:38}}>
                    <Text size={20}>
                        Register
                    </Text>
                </Button>
            </Grid>
            </>
        }
        {   
            (status === 'authenticated' && (isCeo || isJournalist))
            ?                
                <AdminComponent/>
            :
                null

        }
    </Grid.Container>
  )
}