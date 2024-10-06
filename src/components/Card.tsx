import grainImg from "@/assets/images/grain.jpg";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";


export const Card = ({ className, children, ...other }: ComponentPropsWithRef<"div">) => {
    return (
        <div {...other} className={twMerge("after:pointer-events-none bg-gray-800 rounded-3xl relative after:contents-[''] after:absolute after:inset-0  z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2  after:rounded-3xl after:outline-white/20", className)} >
            <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImg})` }}></div>
            {children}
        </div>
    )
}