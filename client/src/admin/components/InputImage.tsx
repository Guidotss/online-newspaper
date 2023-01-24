import { FC, ChangeEvent, useEffect } from "react";
import { useJournal } from "../../hooks";
import { InsertPhotoOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Container, Grid, Loading, Text } from "@nextui-org/react";

export const InputImage: FC = () => {

  const { startUploadImage,imageLoading } = useJournal();
  const UploadFile = (event: ChangeEvent<HTMLInputElement>) => {

    const { target } = event;
    if (target.files) {
      const file = target.files[0];
      startUploadImage(file);
      
    }

  };

  return (
    <>
      <Grid
        xs={6}
        sm={6}
        md={6}
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <input
          accept="image/*"
          id="raised-button-file"
          type="file"
          name="image"
          style={{ display: "none" }}
          onChange={UploadFile}
        />
        
        
        <label htmlFor="raised-button-file">
            <Container css={{ textAlign: "center" }}>
                <Text h5>Upload Image</Text>
                {
                    imageLoading 

                    ?
                        <Loading 
                            color="warning" 
                            size="xl" 
                            type="spinner" 
                        />

                    :
                        <IconButton component="span">
                            <InsertPhotoOutlined sx={{ color: "white", fontSize: "120px" }} />
                        </IconButton>
                }
            </Container>
        </label>        
      </Grid>
    </>
  );
};
