import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
export default function DeleteModal({ showModal, setshowModal }) {
    //   const [open, setshowModal] = useState(true);
    const cancelButtonRef = useRef(null);
    return (_jsx(Transition.Root, { show: showModal, as: Fragment, children: _jsxs(Dialog, { className: "relative z-10", initialFocus: cancelButtonRef, onClose: setshowModal, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity" }) }), _jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: _jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: _jsxs(Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg", children: [_jsx("div", { className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4", children: _jsxs("div", { className: "sm:flex sm:items-start", children: [_jsx("div", { className: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10", children: _jsx(ExclamationTriangleIcon, { className: "h-6 w-6 text-red-600", "aria-hidden": "true" }) }), _jsxs("div", { className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left", children: [_jsx(Dialog.Title, { as: "h3", className: "text-base font-semibold leading-6 text-gray-900", children: "Deactivate account" }), _jsx("div", { className: "mt-2", children: _jsx("p", { className: "text-sm text-gray-500", children: "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone." }) })] })] }) }), _jsxs("div", { className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6", children: [_jsx("button", { type: "button", className: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto", onClick: () => setshowModal(false), children: "Deactivate" }), _jsx("button", { type: "button", className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto", onClick: () => setshowModal(false), ref: cancelButtonRef, children: "Cancel" })] })] }) }) }) })] }) }));
}