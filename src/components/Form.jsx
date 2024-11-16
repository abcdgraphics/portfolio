import { useState } from "react";
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.contact)
      formErrors.contact = "Email Address or Phone Number is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        const response = await fetch(`${backendURL}/api/send-mail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log(await response.json());

        if (!response.ok) {
          throw new Error("Failed to submit the form");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      {errors.fullName && <p className="error-message">{errors.fullName}</p>}

      <div>
        <input
          type="text"
          name="contact"
          placeholder="Email Address or Phone Number"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      {errors.contact && <p className="error-message">{errors.contact}</p>}

      <div>
        <textarea
          rows={10}
          name="message"
          placeholder="Message Here"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      {errors.message && <p className="error-message">{errors.message}</p>}

      <button type="submit">Let The Magic Unfold!</button>
    </form>
  );
}
