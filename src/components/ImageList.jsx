import { Card, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import ImageItem from "./ImageItem";
import { getItemValue } from "../utils/scoreCalc";

function ImageList() {
  const items = useSelector((state) => state.items);
  const itemsFound = items.itemsFound;

  return (
    <div>
      <Row id="my-image-items" xs={2} md={4} lg={5} xl={5} xxl={6}>
        {itemsFound.map((item, i) => (
          <Row key={i}>
            <Card className="" key={item.urlNumber}>
              <ImageItem
                itemType={item.itemType}
                itemRarity={item.itemRarity}
                imageUrl={item.imageUrl}
                itemScore={getItemValue(item.itemType, item.itemRarity)}
              />
            </Card>
          </Row>
        ))}
      </Row>
    </div>
  );
}

export default ImageList;
