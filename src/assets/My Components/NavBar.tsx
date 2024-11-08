import { Codesandbox } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { Drawer } from "../ShadCNComponents/Drawer";
import { useNavigate } from "react-router-dom";
export default function MyNavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="z-50 w-full bg-translucent backdrop-blur-md  fixed top-0">
        <div className=" container my-5 px-5 flex justify-between ">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="flex flex-row"
          >
            <Codesandbox></Codesandbox>
            <h2 className="text-xl"> Queens College</h2>
          </div>

          <div className="flex justify-center items-center">
            <Switch />
            <div className="ms-3">
              <Drawer></Drawer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
