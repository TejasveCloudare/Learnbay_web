import React, { useState, useEffect } from "react";
import modalStyles from "./ApplyModal.module.css";

const BrochureModal = ({ showModal, onClose, onDownload }) => {
  // 🟢 Trigger the download once modal is shown
  useEffect(() => {
    if (showModal) {
      onDownload(); // Automatically trigger the download when the modal opens
    }
  }, [showModal, onDownload]);

  // 🛠 Microsoft Form Embed
  if (!showModal) return null;

  return (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modalContent}>
        <div className={modalStyles.leftSection}>
          <img
            src="/modal_sample.png"
            alt="Download Brochure"
            className={modalStyles.modalImage}
          />
        </div>
        <div className={modalStyles.rightSection}>
          <h2>Download Brochure</h2> {/* 🛠 Changed Heading */}
          {/* Microsoft Form Embed */}
          <iframe
            title="Microsoft Form"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=o7rcX-z16ka0yZjUTR1q6iVx3Tnc1MBHsUVprTBizH9URjQ5WFZLRDhLWDVMWkNOMDIxNjdETzkxOS4u"
            frameBorder="0"
            style={{
              width: "100%",
              height: "500px", // Adjust this to fit your form's height
              border: "none",
            }}
          ></iframe>
        </div>
        <button onClick={onClose} className={modalStyles.closeButton}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default BrochureModal;
