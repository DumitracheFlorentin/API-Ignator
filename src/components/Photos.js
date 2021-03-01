import React, { useState } from "react";

// IMPORT components
import InfoModal from "./InfoModal";

// IMPORT bootstrap
import { Card, Container, Modal } from "react-bootstrap";

const Photos = ({ info }) => {
  const [status, setStatus] = useState(false);
  const [mod, setMod] = useState();

  const handleClose = () => setStatus(false);
  const handleShow = (index) => {
    setMod(info.data[index]);
    setStatus(!status);
  };

  return (
    <Container
      fluid
      className="photos d-grid take m-auto pb-4 pr-4 pl-4"
      id="resp"
    >
      {info.isLoading &&
        info.data.map((val, index) => {
          return (
            <Card className="border-0 take2" onClick={() => handleShow(index)}>
              <img
                src={val.urls.regular}
                key={val.id}
                alt={val.alt_description}
              ></img>
            </Card>
          );
        })}
      <Modal show={status} onHide={handleClose} id="modal-class">
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Notes</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{mod != undefined && <InfoModal mod={mod} />}</Modal.Body>
      </Modal>
    </Container>
  );
};

export default Photos;
