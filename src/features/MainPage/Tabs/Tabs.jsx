import React, { useState } from 'react';
import { connect } from "react-redux";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import AnimasTable from '../AnimalsTable/AnimalsTable';
import { filterAnimals } from '../animals-reducer';

const ALL = 'ALL';
const CAT = 'CAT';
const DOG = 'DOG';
const ETC = 'ETC';
const HAM = 'HAM';

const Tabs = (props) => {
  const [basicActive, setBasicActive] = useState(ALL);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
    props.filterAnimals(value);
  };

  return (
    <>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick(ALL)} active={basicActive === ALL}>
            Все животные
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick(CAT)} active={basicActive === CAT}>
            Котятки
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick(DOG)} active={basicActive === DOG}>
            Собачки
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick(HAM)} active={basicActive === HAM}>
            Хомячки
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick(ETC)} active={basicActive === ETC}>
            Другие
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <AnimasTable animals={props.animals} />
      </MDBTabsContent>
    </>
  );
}

const TabsContainer = (props) => {
  return (
    <Tabs {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    animals: state.allAnimals.animals
  }
}

export default connect(mapStateToProps, { filterAnimals })(TabsContainer);