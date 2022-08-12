import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const lineColor = {
  CAT: "table-primary",
  DOG: "table-secondary",
  HAM: "table-success",
  ETC: "table-light"
}

const AnimalTypes = {
  CAT: "Котёнок",
  DOG: "Собачка",
  HAM: "Хомячок",
  ETC: "Другое"
}

const AnimalSexs = {
  W: "Девочка",
  M: "Мальчик"
}

const AnimasTable = (props) => {
  let tableLines = props.animals.map((animal) => {
    return (
      <tr key={animal.ID} className={lineColor[animal.AnimalType_ID]}>
        <th scope='row'>{AnimalTypes[animal.AnimalType_ID]}</th>
        <td>{animal.AnimalName}</td>
        <td>{animal.City}</td>
        <td>{AnimalSexs[animal.Sex_ID]}</td>
      </tr>
    )
  })

  return (
    <MDBTable striped hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>Type</th>
          <th scope='col'>Name</th>
          <th scope='col'>City</th>
          <th scope='col'>Sex</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {tableLines}
      </MDBTableBody>
    </MDBTable>
  )
}

export default AnimasTable;