import GraduationTemplate from "@/pages/graduation-template";
import type { RouteObject } from "react-router-dom";

let routes : RouteObject[] = [
    {
        path: "/index",
        element: <div>/</div>
    },
    {
        path: "/",
        element: <GraduationTemplate />
    }
]

export default routes
