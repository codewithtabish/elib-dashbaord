import { jsx as _jsx } from "react/jsx-runtime";
import { Loader } from "lucide-react";
const AppLoader = () => {
    return (_jsx("div", { className: "flex justify-center items-center h-screen", children: _jsx(Loader, { className: "animate-spin" }) }));
};
export default AppLoader;
