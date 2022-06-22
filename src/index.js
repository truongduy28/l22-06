import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Documents from "./components/Documents/Documents";
import Document from "./components/Document/Document";
import Student from "./components/Student/Student";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Documents />}></Route>
          <Route path=":id" element={<Document />}></Route>
          <Route path="/student" element={<Student />}></Route>

          <Route path="student" element={<p>student</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
