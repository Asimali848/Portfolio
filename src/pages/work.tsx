import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import WorkProject from "@/components/work-project";

const Work = () => {
  return (
    <div className="relative mx-auto h-full min-h-screen w-full overflow-auto bg-black text-white">
      <Nav />
      <div className="mx-auto h-full w-full max-w-[1440px] items-center justify-center p-2 pt-22 lg:pt-36">
        <WorkProject />
      </div>
      <div className="p-2 pt-6 lg:mt-44">
        <Footer />
      </div>
    </div>
  );
};

export default Work;
