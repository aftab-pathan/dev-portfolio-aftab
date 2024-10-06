import { TechToolItem } from "@/components/TechToolItem";
import { twMerge } from "tailwind-merge";


export const ToolboxItems = ({ items, className, itemsWraperClassName }: { items: { title: string, iconType: React.ElementType }[], className?: string, itemsWraperClassName?: string }) => {
    return (
        <div className={twMerge("flex [mask-image:liner-gradient(circle,#000_10%,transparent_80%)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWraperClassName)}>
                {items.map(item => (
                    <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3  outline outline-2 outline-white/10 rounded-lg">
                        <TechToolItem component={item.iconType} />
                        <span className="font-semibold ">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}