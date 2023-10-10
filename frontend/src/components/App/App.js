import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import React from 'react';
import mainApi from "../../utils/api/MainApi";
import { MAIN_ROUTE, CONE_ROUTE } from "../../utils/constants/routes";
import ConeForm from "../ConeForm/ConeForm";
import Cone from "../Cone/Cone";

function App() {
  const [coneParams, setConeParams] = React.useState({});
  const navigate = useNavigate();

  const handleConeFormSubmit = ({ height, radius, numberOfSegments }) => {
    return mainApi.getTriangulation({ height, radius, numberOfSegments })
      .then((res) => {
        setConeParams(res)
        navigate(CONE_ROUTE, {replace: true});
      })
  }

  return (
    <div className='app'>
      <main className='content'>
        <Routes>
          <Route
            path={MAIN_ROUTE}
            element={<ConeForm handleConeFormSubmit={handleConeFormSubmit} coneParams={coneParams}/>}
          />
          <Route
            path={CONE_ROUTE}
            element={<Cone coneParams={coneParams}/>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
