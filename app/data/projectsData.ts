import { url } from "inspector";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const projectsData: ProjectCardProps[] = [
    {
        title: "REST Countries API with color theme switcher",
        description: "This is a description of project 1",
        image: "https://user-images.githubusercontent.com/62018390/243093268-ec6085a7-c949-4115-830f-50bf93c1a2d3.png",
        link: "https://github.com/NikitaPanasevych/Countries",
    },
    {
        title: "E-Commerce Website",
        description: "This is a description of project 2",
        image: "https://user-images.githubusercontent.com/62018390/208546294-1468c617-034e-44d3-91d9-e4021a5df270.png",
        link: "https://github.com/NikitaPanasevych/e-commerce",
    },
    {
        title: "Goalify",
        description: "This is a description of project 3",
        image: "https://user-images.githubusercontent.com/62018390/211616686-ae814771-db72-4c89-8a26-42ee3f31747c.png",
        link: "https://github.com/NikitaPanasevych/Goalify",
    },
];