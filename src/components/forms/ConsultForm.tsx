import { useState } from "react";
import { darkBlue } from "../../utils/constants";
import { handleFormSubmit } from "../../utils/formSubmit";

export default function ConsultForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    form: "consult",
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    fax: "",
    bestTimeToCall: "",
    contactMethod: "phone",
    address: "",
    question: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value.replace(/\D/g, "");
    if (formattedValue.length > 10) {
      formattedValue = formattedValue.slice(0, 10);
    }

    if (formattedValue.length > 6) {
      formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(
        3,
        6
      )}-${formattedValue.slice(6)}`;
    } else if (formattedValue.length > 3) {
      formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(
        3
      )}`;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleFormSubmit({ formData }, setIsLoading);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16 px-4 sm:px-6 md:px-0 -mt-3">
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b-2 border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-red-600">
              * REQUIRED INFORMATION
            </h2>
          </div>

          {/* WHO IS THIS PRESCRIPTION FOR? */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  value={formData.firstName || ""}
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
                  value={formData.lastName || ""}
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
          {/* Address */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: darkBlue }}
            >
              ADDRESS <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Enter address here"
              required
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
              style={{ borderColor: "rgb(209, 213, 219)", color: darkBlue }}
              onFocus={(e) => (e.target.style.borderColor = darkBlue)}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgb(209, 213, 219)")
              }
            />
          </div>

          {/* PHONE NUMBER & BEST TIME TO CALL */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  value={formData.phone || ""}
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
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  BEST TIME TO CALL <span className="text-red-600">*</span>
                </label>
                <select
                  name="bestTimeToCall"
                  value={formData.bestTimeToCall}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-white appearance-none"
                  style={{
                    borderColor: "rgb(209, 213, 219)",
                    color: darkBlue,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgb(209, 213, 219)")
                  }
                >
                  <option value="">- Please Select -</option>
                  <option value="Anytime">Anytime</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>
          </div>

          {/* email and fax */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  placeholder="Enter email here"
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
                  FAX
                </label>
                <input
                  type="text"
                  name="fax"
                  value={formData.fax || ""}
                  onChange={handlePhoneChange}
                  placeholder="(XXX) XXX-XXXX"
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
          </div>

          {/* CONTACT METHOD */}
          <div>
            <label
              className="block text-lg font-semibold mb-3"
              style={{ color: darkBlue }}
            >
              HOW DO YOU PREFER TO BE CONTACTED?{" "}
              <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === "phone"}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{ accentColor: darkBlue }}
                />
                <span style={{ color: darkBlue }}>Phone</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{ accentColor: darkBlue }}
                />
                <span style={{ color: darkBlue }}>Email</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="fax"
                  checked={formData.contactMethod === "fax"}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{ accentColor: darkBlue }}
                />
                <span style={{ color: darkBlue }}>Fax</span>
              </label>
            </div>
          </div>
          {/* QUESTION / COMMENT */}
          <div>
            <label
              className="block text-lg font-semibold mb-2"
              style={{ color: darkBlue }}
            >
              MESSAGE OR CONCERN <span className="text-red-600">*</span>
            </label>
            <textarea
              name="question"
              onChange={handleChange}
              value={formData.question}
              placeholder="Enter your message here"
              rows={5}
              required
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none"
              style={{
                borderColor: "rgb(209, 213, 219)",
                color: darkBlue,
              }}
            />
          </div>
          {/* Submit Button */}
          <div className="mt-4">
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
}
