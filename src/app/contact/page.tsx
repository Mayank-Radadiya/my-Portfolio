"use client";

import { Meteors } from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await toast.promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: form.name,
            to_name: "Mayank",
            from_email: form.email,
            to_email: "mayankradadiya2@gmail.com",
            message: `Gmail:  ${form.email}  \n \n Message:  ${form.message}`,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        ),
        {
          loading: "Sending...",
          success: "Thank you! I will get back to you as soon as possible.",
          error: "Ahh, something went wrong. Please try again.",
        },
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <Meteors number={20} />

      <div className="w-full flex items-center justify-center flex-col z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="relative overflow-hidden w-full max-w-lg border bg-card/95 backdrop-blur-sm shadow-xl">
          <CardHeader className="space-y-1 pb-4 pt-6 px-6">
            <h2 className="text-xl font-semibold font-heading text-center">
              Send a Message
            </h2>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <User className="h-3.5 w-3.5 text-primary" />
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="h-10 transition-colors focus:border-primary"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="h-10 transition-colors focus:border-primary"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-primary" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none transition-colors focus:border-primary"
                  required
                />
                <p className="text-[11px] text-muted-foreground text-right">
                  {form.message.length} characters
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-11 font-medium transition-all duration-300 cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </CardContent>

          <BorderBeam duration={12} size={350} />
        </Card>
      </div>
    </div>
  );
}
