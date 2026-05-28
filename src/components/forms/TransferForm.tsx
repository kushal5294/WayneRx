import { useState } from "react";
import { Trash2 } from "lucide-react";
import { darkBlue } from "../../utils/constants";
import { handleFormSubmit } from "../../utils/formSubmit";

interface PrescriptionRow {
  id: number;
  name: string;
  RxNumber: string;
}

export default function TransferForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    form: "transfer",
    lastName: "",
    firstName: "",
    phone: "",
    dob: "",
    address: "",
    oldPharmacyName: "",
    oldPharmacyPhone: "",
  });

  const [prescriptions, setPrescriptions] = useState<PrescriptionRow[]>([
    { id: 1, name: "", RxNumber: "" },
  ]);

  const [transferAll, setTransferAll] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    if (value.length > 4) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    } else if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    setFormData((prev) => ({
      ...prev,
      dob: value,
    }));
  };

  const handlePrescriptionChange = (
    id: number,
    field: "name" | "RxNumber",
    value: string
  ) => {
    setPrescriptions((prev) =>
      prev.map((rx) => (rx.id === id ? { ...rx, [field]: value } : rx))
    );
  };

  const addPrescription = () => {
    const newId =
      prescriptions.length > 0
        ? Math.max(...prescriptions.map((p) => p.id)) + 1
        : 1;
    setPrescriptions([...prescriptions, { id: newId, name: "", RxNumber: "" }]);
  };

  const deletePrescription = (id: number) => {
    setPrescriptions((prev) => prev.filter((rx) => rx.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleFormSubmit(
      { formData, prescriptions, transferAll },
      setIsLoading
    );
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

          {/* PHONE NUMBER & DOB */}
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
                  DOB <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="dob"
                  value={formData.dob || ""}
                  onChange={handleDobChange}
                  placeholder="MM/DD/YYYY"
                  required
                  maxLength={10}
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

          {/* Old info */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: darkBlue }}
                >
                  PHARMACY NAME <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="oldPharmacyName"
                  value={formData.oldPharmacyName || ""}
                  onChange={handleChange}
                  placeholder="Enter pharmacy name here"
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
                  PHARMACY PHONE <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="oldPharmacyPhone"
                  value={formData.oldPharmacyPhone || ""}
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
          </div>

          {/* Transfer PRESCRIPTIONS */}
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: darkBlue }}>
              PRESCRIPTIONS TO BE TRANSFERRED
            </h3>
            <div className="flex items-center gap-2 mb-4 pt-4 pb-4">
              <input
                type="checkbox"
                id="transferAll"
                checked={transferAll}
                onChange={(e) => setTransferAll(e.target.checked)}
                className="w-5 h-5"
                style={{ accentColor: darkBlue }}
              />
              <label htmlFor="transferAll" style={{ color: darkBlue }}>
                If you would like to transfer all prescriptions, simply check
                the box
              </label>
            </div>

            {!transferAll && (
              <>
                <p className="text-lg mb-4" style={{ color: darkBlue }}>
                  List Specific Prescriptions To Be Transferred
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div
                    className="border-2 font-bold px-4 py-3 rounded-lg flex items-center justify-center"
                    style={{ borderColor: darkBlue, color: darkBlue }}
                  >
                    MEDICATION NAME
                  </div>
                  <div
                    className="border-2 font-bold px-4 py-3 rounded-lg text-center"
                    style={{ borderColor: darkBlue, color: darkBlue }}
                  >
                    PRESCRIPTION # FROM CURRENT PHARMACY
                  </div>
                </div>

                {prescriptions.map((prescription) => (
                  <div
                    key={prescription.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                  >
                    <div>
                      <input
                        type="text"
                        value={prescription.name || ""}
                        onChange={(e) =>
                          handlePrescriptionChange(
                            prescription.id,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Enter name here"
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
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={prescription.RxNumber || ""}
                        onChange={(e) =>
                          handlePrescriptionChange(
                            prescription.id,
                            "RxNumber",
                            e.target.value
                          )
                        }
                        placeholder="Enter prescription number here"
                        className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                        style={{
                          borderColor: "rgb(209, 213, 219)",
                          color: darkBlue,
                        }}
                        onFocus={(e) => (e.target.style.borderColor = darkBlue)}
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgb(209, 213, 219)")
                        }
                      />
                      {prescriptions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => deletePrescription(prescription.id)}
                          className="w-12 h-12 flex items-center justify-center border-2 rounded-lg transition-all flex-shrink-0"
                          style={{
                            borderColor: "rgb(156, 163, 175)",
                            color: "rgb(75, 85, 99)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgb(243, 244, 246)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                          title="Delete prescription"
                        >
                          <Trash2 size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addPrescription}
                  className="flex items-center gap-2 px-6 py-3 border-2 font-semibold rounded-lg transition-all"
                  style={{ borderColor: darkBlue, color: darkBlue }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(243, 244, 246)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span className="text-xl">+</span>
                  Add Prescription
                </button>
              </>
            )}
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
