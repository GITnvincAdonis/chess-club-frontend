import { Codesandbox } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { Drawer } from "../ShadCNComponents/Drawer";
export default function MyNavBar() {
  return (
    <>
      <div className="z-50 w-full bg-translucent backdrop-blur-md p-5 fixed top-0">
        <div className="container px-5 flex justify-between ">
          <div className="flex flex-row">
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