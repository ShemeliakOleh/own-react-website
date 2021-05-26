import {
  ADD_ITEM_ACTION,
  EDIT_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
} from "../components/actions/data-actions";
import { useReducer } from "react";
const initialState = {
  mainCategories: {
    1: {
      name: "Name1",
      firstProp: "firstprop1",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 2,
      manyToManyCats: [4],
    },
    2: {
      name: "Name2",
      firstProp: "firstprop12",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 1,
      manyToManyCats: [2, 3],
    },
    3: {
      name: "Name3",
      firstProp: "firstprop1",
      secondProp: "secondprop53",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 1,
      manyToManyCats: [1, 3],
    },
    4: {
      name: "Name4",
      firstProp: "firstprop1",
      secondProp: "newprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 3,
      manyToManyCats: [1],
    },
    5: {
      name: "Name5",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 2,
      manyToManyCats: [4],
    },
    6: {
      name: "Name6",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 4,
      manyToManyCats: [1, 3],
    },
    7: {
      name: "Name7",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 2,
      manyToManyCats: [1, 2, 4],
    },
    8: {
      name: "Name8",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 3,
      manyToManyCats: [1],
    },
    9: {
      name: "Name9",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 3,
      manyToManyCats: [2, 3],
    },
    10: {
      name: "Name10",
      firstProp: "newprop",
      secondProp: "secondprop1",
      thirdProp: "thirdprop3",
      fourthProp: "fourthprop2",
      oneToManyCat: 4,
      manyToManyCats: [4],
    },
  },
  oneToManyCategories: {
    1: { name: "OneCat1", mainCats: [3, 2] },
    2: { name: "OneCat2", mainCats: [1, 7, 5] },
    3: { name: "OneCat3", mainCats: [4, 8, 9] },
    4: { name: "OneCat4", mainCats: [6, 10] },
  },
  manyToManyCategories: {
    1: {
      name: "ManyCat1",
      mainCats: [3, 4, 8, 7, 6],
    },
    2: {
      name: "ManyCat2",
      mainCats: [7, 2, 9],
    },
    3: {
      name: "ManyCat3",
      mainCats: [9, 3, 2, 6],
    },
    4: {
      name: "ManyCat4",
      mainCats: [7, 5, 1, 10],
    },
  },
};

const addValue = (state, payload) => {
  const { mainCategories, oneToManyCategories, manyToManyCategories } = state;
  mainCategories[Object.keys(mainCategories).length + 1] = payload.mainCategory;
  oneToManyCategories[payload.mainCategory.oneToManyCat].mainCats.push(
    Object.keys(mainCategories).length
  );
  payload.mainCategory.manyToManyCats.forEach((x) =>
    manyToManyCategories[x].mainCats.push(Object.keys(mainCats).length)
  );
  return { ...state };
};
const editSmartphone = state;
