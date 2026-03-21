export const loading = () => ({
  type: "MOVIE_LOADING",
});

export const error = (err) => ({
  type: "MOVIE_ERROR",
  payload: err,
});

export const Addmovie = (movie) => {
  return {
    type: "Add_Movie",
    payload: movie,
  };
};

export const Getmovie = () => {
  return {
    type: "Get_Movie",
  };
};

export const Deletemovie = (id) => {
  return {
    type: "Delete_Movie",
    payload: id,
  };
};

export const Updatemovie = (movie) => {
  return {
    type: "Update_Movie",
    payload: movie,
  };
};

export const getAllMovieAsync = () => {
  return (dispatch) => {
    dispatch(loading());

    try {
      setTimeout(() => {
        const data = JSON.parse(localStorage.getItem("Movies")) || [];
        dispatch(Getmovie(data));
      }, 500);
    } catch (err) {
      dispatch(error("Failed to fetch movies"));
    }
  };
};


export const AddMovieAsync = (data) => {
  return (dispatch) => {
    dispatch(loading());

    try {
      setTimeout(() => {
        dispatch(Addmovie(data));
      }, 500);
    } catch {
      dispatch(error("Add failed"));
    }
  };
};


export const DeleteMovieAsync = (id) => {
  return (dispatch) => {
    dispatch(loading());

    try {
      setTimeout(() => {
        dispatch(Deletemovie(id));
      }, 500);
    } catch {
      dispatch(error("Delete failed"));
    }
  };
};



export const UpdateMovieAsync = (data) => {
  return (dispatch) => {
    dispatch(loading());

    try {
      setTimeout(() => {
        dispatch(Updatemovie(data));
      }, 500);
    } catch {
      dispatch(error("Update failed"));
    }
  };
};