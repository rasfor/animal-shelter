import React from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import { getAllAnimals } from "./animals-reducer";
import { useEffect } from "react";

const MainPageContainer = (props) => {

  useEffect(() => {
    props.getAllAnimals();
  }, []);

  return (
    <MainPage {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    animals: state.allAnimals.animals
  }
}

export default connect(mapStateToProps, { getAllAnimals })(MainPageContainer); 