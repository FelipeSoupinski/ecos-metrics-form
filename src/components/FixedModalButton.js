import React, { useState } from "react";
import MetricGroupsTable from "./MetricGroupsTable";
import { Close } from "styled-icons/evaicons-solid";

const FixedModalButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-secondary"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        Metric Groups
      </button>
      {showModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
          onClick={handleOverlayClick}
        >
          <div
            className="border border-secondary rounded"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "80vw",
              height: "80vh",
              background: "#0A0A0A",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              zIndex: 1000,
              overflow: "auto",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-secondary"
              style={{
                position: "absolute",
                top: "10px",
                right: "32px",
              }}
            >
              Close <Close color="white" height={15} width={15} />
            </button>
            <MetricGroupsTable isModal />
          </div>
        </div>
      )}
    </>
  );
};

export default FixedModalButton;
