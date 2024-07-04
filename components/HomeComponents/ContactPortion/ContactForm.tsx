"use client";

import Button2 from "@/components/Common/Button2";
import { emailPublicKey, emailServiceId, emailTemplateId } from "@/lib/envs";
import { slideIn } from "@/lib/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SendIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const initialData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        emailServiceId!,
        emailTemplateId!,
        {
          from_name: formData.name,
          to_name: "MD ARIFUL HASAN",
          from_email: formData.email,
          to_email: "mdahtotul@gmail.com",
          message: formData.message,
        },
        emailPublicKey
      )
      .then(() => {
        setFormData(initialData);
        formRef.current?.reset();
        alert(
          "Thank you for your message. I'll get back to you as soon as possible."
        );
      })
      .catch((error) => {
        alert("Something went wrong. Please try again.");
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-secondary_white dark:bg-secondary_black p-8 rounded-2xl"
    >
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="mt-10 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-primary_black dark:text-primary_white font-medium mb-4">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="bg-secondary_white dark:bg-secondary_black py-4 px-6 placeholder:text-secondary_gray outline-none rounded-lg font-medium border dark:border-primary_gray"
            onChange={handleChange}
            placeholder="What's your name?"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-primary_black dark:text-primary_white font-medium mb-4">
            Your Email
          </span>
          <input
            type="text"
            name="email"
            value={formData.email}
            className="bg-secondary_white dark:bg-secondary_black py-4 px-6 placeholder:text-secondary_gray outline-none rounded-lg font-medium border dark:border-primary_gray"
            onChange={handleChange}
            placeholder="What's your email?"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-primary_black dark:text-primary_white font-medium mb-4">
            Your Message
          </span>
          <textarea
            rows={7}
            name="message"
            value={formData.message}
            className="bg-secondary_white dark:bg-secondary_black py-4 px-6 placeholder:text-secondary_gray outline-none rounded-lg font-medium border dark:border-primary_gray"
            onChange={handleChange}
            placeholder="What do you want to say?"
            required
          />
        </label>

        <Button2
          type="submit"
          variant="orange"
          size="lg"
          isLoading={isLoading}
          isDisabled={isLoading}
          className="w-max"
        >
          Send{" "}
          <SendIcon className="w-4 h-4 text-primary_black dark:text-primary_white" />{" "}
        </Button2>
      </form>
    </motion.div>
  );
}
