import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { bestScore } from "../utils/scoreCalc";
import LoadoutSlot from "./LoadoutSlot";

function BTLoadout() {
  const [bestItems, setBestItems] = useState();
  const items = useSelector((state) => state.items);
  const itemsFound = items.itemsFound;

  useEffect(() => {
    setBestItems(bestScore(itemsFound));
  }, [itemsFound]);

  return (
    <Container className="">
      {bestItems ? (
        <div>
          <Row className="justify-content-center mt-5">
            Best BattleTown Loadout{" "}
            <div>
              {bestItems
                .map((item) => item.itemScore)
                .reduce((prev, curr) => prev + curr, 0)}
            </div>
          </Row>
          <Row
            className="justify-content-center"
            xs={2}
            md={4}
            lg={5}
            xl={5}
            xxl={6}
          >
            {bestItems.map((item, i) => (
              <LoadoutSlot
                key={i}
                itemSlot={item.itemSlot}
                itemType={item.itemType}
                itemRarity={item.itemRarity}
                imageUrl={item.imageUrl}
                itemScore={item.itemScore}
              />
            ))}
          </Row>
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default BTLoadout;
