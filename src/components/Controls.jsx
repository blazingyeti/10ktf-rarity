import React from "react";
import {
  Container,
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ImageUrls from "../data/image_urls.json";
import Data from "../data/processed_data.json";

const Controls = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const parentName = items.parentName;

  const parents = Object.keys(ImageUrls);

  const handleSelect = (e) => {
    dispatch({ type: "items/setParentName", payload: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedNumber = e.target["nftNumber"].value;
    dispatch({ type: "items/setNftNumber", payload: submittedNumber });

    dispatch({ type: "items/clearItemsFound" });

    // Build out the ImageUrls
    const baseUrl = "https://media.10ktf.com/nfts/";
    const currentUrls = ImageUrls[parentName];
    const rarityData = Data[parentName];

    const fixParents = ["BAYC", "Nouns"];

    currentUrls.forEach((element) => {
      var currentNumber = parseInt(submittedNumber) + element["number"];
      var imgNumberStr = element["url_prefix"] + currentNumber.toString();

      // Need to pad the url string with 0s for some parents
      if (fixParents.includes(parentName) && imgNumberStr.length < 20) {
        imgNumberStr = imgNumberStr.padStart(20, "0");
      }

      var currentItem = baseUrl + imgNumberStr + ".jpg";

      // Get rarity data if available
      if (rarityData) {
        const searchObject = rarityData.find(
          (obj) => obj["item"] == element["type"]
        );
        if (searchObject) {
          const searchNumber = parseInt(submittedNumber);
          if (searchObject["common"].includes(searchNumber)) {
            var itemRarity = "common";
          } else if (searchObject["uncommon"].includes(searchNumber)) {
            var itemRarity = "uncommon";
          } else if (searchObject["rare"].includes(searchNumber)) {
            var itemRarity = "rare";
          } else if (searchObject["epic"].includes(searchNumber)) {
            var itemRarity = "epic";
          }
        } else {
          var itemRarity = "";
        }
      }

      // push item object into array
      let itemFound = {
        parentName: parentName,
        itemType: element["type"],
        itemRarity: itemRarity,
        nftNumber: submittedNumber,
        urlNumber: currentNumber.toString(),
        imageUrl: currentItem,
      };
      dispatch({ type: "items/addItemFound", payload: itemFound });
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <DropdownButton
            id="parents-dropdown"
            title={parentName === "" ? "Choose Parent" : parentName}
            onSelect={handleSelect}
          >
            {parents.map((item, i) => {
              return (
                <Dropdown.Item
                  active={i === 0 ? true : false}
                  key={i}
                  eventKey={item}
                >
                  {item}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center">
              <Form.Control
                name="nftNumber"
                type="text"
                placeholder="Enter NFT Number"
              />
            </Row>
            <Row className="justify-content-center">
              <Button variant="primary" type="submit">
                Check
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Controls;
