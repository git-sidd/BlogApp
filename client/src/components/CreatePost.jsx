import React, { useEffect, useState } from "react";
import Navbar from "./Screens/Navbar";
import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const initialPost = {
  username: "",
  title: "",
  description: "",
  category: "",
  picture: "",
  createdDate: new Date(),
};
const CreatePost = ({ setIsAuthenticated }) => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const location = useLocation();
 
  const navigate=useNavigate();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("file", file);

        const response = await axios.post(
          "http://localhost:8000/api/v1/imageUpload",
          data
        );
        

        setPost((prev) => ({
          ...prev,
          picture: response.data.url,
        }));
       
      }
    };
    getImage();
  }, [file]);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  useEffect(
    () =>
      setPost((prevPost) => ({
        ...prevPost,
        category: location.search?.split("=")[1] || "all",
       
      })),
    [ location.search]
  );

  const submitHandler = async (e) => {
    e.preventDefault(); 
    
    await axios
      .post("http://localhost:8000/api/v1/createPost", post,{
        withCredentials: true,
      })
      .then((response) => {
        
        toast.success(response.data.message || "Post created Successfully!!");
        setPost({initialPost });
        navigate("/")
      })
      .catch((error) => {
        
        toast.error(error.response.data.message || "Failed to create Blog");
      });

  };

  const bannerimg = "/Images/createblog.jpeg";
  return (
    <div>
      <div className="flex flex-col -space-y-11">
        <Navbar setIsAuthenticated={setIsAuthenticated} />
        <div className=" px-14">
          <div>
            {" "}
            <img
              src={ post.picture||bannerimg}
              alt="blogImage"
              className="w-full object-cover md:object-cover  md:h-[70vh]  "
            />
          </div>
          <form onSubmit={submitHandler} >
            <div className="flex flex-row justify-between items-center gap-4 mt-4">
              <div>
                <label htmlFor="fileInput">
                  <AddCircle
                    fontSize="large"
                    className="text-red-700 cursor-pointer"
                  />
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full p-2 outline-red-700 outline-double  rounded-lg "
                onChange={handleChange}
              />

              <Button
                variant="contained"
                type="submit"
                color="error"
                
              >
                Publish
              </Button>
            </div>
            <textarea
              name="description"
              className="w-full mt-6 h-40 p-2 outline-red-700 outline-double rounded-lg"
              placeholder="Blog Content....."
              id=""
              onChange={handleChange}
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
