import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Typography } from "src/components/ui/typography";

function SearchItem() {
  return (
    <Link href="/">
      <div className="p-2 rounded-md bg-card hover:bg-card-foreground/10 flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <Typography>Jane Doe</Typography>
        </div>
      </div>
    </Link>
  );
}

export default SearchItem;
