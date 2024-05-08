import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/http/api";
import useTokenStore from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { setToken } = useTokenStore();
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: api.loginMethod,
        onSuccess: (data) => {
            toast.success("Successfully login!");
            setToken(data?.data?.token);
            navigate("/dashboard/home");
        },
        onError: (error) => {
            toast.error(error?.message);
        },
    });
    const handleLogin = async () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        if (!email || !password) {
            toast.error("please enter both fields");
            return;
        }
        mutation.mutate({ email, password });
    };
    return (_jsx("section", { className: "flex justify-center items-center h-screen", children: _jsxs(Card, { className: "mx-auto max-w-sm", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl", children: "Login" }), _jsx(CardDescription, { children: "Enter your email below to login to your account" }), _jsx("span", {})] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid gap-4", children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { ref: emailRef, id: "email", type: "email", placeholder: "m@example.com", required: true })] }), _jsxs("div", { className: "grid gap-2", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Link, { to: "/", className: "ml-auto inline-block text-sm underline", children: "Forgot your password?" })] }), _jsx(Input, { id: "password", ref: passwordRef, type: "password", required: true })] }), _jsxs(Button, { type: "submit", className: "w-full", onClick: handleLogin, disabled: mutation?.isPending, children: [_jsxs("span", { className: "mx-3", children: [" ", mutation.isPending && (_jsx(LoaderCircle, { className: "animate-spin" }))] }), "Login"] }), _jsx(Button, { variant: "outline", className: "w-full", children: "Login with Google" })] }), _jsxs("div", { className: "mt-4 text-center text-sm", children: ["Don't have an account?", " ", _jsx(Link, { to: "/auth/signup", className: "underline", children: "Sign up" })] })] })] }) }));
};
export default LoginPage;
