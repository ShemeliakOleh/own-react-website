import {
  ADD_FILM_ACTION,
  EDIT_FILM_ACTION,
  REMOVE_FILM_ACTION,
} from "../actions/data-actions";
import { useReducer } from "react";
const initialState = {
  Films: {
    1: {
      name: "Name1",
      firstProp: "firstprop1",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 2,
      actors: [4],
    },
    2: {
      name: "Name2",
      firstProp: "firstprop12",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 1,
      actors: [2, 3],
    },
    3: {
      name: "Name3",
      firstProp: "firstprop1",
      secondProp: "secondprop53",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 1,
      actors: [1, 3],
    },
    4: {
      name: "Name4",
      firstProp: "firstprop1",
      secondProp: "newprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 3,
      actors: [1],
    },
    5: {
      name: "Name5",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 2,
      actors: [4],
    },
    6: {
      name: "Name6",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 4,
      actors: [1, 3],
    },
    7: {
      name: "Name7",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 2,
      actors: [1, 2, 4],
    },
    8: {
      name: "Name8",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 3,
      actors: [1],
    },
    9: {
      name: "Name9",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 3,
      actors: [2, 3],
    },
    10: {
      name: "Name10",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      company: 4,
      actors: [4],
    },
  },
  Companies: {
    1: { name: "OneCat1", products: [3, 2] },
    2: { name: "OneCat2", products: [1, 7, 5] },
    3: { name: "OneCat3", products: [4, 8, 9] },
    4: { name: "OneCat4", products: [6, 10] },
  },
  Actors: {
    1: {
      name: "ManyCat1",
      films: [3, 4, 8, 7, 6],
    },
    2: {
      name: "ManyCat2",
      films: [7, 2, 9],
    },
    3: {
      name: "ManyCat3",
      films: [9, 3, 2, 6],
    },
    4: {
      name: "ManyCat4",
      films: [7, 5, 1, 10],
    },
  },
};

const addFilm = (state, payload) => {
  const { films, companies, actors } = state;
  films[Object.keys(films).length + 1] = payload.film;
  companies[payload.film.company].products.push(Object.keys(films).length);
  payload.film.actors.forEach((x) =>
    actors[x].films.push(Object.keys(films).length)
  );
  return { ...state };
};
const editFilm = (state, payload) => {
  const { films, companies, actors } = state;
  const { newFilm } = payload;
  const filmId = parseInt(payload.filmId);

  for (let i = 0; i < companies[films[filmId].company].products.length; ++i) {
    if (companies[films[filmId].company].products[i] === filmId) {
      companies[films[filmId].company].products.splice(i, 1);
      companies[newFilm.company].products.push(filmId);
    }
  }
  for (let i of Object.keys(actors)) {
    if (
      films[filmId].actors.includes(parseInt(i)) &&
      !newFilm.actors.includes(parseInt(i))
    ) {
      for (let j = 0; j < actors[parseInt(i)].films.length; ++j) {
        if (actor[parseInt(i)].films[j] === filmId) {
          actors[parseInt(i)].films.splice(j, 1);
        }
      }
    } else if (
      !films[filmId].actors.includes(parseInt(i)) &&
      newFilm.actors.includes(parseInt(i))
    ) {
      actors[parseInt(i)].films.push(filmId);
    }
  }
  films[filmId] = newFilm;
  return { ...state };
};
const removeFilm = (state, payload) => {
  delete state.films[payload.filmId];
  for (const key of Object.keys(state.companies)) {
    for (let i = 0; i < state.companies[key].products.length; ++i) {
      if (state.companies[key].products[i] === parseInt(payload.filmId)) {
        state.companies[key].products.splice(i, 1);
      }
    }
  }
  for (const key of Object.keys(state.actors)) {
    for (let i = 0; i < state.actors[key].films.length; ++i) {
      if (state.actors[key].films[i] === parseInt(payload.filmId)) {
        state.actors[key].films.splice(i, 1);
      }
    }
  }
  return { ...state };
};

const dataStorageReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FILM_ACTION:
      return addFilm(state, payload);
    case EDIT_FILM_ACTION:
      return editFilm(state, payload);
    case REMOVE_FILM_ACTION:
      return removeFilm(state, payload);
    default:
      return state;
  }
};
const useDataStorage = () => useReducer(dataStorageReducer, initialState);
export default useDataStorage;
