import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import generateUniqueId from "generate-unique-id";
import { Addmovie, Getmovie } from "../service/Action/Addmovie";
import { useNavigate } from "react-router";
const AddMovie = () => {
    const navigate=useNavigate();
const dispatch = useDispatch();
    
  const initialState = {
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
    form.id = generateUniqueId({length :6, useLetters:false});
    dispatch(Addmovie(form));
    navigate("/");
  };

  useEffect(()=>{
    dispatch(Getmovie());
  },[]);
  return (
    <>
      <Form className="mt-3" onSubmit={handlesubmit}>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Control
            name="title"
            value={form.title}
            type="text"
            placeholder="Enter the movie title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Control
            name="description"
            value={form.description}
            type="text"
            placeholder="Enter the movie description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Control
            name="image"
            value={form.image}
            type="Url"
            placeholder="Enter image url"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Control
            name="date"
            value={form.date}
            type="date"
            placeholder="Enter the date"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Control
            name="genre"
            value={form.genre}
            type="text"
            placeholder="Enter the Genre"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Select
            aria-label="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>select Movie category</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Hollywood">Hollywood</option>
            <option value="South Indian">South Indian</option>
            <option value="Gujarati"> Gujarati</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Select
            aria-label=""
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
        <Button type="submit" variant="primary" className="mt-3">
          Add Movie
        </Button>
      </Form>
    </>
  );
};

export default AddMovie;
