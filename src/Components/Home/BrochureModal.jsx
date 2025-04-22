import React, { useState } from "react";
import modalStyles from "./ApplyModal.module.css";

const BrochureModal = ({ showModal, onClose, onDownload }) => {
  // 🟢 Always call hooks before any conditional return
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formData).every(
      (field) => field !== ""
    );
    if (allFieldsFilled) {
      onDownload(); // trigger download
      onClose(); // close modal
    } else {
      alert("Please fill all the fields.");
    }
  };

  // 🟠 Now you can return conditionally
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
          <form className={modalStyles.form} onSubmit={handleSubmit}>
            <input
              name="fullName"
              type="text"
              placeholder="Enter your Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Work Experience *</option>
              <option value="Fresher">Fresher</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3+ Years">3+ Years</option>
            </select>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
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

export default BrochureModal;
