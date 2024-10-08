import { twMerge } from "tailwind-merge"

export const WorkFlow = ({ experienceList }: { experienceList: { start: string, end: string, companyName: string, role: string, description?: string }[] }) => {
    return (
        <div className="sticky justify-center items-center flex">
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden  h-full">
                    <div className="border-2-2 border-emerald-300 absolute h-[80%] border"
                        style={{ right: "50%", border: '2px solid #6ee7b7', borderRadius: "1%" }}></div>
                    <div className="border-2-2 border-emerald-300 absolute h-[80%] border"
                        style={{ left: "50%", border: '2px solid #38bdf8', borderRadius: "1%" }}></div>
                    {experienceList.map((experience, i) => (
                        <div key={experience.companyName} className={twMerge("mb-8 flex justify-between  items-center w-full left-timeline", (i + 1) % 2 !== 0 ? "flex-row-reverse" : "")}>
                            <div className="order-1 w-5/12" />
                            <div className={twMerge("order-1  w-5/12 px-1 py-4 text-left", (i + 1) % 2 !== 0 ? "text-right" : "text-left")}>
                                <p className="mb-3 text-base bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{`${experience.start} - ${experience.end}`}</p>
                                <h4 className="font-serif mb-3 font-bold text-lg md:text-2xl">{experience.companyName}</h4>
                                <p className="text-md md:text-lg leading-snug bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent  bg-clip-text">
                                    {experience.role}
                                </p>
                                <p className="hidden md:block text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
        </div>
    )
}