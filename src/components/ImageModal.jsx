import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ImageModal() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const parentName = items.parentName;
  const nftNumber = items.nftNumber;

  const modal = useSelector((state) => state.modal);
  const modalData = modal.modalData;
  const showModal = modal.showModal;

  return (
    <Modal
      show={showModal}
      onHide={() => dispatch({ type: "modal/closeModal", payload: false })}
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
        <Button
          onClick={() =>
            dispatch({ type: "modal/closeModal", payload: false })
          }
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;
