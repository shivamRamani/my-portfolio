import { AnimatedText } from "./AnimatedText";
import Image from "next/image";
import { CustomCursor } from "./CustomCursor";
import { cn } from "@/utils/cn";

const projectsData = [
    {
        image: "/dummy_project.png",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
        image: "/dummy_project.png",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
];

export const Projects = () => {
    return (
        <div className="h-fit w-full bg-white flex flex-col pb-20">
            <AnimatedText
                text={"PROJECTS"}
                className="font-extrabold text-7xl"
            />
            <div className="space-y-32 max-w-6xl h-full w-full mx-auto">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative flex justify-between h-[35rem] w-full items-center",
                            {
                                "flex-row-reverse": index % 2,
                            }
                        )}
                    >
                        <div
                            className={cn("w-[50%] h-full px-4", {
                                "text-start": index % 2,
                                "text-end": !(index % 2),
                            })}
                        >
                            <h2 className="text-7xl">
                                <AnimatedText text={`0${index + 1}`} />
                                /04
                            </h2>
                            <h6 className="mt-16">
                                {` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I`}
                            </h6>
                        </div>
                        <div className="h-full aspect-square relative shrink-0 border-black border-4 border-t-2 grayscale hover:grayscale-[50%] transition-all duration-500 ease-out">
                            <Image
                                src={"/dummy_project.png"}
                                alt="hi"
                                fill
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};