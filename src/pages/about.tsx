import { Book } from "iconsax-react";

import User from "@/assets/img/Image.png";
import Footer from "@/components/footer";
import Nav from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { education, experiences, testimonials } from "@/lib/constants";

const About = () => {
  return (
    <div className="mx-auto h-full w-full overflow-auto bg-black pt-36 text-white">
      <Nav />
      {/* Intro  */}
      <div className="mx-auto grid h-full w-full max-w-[1455px] grid-cols-3 items-center justify-center gap-4 p-2">
        <div className="col-span-1 flex items-center justify-center rounded-3xl bg-white/8 p-5">
          <img
            src={User}
            alt=""
            className="h-[500px] shrink-0 rounded-2xl object-cover"
          />
        </div>
        <div className="col-span-2 mx-auto flex w-full flex-col items-start justify-center gap-10">
          <div className="flex w-full flex-col items-start justify-center gap-5 rounded-3xl bg-white/8 p-15">
            <h1 className="text-4xl font-semibold text-white/70">
              Hi! I'm Asim Ali - Frontend Developer
            </h1>
            <h1 className="text-justify text-xl text-pretty text-white/50">
              Hello — a front-end developer who loves turning creative ideas
              into smooth, responsive, and user-friendly websites. I work mainly
              with React, Next.js, TypeScript (TSX), and Tailwind CSS, focusing
              on building interfaces that not only look great but also feel
              great to use. Whether it's bringing a Figma design to life or
              optimizing layouts for different devices.
            </h1>
            <h1 className="text-justify text-xl text-pretty text-white/50">
              I enjoy paying attention to the little details that improve the
              overall experience. Over time, I've worked on a range of projects
              — from dynamic dashboards to product landing pages — always aiming
              to write clean, maintainable code. I enjoy collaborating with
              designers and back-end developers to create products that are both
              functional and visually appealing. When I'm not coding, you'll
              probably find me exploring new UI patterns, learning cool new dev
              tools, or refining components until they just feel right. I'm
              always up for learning something new and pushing the boundaries of
              what the web can do. Let's build something awesome.
            </h1>
          </div>
        </div>
      </div>
      {/* Experience & Education */}
      <div className="mx-auto grid h-full w-full max-w-[1455px] grid-cols-2 items-center justify-center gap-6 p-2 pt-5">
        <div className="col-span-1 flex items-center justify-center rounded-3xl bg-white/8 p-5">
          <section className="w-full px-4 py-5 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border-none bg-transparent text-white/70"
                >
                  <CardContent className="flex items-start gap-4 p-3">
                    <div className="rounded-lg bg-zinc-800 p-2">
                      <Book
                        variant="Bold"
                        className="size-10 fill-white text-white"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center gap-2">
                      <p className="text-muted-foreground text-sm">
                        {exp.date}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-sm">{exp.role}</p>
                    </div>
                  </CardContent>
                  <div className="mx-auto mt-3 flex w-full items-center justify-center border border-white/10"></div>
                </Card>
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-1 flex items-center justify-center rounded-3xl bg-white/8 p-5">
          <section className="w-full px-4 py-5 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-none bg-transparent text-white/70"
                >
                  <CardContent className="flex items-start gap-4 p-3">
                    <div className="rounded-lg bg-zinc-800 p-2">
                      <Book
                        variant="Bulk"
                        className="size-10 fill-white text-white"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center gap-2">
                      <p className="text-muted-foreground text-sm">
                        {edu.date}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">
                        {edu.title}
                      </h3>
                      <p className="mt-1 text-sm">{edu.company}</p>
                    </div>
                  </CardContent>
                  <div className="mx-auto mt-3 flex w-full items-center justify-center border border-white/10"></div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* Testimonials */}
      <div className="mx-auto h-full w-full max-w-[1455px] items-center justify-center gap-6 p-2 pt-5">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 rounded-3xl bg-white/8 px-5 py-16">
          <div className="mx-auto flex w-full flex-col items-center justify-center text-white/70">
            <h2 className="mb-6 text-2xl font-semibold">Testimonials</h2>
            <p className="mb-6 text-5xl font-medium">What Colleagues Say!</p>
          </div>
          <div className="relative">
            <Carousel className="relative mx-auto w-full max-w-7xl">
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/2"
                  >
                    <div className="p-2">
                      <Card className="h-full rounded-2xl border border-white/10 bg-[#161616] text-white">
                        <CardContent className="flex h-full flex-col justify-between gap-5 p-6">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                          <p className="text-muted-foreground text-base leading-relaxed">
                            {item.testimonial}
                          </p>

                          <div>
                            <h4 className="text-lg font-semibold text-white/60">
                              {item.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {item.title}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default About;
