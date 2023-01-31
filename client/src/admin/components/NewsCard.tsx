import { FC } from "react";
import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { News } from "../../interfaces/news";
import './card.css'; 
import { useJournal, useUI } from "../../hooks";



interface Props {
  news: News;
}

export const NewsCard:FC<Props> = ({ news }) => {

  const { onOpenModal } = useUI();
  const { onDeleteNews } = useJournal();


  return (
    <Grid>
        <Card className="card" css={{w:'100%', height:'400px', width:'350px'}} isPressable>
            <Card.Header css={{marginBottom:'-20px'}}>
                <Col>
                  <Text h4 color="#9E9E9E" >{news.title}</Text>
                </Col>
            </Card.Header>
            <Card.Body>
              <Card.Image 
                src={news.image}
                objectFit="cover"
                width="100%"
                height="100%"
                css={{borderRadius:2}}
              />
            </Card.Body>
            <Card.Footer 
              isBlurred 
              css={{
                    position:'absolute', 
                    bgBlur:'#0f111466', 
                    borderTop:'$borderWeights$light solid $gray800', 
                    bottom:0,   
                    zIndex:1
                }}
            >
              <Row>
                <Col>
                  <Text h5 color="#949494" transform="uppercase" >{news.category}</Text>
                </Col>
              </Row>
              <Row justify="space-between">
                  <Col>
                    <Button bordered auto color="warning" onPress={() => onOpenModal(news._id)}>  
                      <Text css={{color:'inherit'}} size={12} weight='bold' transform="uppercase">
                        Editar
                      </Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button bordered auto color="error" css={{marginLeft:10}} onPress={() => onDeleteNews(news._id)}>
                      <Text size={12} weight='bold' transform="uppercase">
                        Eliminar
                      </Text>
                    </Button>
                  </Col>
              </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}