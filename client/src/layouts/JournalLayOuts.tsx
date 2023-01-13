import { Container } from "@nextui-org/react"
import { FC } from "react"
import { Navbar } from "../components"

interface Props{
    children: React.ReactNode
}


export const JournalLayOuts:FC<Props> = ({ children }) => {
  return (
    <> 
        <Container css={{display:'flex'}}>
          <Navbar/>
        </Container>
        { children }

    </>
  )
}