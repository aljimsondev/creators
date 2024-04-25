import { TbWorldWww } from "react-icons/tb";
import { Typography } from "src/components/ui/typography";

export default function CreatorSocialCard() {
  return (
    <div className=" w-max max-w-[300px] max-h-full h-[90px] ring-2 ring-primary p-4 py-2 flex items-center justify-center flex-col rounded-lg">
      <div className="flex items-center justify-center mb-2">
        <span>
          <TbWorldWww />
        </span>
        <Typography className="text-sm">CHARESS.COM</Typography>
      </div>
      <Typography className="line-clamp-2 text-xs text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, saepe ea
        molestias, beatae et animi cumque nemo sapiente ipsa architecto earum
        excepturi iusto veritatis culpa.
      </Typography>
    </div>
  );
}
