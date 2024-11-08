import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomepageModal } from "./Modal";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CardDemo(props: {
  card_body_text?: any;
  card_title?: any;
  card_desc?: any;
  className?: any;
  index?: number;
  navigation_link?: string;
}) {
  const {
    className,
    card_title,
    card_body_text,
    card_desc,
    index,
    navigation_link,
  } = props;

  const navigate = useNavigate();
  return (
    <Card className={cn("w-[380px]", className)}>
      <CardHeader>
        <CardTitle>{card_title}</CardTitle>
        <CardDescription>{card_desc}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          {card_body_text}
        </div>
      </CardContent>
      <CardFooter>
        {index && <HomepageModal></HomepageModal>}
        {!index && (
          <Button onClick={() => [navigate(`/${navigation_link}`)]}>
            <ChevronLeft /> Navigate
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
