<<<<<<< HEAD
import { Button, Table ,TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";
=======

import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';
>>>>>>> 6b5dfd9015e0f3fb8b12de1e31100e8dd84cbb32

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;
    
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
<<<<<<< HEAD
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
        
=======
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
>>>>>>> 6b5dfd9015e0f3fb8b12de1e31100e8dd84cbb32
        </>
    )
}

export default Categories;