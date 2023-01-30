import { FC } from "react";
import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { News } from "../../interfaces/news";
import './card.css'; 
import { useUI } from "../../hooks";



interface Props {
  news: News;
}

export const NewsCard:FC<Props> = ({ news }) => {

  const { onOpenModal } = useUI();



  return (
    <Grid>
        <Card className="card" css={{w:'100%', height:'300px'}} isPressable>
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
                  <Text h5 color="#9E9E9E" transform="uppercase" >{news.category}</Text>
                </Col>
              </Row>
              <Row justify="flex-end">
                  <Button flat auto rounded css={{color:'#94f9f0', bg:'#94f9f026'}} onPress={onOpenModal}>  
                    <Text css={{color:'inherit'}} size={12} weight='bold' transform="uppercase">
                      Editar
                    </Text>
                  </Button>
              </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}