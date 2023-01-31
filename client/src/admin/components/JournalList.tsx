import { FC, useEffect } from "react";
import { useJournal } from "../../hooks"
import { Container, Grid } from "@nextui-org/react";
import { News } from '../../interfaces/news';
import { NewsCard } from "./NewsCard";
import { CoPresentOutlined } from "@mui/icons-material";

export const JournalList:FC = () => {

    const { news,startGetnews } = useJournal();
    const { NewsData } = news; 
    
    useEffect(() => {

      startGetnews();

    },[NewsData?.length])
  
    if(!NewsData) return null;

  return (
    <Container>
      <Grid.Container gap={2} justify='center'>
         {
            NewsData.map((news: News) => (
              <Grid xs={12} sm={5} md={4} lg={4} key={news._id}>
                <NewsCard news={news} />
              </Grid>
            ))
         }
      </Grid.Container>
    </Container>

  )
}