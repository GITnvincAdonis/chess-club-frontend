import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BellRing, ChevronRight } from "lucide-react";

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <ChevronRight /> navigate to
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {options.map((item) => {
          return (
            <div className=" flex items-center space-x-4 rounded-md p-4 border click:border">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            </div>
          );
        })}

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const options = [
  {
    name: "name 1",
    body: "body text idjaca",
  },
  {
    name: "name 2",
    body: "body text idjaca",
  },
];
