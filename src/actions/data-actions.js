const ACTION_GROUP = "DATA_ACTION";
export const ADD_FILM_ACTION = `${ACTION_GROUP}/ADD_FILM`;
export const EDIT_FILM_ACTION = `${ACTION_GROUP}/EDIT_FILM`;
export const REMOVE_FILM_ACTION = `${ACTION_GROUP}/REMOVE_FILM`;

const dataActions = {
  addFilm: (film) => ({
    type: ADD_SMARTPHONE_ACTION,
    payload: { film },
  }),
  editFilm: (filmId, newFilm) => ({
    type: EDIT_FILM_ACTION,
    payload: { filmId, newFilm },
  }),
  removeFilm: (filmId) => ({
    type: REMOVE_SMARTPHONE_ACTION,
    payload: { filmId },
  }),
};

export default dataActions;
