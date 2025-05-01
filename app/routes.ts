import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
route(
    "/","./routes/Layout.tsx",[
     index("./components/pages/Home.tsx")   
    ]
)    
] satisfies RouteConfig;
