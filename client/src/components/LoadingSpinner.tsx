import { FC } from "react"
import { Loading, Text } from "@nextui-org/react";

export const LoadingSpinner:FC = () => {
  return (
    <Loading size="xl" css={{display: 'flex',marginTop:'45vh'}}>
      <Text h1 size={30}>
        Loading
        <Loading type="points-opacity" css={{marginLeft:'10px'}}/>
      </Text>
    </Loading>
  )
}