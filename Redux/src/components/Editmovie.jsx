import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Getmovie, Updatemovie } from "../service/Action/Addmovie";
import { useNavigate, useParams } from "react-router";

const EditMovie = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

const movies = useSelector((state) => state.Movies);
  const initialState = {
    id: "",
    title: "",
    description: "",
    image: "",
    date: "",
    genre: "",
    category: "",
    rating: "",
  };

  const [form, setform] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(Updatemovie(form));

    navigate("/");
  };

  useEffect(() => {
    dispatch(Getmovie());
  }, [dispatch]);

  useEffect(() => {

    if (movies.length > 0) {

      const singleMovie = movies.find((m) => m.id === id);

      if (singleMovie) {
        setform(singleMovie);
      }

    }

  }, [id, movies]);

  return (
    <>
      <Form className="mt-3" onSubmit={handlesubmit}>

        <Form.Group className="mt-3">
          <Form.Control
            name="title"
            value={form.title}
            type="text"
            placeholder="Enter movie title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            name="description"
            value={form.description}
            type="text"
            placeholder="Enter movie description"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            name="image"
            value={form.image}
            type="url"
            placeholder="Enter image url"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            name="date"
            value={form.date}
            type="date"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            name="genre"
            value={form.genre}
            type="text"
            placeholder="Enter genre"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Select Category</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Hollywood">Hollywood</option>
            <option value="South Indian">South Indian</option>
            <option value="Gujarati">Gujarati</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Select
            name="rating"
            value={form.rating}
            onChange={handleChange}
          >
            <option>Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="mt-3">
          Update Movie
        </Button>

      </Form>
    </>
  );
};

export default EditMovie;