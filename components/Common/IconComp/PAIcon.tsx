import { TIconCompProps } from "@/types/commonTypes";

export default function PAIcon({ className }: TIconCompProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="./PA_logo.png" alt="PA Logo" className={className} />;
}
