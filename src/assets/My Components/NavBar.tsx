import { Switch } from "@/components/ui/switch";
import { Drawer } from "../ShadCNComponents/Drawer";
import { useNavigate } from "react-router-dom";
import QCLOGO from "@/SVGS/QCLOGO";

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
            className="flex flex-row space-x-2"
          >
            <QCLOGO size={30}></QCLOGO>
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
