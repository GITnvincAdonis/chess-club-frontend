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
          <Button className="bg-translucent" variant="default" size="icon">
            <MenuIcon className=""></MenuIcon>
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
                  navigate("/Videos");
                }}
                variant="outline"
                className={"w-full my-1"}
              >
                Chess Content
              </Button>
              <Button
                onClick={() => {
                  navigate("/Events");
                }}
                variant="outline"
                className={"w-full my-1"}
              >
                Event page
              </Button>
              <Button
                onClick={() => {
                  navigate("/HOF");
                }}
                variant="outline"
                className={"w-full my-1"}
              >
                Hall of Famers
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
