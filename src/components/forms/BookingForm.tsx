import { useState } from "react";
import { darkBlue } from "../../utils/constants";
import { handleFormSubmit } from "../../utils/formSubmit";

export const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    form: "booking",
    firstName: "",
    lastName: "",
    service: "",
    phone: "",
    date: "",
    time: "",
    question: "",
    formSubmitted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    if (value.length > 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
    } else if (value.length > 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const getBorderStyle = (value: string) => {
    if (formData.formSubmitted && !value) return "red";
    return "rgb(209, 213, 219)";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleFormSubmit({ formData }, setIsLoading);
  };

  const generateTimeSlots = () => {
    const slots = [];
    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // 9:00 AM
    const endTime = new Date();
    endTime.setHours(17, 0, 0, 0); // 5:00 PM

    while (startTime < endTime) {
      slots.push(
        startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      startTime.setMinutes(startTime.getMinutes() + 15);
    }
    return slots;
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mb-16 px-4 sm:px-6 md:px-0 -mt-4"
    >
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <div className="space-y-6">
          <div className="border-b-2 border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-red-600">
              * REQUIRED INFORMATION
            </h2>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: darkBlue }}>
              CONTACT INFORMATION
            </h3>

            {/* FIRST + LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  FIRST NAME <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name here"
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: getBorderStyle(formData.firstName),
                    color: darkBlue,
                  }}
                />
                {formData.formSubmitted && !formData.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your first name.
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  LAST NAME <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name here"
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: getBorderStyle(formData.lastName),
                    color: darkBlue,
                  }}
                />
                {formData.formSubmitted && !formData.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your last name.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* PHONE + SERVICE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: darkBlue }}
              >
                PHONE <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="(XXX) XXX-XXXX"
                required
                maxLength={14}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                style={{
                  borderColor: getBorderStyle(formData.phone),
                  color: darkBlue,
                }}
              />
              {formData.formSubmitted && !formData.phone && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your phone number.
                </p>
              )}
            </div>

            {/* Service */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: darkBlue }}
              >
                SERVICE <span className="text-red-600">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="appearance-none w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-white"
                style={{
                  borderColor: getBorderStyle(formData.service),
                  color: darkBlue,
                }}
              >
                <option value="">- Please Select -</option>
                <option value="Vaccine">Vaccine</option>
              </select>
              {formData.formSubmitted && !formData.service && (
                <p className="text-red-500 text-sm mt-1">
                  Please select a service.
                </p>
              )}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: darkBlue }}>
              AVAILABILITY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  DATE <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={today}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: getBorderStyle(formData.date),
                    color: darkBlue,
                  }}
                />
                {formData.formSubmitted && !formData.date && (
                  <p className="text-red-500 text-sm mt-1">
                    Please select a date.
                  </p>
                )}
              </div>
              {formData.date && (
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: darkBlue }}
                  >
                    TIME <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="appearance-none w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-white"
                    style={{
                      borderColor: getBorderStyle(formData.time),
                      color: darkBlue,
                    }}
                  >
                    <option value="">- Select a time -</option>
                    {generateTimeSlots().map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {formData.formSubmitted && !formData.time && (
                    <p className="text-red-500 text-sm mt-1">
                      Please select a time.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* QUESTION / COMMENT */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: darkBlue }}
            >
              COMMENTS / PREFERENCES
            </label>
            <textarea
              name="question"
              onChange={
                handleChange as React.ChangeEventHandler<HTMLTextAreaElement>
              }
              value={formData.question}
              placeholder="Enter your comments or preferences here"
              rows={5}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none"
              style={{
                borderColor: "rgb(209, 213, 219)",
                color: darkBlue,
              }}
            />
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-start">
            <div
              className="g-recaptcha"
              data-sitekey="your-site-key-here"
            ></div>
          </div>

          {/* Submit Button */}
          <div className="-mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 border-2 font-semibold rounded-lg transition-all shadow-md"
              style={{ borderColor: darkBlue, color: darkBlue }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {isLoading ? "Loading..." : "SUBMIT"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
