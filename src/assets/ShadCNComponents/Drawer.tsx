import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Drawer() {
  const navigate = useNavigate();
  return (
    <div className="grid  lg:grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon></MenuIcon>
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Hotlinks</SheetTitle>
            <SheetDescription>Navigation links.</SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <div className="w-full ">
              <Button
                onClick={() => {
                  navigate("/ExecPage");
                }}
                variant="outline"
                className={"w-full my-1"}
              >
                Executive Body
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                variant="outline"
                className={"w-full my-1"}
              >
                Chess Content
              </Button>

              <SheetClose asChild>
                <Button className={"w-full"} type="submit">
                  Back
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
