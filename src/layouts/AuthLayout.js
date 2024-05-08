import { jsx as _jsx } from "react/jsx-runtime";
import useTokenStore from "@/store/store";
import { Navigate, Outlet } from "react-router-dom";
const AuthLayout = () => {
    const { token } = useTokenStore();
    if (!token) {
        return _jsx(Outlet, {});
    }
    return _jsx(Navigate, { to: "/dashboard/home", replace: true });
};
export default AuthLayout;
