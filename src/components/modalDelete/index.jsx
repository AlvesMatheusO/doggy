import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function modelDelete({ setToggleModalDelete, toggleModeldelete, handleClose, handleShow, deleteFood}) {
    
    return (
        <div>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
        </div>
    )
}