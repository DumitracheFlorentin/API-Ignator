import React, { useState } from "react";

// IMPORT bootstrap
import { Button } from "react-bootstrap";

// IMPORT functions
import { loadMoreAPI } from "../Functions/APIreq";

const MoreButton = ({ setInfo, info }) => {
  const [counter, setCounter] = useState(2);

  const LoadMoreHandler = () => {
    loadMoreAPI(info, setInfo, counter, 15);
    setCounter(counter + 1);
  };

  return (
    <div className="buttonD">
      <Button onClick={LoadMoreHandler} variant="primary">
        Load More
      </Button>
    </div>
  );
};

export default MoreButton;
