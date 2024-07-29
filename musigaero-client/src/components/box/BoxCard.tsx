import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

const BoxCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <Card ref={ref} className={cn("w-[90%] max-w-md", className)} {...props} />;
  },
);

export default BoxCard;

Card.displayName = "BoxCard";
