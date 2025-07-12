import { useState } from "react";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { DirectboxReceive, Location } from "iconsax-react";
import { useForm } from "react-hook-form";
import { MdMail, MdPhone } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";

import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

emailjs.init("pWy_1lvvyxQ2tto4T");

const contactSchema = z.object({
  user_name: z.string().min(2, "Name is required"),
  user_email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    try {
      await emailjs.send("service_9w5trja", "template_xgqb1qu", {
        ...data,
        reply_to: data.user_email,
      });

      toast.success("Message sent successfully!");
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      toast.error(error as string);
    }
  };

  return (
    <div className="relative mx-auto h-full min-h-screen w-full overflow-auto bg-black text-white px-1 md:px-5 lg:px-0">
      <Nav />
      <div className="mx-auto h-full w-full max-w-[1440px] items-center justify-center p-2 pt-22 lg:pt-36">
        <div className="flex flex-col gap-16 rounded-3xl bg-white/8 px-2 py-16 lg:px-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="text-white/60">Contact</span>
            <h1 className="text-center text-4xl font-semibold text-white/80 lg:text-left lg:text-5xl">
              Get in Touch With Me!
            </h1>
          </div>

          <div className="mx-auto flex w-full flex-col gap-6 text-white/80 lg:grid lg:grid-cols-3 lg:px-7">
            <div className="col-span-1 flex flex-col items-start justify-center gap-10 rounded-3xl border border-white/10 px-10 py-16">
              <div className="flex flex-col gap-2">
                <Location className="size-6 fill-[#00a988]" variant={"Bold"} />
                <h1 className="text-base">Office:</h1>
                <span className="text-lg text-white/50">
                  32 Block-N, Johar-Town, Lahore
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <MdPhone className="size-6 fill-[#00a988]" />
                <h1 className="text-base">Contact Number:</h1>
                <span className="text-lg text-white/50">+92 304 8266031</span>
              </div>
              <div className="flex flex-col gap-2">
                <MdMail className="size-6 fill-[#00a988]" />
                <h1 className="text-base">Mail:</h1>
                <span className="text-lg text-white/50">
                  asimtassaduqwork@gmail.com
                </span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="col-span-2 flex flex-col items-center justify-center gap-5 rounded-3xl border border-white/10 px-5 py-10 lg:px-10"
            >
              <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <Label className="px-2">Full Name</Label>
                  <input
                    {...register("user_name")}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl bg-white/8 p-5"
                  />
                  {errors.user_name && (
                    <p className="px-2 text-sm text-red-500">
                      {errors.user_name.message}
                    </p>
                  )}
                </div>

                <div className="flex w-full flex-col gap-2">
                  <Label className="px-2">Email Address</Label>
                  <input
                    {...register("user_email")}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl bg-white/8 p-5"
                  />
                  {errors.user_email && (
                    <p className="px-2 text-sm text-red-500">
                      {errors.user_email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <textarea
                  {...register("message")}
                  placeholder="Enter your message"
                  className="w-full resize-none rounded-3xl bg-white/8 p-5"
                  rows={9}
                />
                {errors.message && (
                  <p className="px-2 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex w-full items-center justify-end">
                <Button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-[#00a988] p-6 text-lg text-white hover:bg-[#007e64]"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Mail"}
                  <DirectboxReceive
                    className="ml-2 size-6 fill-white text-black"
                    variant={"Bulk"}
                  />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-3 p-2 lg:mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
