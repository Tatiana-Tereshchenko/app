import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CustomLoader from "./components/CustomLoader/CustomLoader";
import {Tab} from "./components/Tab";
import tabsData from "./Tabs.json";
import { Container, ItemBox, Tittle } from "./App.styled";


const App = () => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
      }, 2000); 
    }, []);
  
  return appLoading ? (
    <CustomLoader />
  ) : (
    <Container>
      <ItemBox>
        {tabsData.map((tab) => (
          <li key={tab.id}>
            <Tittle to={`/${tab.id}`}>{tab.title}</Tittle>
          </li>
        ))}
      </ItemBox>
      <Routes>
        <Route path="/" element={<Navigate to="/dummyTable" />} />
        <Route
          path="/dummyTable"
          element={<Tab tabs={tabsData} tabId="dummyTable" />}
        />
        {tabsData.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={<Tab tabId={tab.id} tabs={tabsData} />}
          />
        ))}
      </Routes>
    </Container>
  );
};

export default App;


