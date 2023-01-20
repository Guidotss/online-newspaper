import { Grid, Image, Text } from "@nextui-org/react"
import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks"
import { FormLogin } from "../components"
import './loginPage.css'

export const LoginPage:FC = () => {

  const { status, errorMessage } = useAuth();
  const navigate = useNavigate();

  console.log({status})

  useEffect(() => {
    (status === 'authenticated') && navigate('/journal')
  },[status]);

  return (

    <Grid.Container gap={2} justify="center">
      <Grid xs={6} direction="column" css={{ padding:'$0'}}>
        <img src="../../../assets/loginPicture.jpg" alt="journalPicture.jpg" style={{height:'100vh', opacity:'0.8'}} />
      </Grid>
      <Grid xs={6} direction="column" css={{ padding:'$0'}}>
        <FormLogin/>
      </Grid>
      <div className="triangle"></div>
    </Grid.Container>

  )

}