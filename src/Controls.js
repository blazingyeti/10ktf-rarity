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

import ImageUrls from "./data/image_urls.json";
import Data from "./data/processed_data.json";

const Controls = (props) => {
  const { setNftNumber, parentName, setParentName, setItemsFound } = props;

  const parents = Object.keys(ImageUrls);

  const handleSelect = (e) => {
    setParentName(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedNumber = e.target["nftNumber"].value;
    setNftNumber(submittedNumber);

    // Build out the ItemList from ImageUrls
    var itemList = [];
    const baseUrl = "https://media.10ktf.com/nfts/";
    const currentUrls = ImageUrls[parentName];
    const rarity_data = Data[parentName];

    currentUrls.forEach((element) => {
      var currentNumber = parseInt(submittedNumber) + element["number"];
      var currentItem =
        baseUrl + element["url_prefix"] + currentNumber.toString() + ".jpg";

      // Get rarity data if available
      if (rarity_data) {
        const searchObject = rarity_data.find(
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
      itemList.push({
        parentName: parentName,
        nftType: element["type"],
        itemRarity: itemRarity,
        nftNumber: submittedNumber,
        urlNumber: currentNumber.toString(),
        imageUrl: currentItem,
      });
    });

    setItemsFound(itemList);
  };

  return (
    <Container>
      <Row>
        <Col>
          <DropdownButton
            id="parents-dropdown"
            title={parentName}
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
            <Row>
              <Form.Control
                name="nftNumber"
                type="text"
                placeholder="Enter NFT Number"
              />
            </Row>
            <Row>
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
