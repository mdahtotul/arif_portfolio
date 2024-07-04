import Image from "next/image";

interface ILogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  width = 28,
  height = 28,
  className,
}: ILogoProps) {
  return (
    <figure className="">
      <Image
        src={"/me.png"}
        alt="logo"
        width={width}
        height={height}
        className={className}
      />
    </figure>
  );
}
