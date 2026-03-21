const initialState = {
  Movies: JSON.parse(localStorage.getItem("Movies")) || [],
  Movie: null,
  loading: false,
  error: null,
};

export const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
     case "MOVIE_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "Add_Movie":
      let data = JSON.parse(localStorage.getItem("Movies")) || [];

      data.push(action.payload);

      localStorage.setItem("Movies", JSON.stringify(data));

      return {
        ...state,
        Movies: data,
         loading: false, 
      };
    case "Get_Movie":
      let Movies = JSON.parse(localStorage.getItem("Movies")) || [];

      return {
        ...state,
        Movies: Movies,
         loading: false, 
      };
    case "Delete_Movie":
      let deleteData = state.Movies.filter((m) => m.id !== action.payload);

      localStorage.setItem("Movies", JSON.stringify(deleteData));

      return {
        ...state,
        Movies: deleteData,
         loading: false, 
      };

    case "Update_Movie":
      let updateData = state.Movies.map((m) =>
        m.id === action.payload.id ? action.payload : m,
      );

      localStorage.setItem("Movies", JSON.stringify(updateData));

      return {
        ...state,
        Movies: updateData,
         loading: false, 
      };
     case "MOVIE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
