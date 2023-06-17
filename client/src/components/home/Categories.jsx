import { Button, Table ,TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`

border: 1px solid rgba(224,224,224,1);
`

const StyledButton = styled(Button)`
margin:20px;
width:85%;
color:#FFF;
background:#6495ED;
`
const Categories = () => {
    return(
        <>
        <Link to={`/create`} style={{textDecoration:'none'}}>
        <StyledButton variant="contained">Create Blog</StyledButton>
        </Link>
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to='/'>
                         All Categories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category=>(
                    <TableRow key = {category.id}>
                    <TableCell>
                        <Link to = {`/?category=${category.type}`}>
                        {category.type}
                        </Link>
                    </TableCell>
                   </TableRow>
                    ))
                }
                
            </TableBody>
        </StyledTable>
        
        </>
    )
}
export default Categories;