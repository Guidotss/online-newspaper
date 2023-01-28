import { useEffect } from "react";
import { Container, Grid, Loading } from "@nextui-org/react";
import { Skeleton } from "@mui/material";
import { useJournal } from "../../hooks"
import { News } from '../../interfaces/news';
import { NewsCard } from "./NewsCard";

export const JournalList = () => {

    const { news,startGetnews } = useJournal();

    useEffect(() => {
        startGetnews(); 
    },[]); 

    const { NewsData } = news; 
    
    if(!NewsData) {
      return
    }
    
    

  return (
    <Container>
      <Grid.Container gap={2} justify='center'>
         {
            NewsData.map((news: News) => (
              <Grid xs={12} sm={6} md={4} lg={3}>
                <NewsCard key={news._id} news={news} />
              </Grid>
            ))
         }
      </Grid.Container>
    </Container>

  )
}