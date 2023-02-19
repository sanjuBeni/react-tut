import React from "react";
// import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  // let input = useRef(null);
  // const myFun = () => {
  //   console.log("Pass function as props.");
  // };
  // const [show, setShow] = useState(true);
  // const showHide = () => {
  //   show ? setShow(false) : setShow(true);
  // };

  // const handleRef = () => {
  //   input.current.value = 1000;
  //   input.current.style.color = "red";
  //   input.current.focus();
  // };

  const { name } = useParams();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<h2>This is Home page</h2>} />
          <Route exact path="/about" element={<h2>This is About page</h2>} />
          {/* 404 Page not found  */}
          {/* <Route path="/*" element={<h2>404 page not found.</h2>} /> */}
          {/* Redirect page */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route
            path="/profile/:name"
            element={<h3>This is {name} profile.</h3>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// searchParams Hooks in React-router-dom -> It fetch the Query String
// It is similar to useState Hooks
// const [searchParams, setSearchParams] = useSearchParams();
// how to get the query string
// searchParams.get('QSName');
// how to set query string
// setSearchParams({age:50}); // It take input as an object
// useNavigation hook return a function and use for navigation
// which hooks is use for the navigation ?? ans. -> useNavigation hook from to React-Router-Dom Library
// Outlet is a componet form react-router-dom and used when nested routing use
// useLocation() -> is return the object and it is import from the react-router-dom
// in useLocation hook object we can get the hash, key, pathname,search,state
// search is store the query string
// hash is a route type and with the help of make #route
// key is unique for every route
// pathname is router path
// state is also pass inside state key
// like <Route path "/" state={{key:value}} /> now we get the state in useLocation
// Protected route is not a feature of react-router-dom. It is logical part, we given condition and access the route like login and after login which route is working or not work.
