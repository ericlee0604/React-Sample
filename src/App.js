import React, {Suspense, lazy} from "react";
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

const SignPage = lazy(() => import("./sign/signin"));
const SignupPage = lazy(() => import("./sign/signup"));
const LandingPage = lazy(() => import("./landing/Landing"));

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path='' element={<LandingPage />} />
            <Route exact path='/login' element={<SignPage />} />
            <Route exact path='/signup' element={<SignupPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App;

// livescore.com