import { Container, Text } from "@nextui-org/react"
import { FC } from "react"


interface Props{
    children:React.ReactNode;
    title:string;
    borderSize:string
    titleMargin?:string
}

export const AuthLayOut:FC<Props> = ({ children,title,borderSize, titleMargin="0px" }) => {
  return (
    <Container css={{padding:'10px'}}>
        <Container css={{borderRadius:'$base', border:'solid 2px #DF84B5', width:`${ borderSize }`, marginTop:10}}>
            <Text h2 css={{textAlign:"center", marginTop:'50px', marginLeft:`${ titleMargin }`, letterSpacing:3}}>{ title }</Text> 
            { children }
        </Container>
    </Container>
  )
}