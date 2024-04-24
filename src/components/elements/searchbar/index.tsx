"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@components/ui/input";
import { Typography } from "@components/ui/typography";
import { IconSearch, IconX } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Separator } from "src/components/ui/separator";
import { useDebounce } from "use-debounce";
import { cn } from "src/lib/utils";
import SearchItem from "./SearchItem";

function Searchbar({
  onClearInput = () => {},
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onClearInput?: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [debouncedSearchText] = useDebounce(props?.value as string, 1000);
  const [results, setResults] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const parentRef = React.useRef<HTMLDivElement>(null);

  //todo handle open result logic here
  React.useEffect(() => {
    if (debouncedSearchText) {
      return setOpen(true);
    }
    setOpen(false);

    return () => {
      setOpen(false);
    };
  }, [debouncedSearchText]);

  //manages click outside listener
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parentRef.current &&
        !parentRef.current.contains(event.target as any)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(props);
  return (
    <div
      data-state={open ? "open" : "closed"}
      ref={parentRef}
      className={cn("group relative flex w-full flex-col backdrop-blur-sm")}
    >
      <div className="w-full md:w-[400px] lg:w-[600px] bg-white h-[60px] flex items-center rounded-2xl overflow-hidden ring-1 ring-ring focus-within:ring-accent-primary outline-2 outline-accent-primary">
        <span className="h-full aspect-square flex items-center justify-center text-primary-foreground">
          <IconSearch stroke={2} />
        </span>
        <Input
          ref={inputRef}
          className="h-full flex-1 text-primary-foreground border-none ring-0 outline-none text-lg font-semibold focus-visible:ring-0 px-0"
          placeholder="Find your creators..."
          {...props}
        />
        {props.value && (
          <button
            className="h-full aspect-square flex items-center justify-center text-primary-foreground"
            onClick={onClearInput}
          >
            <IconX stroke={2} />
          </button>
        )}
        <button className="bg-accent-secondary duration-300 hover:bg-accent-secondary/90 h-full px-6 font-semibold">
          Search
        </button>
      </div>
      <div className="absolute left-0 top-full w-full opacity-0 transition-opacity group-data-[state=closed]:pointer-events-none group-data-[state=open]:pointer-events-auto group-data-[state=open]:visible group-data-[state=clsoed]:hidden group-data-[state=open]:opacity-100">
        <div className="w-full translate-y-0 transform overflow-hidden rounded-md shadow-md duration-300 ease-in-out group-data-[state=open]:translate-y-2">
          <Card className="max-h-[500px] overflow-auto">
            <div className="flex items-center justify-between p-4 sticky top-0 bg-card z-10">
              <Typography className="font-semibold">Creators</Typography>
              <Typography variant="subtitle1">Results: 10</Typography>
            </div>
            <Separator />
            <CardContent className="text-start p-4">
              <div>
                {new Array(10).fill(0).map((_, index) => {
                  return <SearchItem key={index} />;
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
