import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
const BreadCrumComponent = ({ edit, productCreate, }) => {
    return (_jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsx(Link, { to: "/dashboard/home", children: _jsx(BreadcrumbLink, { children: "home" }) }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(Link, { to: "/dashboard/books", children: _jsx(BreadcrumbLink, { children: "products" }) }) }), edit && _jsx(BreadcrumbSeparator, {}), edit && (_jsx(BreadcrumbItem, { children: _jsx(Link, { to: "/dashboard/books/editbook", children: _jsx(BreadcrumbLink, { children: "edit product" }) }) })), productCreate && _jsx(BreadcrumbSeparator, {}), productCreate && (_jsx(BreadcrumbItem, { children: _jsx(Link, { to: "/dashboard/book/create", children: _jsx(BreadcrumbLink, { children: "create" }) }) }))] }) }));
};
export default BreadCrumComponent;
