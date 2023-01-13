import { FC } from "react"
import { Grid, Input } from "@nextui-org/react"
import { AuthLayOut } from "../../layouts"
import { RegisterForm } from "../components";


export const RegisterPage:FC = () => {
  return (
    <AuthLayOut title="Register" borderSize="80vw" titleMargin="100px">
      <Grid.Container justify="center">
          <Grid xs={12} sm={12} justify="center">
            <img src="../../assets/Stuck-at-Home-Imagination.png" style={{height:'250px',marginTop:'-90px'}}/>
            <RegisterForm/>
            <img src="../../assets/Stuck-at-Home.png" style={{height:'250px', marginTop:'290px'}}/>
            <img src="../../assets/Stuck-at-Home-Sitting-On-Floor.png" style={{height:'250px', marginTop:'290px', position:'absolute', left:'170px'}}/>
          </Grid>
      </Grid.Container>
    </AuthLayOut>
    
  )
}