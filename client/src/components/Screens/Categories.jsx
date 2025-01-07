import React from 'react'
import { Table,TableHead,TableBody,TableCell,TableRow ,Button} from '@mui/material'
import { CategoryData } from '../../Config/CategoryData'
import {Link,useSearchParams} from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';
import axios from "axios";


const Categories = () => {
    const [searchParams]=useSearchParams();
    const category=searchParams.get('category');

  return (
  <div className='flex flex-col justify-center items-start  border border-r-2'>
     <div className='p-2 mx-auto'>
     <Link to={`/create/?category=${category || 'all'}`}><Button variant="contained" color='error' endIcon={<CreateIcon />} >Create Blog</Button></Link>
     </div>

      <Table className=''>
        <TableHead>
            <TableRow>
                <TableCell  align='center'>
                    <p className='font-semibold cursor-pointer'>All Categories</p>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                CategoryData.map(category=>(
                    <TableRow id={category.id}>
                        <TableCell align='center' ><Link className='font-semibold ' to={`/?category=${category.name.toLowerCase()}`}>{category.name}</Link></TableCell>
                    </TableRow>
                ))
            }
            
        </TableBody>
      </Table>
    </div>
  )
}

export default Categories
