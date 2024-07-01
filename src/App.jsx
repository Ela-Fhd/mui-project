import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Authentication from "./page/authentication/Authentication";
import Database from "./page/database/Database";
import Storage from "./page/storage/Storage";
import Hoisting from "./page/hoisting/Hoisting";
import FunctionPage from "./page/function/Function";
import MachinLearning from "./page/machinLearning/MachinLearning";
import { ThemeProvider } from "@emotion/react";
import { dashboardTheme } from "./dashboardTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={dashboardTheme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="authentication" element={<Authentication />} />
            <Route path="database" element={<Database />} />
            <Route path="storage" element={<Storage />} />
            <Route path="hoisting" element={<Hoisting />} />
            <Route path="function" element={<FunctionPage />} />
            <Route path="machinLearning" element={<MachinLearning />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
