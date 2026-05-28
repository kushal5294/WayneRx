import { useState } from "react";
import { darkBlue } from "../../utils/constants";
import { handleFormSubmit } from "../../utils/formSubmit";

export const DeliveryForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    form: "delivery",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    delivery: false,
    notification: "",
    formSubmitted: false, // track submission attempt
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleFormSubmit({ formData }, setIsLoading);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16 px-4 sm:px-6 md:px-0 -mt-4">
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
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
                    borderColor: "rgb(209, 213, 219)",
                    color: darkBlue,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgb(209, 213, 219)")
                  }
                />
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
                    borderColor: "rgb(209, 213, 219)",
                    color: darkBlue,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgb(209, 213, 219)")
                  }
                />
              </div>
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: darkBlue }}
              >
                EMAIL ADDRESS <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address here"
                required
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                style={{
                  borderColor: "rgb(209, 213, 219)",
                  color: darkBlue,
                }}
                onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgb(209, 213, 219)")
                }
              />
            </div>
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
                  borderColor: "rgb(209, 213, 219)",
                  color: darkBlue,
                }}
                onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgb(209, 213, 219)")
                }
              />
            </div>
          </div>

          {/* Auto Refill Checkbox */}
          <div className="flex items-center gap-2 mb-4 pt-2 pb-4">
            <input
              type="checkbox"
              id="delivery"
              checked={formData.delivery}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  delivery: e.target.checked,
                }))
              }
              className="w-5 h-5"
              style={{ accentColor: darkBlue }}
            />
            <label htmlFor="delivery" style={{ color: darkBlue }}>
              Yes, I want free pick-up and delivery of Rx.
            </label>
          </div>

          {/* Notification */}
          <div>
            <label
              className="block text-sm font-semibold mb-3"
              style={{ color: darkBlue }}
            >
              WOULD YOU LIKE US TO NOTIFY YOU WHEN YOUR PRESCRIPTION(S) ARE
              READY? <span className="text-red-600">*</span>
            </label>
            <select
              name="notification"
              value={formData.notification}
              onChange={handleChange}
              required
              className={`appearance-none w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-white ${
                !formData.notification && formData.formSubmitted
                  ? "border-red-500"
                  : ""
              }`}
              style={{
                borderColor:
                  !formData.notification && formData.formSubmitted
                    ? "red"
                    : "rgb(209, 213, 219)",
                color: darkBlue,
              }}
              onFocus={(e) => (e.target.style.borderColor = darkBlue)}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgb(209, 213, 219)")
              }
            >
              <option value="">- Please Select -</option>
              <option value="none">No Notification</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text Message</option>
            </select>
            {!formData.notification && formData.formSubmitted && (
              <p className="text-red-500 text-sm mt-1">
                Please select a notification option.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 border-2 font-semibold rounded-lg transition-all shadow-md"
              style={{ borderColor: darkBlue, color: darkBlue }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {isLoading ? "Loading..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
