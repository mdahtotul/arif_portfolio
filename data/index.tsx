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
import { TProjectItem } from "@/types/projectTypes";

export const listSkill: { icon: React.ReactNode; name: string }[] = [
  {
    icon: <HtmlIcon />,
    name: "HTML & HTML5",
  },
  {
    icon: <CssIcon />,
    name: "CSS & CSS3",
  },
  {
    icon: <TailwindIcon />,
    name: "Tailwind",
  },
  {
    icon: <BootStrapIcon />,
    name: "Bootstrap",
  },
  {
    icon: <MuiIcon />,
    name: "Material UI",
  },
  {
    icon: <JsIcon />,
    name: "JavaScript & ES6",
  },
  {
    icon: <TSIcon />,
    name: "TypeScript",
  },
  {
    icon: <ReactIcon />,
    name: "React JS",
  },
  {
    icon: <NextJSIcon />,
    name: "Next JS",
  },
  {
    icon: <NodeIcon />,
    name: "node JS",
  },
  {
    icon: <ExpressIcon />,
    name: "express",
  },
  {
    icon: <GraphQLIcon />,
    name: "GraphQL",
  },
  {
    icon: <GithubIcon />,
    name: "GitHub",
  },
  {
    icon: <FirebaseIcon />,
    name: "Firebase",
  },
  {
    icon: <MongoDBIcon />,
    name: "Mongo DB",
  },
  {
    icon: <PythonIcon />,
    name: "Python",
  },
  {
    icon: <DjangoIcon />,
    name: "Django",
  },
  {
    icon: <VSCodeIcon />,
    name: "VS Code",
  },
  {
    icon: <DockerIcon />,
    name: "Docker",
  },
  {
    icon: <AWSIcon />,
    name: "AWS",
  },
  {
    icon: <ThreeJSIcon />,
    name: "Three JS",
  },
  {
    icon: <FramerIcon />,
    name: "Framer Motion",
  },
];

export const dummyListProjects: TProjectItem[] = [
  {
    id: 1,
    title: "Honda",
    isOfficeProject: false,
    categories: ["Design"],
    priority: 4,
    status: "completed",
    description: "",
    tags: [" HTML", "CSS", " Bootstrap", " VS Code"],
    thumbnail: "https://i.ibb.co/7R6PJ1w/honda1.jpg",
    sub_images: [
      "https://i.ibb.co/7R6PJ1w/honda1.jpg",
      "https://i.ibb.co/s92MFNK/honda2.jpg",
      "https://i.ibb.co/sH5Ch81/honda3.jpg",
      "https://i.ibb.co/N6N0jfj/honda4.jpg",
      "https://i.ibb.co/JcBLgrq/honda5.jpg",
      "https://i.ibb.co/RSVfyx8/honda6.jpg",
      "https://i.ibb.co/D5828GZ/honda7.jpg",
      "https://i.ibb.co/gyBLSXm/honda8.jpg",
      "https://i.ibb.co/KVD47wL/honda9.jpg",
    ],
    techIconLists: ["html", "css", "bootstrap", "vscode"],
    live_site: "https://hondabuy.netlify.app/",
    client_repo: "https://github.com/arifulhasantotul/projecthonda",
  },
  {
    id: 2,
    title: "Score",
    isOfficeProject: false,
    categories: ["Design"],
    status: "completed",
    priority: 3,
    description: "",
    tags: [" HTML", "CSS", " Bootstrap", " VS Code"],
    thumbnail: "https://i.ibb.co/xfCZF97/score1.png",
    sub_images: [
      "https://i.ibb.co/xfCZF97/score1.png",
      "https://i.ibb.co/crpN2Ry/score2.png",
      "https://i.ibb.co/4ptKd5C/score3.png",
      "https://i.ibb.co/XXbMmfT/score4.png",
      "https://i.ibb.co/PD4jB0w/score5.png",
      "https://i.ibb.co/25K0XFz/score6.png",
      "https://i.ibb.co/PCXzB0G/score7.png",
    ],
    techIconLists: ["html", "css", "bootstrap", "vscode"],
    live_site: "https://playerscore.netlify.app/",
    client_repo: "https://github.com/arifulhasantotul/secondassignmentarif",
  },
  {
    id: 3,
    title: "Desired",
    isOfficeProject: false,
    categories: ["Full-stack"],
    priority: 7,
    description:
      "Buy or cart watch easily. Protected route for users and buyers.Status changed or product delete functionality for admin",
    tags: [
      " React",
      " Bootstrap",
      " Swiper JS",
      " React Hook Form",
      " Firebase Authentication",
      " Node JS",
      " Express JS",
      " MongoDB",
      " VS Code",
    ],
    thumbnail: "https://i.ibb.co/8dsfbHF/desire1.jpg",
    sub_images: [
      "https://i.ibb.co/8dsfbHF/desire1.jpg",
      "https://i.ibb.co/RhM8Tnn/desire2.jpg",
      "https://i.ibb.co/pjtJFTj/desire3.jpg",
      "https://i.ibb.co/NNKB9Tc/desire4.jpg",
      "https://i.ibb.co/p4pZ4Rn/desire5.jpg",
      "https://i.ibb.co/CBrD48h/desire6.jpg",
      "https://i.ibb.co/dJJpvXC/desire7.jpg",
      "https://i.ibb.co/Sf4WPK4/desire8.jpg",
      "https://i.ibb.co/Zg2VGqv/desire9.jpg",
      "https://i.ibb.co/nP4R2wm/desire10.jpg",
      "https://i.ibb.co/xs87CyK/desire11.jpg",
      "https://i.ibb.co/ydhcGTt/desire12.jpg",
      "https://i.ibb.co/jkj2bDj/desire13.jpg",
      "https://i.ibb.co/BLLzhmY/desire14.jpg",
    ],
    techIconLists: [
      "react",
      "bootstrap",
      "node",
      "express",
      "mongo",
      "firebase",
      "vscode",
    ],
    live_site: "https://desired-a1f73.web.app/",
    client_repo:
      "https://github.com/arifulhasantotul/luxury_wactch_desire_client",
    server_repo:
      "https://github.com/arifulhasantotul/luxury_watch_desire_server",
  },
  {
    id: 4,
    title: "Doctor's Portal",
    isOfficeProject: false,
    categories: ["Full-stack"],
    priority: 6,
    status: "completed",
    description:
      "Book your required services or doctors.Stripe payment gateway.Admin dashboard",
    tags: [
      " React",
      " Material UI",
      " Swiper JS",
      " React Hook Form",
      " Firebase Authentication",
      " Node JS",
      " Express JS",
      " MongoDB",
      " VS Code",
      "Stripe",
    ],
    thumbnail: "https://i.ibb.co/1L27VcK/dc1.jpg",
    sub_images: [
      "https://i.ibb.co/1L27VcK/dc1.jpg",
      "https://i.ibb.co/zQXkfC4/dc2.jpg",
      "https://i.ibb.co/q7fp3jZ/dc3.jpg",
      "https://i.ibb.co/gyDQz5N/dc4.jpg",
      "https://i.ibb.co/Yts41fg/dc5.jpg",
    ],
    techIconLists: [
      "react",
      "mui",
      "node",
      "express",
      "mongo",
      "firebase",
      "vscode",
    ],
    live_site: "https://doctorsportal-23dc7.web.app/",
    client_repo:
      "https://github.com/arifulhasantotul/programminghero_final_project_react",
    server_repo:
      "https://github.com/arifulhasantotul/programminghero_final_project_server",
  },
  {
    id: 5,
    title: "Bros chat application",
    isOfficeProject: false,
    priority: 8,
    categories: ["Full-stack"],
    description:
      "Chat with friends.Using JWT for authorization.Upload and delete single and multiple image to cloudinary. Error handling",
    tags: [
      " Socket IO",
      " Node JS",
      " Multer",
      " Multer storage cloudinary",
      " Cloudinary",
      " Cookie parser",
      " Ejs",
      " Http-errors",
      " JSON web token",
      " Moment",
      " Express validator",
      " Express JS",
      " Mongoose & MongoDB",
      " VS Code",
    ],
    thumbnail: "https://i.ibb.co/D4DQCWP/02login.png",
    sub_images: [
      "https://i.ibb.co/bWSK1kF/01loginside.png",
      "https://i.ibb.co/D4DQCWP/02login.png",
      "https://i.ibb.co/M9qhdmg/03loginerr.png",
      "https://i.ibb.co/kDFTTzN/04inbox1.png",
      "https://i.ibb.co/hf42sgD/05inbox2.png",
      "https://i.ibb.co/T13Fq10/06inbox3.png",
      "https://i.ibb.co/fnbsLN0/07addCon.png",
      "https://i.ibb.co/23JjbTd/08search-Con.png",
      "https://i.ibb.co/r6tnKBD/09add-User-Form.png",
      "https://i.ibb.co/3Tkw8zf/10add-User-Form2.png",
      "https://i.ibb.co/d5cnhRf/11add-User-Form-Valid.png",
      "https://i.ibb.co/ZdSsHNC/12user-Admin.png",
      "https://i.ibb.co/HN05mmc/13user-Normal.png",
    ],
    techIconLists: ["node", "express", "mongo", "vscode"],
    live_site: "https://broschatapp.herokuapp.com/",
    client_repo: "https://github.com/arifulhasantotul/bros_chat_app",
    server_repo: "https://github.com/arifulhasantotul/bros_chat_app",
  },
  {
    id: 6,
    title: "Bon appetit",
    isOfficeProject: false,
    categories: ["Design"],
    status: "completed",
    priority: 1,
    description: "",
    tags: [" HTML", "CSS", " Bootstrap", " VS Code"],
    thumbnail: "https://i.ibb.co/GHkPQ3J/bon1.jpg",
    sub_images: [
      "https://i.ibb.co/GHkPQ3J/bon1.jpg",
      "https://i.ibb.co/whJ4cjp/bon2.jpg",
      "https://i.ibb.co/FKzWR0W/bon3.jpg",
      "https://i.ibb.co/YWHjjpy/bon4.jpg",
      "https://i.ibb.co/SNLq3Mh/bon5.jpg",
    ],
    techIconLists: ["html", "css", "bootstrap", "vscode"],
    live_site: "https://bonappetitfood.netlify.app/",
    client_repo: "https://github.com/arifulhasantotul/responsivewebprac00",
  },
  {
    id: 7,
    title: "Adventure",
    isOfficeProject: false,
    categories: ["Full-stack"],
    priority: 5,
    description:
      "Book destination with one click. Firebase Authentication. CRUD operation",
    tags: [
      " React",
      " Bootstrap",
      " Swiper JS",
      " React Hook Form",
      " Firebase Authentication",
      " Node JS",
      " Express JS",
      " MongoDB",
      " VS Code",
    ],
    thumbnail: "https://i.ibb.co/2YCVCrg/ad1.jpg",
    sub_images: [
      "https://i.ibb.co/2YCVCrg/ad1.jpg",
      "https://i.ibb.co/9rrGyZv/ad2.jpg",
      "https://i.ibb.co/XCxt4qQ/ad3.jpg",
      "https://i.ibb.co/DkyrWKL/ad4.jpg",
      "https://i.ibb.co/QDxdsRy/ad5.jpg",
      "https://i.ibb.co/PD2Kzr0/ad6.jpg",
      "https://i.ibb.co/HKL7VVz/ad7.jpg",
      "https://i.ibb.co/xJD4mZC/ad8.jpg",
      "https://i.ibb.co/wsB3nB0/ad9.jpg",
      "https://i.ibb.co/DgwQGhP/ad10.jpg",
      "https://i.ibb.co/M7dGRKd/ad11.jpg",
      "https://i.ibb.co/hBtBtCR/ad12.jpg",
      "https://i.ibb.co/JkkdRdY/ad13.jpg",
    ],
    techIconLists: [
      "react",
      "bootstrap",
      "firebase",
      "node",
      "express",
      "mongo",
      "vscode",
    ],
    live_site: "https://adventure-f3ee7.web.app/",
    client_repo:
      "https://github.com/arifulhasantotul/adventure_tours_travels_client",
    server_repo:
      "https://github.com/arifulhasantotul/adventure_tours_travels_server",
  },
  {
    id: 8,
    title: "Desire",
    isOfficeProject: false,
    categories: ["Design"],
    priority: 2,
    status: "completed",
    description: "Website for a fantastic watch showcase website",
    tags: [" HTML", "CSS", " Bootstrap", " VS Code"],
    thumbnail: "https://i.ibb.co/C28VpH5/des1.jpg",
    sub_images: [
      "https://i.ibb.co/C28VpH5/des1.jpg",
      "https://i.ibb.co/TcS165c/des2.jpg",
      "https://i.ibb.co/1QWB0Mz/des3.jpg",
      "https://i.ibb.co/6bFLfT2/des4.jpg",
      "https://i.ibb.co/3kPzr3z/des5.jpg",
      "https://i.ibb.co/wYLyTDC/des6.jpg",
    ],
    techIconLists: ["html", "css", "bootstrap", "vscode"],
    live_site: "https://desier.netlify.app/",
    client_repo: "https://github.com/arifulhasantotul/projectdesire",
  },
];
