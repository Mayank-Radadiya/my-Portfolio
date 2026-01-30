"use client";

import { Meteors } from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageSquare, User, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ),
        {
          loading: "Sending...",
          success: "Thank you! I will get back to you as soon as possible.",
          error: "Ahh, something went wrong. Please try again.",
        }
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <Meteors number={30} />

      <div className="w-full flex items-center justify-center flex-col z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent tracking-tight">
            Let's Connect
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and
            I'll get back to you soon.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-center  gap-8 ">
          {/* Contact Form */}
          <Card className="relative overflow-hidden backdrop-blur-sm bg-card/95 shadow-2xl border-2">
            <CardHeader className="space-y-1 pb-6 pt-8 px-8">
              <h2 className="text-3xl font-bold text-center mb-2">
                Send a Message
              </h2>
              <p className="text-center text-muted-foreground text-sm">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <User className="h-4 w-4 text-primary" />
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className="h-11 transition-all"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="h-11 transition-all"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={form.message}
                    onChange={handleChange}
                    className="min-h-[140px] resize-none transition-all"
                    required
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {form.message.length} characters
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
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
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>

            <BorderBeam duration={12} size={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
