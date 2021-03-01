import React, { useEffect, useState } from "react";

// IMPORT components
import Navigation from "./components/Navigation";
import Error from "./components/Error";
import Photos from "./components/Photos";
import MoreButton from "./components/MoreButton";

// IMPORT functions
import { defAPI } from "./Functions/APIreq";

// IMPORT style
import "./style/app.css";

function App() {
  // VARIABLES
  let page = 1;
  let NrPerPage = 15;

  const [info, setInfo] = useState({ data: [], isLoading: false });
  const [src, setSrc] = useState(true);

  useEffect(() => {
    defAPI(setInfo, page, NrPerPage);
  }, []);

  return (
    <div className="App">
      <Navigation setInfo={setInfo} setSrc={setSrc} />
      <Photos info={info} />
      {info.isLoading && info.data.length == 0 && <Error />}
      {src && <MoreButton setInfo={setInfo} info={info} />}
    </div>
  );
}

export default App;
