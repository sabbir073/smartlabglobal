"use client";
import { useState } from "react";
import ButtonComponent from "../button";
import api from "@/config/api/apiList";
import useHTTP from "@/hooks/useHTTP";
import Modal from "../modal/modal";
import SuccessToast from "../toast/SuccessToast";
type FormState = {
  // subject: any[0] | null;
  first_name: string;
  email: string;
  message: string;
};
const Subscribe = () => {
  const initialState = {
    // subject: "error",
    first_name: "Page not found",
    email: "",
    message: "Not Found",
  };
  const { PostData, isLoading } = useHTTP();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [form, setForm] = useState<FormState>(initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const formErrors: any = {};
    if (!form?.email) {
      formErrors.email = "Field cannot be empty.";
    }

    // Validate email before submission
    if (!emailRegex.test(form.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return;
    }

    try {
      const res = await PostData({
        api: api.page.contact_form,
        body: form,
        showLoader: false,
        showSuccessAlert: false,
      });

      if (res.success) {
        setErrors({});
        setForm(initialState);
        // Show modal and progress bar
        setIsModalOpen(true);
        setShowBar(true);

        setTimeout(() => {
          setIsModalOpen(false);
          setShowBar(false);
        }, 2000);
      } else {
        if (res?.error) {
          const errorArray = res?.error?.response?.data?.errors;
          console.error(errorArray);
          const extractedErrors: { [key: string]: string } = {};
          Object.entries(errorArray).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              extractedErrors[key] = value[0];
            }
          });
          setErrors(extractedErrors);
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-[16px] md:px-0 px-4 w-full mx-auto flex "
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-2  w-[80%]  rounded-l-full outline-none focus:outline-none active:outline-none   !bg-[#EFEFEF]  !text-[#757575] dark:!bg-[#EFEFEF] dark:!text-[#757575]"
        />
        <ButtonComponent
          type="submit"
          className="px-4 py-1 sm:px-12 sm:py-2 bg-[#414042] text-white rounded-r-full text-[14px] font-poppins"
        >
          Subscribe
        </ButtonComponent>
      </form>
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="bg-[#FFFFFFCF] rounded-[20px] text-white w-full h-full max-w-[505px] max-h-[207px] p-5"
        >
          <SuccessToast showBar={showBar} />
        </Modal>
      </div>
    </>
  );
};

export default Subscribe;
