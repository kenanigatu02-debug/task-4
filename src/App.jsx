import { useState, useEffect } from "react";
import Home from "./Home";
import Loading from "./Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Fake loading for 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading size="40px" message="App is loading..." />;
  }

  return <Home />;
}

export default App;