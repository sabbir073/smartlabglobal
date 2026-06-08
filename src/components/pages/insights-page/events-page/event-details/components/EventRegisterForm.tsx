"use client";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import InputFieldWrapper from "@/components/common/fieldWrapper/InputFieldWrapper";
import Modal from "@/components/common/modal/modal";
import SuccessToast from "@/components/common/toast/SuccessToast";
import { Content } from "@/components/common/typography";
import api from "@/config/api/apiList";
import useHTTP from "@/hooks/useHTTP";
import React, { useState } from "react";

type Props = {
  slug: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
  job_title: string;
  phone: string;
  event_slug: string;
};

const EventRegisterForm = ({ slug, setIsModalOpen }: Props) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isToastModalOpen, setIsToastModalOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const { PostData, isLoading } = useHTTP();
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    job_title: "",
    phone: "",
    event_slug: slug,
  };
  const [form, setForm] = useState<FormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this specific field
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await PostData({
        api: api.page.eventRegister,
        body: form,
        showSuccessAlert: false,
      });

      if (res.success) {
        setErrors({});
        setForm(initialState);

        // Show modal and progress bar
        setIsToastModalOpen(true);
        setShowBar(true);

        setTimeout(() => {
          setIsToastModalOpen(false);
          setShowBar(false);
          setIsModalOpen(false);
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
    <div>
      <form onSubmit={handleSubmit} className="w-full mx-auto mt-10 lg:mt-0 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InputFieldWrapper
            label="First Name"
            type="text"
            name="first_name"
            placeholder=""
            value={form.first_name}
            onChange={handleChange}
            required
            error={errors.first_name}
          />
          <InputFieldWrapper
            label="Last Name"
            type="text"
            name="last_name"
            placeholder=""
            value={form.last_name}
            onChange={handleChange}
            required
            error={errors.last_name}
          />
          <InputFieldWrapper
            label="E-mail"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputFieldWrapper
            label="Organization"
            type="text"
            name="organization"
            placeholder=""
            value={form.organization}
            onChange={handleChange}
            error={errors.organization}
          />
          <InputFieldWrapper
            label="Job Title"
            type="text"
            name="job_title"
            placeholder=""
            value={form.job_title}
            onChange={handleChange}
            error={errors.job_title}
          />
          <InputFieldWrapper
            label="Phone Number"
            type="text"
            name="phone"
            placeholder=""
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
        </div>

        <Content className="text-[#FFFFFF] !mt-14">
          By clicking on the submit button, you agree with the Privacy Policy
        </Content>

        <div className="text-center lg:text-start">
          <PrimaryButton
            variant="dark"
            type="submit"
            className=" bg-[#F4F4F4] text-[#414042] max-h-[50px] md:max-w-[197px] md:w-full !w-[100px]"
            disabled={isLoading}
          >
            {isLoading ? "Loading.." : "Submit"}
          </PrimaryButton>
        </div>
      </form>
      <div>
        <Modal
          isOpen={isToastModalOpen}
          onClose={() => setIsToastModalOpen(false)}
          className="bg-[#FFFFFFCF] rounded-[20px] text-white w-full h-full max-w-[505px] max-h-[207px] p-5"
        >
          <SuccessToast showBar={showBar} />
        </Modal>
      </div>
    </div>
  );
};

export default EventRegisterForm;
