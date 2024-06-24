"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import MagicButton from "../ui/magic-button";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://github.com/mdahtotul"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagicButton
          icon={<GithubIcon className="w-6 h-6" />}
          position="left"
          otherClasses="!w-10 !h-10 rounded-full"
          isCircle={true}
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCvARA0EGsDfker7jf2fkkAA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagicButton
          icon={<YoutubeIcon className="w-6 h-6" />}
          position="left"
          otherClasses="!w-10 !h-10 rounded-full"
          isCircle={true}
        />
      </a>
      <a
        href="https://linkedin.com/in/md-ariful-hasan-716a31216"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagicButton
          icon={<LinkedinIcon className="w-6 h-6" />}
          position="left"
          otherClasses="!w-10 !h-10 rounded-full"
          isCircle={true}
        />
      </a>
      <a
        href="https://instagram.com/mdahtotul"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagicButton
          icon={<InstagramIcon className="w-6 h-6" />}
          position="left"
          otherClasses="!w-10 !h-10 rounded-full"
          isCircle={true}
        />
      </a>
    </div>
  );
}
