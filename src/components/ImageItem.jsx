import { Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ImageItem(props) {
  const { itemType, itemRarity, imageUrl, itemScore } = props;

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const parentName = items.parentName;
  const nftNumber = items.nftNumber;

  if (itemRarity != "") {
    var classColor = "item-" + itemRarity;
  } else {
    var classColor = "";
  }

  const handleClick = (e) => {
    e.preventDefault();
    let modalData = {
      parentName: parentName,
      itemType: itemType,
      itemRarity: itemRarity,
      nftNumber: nftNumber,
      imageUrl: imageUrl,
    };
    dispatch({ type: "modal/setModalData", payload: modalData });
    dispatch({ type: "modal/setShowModal", payload: true });
  };

  return (
    <Container className={classColor}>
      <Card key={nftNumber} onClick={handleClick}>
        <div className="img-wrapper">
          <Card.Img src={imageUrl} className="hover-zoom" alt={nftNumber} />
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
