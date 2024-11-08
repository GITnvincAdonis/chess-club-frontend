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
import { ChevronRight, TvIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HomepageModal() {
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <ChevronRight /> navigate to
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Proficiency Demographics</DialogTitle>
          <DialogDescription>
            Chess lessons sorted by player knowledge
          </DialogDescription>
        </DialogHeader>
        {options.map((item) => {
          return (
            <div
              onClick={() => {
                navigate("/Videos");
              }}
              className=" flex items-center space-x-4 rounded-md p-4 border click:border"
            >
              <TvIcon />
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
    name: "Beginner Chess Content",
    body: "Video lessons to help teach students fundamentals",
  },
  {
    name: "intermediate Training",
    body: "More advanced piece play",
  },
];
