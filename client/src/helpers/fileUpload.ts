import { cloudinaryApi } from '../api'; 

export const fileUpload = async (file: File):Promise<string> => {

    if(!file) throw new Error('No file selected');

    const formData = new FormData();
    formData.append('upload_preset', 'online-newspaper');
    formData.append('file', file);


    try{
        const {data, statusText} = await cloudinaryApi.post('', formData); 

        if(statusText !== 'OK') throw new Error('Error uploading file');

        return data.url; 


    }catch(error){
        console.log(error);
        throw new Error('Error uploading file');
    }
}
