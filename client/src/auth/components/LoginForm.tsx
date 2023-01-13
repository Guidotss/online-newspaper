import { Button, Container, Grid, Image, Input, Link, Spacer, Text } from "@nextui-org/react"
import { NavLink } from "react-router-dom"
import { AuthLayOut } from "../../layouts"

export const Form = () => {
  return (
    
      <AuthLayOut title="Login" borderSize="550px" >
        <form>
          <Grid.Container gap={2} justify="center">
            <Spacer y={1}/>
            <Grid xs={12} sm={12} justify="center">
              <Input labelPlaceholder="Email" size="xl" color="secondary" width="405px"/>
            </Grid>
            <Spacer y={1}/>
            <Grid xs={12} sm={12} justify="center">
              <Input.Password labelPlaceholder="Password" size="xl" color="secondary" width="400px"/>
            </Grid>
            <Spacer y={1}/>
            <Grid xs={12} sm={12} justify="center">
              <Button color="gradient" ghost shadow css={{width:'400px', height:'50px', marginBottom:'120px'}}>Login</Button>
            </Grid>
          </Grid.Container>
        </form>
        <Container css={{textAlign:'center', marginBottom:'50px'}}>
          <Link as={NavLink} to="/auth/register">
            <Text size={20}>Don't have an account?</Text>
          </Link>
          <Spacer y={0.5}/>
          <Link as={NavLink} to='/auth/register'>
            <Text size={20} color="secondary">Register</Text>
          </Link>
        </Container>
      </AuthLayOut>
      
   
  )
}
