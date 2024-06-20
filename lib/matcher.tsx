import AWSIcon from "@/components/Common/IconComp/AWSIcon";
import BootStrapIcon from "@/components/Common/IconComp/BootstrapIcon";
import CssIcon from "@/components/Common/IconComp/CssIcon";
import DjangoIcon from "@/components/Common/IconComp/DjangoIcon";
import DockerIcon from "@/components/Common/IconComp/DockerIcon";
import ExpressIcon from "@/components/Common/IconComp/ExpressIcon";
import FirebaseIcon from "@/components/Common/IconComp/FirebaseIcon";
import FramerIcon from "@/components/Common/IconComp/FramerIcon";
import GithubIcon from "@/components/Common/IconComp/GithubIcon";
import GraphQLIcon from "@/components/Common/IconComp/GraphQLIcon";
import HtmlIcon from "@/components/Common/IconComp/HtmlIcon";
import JsIcon from "@/components/Common/IconComp/JsIcon";
import MongoDBIcon from "@/components/Common/IconComp/MongoDBIcon";
import MuiIcon from "@/components/Common/IconComp/MuiIcon";
import NextJSIcon from "@/components/Common/IconComp/NextJSIcon";
import NodeIcon from "@/components/Common/IconComp/NodeIcon";
import PythonIcon from "@/components/Common/IconComp/PythonIcon";
import ReactIcon from "@/components/Common/IconComp/ReactIcon";
import TailwindIcon from "@/components/Common/IconComp/TailwindIcon";
import ThreeJSIcon from "@/components/Common/IconComp/ThreeJSIcon";
import TSIcon from "@/components/Common/IconComp/TSIcon";
import VSCodeIcon from "@/components/Common/IconComp/VSCodeIcon";
import { TIconNames } from "@/types/commonTypes";

export const routerMatcher = (path: string) => {
  let route = "";
  const aboutPattern = /\//;
  const projectsPattern = /\/projects/;
  const skillsPattern = /\/skills/;
  const blogsPattern = /\/blogs/;
  const contactPattern = /\/contact/;

  if (aboutPattern.test(path)) route = "about";
  else if (projectsPattern.test(path)) route = "projects";
  else if (skillsPattern.test(path)) route = "skills";
  else if (blogsPattern.test(path)) route = "blogs";
  else if (contactPattern.test(path)) route = "contact";

  return route;
};

export const iconMatcher = (
  value?: TIconNames,
  className?: string
): React.ReactNode | undefined => {
  let icon = undefined;

  if (!value) return icon;

  let tool = value.toLowerCase();

  if (tool === "html") icon = <HtmlIcon className={className} />;
  else if (tool === "css") icon = <CssIcon className={className} />;
  else if (tool === "tailwind") icon = <TailwindIcon className={className} />;
  else if (tool === "bootstrap") icon = <BootStrapIcon className={className} />;
  else if (tool === "mui") icon = <MuiIcon className={className} />;
  else if (tool === "js") icon = <JsIcon className={className} />;
  else if (tool === "ts") icon = <TSIcon className={className} />;
  else if (tool === "react") icon = <ReactIcon className={className} />;
  else if (tool === "nextjs") icon = <NextJSIcon className={className} />;
  else if (tool === "node") icon = <NodeIcon className={className} />;
  else if (tool === "express") icon = <ExpressIcon className={className} />;
  else if (tool === "graphql") icon = <GraphQLIcon className={className} />;
  else if (tool === "git") icon = <GithubIcon className={className} />;
  else if (tool === "firebase") icon = <FirebaseIcon className={className} />;
  else if (tool === "mongo") icon = <MongoDBIcon className={className} />;
  else if (tool === "python") icon = <PythonIcon className={className} />;
  else if (tool === "django") icon = <DjangoIcon className={className} />;
  else if (tool === "docker") icon = <DockerIcon className={className} />;
  else if (tool === "aws") icon = <AWSIcon className={className} />;
  else if (tool === "threejs") icon = <ThreeJSIcon className={className} />;
  else if (tool === "f_motion") icon = <FramerIcon className={className} />;
  else if (tool === "vscode") icon = <VSCodeIcon className={className} />;

  return icon;
};
