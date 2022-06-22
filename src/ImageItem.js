import { Container, Card } from "react-bootstrap";

function ImageItem(props) {
  const { nftType, nftNumber, imageUrl } = props;

  return (
    <Container>
      <Card key={nftNumber} className="">
        <Card.Img src={imageUrl} className="imgList" alt={nftNumber} />
        <Card.Title>{nftType}</Card.Title>
      </Card>
    </Container>
  );
}

export default ImageItem;
