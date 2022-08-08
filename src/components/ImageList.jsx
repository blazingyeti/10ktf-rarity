import { Card, Container, Row } from "react-bootstrap";
import ImageItem from "./ImageItem";
import { getItemValue } from "../utils/scoreCalc";

function ImageList(props) {
  const { parentName, itemsFound, setModalShow, setModalData } = props;

  return (
    <Container>
      <Row id="myItems" xs={2} md={3} lg={4} xl={5} xxl={6}>
        {itemsFound.map((item, i) => (
          <Row key={i}>
            <Card className="ImageList" key={item.urlNumber}>
              <ImageItem
                parentName={parentName}
                nftType={item.nftType}
                itemRarity={item.itemRarity}
                nftNumber={item.nftNumber}
                imageUrl={item.imageUrl}
                setModalShow={setModalShow}
                setModalData={setModalData}
                itemScore={getItemValue(item.nftType, item.itemRarity)}
              />
            </Card>
          </Row>
        ))}
      </Row>
      <Row></Row>
    </Container>
  );
}

export default ImageList;
