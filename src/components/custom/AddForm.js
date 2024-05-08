import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Button } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/http/api";
export default function AddForm() {
    const form = useForm();
    const queryClinet = useQueryClient();
    const mutataion = useMutation({
        mutationFn: api.createProduct,
        onSuccess: (data) => {
            if (data) {
                queryClinet.invalidateQueries({
                    queryKey: ["books"],
                });
            }
        },
    });
    const hanldeSubmit = async (e) => {
        e.preventDefault();
        mutataion.mutate({ name: "zain", email: "zaini@gmail.com" });
    };
    return (_jsx("div", { className: "md:max-w-[70%] mx-auto", children: _jsx(Form, { ...form, children: _jsx("form", { action: "/", children: _jsx(CardContent, { children: _jsxs("div", { className: "grid gap-6", children: [_jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "name", children: "Name" }), _jsx(Input, { id: "name", type: "text", className: "w-full", defaultValue: "Gamer Gear Pro Controller" })] }), _jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "description", children: "Description" }), _jsx(Textarea, { id: "description", defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.", className: "min-h-32" })] }), _jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "description", children: "Thumbnil" }), _jsx(Input, { type: "file", className: "w-full", placeholder: "select a thumnil", accept: "image/*" })] }), _jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "description", children: "Images" }), _jsx(Input, { type: "file", className: "w-full", placeholder: "select images", multiple: true, accept: "image/*" })] }), _jsxs("div", { className: "grid gap-3", children: [_jsx(Label, { htmlFor: "temperature", children: "Price " }), _jsx(Input, { id: "temperature", type: "number", placeholder: "0.4" })] }), _jsxs("div", { className: "md:flex md:flex-row gap-4  items-center", children: [_jsxs("div", { className: "grid gap-3 flex-1", children: [_jsx(Label, { htmlFor: "temperature", children: "Stock " }), _jsx(Input, { id: "temperature", type: "number", placeholder: "0.4" })] }), _jsxs("div", { className: "grid gap-3 flex-1", children: [_jsx(Label, { htmlFor: "temperature", children: "Discount " }), _jsx(Input, { id: "temperature", type: "number", placeholder: "0.4" })] })] }), _jsxs("div", { className: "md:flex md:flex-row gap-4  flex-col  items-center", children: [_jsxs("div", { className: "grid gap-3 flex-1 md:mt-1 ", children: [_jsx(Label, { htmlFor: "category", children: "Category" }), _jsxs(Select, { children: [_jsx(SelectTrigger, { id: "category", "aria-label": "Select category", children: _jsx(SelectValue, { placeholder: "Select category" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "clothing", children: "Clothing" }), _jsx(SelectItem, { value: "electronics", children: "Electronics" }), _jsx(SelectItem, { value: "accessories", children: "Accessories" })] })] })] }), _jsxs("div", { className: "grid gap-3 flex-1 md:mt-1 mt-6", children: [_jsx(Label, { htmlFor: "subcategory", children: "Subcategory (optional)" }), _jsxs(Select, { children: [_jsx(SelectTrigger, { id: "subcategory", "aria-label": "Select subcategory", children: _jsx(SelectValue, { placeholder: "Select subcategory" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "t-shirts", children: "T-Shirts" }), _jsx(SelectItem, { value: "hoodies", children: "Hoodies" }), _jsx(SelectItem, { value: "sweatshirts", children: "Sweatshirts" })] })] })] })] }), _jsx(Button, { onClick: hanldeSubmit, type: "submit", className: "bg-gray-800 p-3 rounded-md max-w-[50%] min-w-[50%] mx-auto text-white", children: _jsx("span", { children: "Submit" }) })] }) }) }) }) }));
}
