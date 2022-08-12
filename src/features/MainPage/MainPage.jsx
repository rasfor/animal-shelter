import React from "react";
import AnimasTable from "./AnimalsTable/AnimalsTable";
import Footer from "./Footer/Footer";
import Tabs from "./Tabs/Tabs";

const MainPage = (props) => {
  return (
    <div>
      <Tabs animals={props.animals} />
      <Footer />
    </div>
  )
}

export default MainPage