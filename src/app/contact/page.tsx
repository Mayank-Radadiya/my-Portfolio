"use client";
import { Meteors } from "@/components/magicui/meteors";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Page: NextPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
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
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    toast
      .promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: form.name,
            to_name: "Mayank",
            from_email: form.email,
            to_email: "mayankradadiya2@gmail.com",
            message: `${form.email} ${form.message}`,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ),
        {
          loading: "Sending...",
          success: "Thank you! I will get back to you as soon as possible.",
          error: "Ahh, something went wrong. Please try again.",
        }
      )
      .then(() => {
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Meteors number={50} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Contact Me
      </span>
      <Card className="relative w-[350px] overflow-hidden p-8 mt-4">
        <CardHeader>
          <CardDescription className="text-center mb-4">
            Fill out the form below to get in touch!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <CardFooter className="flex items-center justify-end">
              <Button
                type="submit"
                className="hover:shadow-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2" /> Send
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
        <BorderBeam duration={8} size={250} />
      </Card>
    </div>
  );
};

export default Page;
