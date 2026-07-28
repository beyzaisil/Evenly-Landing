import { Feature } from "@/types/features";
import { UsersRound,Ticket, Icon,CalendarClock } from "lucide-react";
import {features  } from "@/lib/content";

    export function FeatureCard({icon:Icon,title:titlee,description}:Feature) {
        return(
        <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ">
      <div>
       
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <Icon className="h-8 w-8 text-red-600" /> 
        </div>

        <h3 className="mb-4 text-3xl font-bold text-slate-900">
          {titlee}
        </h3>

        <p className="leading-8 text-slate-600 ">
          {description}
        </p>
      </div>
            </div>
        );
    }