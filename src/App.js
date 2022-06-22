import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Controls from "./Controls";
import ImageList from "./ImageList";

const App = () => {
  const [parentName, setParentName] = useState("Choose Parent");
  const [nftNumber, setNftNumber] = useState();
  const [itemsFound, setItemsFound] = useState([]);

  if (nftNumber && parentName !== "Choose Parent") {
    return (
      <Container>
        <h1>10ktf Rarity Checking</h1>
        <Controls
          setNftNumber={setNftNumber}
          parentName={parentName}
          setParentName={setParentName}
          setItemsFound={setItemsFound}
        />
        <ImageList itemsFound={itemsFound} />
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>10ktf Rarity Checking</h1>
        <Controls
          setNftNumber={setNftNumber}
          parentName={parentName}
          setParentName={setParentName}
          setItemsFound={setItemsFound}
        />
      </Container>
    );
  }
};

export default App;
