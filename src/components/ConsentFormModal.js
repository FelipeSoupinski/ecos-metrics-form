import React, { useState } from "react";
import { Close } from "styled-icons/evaicons-solid";

const ConsentFormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="p-4 font-sans text-justify">
      <div className="flex items-center gap-2 cursor-pointer">
        <button className="btn btn-link text-white" onClick={openModal}>
          Click here to view the Free and Informed Consent Form
        </button>
      </div>

      {isModalOpen && (
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
              width: "50vw",
              height: "50vh",
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
              onClick={() => closeModal()}
              className="btn btn-secondary"
              style={{
                position: "absolute",
                top: "10px",
                right: "32px",
              }}
            >
              Close <Close color="white" height={15} width={15} />
            </button>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h4>Free and Informed Consent Form</h4>
              </div>

              <div className="space-y-4">
                <p>
                  You are being invited to participate in an academic research
                  entitled{" "}
                  <b>
                    "Death of Software Ecosystems: vital signs reference points"
                  </b>
                  , conducted by the Federal University of Mato Grosso do Sul
                  (UFMS). The objective of this research involves the
                  investigation of the phenomenon of SECO death, to compose the
                  understanding and prediction of this phenomenon in the context
                  of Software Engineering.
                </p>

                <div>
                  <p>
                    <b>Principal Investigator:</b> Felipe Soupinski, Federal
                    University of Mato Grosso do Sul, felipe_s@ufms.br
                  </p>
                </div>

                <div>
                  <p>
                    <b>Advisor:</b> Prof. PhD. Awdren Fontão, Federal University
                    of Mato Grosso do Sul, awdren.fontao@ufms.br
                  </p>
                </div>

                <div>
                  <p>
                    <b>Co-advisor:</b> Prof. PhD. Igor Wiese, Federal University
                    of Technology of Paraná, igor@utfpr.edu.br
                  </p>
                </div>

                <div>
                  <p>
                    <b>About the Research</b> <br />
                    This research aims to explore issues related to the death of
                    Software Ecosystems in the context of Software Engineering,
                    analyzing metrics that help establish reference points for
                    the vital signs of the ecosystem. In this way, it may be
                    possible to identify anomalous signals that may indicate the
                    decline of ecosystems in advance.
                  </p>
                </div>

                <div>
                  <p>
                    <b>About your participation</b> <br />
                    Your participation is voluntary and crucial to the success
                    of this study. As a participant, you will be invited to
                    evaluate the applicability of metric sets in Software
                    Ecosystem scenarios, through a questionnaire.
                  </p>
                </div>

                <div>
                  <p>
                    <b>Confidentiality</b> <br />
                    All information you provide will be treated strictly
                    confidentially. Your personal data will not be disclosed,
                    and the information collected will be used exclusively for
                    academic research purposes.
                  </p>
                </div>

                <div>
                  <p>
                    <b>Risks and Benefits</b> <br />
                    There are no known risks associated with participating in
                    this research. However, by contributing to this study, you
                    will be helping to advance knowledge in the area of Software
                    Ecosystems, which can benefit society as a whole.
                  </p>
                </div>

                <div>
                  <p>
                    <b>Consent</b> <br />
                    By agreeing to participate in this research, you are giving
                    your free and informed consent to provide information that
                    will be used for academic research purposes. You have the
                    right to withdraw your consent at any time, without penalty.
                  </p>
                </div>

                <div>
                  <p>
                    <b>Contact</b> <br />
                    If you have any questions or concerns about the research,
                    please contact the researchers.
                  </p>
                </div>

                <div className="mt-4">
                  <p>
                    <span className="text-xl">📍</span>
                    <b>Our thanks!</b> <br />
                    We sincerely appreciate your willingness to participate in
                    this study. Your contribution is fundamental to the
                    advancement of knowledge in Software Ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsentFormModal;
