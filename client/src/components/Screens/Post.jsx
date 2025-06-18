import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Post = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const url = category
          ? `http://localhost:8000/api/v1/getblog?category=${category}`
          : `http://localhost:8000/api/v1/getblog`;

        const response = await axios.get(url);
        setBlogs(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [category]);

  if (loading) return <p className="text-center mt-10 text-blue-300">Loading blogs...</p>;
  if (error) return <p className="text-center mt-10 text-red-400">No Blogs To Show</p>;

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      <h2 className="text-4xl font-bold mb-8 text-black">
        Blogs {category && <span className="text-blue-400">- {category}</span>}
      </h2>

      {/* Blog Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-blue-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-700"
          >
            {blog.picture && (
              <img
                src={blog.picture}
                alt="Blog"
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-4 flex flex-col justify-between h-[150px]">
              <h3 className="text-lg font-semibold mb-4 text-blue-800 line-clamp-2">{blog.title}</h3>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-lg transition-all"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="bg-blue-950 text-white rounded-xl p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-200">{selectedBlog.title}</h2>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-blue-400 hover:text-white text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <p className="mb-2 text-sm text-blue-300"><strong>Author ID:</strong> {selectedBlog.user}</p>
            <p className="mb-2 text-blue-300"><strong>Category:</strong> {selectedBlog.category}</p>
            <p className="mb-4 text-blue-100">{selectedBlog.description}</p>
            {selectedBlog.picture && (
              <img
                src={selectedBlog.picture}
                alt="Blog"
                className="w-full rounded-lg mt-4"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
