import { FC } from "react"
import { Button, Container, Input, Modal, Radio, Row, Text, Textarea } from "@nextui-org/react"
import { Category, TitleRounded } from '@mui/icons-material';
import { InputImage } from './InputImage';
import { useUI } from "../../hooks";
import { Form, Formik } from "formik";

export const AdminModal:FC = () => {

    const { IsModalOpen,onCloseModal } = useUI();

    
const options = {
    sport:'Sport',
    politics:'Politics',
    tech:'Tech',
    booksAndArts:'Books & Arts'
}

  return (
    <Modal 
        open={IsModalOpen} 
        aria-labelledby="edit-news" 
        width="500px"
        onClose={onCloseModal}
    >
        <Modal.Header>
            <Text id="edit-news" b size={18}> EDIT NEWS </Text>
        </Modal.Header>
        <Modal.Body>
            <Formik
                initialValues={{title:'',content:'',category:options.sport.toString()}}
                onSubmit={({title,content,category}) => {console.log({title,content,category})}}
            >
                {({values,handleChange,setFieldValue}) => (
                    <Form>
                        <Input 
                            placeholder="Title" 
                            clearable
                            fullWidth
                            aria-label="edit-title"
                            color="primary"
                            size="lg"
                            bordered
                            contentLeft={<TitleRounded/>}
                            css={{marginBottom:'15px'}}
                            name="title"
                            value={values.title}
                            onChange={ handleChange }
                        />
                        <Textarea
                            placeholder="Content"
                            fullWidth
                            color="primary"
                            aria-label="edit-content"
                            size="lg"
                            bordered
                            minRows={5}
                            css={{marginBottom:'15px'}}
                            name="content"
                            value={values.content}
                            onChange={ handleChange }
                        />
                        <Row justify="space-between">
                            <Radio.Group 
                                label="Choose category"  
                                aria-label="Choose category" 
                                name="category" 
                                onChange={(event) => setFieldValue('category',event)}
                            >
                                <Radio value="sport">Sport</Radio>
                                <Radio value="politics">Politics</Radio>
                                <Radio value="tech">Tech</Radio>
                                <Radio value="books&arts">Books & Arts</Radio>
                                
                            </Radio.Group>
                            <InputImage/>
                        </Row>
                        <Container css={{display:'flex', justifyContent:'center', marginTop:'20px', marginBottom:'10px'}}>
                            <Button auto type="submit" color="warning" size="lg" css={{width:'200px'}}>Edit</Button>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Modal.Body>
    </Modal>
  )
}