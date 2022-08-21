import { Card, Container, Row } from "react-bootstrap";
import ImageItem from "./ImageItem";
import { getItemValue } from "../utils/scoreCalc";

function ImageList(props) {
  const { parentName, itemsFound, setModalShow, setModalData } = props;

  return (
    <Container>
      <Row id="my-image-items" xs={2} md={4} lg={5} xl={5} xxl={6}>
        {itemsFound.map((item, i) => (
          <Row key={i}>
            <Card className="" key={item.urlNumber}>
              <ImageItem
                parentName={parentName}
                itemType={item.itemType}
                itemRarity={item.itemRarity}
                nftNumber={item.nftNumber}
                imageUrl={item.imageUrl}
                setModalShow={setModalShow}
                setModalData={setModalData}
                itemScore={getItemValue(item.itemType, item.itemRarity)}
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
