import { Container, Card } from "react-bootstrap";

function ImageItem(props) {
  const {
    parentName,
    itemType,
    itemRarity,
    nftNumber,
    imageUrl,
    setModalShow,
    setModalData,
    itemScore,
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
      itemType: itemType,
      itemRarity: itemRarity,
      nftNumber: nftNumber,
      imageUrl: imageUrl,
    });
  };

  return (
    <Container className={classColor}>
      <Card key={nftNumber} onClick={handleClick}>
        <div className="img-wrapper">
          <Card.Img
            src={imageUrl}
            className="hover-zoom"
            alt={nftNumber}
          />
        </div>
        <Card.Title>{itemRarity}</Card.Title>
      </Card>
      {itemScore ? (
        <div className="fs-6">BattleTown Value: {itemScore}</div>
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default ImageItem;
