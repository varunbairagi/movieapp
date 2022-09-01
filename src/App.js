import React, { useContext } from "react";
import Movie from "./components/Movie";
import ShowMore from "./components/ShowMore";
import { contextApp } from "./Context";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const { data, setName, Name } = useContext(contextApp);

  const value = (name) => {
    setName(name);
    console.log(Name);
  };

  return (
    <>
      <div className="main">
        <Header getV={value} value={Name} />
        <div className="cont">
          <Routes>
            <Route
              exact
              path="/"
              element={data?.map((ig, i) => (
                <Movie key={i} resp={ig} id={i} />
              ))}
            />
            <Route exact path="/:id" element={<ShowMore />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
