import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Setting up routing for a React application using the react-router-dom library.
// It defines various routes and associates them with specific components to render based on the URL path.
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../components/Dashboard";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    // Within the Router component, we create a BrowserRouter. This component provides the routing
    // infrastructure for our application and should wrap all our route definitions.
    <BrowserRouter>
      {/* Within the Router component, we create a BrowserRouter. This component provides the routing
    infrastructure for our application and should wrap all your route definitions. */}
      <Routes>
        {/* Defining the route for the root URL ("/") using the <Route> component */}
        <Route
          path="/"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
