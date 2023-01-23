import { InsertPhotoOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { Button, Container,  Grid,  Input,  Radio,  Text, Textarea } from "@nextui-org/react"
import { Form, Formik } from "formik"
import { FC, useEffect, useState } from "react"
import { AdminLayOut } from "../layout"


const options = {
  'sport': 'Sport',
  'politics': 'Politics',
  'tech': 'Tech',
  'books&arts': 'Books & Arts'
}

export const CreatePage:FC = () => {

  return (
    <AdminLayOut>
      <Formik
        initialValues={{title:'',content:'',category:options.sport.toString(),image:''}}
        onSubmit={({title,content,category,image}) => console.log({title,content,category,image})}
      >

        {({values,handleChange,setFieldValue}) => (
          <>
          <Form style={{marginTop:'30px'}}>
            <Grid.Container gap={2} css={{border:'solid 1px', borderRadius:'15px', padding:'15px'}}>
              <Grid xs={12} sm={12} md={12}>

                <Input 
                  placeholder="Title" 
                  aria-label="minimum width"
                  css={{width:'100%'}} 
                  onChange={handleChange} 
                  name="title" 
                  value={values.title}
                />
              </Grid>

              <Grid xs={12} sm={12} md={12}>
                <Textarea 
                    placeholder="Content" 
                    aria-label="minimum height"
                    minRows={10} 
                    css={{width:'100%'}} 
                    onChange={handleChange} 
                    name="content" 
                    value={values.content}
                  />
           
              </Grid>
         
                
              <Grid xs={6} sm={6} md={6} css={{display:'flex', flexDirection:'row'}}>

                <Radio.Group label="Choose category"  aria-label="Choose category" name="category" value={values.category} onChange={(event) => setFieldValue('category', event)}>
                    <Radio value="sport">Sport</Radio>
                    <Radio value="politics">Politics</Radio>
                    <Radio value="tech">Tech</Radio>
                    <Radio value="books&arts">Books & Arts</Radio>
                </Radio.Group>

              </Grid>

              <Grid xs={6} sm={6} md={6} css={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                <input accept="image/*"
                  id="raised-button-file"
                  type="file"
                  name="image"
                  style={{display:'none'}}
                  value={values.image}
                  onChange={ handleChange }
                />

              <label htmlFor="raised-button-file">
                  <Container css={{textAlign:'center'}}>
                    <Text h5>Upload Image</Text>
                    <IconButton component="span" >
                      <InsertPhotoOutlined sx={{color:'white', fontSize:'120px'}}/>
                    </IconButton>
                  </Container>
              </label>
              </Grid>

              <Grid xs={12} sm={12} md={12} css={{textAlign:'center', justifyContent:'center'}}>
                <Button type="submit" color="warning" size="lg">
                  <Text color="black" h4 css={{marginTop:'5px'}}>
                    Create
                  </Text>
                </Button>
              </Grid>

            </Grid.Container>
          </Form>
          </>
        )}

      </Formik>
      
      
      
    </AdminLayOut>
  )
}