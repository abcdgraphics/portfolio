import { useEffect, useState } from "react";
const imageUrl = import.meta.env.VITE_IMAGE_URL;

export default function Projects({ tableName }) {
  const [formData, setFormData] = useState({
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setSuccess(false);
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.image) newErrors.image = "Image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("table", tableName);

    try {
      const response = await fetch(`${imageUrl}api/projects`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    async function fetchAllApps() {
      const response = await fetch(`${imageUrl}api/projects?db=${tableName}`);
      const appsData = await response.json();
      if (appsData.status == "success") {
        setData(appsData.results);
      }
    }

    fetchAllApps();
  }, [tableName, success]);

  return (
    <div>
      {success && <p>Project Stored in Database</p>}
      <h1>Upload Your Project Details Here:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        {errors.image && <div className="error">{errors.image}</div>}
        <button type="submit">Submit</button>
      </form>

      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <img src={`${imageUrl}${item.image}`} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
