import { Container, Card } from "react-bootstrap";

function ImageItem(props) {
  const { parentName, nftType, itemRarity, nftNumber, imageUrl } = props;

  if (itemRarity != "") {
    var classColor = "item-" + itemRarity
  }
  else {
    var classColor = ""
  }
  return (
    <Container className={classColor}>
      <Card key={nftNumber}>
        <Card.Img src={imageUrl} className="imgList" alt={nftNumber} />
        <Card.Title>{itemRarity}</Card.Title>
      </Card>
    </Container>
  );
}

export default ImageItem;
