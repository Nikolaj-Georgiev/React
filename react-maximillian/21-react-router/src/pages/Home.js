import { Link, useNavigate } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";

function HomePage() {
  const navigate = useNavigate();// a programmatic way to navigate! This is not the default one which is via links..

  function handleNavigate() {
    navigate('products')
  }

  return <>
    {/* <MainNavigation /> you can do it like this but it is a bad idea! */}
    <h1>My Home Page</h1>
    <p>Go to <Link to="/products">the list of products</Link>.</p>
    <p>
      <button onClick={handleNavigate}>NAVIGATE</button>
    </p>
  </>
};

export default HomePage;