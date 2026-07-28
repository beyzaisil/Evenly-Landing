import { LucideIcon } from "lucide-react";

export type DemoCardProps = {
    id : number ;
    icon : LucideIcon ;
    title : string ;
    description : string ;
    tone : "red" | "blue" ;
}