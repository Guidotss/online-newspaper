import { Button, Container, Grid, Image, Input, Link, Spacer, Text } from "@nextui-org/react"
import { NavLink, useNavigate } from "react-router-dom"
import { Formik,Form } from 'formik';
import { AuthLayOut } from "../../layouts"
import { useAuth } from '../../hooks'
import { useEffect } from "react";


export const FormLogin = () => {

  const { startLogin,status } = useAuth();
  const navigate = useNavigate();

  return (
    
      <AuthLayOut title="Login" borderSize="550px" >
        <Formik
          initialValues={{email:'',password:''}}
          onSubmit={({email,password}) => {
            startLogin(email,password)
          }}
        >

          {({values,handleChange, handleBlur,handleSubmit}) => (
            <>
              <Form>
                <Grid.Container gap={2} justify="center">
                  <Spacer y={1}/>

                  <Grid xs={12} sm={12} justify="center">
                    <Input 
                      labelPlaceholder="Email" 
                      size="xl" 
                      color="secondary" 
                      width="405px" 
                      name="email"
                      onChange={ handleChange }
                      value={ values.email }
                      autoComplete="on"
                    />
                  </Grid>
                  <Spacer y={1}/>
                  <Grid xs={12} sm={12} justify="center">
                    <Input.Password 
                      labelPlaceholder="Password" 
                      size="xl" color="secondary" 
                      width="400px" 
                      name="password"
                      onChange={ handleChange } 
                      value={ values.password }
                    />
                  </Grid>

                  <Spacer y={1}/>
                  <Grid xs={12} sm={12} justify="center">
                    <Button color="gradient" ghost shadow css={{width:'400px', height:'50px', marginBottom:'70px'}} type="submit">Login</Button>
                  </Grid>
                </Grid.Container>
              </Form>
              <Container css={{textAlign:'center', marginBottom:'80px'}}>
                <Link as={NavLink} to="/auth/register">
                  <Text size={20}>Don't have an account?</Text>
                </Link>
                <Spacer y={0.5}/>
                <Link as={NavLink} to='/auth/register'>
                  <Text size={20} color="secondary">Register</Text>
                </Link>
                <Spacer y={0.5}/>
                <Link as={NavLink} to='/journal'>
                  <Text size={20} color="secondary">Continue as guest</Text>
                </Link>
              </Container>
            </>
          )}
        </Formik>
      </AuthLayOut>
      
   
  )
}
