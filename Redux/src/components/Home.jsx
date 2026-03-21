import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { TiEdit } from "react-icons/ti";
import { IoTrash } from "react-icons/io5";
import { useNavigate } from "react-router";
// import { Getmovie } from "../service/Action/Addmovie";
import { DeleteMovieAsync, getAllMovieAsync } from "../service/Action/Addmovie";

const Home = () => {
  const { loading,Movies , error } = useSelector((state) => state);
  
const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllMovieAsync());
  }, [dispatch]);

  

  const handledelete = (id) => {
   dispatch(DeleteMovieAsync(id));
  };

  const handleEdit = (id) => {
    navigate(`/editmovie/${id}`);
  };

  // useEffect(() => {
  //   dispatch(Getmovie());
  // }, [dispatch]);

  return (
    <>
     {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {Movies.length === 0 ? (
        <h4 className="text-center mt-4">Movie Not Found</h4>
      ) : (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Date</th>
              <th>Genre</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {Movies.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.title}</td>
                <td>{m.description}</td>
                <td>
                  <img 
                    src={m.image} 
                    width="80" 
                    alt="movie"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/80")}
                  />
                </td>
                <td>{m.date}</td>
                <td>{m.genre}</td>
                <td>{m.category}</td>
                <td>{m.rating}</td>
                <td colSpan={2}>
                 <button 
                    onClick={() => handleEdit(m.id)} 
                  >
                    <TiEdit />
                  </button>

                  <button onClick={() => handledelete(m.id)}>
                    <IoTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Home;