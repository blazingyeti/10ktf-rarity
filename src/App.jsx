import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Controls from "./components/Controls";
import ImageList from "./components/ImageList";
import ImageModal from "./components/ImageModal";
import BTLoadout from "./components/BTLoadout";

const App = () => {
  const [parentName, setParentName] = useState("");
  const [nftNumber, setNftNumber] = useState();
  const [itemsFound, setItemsFound] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setModalData({"parentName": parentName, "nftNumber": nftNumber})
  }, [parentName, nftNumber]);

  if (nftNumber && parentName !== "") {
    return (
      <Container>
        <h1>10ktf Rarity Checking</h1>
        <Controls
          setNftNumber={setNftNumber}
          parentName={parentName}
          setParentName={setParentName}
          setItemsFound={setItemsFound}
        />
        <ImageList
          parentName={parentName}
          itemsFound={itemsFound}
          setModalShow={setModalShow}
          setModalData={setModalData}
        />
        <ImageModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          modalData={modalData}
          parentName={parentName}
          nftNumber={nftNumber}
        />
        <BTLoadout itemsFound={itemsFound}/>
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
