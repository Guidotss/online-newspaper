import { FC, useEffect } from "react"
import { useJournal } from "../../hooks";
import { JournalLayOuts } from "../../layouts"

export const HomePage:FC = () => {

  const { loading, errorMessage, startGetnews } = useJournal();

  
  
  useEffect(() => { 
    startGetnews();
  },[]);


  return (
    <JournalLayOuts>
      <div>HomePage</div>
    </JournalLayOuts>
  )
}   