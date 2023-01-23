import { FC } from "react"
import { Link as routerLink } from 'react-router-dom';
import { Link } from '@nextui-org/react';


interface Props {
    route: string,
    title:string
}

export const AdminLink:FC<Props> = ({ route, title }) => {
  return(
    <Link as={routerLink} to={`/admin/${ route }`} css={{ marginLeft:5, fontSize:18, letterSpacing:0, color:'Black' }}>
        { title }
    </Link>
  )
}