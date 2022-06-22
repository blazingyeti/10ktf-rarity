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
    var baseUrl = "https://media.10ktf.com/nfts/";
    var currentUrls = ImageUrls[parentName];

    currentUrls.forEach((element) => {
      var currentNumber = parseInt(submittedNumber) + element["number"];
      var currentItem =
        baseUrl + element["url_prefix"] + currentNumber.toString() + ".jpg";
      itemList.push({
        nftType: element["type"],
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
