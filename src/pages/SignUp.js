import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/http/api";
import useTokenStore from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function SignUpPage() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const { setToken } = useTokenStore();
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: api.signupMethod,
        onSuccess: (data) => {
            toast.success("Successfully login!");
            setToken(data?.data?.token);
            navigate("/dashboard/home");
        },
        onError: () => {
            toast.error("something went wrong ");
        },
    });
    const handleSignup = async () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const name = nameRef?.current?.value;
        if (!email || !password || !name) {
            toast.error("please enter both fields");
            return;
        }
        if (password.length < 6) {
            return toast.error("password must be at leat six caharacters ..");
        }
        mutation.mutate({ name, email, password });
    };
    return (_jsx("section", { className: "flex justify-center items-center h-screen", children: _jsxs(Card, { className: "mx-full max-w-sm", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-xl", children: "Sign Up" }), _jsx(CardDescription, { children: "Enter your information to create an account" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid gap-4", children: [_jsx(Label, { htmlFor: "first-name", children: "Name" }), _jsx(Input, { ref: nameRef, id: "first-name", placeholder: "Max", required: true }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { ref: emailRef, id: "email", type: "email", placeholder: "m@example.com", required: true })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { ref: passwordRef, id: "password", type: "password" })] }), _jsxs(Button, { type: "submit", className: "w-full", onClick: handleSignup, children: [_jsx("span", { className: "mx-4", children: mutation?.isPending && _jsx(Loader, { className: "animate-spin" }) }), "Create an account"] }), _jsx(Button, { variant: "outline", className: "w-full", children: "Sign up with GitHub" })] }), _jsxs("div", { className: "mt-3 text-center text-sm", children: ["Already have an account?", " ", _jsx(Link, { to: "/auth/login", className: "underline", children: "Sign in" })] })] })] }) }));
}
export default SignUpPage;
