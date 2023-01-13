import { FC } from "react"
import { NavLink } from "react-router-dom"
import { Button, Container, Grid, Input, Link, Spacer, Text } from "@nextui-org/react"
import { AuthLayOut } from "../../layouts"

export const RegisterForm:FC = () => {
    return(
        
            <form style={{marginLeft:'100px', marginTop:'20px'}}>
                <Grid.Container>
                     <Spacer y={1}/>
                    <Grid.Container> 
                        <Grid xs={5} md={5} sm={5}>
                            <Input labelPlaceholder="Name" size="xl" color="secondary" width="380px"/>
                        </Grid>
                        <Spacer x={1}/>
                        <Grid xs={5} md={5} sm={5}>
                            <Input labelPlaceholder="Last name" size="xl" color="secondary" width="380px"/>                       
                        </Grid>
                    </Grid.Container>
                    <Spacer y={1.8}/>
                    <Grid.Container>
                        <Grid xs={5} sm={5}>
                            <Input labelPlaceholder="Email" size="xl" color="secondary" width="380px"/>
                        </Grid>
                        <Spacer x={1}/>
                        <Grid xs={5} sm={5}>
                            <Input.Password labelPlaceholder="Password" size="xl" color="secondary" width="380px"/>
                        </Grid>
                    </Grid.Container>
                    <Grid xs={12} sm={12}>
                        <Button color="gradient" ghost shadow css={{width:'520px',height:'50px', marginTop:'50px', marginBottom:"120px"}}>Register</Button> 
                    </Grid>

                </Grid.Container>
                <Container css={{textAlign:'center',position:'absolute',left:'100px', marginBottom:'50px'}}>
                    <Link as={NavLink} to="/auth/login">
                        <Text size={20}>You already have an account</Text>
                    </Link>
                    <Spacer y={0.5}/>
                    <Link as={NavLink} to='/auth/login'>
                        <Text size={20} color="secondary">Login</Text>
                    </Link>
                </Container>
            </form>
        
    )
}