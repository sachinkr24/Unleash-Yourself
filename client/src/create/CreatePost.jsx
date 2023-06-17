import {Box, styled, FormControl, InputBase, Button , TextareaAutosize} from '@mui/material'
import{ AddCircle as Add} from '@mui/icons-material';
import { useState, useEffect } from 'react';
const Container = styled(Box)`

margin: 50px 100px;
`

const StyledForm  = styled(FormControl)`
     margin-top:10px;
     display:flex;
     flex-direction:row;

`
const InputText = styled(InputBase)`

flex:1;
margin: 0px 30px;
font-size:25px;

`

const Textarea = styled(TextareaAutosize)`

width:100%;
margin-top:50px;
font-size:18px;
border:none;

&:focus-visible{
    outline:none;
}

`

const initialPost = {
    title:'',
    description:'',
    picture:'',
    username:'',
    categories:'',
    createdDate : new Date()

}

const Image = styled('img')({
width:'100%',
height:'50vh',
objectFit:'cover'
})
const CreatePost = () =>{
     


    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const[post,setPost]=useState(initialPost);
    const[file,setFile]=useState('');
    useEffect(()=>{
        const getImage = () =>{
          if(file){
            const data = new FormData();
            data.append("name",file.name);
            data.append("file",file);

            //API call to upload img
            post.picture= '' // to add url of image
          }
        }
        getImage();
   // post.categories;

    },[file])

    const handleChange = (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }



    return(    

    <Container>

        <Image src={url}  alt="banner" />

        <StyledForm>

            <label htmlFor="fileInput">
                <Add fontSize='large' color='action'/>
            </label>

            {/*here i am handing file input with icon by adding id fileInput*/}
            <input 
            type='file' 
            id='fileInput'
             style={{display : 'none'}}
             onChange={(e)=>setFile(e.target.files[0])}
             />

            <InputText placeholder='Title' onChange={(e)=>handleChange(e) } name = "title" />
            <Button variant='contained'>Publish</Button>
        </StyledForm>
        
        <Textarea
        minRows={5}
        placeholder="Unleash your thoughts...."
        onChange={(e)=>handleChange(e) } 
        name = "description"
        />
            
     

    </Container>
    )
}

export default CreatePost;