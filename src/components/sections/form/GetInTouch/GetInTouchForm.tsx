"use client";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import DropdownComponent from "@/components/common/dropdown";
import InputFieldWrapper from "@/components/common/fieldWrapper/InputFieldWrapper";
import Modal from "@/components/common/modal/modal";
import { Content } from "@/components/common/typography";
import api from "@/config/api/apiList";
import useHTTP from "@/hooks/useHTTP";
import React, { useEffect, useState } from "react";
import SuccessToast from "@/components/common/toast/SuccessToast";

type FormState = {
  subject: any[0] | null;
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
  job_title: string;
  phone: string;
  message: string;
  country_id: any[0] | null;
};

const GetInTouchForm = ({ query, countries }: any) => {
  const [queryList, setQueryList] = useState<any[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const { PostData, isLoading } = useHTTP();

  useEffect(() => {
    if (query) {
      let data: { key: string; value: string }[] = [];

      for (let [key, value] of Object.entries(query)) {
        //@ts-ignore
        data.push({ key, value });
      }
      setQueryList(data);
    }
  }, [query]);
  const initialState = {
    subject: null,
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    job_title: "",
    phone: "",
    message: "",
    country_id: null,
  };
  const [form, setForm] = useState<FormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Allow only numbers for phone field
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // Remove all non-digits
      setForm((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this specific field
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const formErrors: any = {}

    if (!form?.first_name) {
      formErrors.first_name = "Field cannot be empty.";
    }
    if (!form?.email) {
      formErrors.email = "Field cannot be empty.";
    }
    if (!form?.country_id) {
      formErrors.country_id = "Field cannot be empty.";
    }
    if (!form?.message) {
      formErrors.message = "Field cannot be empty.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Validate email before submission
    if (!emailRegex.test(form.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return;
    }

    const transformedData = {
      ...form,
      subject: form.subject?.value || "",
    };

    try {
      const res = await PostData({
        api: api.page.contact_form,
        body: transformedData,
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
    <div>
      <form onSubmit={handleSubmit} className="w-full mx-auto  space-y-6">
        <DropdownComponent
          data={queryList}
          displayKey="value"
          value={form.subject}
          onItemClick={({ item }) => {
            setForm((prev) => ({ ...prev, subject: item }));
            setErrors((prev) => {
              const newErrors = { ...prev };
              delete newErrors.subject;
              return newErrors;
            });
          }}
          placeholder="Type of query"
          containerClassName="w-full"
          iconColor="#fff"
          buttonClassName="border-b border-white bg-transparent pl-0 font-medium !bg-[#4D4D4F] dark:!bg-[#1e1e1e]"
          selectedItemClassName="text-white capitalize"
          required
          error={errors.subject}
        />
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
            required
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
            type="tel"
            name="phone"
            placeholder=""
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>
        <DropdownComponent
          data={countries}
          displayKey="name"
          value={countries.find((c: any) => c.id === form.country_id) || null}
          onItemClick={({ item }) => {
            setForm((prev) => ({ ...prev, country_id: item.id }));
            setErrors((prev) => {
              const newErrors = { ...prev };
              delete newErrors.country_id;
              return newErrors;
            });
          }}
          placeholder="Select a country"
          containerClassName="w-full"
          iconColor="#fff"
          buttonClassName="border-b border-white bg-transparent pl-0 font-medium !bg-[#4D4D4F] dark:!bg-[#1e1e1e]"
          selectedItemClassName="text-white capitalize"
          required
          error={errors.country_id}
        />

        <InputFieldWrapper
          label="Message"
          type="textarea"
          name="message"
          placeholder="Tell us about your fantastic project"
          value={form.message}
          onChange={handleChange}
          className="h-12 mt-5"
          required
          error={errors.message}
        />
        <Content className="text-[#FFFFFF] !text-base">
          Start a conversation with us by filling out the form.
        </Content>

        <div className="text-center lg:text-start !mt-10">
          <PrimaryButton
            variant="light"
            type="submit"
            className="px-[30px] min-w-[197px]"
            disabled={isLoading}
          >
            {isLoading ? "Loading.." : "Submit"}
          </PrimaryButton>
        </div>
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
    </div>
  );
};

export default GetInTouchForm;
