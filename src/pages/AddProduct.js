import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AddForm from "@/components/custom/AddForm";
import BreadCrumComponent from "@/components/custom/BreadCrumComponent";
import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
const AddProduct = () => {
    return (_jsxs("div", { className: "", children: [_jsx(BreadCrumComponent, { edit: false, productCreate: true }), _jsxs(Card, { className: "my-4 container ", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Create a new Product" }), _jsx(CardDescription, { children: "fill out the form below to create a product" })] }), _jsx(AddForm, {})] })] }));
};
export default AddProduct;
