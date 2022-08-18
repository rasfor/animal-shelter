import React from 'react';
import { useNavigate} from 'react-router-dom';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = (props) => {

  const navigate = useNavigate();

  const onAddNewAnimal = () => {
    navigate('/newanimal');
  }

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-right'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn onClick={onAddNewAnimal}>Add new animal</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
        <br />
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer