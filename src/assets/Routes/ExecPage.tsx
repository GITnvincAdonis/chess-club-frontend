import { ScrollArea } from "@radix-ui/react-scroll-area";
import MyNavBar from "../My Components/NavBar";
import RepCarousel, {
  DefaultOfficialCarousel,
} from "../ShadCNComponents/RepCarousel";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetStudentofficials, GetTeacherOfficials } from "@/APIs/Api";

type Repofficials = {
  name: string;
  club_pos: string;
  email: string;
  image_cloud_id: string;
};

export default function ExecPage() {
  const [studentofficials, SetStudentOfficials] = useState<Repofficials[]>([]);
  const [Teacherofficials, setTeacherofficials] = useState<Repofficials[]>([]);

  const {
    data: students,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => GetStudentofficials(),
    queryKey: ["studentOffs"],
  });
  if (isLoading) console.log("loading student officials");
  if (isError) console.log(error.message);

  useEffect(() => {
    console.log(students);
    if (students) SetStudentOfficials(students);
  }, [students]);

  /////////////////////////
  const {
    data: teachers,
    isError: isError2,
    isLoading: isLoading2,
    error: error2,
  } = useQuery({
    queryFn: async () => GetTeacherOfficials(),
    queryKey: ["teacheroffs"],
  });
  if (isLoading2) console.log("loading teacher officials");
  if (isError2) console.log(error2.message);

  useEffect(() => {
    console.log(teachers);
    if (teachers) setTeacherofficials(teachers);
  }, [teachers]);

  //debugging
  useEffect(() => {
    console.log(studentofficials);
  }, [studentofficials]);
  useEffect(() => {
    console.log(Teacherofficials);
  }, [Teacherofficials]);
  return (
    <>
      <ScrollArea className="h-full">
        <MyNavBar></MyNavBar>
        <div className=" mt-[6rem] flex flex-col justify-center w-full items-center">
          <div className=" flex flex-col items-center  lg:pb-[6rem] pb-[2rem]">
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
              {studentofficials.length > 0 && (
                <RepCarousel officials={studentofficials}></RepCarousel>
              )}
              {studentofficials.length == 0 && (
                <DefaultOfficialCarousel></DefaultOfficialCarousel>
              )}
            </div>
            <div className="mx-[5rem] p-0 lg:mt-[5rem] mt-[2rem]">
              <h3 className="ps p-0-3 lg:text-2xl font-semibold text-center">
                teacher Represenatives
              </h3>
              {Teacherofficials.length > 0 && (
                <RepCarousel officials={Teacherofficials}></RepCarousel>
              )}

              {Teacherofficials.length == 0 && (
                <DefaultOfficialCarousel></DefaultOfficialCarousel>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
