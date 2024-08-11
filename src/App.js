import React from "react";
import Compiler from "./components/EventComponents/Compiler.jsx";
// Remove unused imports

function App() {
  const [curUser, setCurUser] = React.useState({
    isAuthenticated: false,
    user: null,
    isFetching: true,
    fins: null,
    email: null,
  });

  // Runs every time a new page is loaded, checks if user is logged in
  React.useEffect(() => {
    // Simplified: assuming no need to fetch user data for the current scope

    setCurUser((prev) => ({
      ...prev,
      isFetching: false,
    }));
  }, []);

  return (
    <>
      {curUser.isFetching ? (
        <p>Loading</p>
      ) : (
        <Compiler />
      )}
    </>
  );
}

export default App;

