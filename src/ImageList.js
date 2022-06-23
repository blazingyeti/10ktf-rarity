import { Card, Container, Row, Col } from "react-bootstrap";
import ImageItem from "./ImageItem";

function ImageList(props) {
  const { itemsFound } = props;

  return (
    <Container>
      <Row id="myItems" xs={2} md={3} lg={4} xl={5} xxl={6}>
        {itemsFound.map((item, i) => (
          <Row key={i}>
            <Card className="ImageList" key={item.urlNumber}>
              <ImageItem
                parentName={item.parentName}
                nftType={item.nftType}
                itemRarity={item.itemRarity}
                nftNumber={item.nftNumber}
                imageUrl={item.imageUrl}
              />
            </Card>
          </Row>
        ))}
      </Row>
    </Container>
  );
}

export default ImageList;
