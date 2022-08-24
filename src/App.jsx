import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import Controls from "./components/Controls";
import ImageList from "./components/ImageList";
import ImageModal from "./components/ImageModal";
import BTLoadout from "./components/BTLoadout";

const App = () => {
  const items = useSelector((state) => state.items);
  const parentName = items.parentName;
  const nftNumber = items.nftNumber;

  if (nftNumber && parentName !== "") {
    return (
      <Container>
        <h1>10ktf Rarity Checking</h1>
        <Controls />
        <ImageList />
        <ImageModal />
        <BTLoadout />
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>10ktf Rarity Checking</h1>
        <Controls />
      </Container>
    );
  }
};

export default App;
