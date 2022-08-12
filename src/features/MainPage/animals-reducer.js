import { animalsApi } from "../../api/api";

const GET_ALL_ANIMALS = 'animalsReducer/GET_ALL_ANIMALS';

const initialState = {
  animals: []
}

const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ANIMALS: {
      return {
        ...state,
        animals: action.animals
      }
    }
    default:
      return state
  }
}

const getAllAnimalsActionCreator = (animals) => {
  return {
    type: GET_ALL_ANIMALS,
    animals
  }
}

export const getAllAnimals = () => {
  return async (dispacth) => {
    const response = await animalsApi.getAllAnimals();
    if (response.data !== null)
      dispacth(getAllAnimalsActionCreator(response.data));
  }
}

export default animalReducer;