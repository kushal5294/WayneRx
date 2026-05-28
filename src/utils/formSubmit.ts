import axios from "axios";
import { useModalStore } from "../store/modalStore";

const buildPayload = (formData: any) => {
  const fd = formData.formData;

  return {
    // Basic info
    firstName: fd.firstName || "",
    lastName: fd.lastName || "",
    email: fd.email || "",
    phone: fd.phone || "",
    address: fd.address || "",
    dob: fd.dob || "",
    fax: fd.fax || "",
    formType: fd.form || "",

    // Form-specific fields
    service: fd.service || "",
    date: fd.date || "",
    time: fd.time || "",
    question: fd.question || "",
    autoRefill: fd.autoRefill || false,
    notification: fd.notification || "",
    pickupMethod: fd.pickupMethod || "",
    delivery: fd.delivery || false,
    contactMethod: fd.contactMethod || "",
    oldPharmacyName: fd.oldPharmacyName || "",
    oldPharmacyPhone: fd.oldPharmacyPhone || "",

    // Prescriptions / transfers
    rxNumbers: formData.rxNumbers || [],
    prescriptions: formData.prescriptions || [],
    transferAll: formData.transferAll || false,
  };
};

const sendEmail = async (formData: any) => {
  const payload = buildPayload(formData);

  try {
    await axios.post("https://brightonrxpharmacy.com/api/send-email", payload, {
      headers: { "Content-Type": "application/json" },
    });

    useModalStore.getState().openModal({
      title: "Submission Received",
      message:
        "Thank you for your submission. We will get back to you shortly.",
      status: "success",
    });
  } catch (error) {
    console.error(error);
    useModalStore.getState().openModal({
      title: "Submission Failed",
      message:
        "There was an error submitting your form. Please try again later.",
      status: "error",
    });
  }
};

export const handleFormSubmit = async (formData: any, setIsLoading: any) => {
  setIsLoading(true);
  await sendEmail(formData);
  setIsLoading(false);
};
