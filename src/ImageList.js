import { Card, Container, Row, Col } from "react-bootstrap";
import ImageItem from "./ImageItem";

function ImageList(props) {
  const { itemsFound } = props;

  return (
    <Container>
      <Row id="myItems" xs={1} md={2} lg={3} xl={4} xxl={5}>
        {itemsFound.map((item, i) => (
          <Row key={i}>
            <Card className="ImageList" key={item.urlNumber}>
              <ImageItem
                nftType={item.nftType}
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
