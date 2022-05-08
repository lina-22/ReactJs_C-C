import { Modal, Form , Button } from "react-bootstrap";

function AttatchCategoryModal({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Attatch Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
    </Modal>
  );
}

export default AttatchCategoryModal;