import { Button, Modal } from "react-bootstrap";

function ImageModal(props) {
  const { show, onHide, modalData, parentName, nftNumber } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {parentName} #{nftNumber}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalData.imageUrl ? (
          <img src={modalData.imageUrl} width="100%" />
        ) : (
          <h4>{modalData["itemType"]}</h4>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;
