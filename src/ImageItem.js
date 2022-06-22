import { Container, Card } from "react-bootstrap";

function ImageItem(props) {
  const { parentName, nftType, itemRarity, nftNumber, imageUrl } = props;

  return (
    <Container>
      <Card key={nftNumber} className="">
        <Card.Img src={imageUrl} className="imgList" alt={nftNumber} />
        <Card.Title>{itemRarity}</Card.Title>
      </Card>
    </Container>
  );
}

export default ImageItem;
