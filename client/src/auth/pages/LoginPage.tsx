import { Grid, Image, Text } from "@nextui-org/react"
import { FC } from "react"
import { Form } from "../components"
import './loginPage.css'

export const LoginPage:FC = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6} direction="column" css={{ padding:'$0'}}>
        <img src="../../../assets/loginPicture.jpg" alt="journalPicture.jpg" style={{height:'100vh', opacity:'0.8'}} />
      </Grid>
      <Grid xs={6} direction="column" css={{ padding:'$0'}}>
        <Form/>
      </Grid>
      <div className="triangle"></div>
     
    </Grid.Container>
  )

}