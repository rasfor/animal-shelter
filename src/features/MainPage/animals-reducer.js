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
      dispacth(getAllAnimalsActionCreator(response.data.value));
  }
}

export const filterAnimals = (animalType) => {
  return async (dispacth) => {
    const response = await animalsApi.getAllAnimals();
    if (response.data !== null) {
      if (animalType === 'ALL') dispacth(getAllAnimalsActionCreator(response.data.value));
      else {
        let filteredData = response.data.value.filter((animal) => animal.AnimalType_ID == animalType)
        dispacth(getAllAnimalsActionCreator(filteredData));
      }

    }
  }
}

export default animalReducer;