import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, Button } from '@mui/material';
import { CategoryData } from '../../Config/CategoryData';
import { Link, useSearchParams } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import { IoMdArrowDropdown ,IoMdArrowDropright  } from "react-icons/io";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [catOpen, setCatOpen] = useState(false);

  const handleCategory = () => {
    setCatOpen(!catOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center border border-r-2">
      <div className="p-2 mx-auto">
        <Link to={`/create/?category=${category}`}>
          <Button variant="contained" endIcon={<CreateIcon />}>
            Create Blog
          </Button>
        </Link>
      </div>

      {/* Table for Medium and Large Screens */}
      <div className="hidden md:table lg:table w-full">
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <p className="font-semibold cursor-pointer"> Categories</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CategoryData.map((category) => (
            <TableRow key={category.id}>
              <TableCell align="center">
                <Link
                  className="font-semibold"
                 to={category.name.toLowerCase() === "all" ? "/" : `/?category=${category.name.toLowerCase()}`}
                >
                  {category.name}
                </Link>
              </TableCell>
              <hr />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>

      {/* Table for Mobile Screens */}
          <div className="block md:hidden lg:hidden w-full">
          <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <p className="font-semibold cursor-pointer flex flex-row justify-center items-center gap-4" onClick={handleCategory}>
                All Categories <span className='text-lg'>{catOpen?<IoMdArrowDropdown  /> :<IoMdArrowDropright  /> }</span>
              </p>
            </TableCell>
          </TableRow>
        </TableHead>

        {catOpen && (
          <TableBody>
            {CategoryData.map((category) => (
              <TableRow key={category.id}>
                <TableCell align="center">
                  <Link
                    className="font-semibold"
                    to={`/?category=${category.name.toLowerCase()}`}
                  >
                    {category.name}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
          </div>
    </div>
  );
};

export default Categories;
