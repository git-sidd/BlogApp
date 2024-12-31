import React from 'react'
import { Table,TableHead,TableBody,TableCell,TableRow ,Button} from '@mui/material'
import { CategoryData } from '../../Config/CategoryData'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
  <div className='flex flex-col justify-center items-start  border border-r-2'>
     <div className='p-2 mx-auto'>
     <Link to={"/create"}><Button variant="contained"  >Create Blog</Button></Link>
     </div>

      <Table className=''>
        <TableHead>
            <TableRow>
                <TableCell align='center'>
                    All Categories
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                CategoryData.map(category=>(
                    <TableRow id={category.id}>
                        <TableCell align='center'>{category.name}</TableCell>
                    </TableRow>
                ))
            }
            
        </TableBody>
      </Table>
    </div>
  )
}

export default Categories
