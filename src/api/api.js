import * as axios from 'axios';

const instanse = axios.create({
  headers: {
    Authorization: 'Basic YWRtaW46bmVrb3Rh'
  }

})

export const animalsApi = {
  getAllAnimals() {
    return instanse.get('/browse/Animals')
  }
}