import { Card, Button, Row, Col } from "react-bootstrap";

function LoadoutSlot(props) {
  const { itemSlot, itemType, itemRarity, imageUrl, itemScore } = props;

  return (
    <Col className="justify-content-center border">
      <Row>
        <Card>
          <Card.Title className="p-1">{itemSlot}</Card.Title>
          <div className="img-wrapper">
            <Card.Img src={imageUrl} className="p-2" alt={itemSlot} />
          </div>
        </Card>
      </Row>
      <Row className="fs-6 justify-content-center p-1">
        Item Score: <div className="fw-bold">{itemScore}</div>
      </Row>
    </Col>
  );
}

export default LoadoutSlot;
