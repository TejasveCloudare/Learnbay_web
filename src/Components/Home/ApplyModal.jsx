import React from "react";
import modalStyles from "./ApplyModal.module.css"; // We'll define this CSS below

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
          <form className={modalStyles.form}>
            <input type="text" placeholder="Enter your Full Name *" required />
            <input type="email" placeholder="Enter your Email *" required />
            <input type="tel" placeholder="Phone Number *" required />
            <select required>
              <option value="">Work Experience *</option>
              <option value="Fresher">Fresher</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3+ Years">3+ Years</option>
            </select>
            <select required>
              <option value="">Select Course Preference *</option>
              <option value="Data Science">Data Science</option>
              <option value="Web Development">Web Development</option>
            </select>
            <button type="submit">Apply For Counselling</button>
          </form>
        </div>
        <button onClick={onClose} className={modalStyles.closeButton}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ApplyModal;
