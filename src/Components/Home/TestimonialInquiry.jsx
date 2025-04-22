import React, { useState, useEffect } from "react";
import TestimonialStyles from "./TestimonialInquiry.module.css";
import testimonialsData from "../../Assets/JSON files/testimonialSliderData.json";

const TestimonialInquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    course: "",
  });

  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    setSliderData(testimonialsData.sliderData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/saveInquiry.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => alert("Inquiry Submitted!"))
      .catch((err) => console.error("Submission Error", err));
  };

  return (
    <section className={TestimonialStyles.wrapper}>
      <div className={TestimonialStyles.mainContainer}>
        <div className={TestimonialStyles.left}>
          <h2 className={TestimonialStyles.head}>
            Get Ahead with Industry-Leading Courses
          </h2>
          <p className={TestimonialStyles.quote}>"</p>
          <p className={TestimonialStyles.review}>
            I had a great learning experience at Edynoor. The faculties here are
            top notch. Right from enrollment to getting a good job, they keep
            putting enormous efforts for each and every candidate. Thanks to all
            the trainers, backend team.
          </p>
          <p className={TestimonialStyles.author}>
            <span className={TestimonialStyles.name}>Tejasve G.</span> <br />
            <span className={TestimonialStyles.role}>
              Python Developer @Cloudare
            </span>
          </p>

          {/* <div className={TestimonialStyles.slider}>
            <div className={TestimonialStyles.slideTrack}>
              {sliderData.map((item, idx) => (
                <div key={idx} className={TestimonialStyles.slide}>
                  <img src={item.companyLogo} alt={`company-${idx}`} />
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className={TestimonialStyles.right}>
          <h3 className={TestimonialStyles.rightHead}>
            Free Counselling with Experts
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Full Name *"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="+91"
              name="phone"
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
              <option value="0-1">0-1 Years</option>
              <option value="1-3">1-3 Years</option>
              <option value="3+">3+ Years</option>
            </select>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course Preference *</option>
              <option value="Data Science">Data Science</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Web Development">Web Development</option>
            </select>
            <div className={TestimonialStyles.buttonContainer}>
              <button type="submit">Apply For Counselling</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonialInquiry;
