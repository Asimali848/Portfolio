import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ClipSort",
    category: "Branding",
    image:
      "https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work1.jpg",
  },
  {
    id: 2,
    title: "Estimator AI-Consturction Plan",
    category: "AI Design",
    image:
      "	https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work2.jpg",
  },
  {
    id: 3,
    title: "True-Mail",
    category: "Product Design",
    image:
      "	https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work3.jpg",
  },
  {
    id: 4,
    title: "Methology",
    category: "Study Plateform",
    image:
      "https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work4.jpg",
  },
  {
    id: 5,
    title: "EDGE-SWAGTASTIC",
    category: "Branding",
    image:
      "	https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work5.jpg",
  },
  {
    id: 6,
    title: "PimPact",
    category: "SEO Plateform",
    image:
      "	https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work6.jpg",
  },
];

const tabs = [
  "Show All",
  "AI Design",
  "Product Design",
  "Branding",
  "Study Plateform",
  "SEO Plateform",
];

const WorkProject = () => {
  const [activeTab, setActiveTab] = useState("Show All");

  const filteredProjects =
    activeTab === "Show All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="mx-auto min-h-full w-full max-w-[1440px] rounded-3xl bg-white/8 backdrop-blur-3xl">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-6 py-10 text-white/80">
        <h1 className="text-4xl font-medium lg:text-6xl">Works & Projects</h1>
        <p className="w-full text-center text-lg text-pretty text-white/60 lg:w-1/2">
          Check out some of my design projects, thoughtfully built with
          precision and care. Each interface showcases my passion for clean
          code, responsive design, and seamless user experiences.
        </p>
      </div>
      <div className="mx-auto h-full w-full p-7 text-white lg:p-10">
        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm transition-all md:text-base ${
                activeTab === tab
                  ? "border-b-2 border-[#00a988] text-[#00a988]"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer rounded-2xl border-r border-b border-l border-white/10 bg-[#1c1c1c] p-3 shadow-[#00a988]/10 transition hover:scale-[1.02] hover:border-[#00a988]/10 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full rounded object-cover"
              />
              <div className="mt-3 text-sm text-gray-400">
                {project.category}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProject;
