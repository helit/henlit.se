import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Here we go!</h1>
      <p>Start building with Vite + React (Typescript) + Material UI</p>
      <Button
        variant='contained'
        onClick={() => setCount(count + 1)}
      >{`Clicked ${count}`}</Button>
    </div>
  );
};

export default App;
