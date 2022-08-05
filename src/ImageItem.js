import { Container, Card } from "react-bootstrap";

function ImageItem(props) {
  const {
    parentName,
    nftType,
    itemRarity,
    nftNumber,
    imageUrl,
    setModalShow,
    setModalData,
  } = props;

  if (itemRarity != "") {
    var classColor = "item-" + itemRarity;
  } else {
    var classColor = "";
  }

  const handleClick = (e) => {
    e.preventDefault();
    setModalShow(true);
    setModalData({
      parentName: parentName,
      nftType: nftType,
      itemRarity: itemRarity,
      nftNumber: nftNumber,
      imageUrl: imageUrl,
    });
  };

  return (
    <Container className={classColor}>
      <Card key={nftNumber} onClick={handleClick}>
        <div className="img-wrapper">
        <Card.Img src={imageUrl} className="imgList hover-zoom" alt={nftNumber} />
        </div>
        <Card.Title>{itemRarity}</Card.Title>
      </Card>
    </Container>
  );
}

export default ImageItem;
