import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "@components/Loader";
import Dashboard from "@pages/dashboard";
import PublicRoute from "@components/PublicRoute";
// import DefaultLayout from "layouts/navbar-sidebar";
import Login from "@pages/login";
import DefaultLayout from "layouts/DefaultLayout";
import Register from "@pages/register";
import Courses from "@pages/courses";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          {/* login */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/dashboard/*" element={<DefaultLayout />}>
          {/* Dashboard */}
          <Route path="home" element={<Dashboard />} />

          {/* Branch */}
          <Route
            path="courses"
            element={
              <Suspense fallback={<Loader isLoading />}>
                <Courses />
              </Suspense>
            }
          />
          
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader isLoading />}>
              {/* <NotFoundPage /> */}
              <p>not found</p>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
