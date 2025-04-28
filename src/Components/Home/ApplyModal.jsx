import React from "react";
import modalStyles from "./ApplyModal.module.css"; // CSS file

const ApplyModal = ({ showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modalContent}>
        <div className={modalStyles.leftSection}>
          <img
            src="/modal_sample.png"
            alt="Counselling"
            className={modalStyles.modalImage}
          />
        </div>
        <div className={modalStyles.rightSection}>
          <h2>Apply For Counselling</h2>
          {/* Replace the form with the Microsoft Form iframe */}
          <iframe
            title="Apply for Counselling Form"
            width="640px"
            height="480px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=o7rcX-z16ka0yZjUTR1q6iVx3Tnc1MBHsUVprTBizH9URjQ5WFZLRDhLWDVMWkNOMDIxNjdETzkxOS4u&embed=true"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            msallowfullscreen="true"
          ></iframe>
        </div>
        <button onClick={onClose} className={modalStyles.closeButton}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ApplyModal;
