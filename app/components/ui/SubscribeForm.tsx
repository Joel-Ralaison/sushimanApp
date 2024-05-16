"use client";

import { FormEvent } from "react";
import Button from "./Reusables/Button";
import emailjs from "@emailjs/browser";

export default function SubscribeForm() {
  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publickey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

    try {
      emailjs
        .sendForm(serviceId, templateId, form, {
          publicKey: publickey,
        })
        .then(() => {
          alert("Message sent");
        });
    } catch (error) {
      alert("Failed to send message ");
    }
  }

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex w-[90%] gap-4 rounded-lg border border-transparent bg-white/30 py-1 pl-5 pr-2 backdrop-blur-sm focus-within:border-white/30 md:w-[50%]"
    >
      <input
        name="email"
        type="email"
        aria-label="email"
        placeholder="Enter your email"
        className="w-[100%] border-b border-black/25 bg-transparent pt-1 text-lg text-white outline-none placeholder:font-extralight placeholder:text-zinc-100 max-md:text-base"
      />

      <Button
        impact="primary"
        size="small"
        shape="normal"
        hoverShape="normal"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  );
}
