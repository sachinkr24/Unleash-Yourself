
import {Box , TextareaAutosize, Button,styled} from '@mui/material'
import { useState, useContext, useEffect } from 'react'

import { DataContext } from '../../../context/DataProvider'
import { API } from '../../../service/api'
import Comment from './Comment'
const Container = styled(Box)`

margin-top:100px;
display:flex;

`
const Image =styled('img')({
    width:50,
    height:50,
    borderRadius:'50%'
})

const StyledArea = styled(TextareaAutosize)`
height:100px;
width:100%;
margin:0 20px;

`

const initialValues = {
    name:'',
    postId:'',
    comments:'',
    date: new Date()
}

export const Comments = ({post})=>{
    
    const url = 'https://static.thenounproject.com/png/12017-200.png';

    const {account} = useContext(DataContext);

    const[comment,setComment] = useState(initialValues); 
    const[comments,setComments] = useState([]); 
    const[toggle,setToggle] = useState(false);

    useEffect(() => {
        const getData = async () =>{
           let response =  await API.getAllComments(post._id);
           if(response.isSuccess){
             setComments(response.data);
           }
        }
        getData();

    },[post,toggle])
    //on new post id or change in toggle useEffect will be called
    
    const handleChange = (e) => {
        setComment({ ...comment, name : account.username,postId: post._id, comments : e.target.value
        });
    }
     
    const addComment = async (e) =>{
        let response = await  API.newComment(comment);
        if(response.isSuccess){
            setComment(initialValues);
        }
        setToggle(prev => !prev);
    }

    return(
        
        <Box>

            <Container>
               <Image src={url} alt="dp" />
               <StyledArea
               minRows={5}
               placeholder="What's on your mind?"
               value={comment.comments}
               onChange={(e) => handleChange(e)}
               />
               <Button variant='contained' 
               color='primary' 
               size='medium' 
               onClick={(e) => addComment(e)}
               style={{height:40}}>POST</Button>
            </Container>



            <Box>
                {
                    comments && comments.length>0 && comments.map(comment =>(
                        <Comment comment = {comment} setToggle = {setToggle}/>
                    ))
                }
            </Box>


        </Box>
    )
}

export default Comments;