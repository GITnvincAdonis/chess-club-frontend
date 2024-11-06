import MyNavBar from "../My Components/NavBar";
import RepCarousel from "../ShadCNComponents/DemoCarousel";

export default function ExecPage() {
  return (
    <>
      <MyNavBar></MyNavBar>
      <div className="h-full mt-[6rem] flex flex-col justify-center items-center">
        <div className=" flex flex-col items-center lg:pb-[6rem] pb-[2rem]">
          <h1 className="lg:text-5xl text-2xl font-bold lg:text-start text-center">
            QC Representatives
          </h1>
          <h3 className="lg:text-2xl font-light">
            Get to know our club officials
          </h3>
        </div>
        <div className="mt-2 flex flex-col mb-[5rem] ">
          <div className=" mx-[5rem]">
            <h3 className="ps-3 lg:text-2xl font-semibold  text-center">
              Student Representatives
            </h3>
            <RepCarousel></RepCarousel>
          </div>
          <div className="mx-[5rem] p-0 lg:mt-[5rem] mt-[2rem]">
            <h3 className="ps p-0-3 lg:text-2xl font-semibold text-center">
              teacher Represenatives
            </h3>
            <RepCarousel></RepCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
