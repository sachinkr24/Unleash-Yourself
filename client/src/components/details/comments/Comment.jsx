import { useContext } from "react";

import { Box , Typography,styled} from "@mui/material"
import { Delete } from "@mui/icons-material";
import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";
//whole comment
const Component = styled(Box)`
margin-top:30px;
background : #F5F5F5;
padding :10px;
`
//first box of comment
const Container = styled(Box)`

display:flex;
margin-bootm:6px;

`
//changes in name style
const Name = styled(Typography)`

font-weight:600;
font-size:18px;
margin-right:20px;
`
const StyledDate = styled(Typography)`

color: #878787;
font-size:13px;

`
const DeleteIcon = styled(Delete)`
margin-left :auto;

`


//inside comments.jsx comment has been passed as prop and can be retireved here
const Comment = ({comment, setToggle}) =>{
    const {account} = useContext(DataContext);

    //we need to have await in api call and await requires async function
    const removeComment = async() =>{
    let response = await API.deleteComment(comment._id);
    if(response.isSuccess){
       setToggle(prev=>!prev);
    }

    }
    return(
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>

                {comment.name===account.username && <DeleteIcon onClick={()=>removeComment()}/> }

            </Container>
            <Box>
                <Typography>{comment.comments}</Typography>
            </Box>
        </Component>
    )
}
export default Comment;