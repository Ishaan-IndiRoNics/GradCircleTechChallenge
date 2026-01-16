(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast(param) {
    let { ...props } = param;
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (param, ref)=>{
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function(param) {
                let { id, title, description, action, ...props } = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyDp_xFLo8-uABbPe8N37Xo-fqKPyJCp7E8",
    authDomain: "petconnect-29149.firebaseapp.com",
    projectId: "petconnect-29149",
    storageBucket: "petconnect-29149.firebasestorage.app",
    messagingSenderId: "165297069841",
    appId: "1:165297069841:web:9f74bb705df813a6c9b6b0"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-firebase-hooks/auth/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider(param) {
    let { children } = param;
    _s();
    const [firebaseUser, loading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    const [user, setUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const getUserProfile = {
                "AuthProvider.useEffect.getUserProfile": async (firebaseUser)=>{
                    const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', firebaseUser.uid));
                    if (userDoc.exists()) {
                        setUser(userDoc.data());
                    } else {
                    // If the user exists in Firebase Auth but not in Firestore,
                    // it's likely a new signup. The user profile will be created
                    // during the signup process.
                    }
                }
            }["AuthProvider.useEffect.getUserProfile"];
            if (firebaseUser) {
                getUserProfile(firebaseUser);
            } else {
                setUser(null);
            }
        }
    }["AuthProvider.useEffect"], [
        firebaseUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (!loading && !firebaseUser && ![
                '/login',
                '/signup',
                '/',
                '/forgot-password'
            ].includes(pathname)) {
                router.push('/login');
            }
            if (!loading && firebaseUser && [
                '/login',
                '/signup',
                '/',
                '/forgot-password'
            ].includes(pathname)) {
                router.push('/feed');
            }
        }
    }["AuthProvider.useEffect"], [
        firebaseUser,
        loading,
        pathname,
        router
    ]);
    const login = async (email, pass)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, pass);
        return true;
    };
    const logout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    };
    const signup = async (email, pass, displayName)=>{
        const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, pass);
        const { user: firebaseUser } = userCredential;
        if (firebaseUser) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProfile"])(firebaseUser, {
                displayName,
                photoURL: "https://picsum.photos/seed/".concat(displayName.replace(/\s/g, ''), "/400/400")
            });
            const newUser = {
                userId: firebaseUser.uid,
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
                location: {
                    city: 'Unknown',
                    state: '',
                    country: 'India'
                },
                bio: '',
                joinedAt: new Date().toISOString(),
                postCount: 0,
                petCount: 0,
                followers: 0,
                following: 0,
                petIds: []
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', firebaseUser.uid), newUser);
            setUser(newUser);
        }
    };
    const forgotPassword = async (email)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPasswordResetEmail"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email);
    };
    const value = {
        user,
        firebaseUser,
        login,
        logout,
        signup,
        forgotPassword,
        loading
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: !loading ? children : null
    }, void 0, false, {
        fileName: "[project]/src/context/auth-context.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "lEVZs4kCVu2/pnKI7W1qTKGJnV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/notification-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NotificationProvider(param) {
    let { children } = param;
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[addNotification]": (notification)=>{
            const newNotification = {
                ...notification,
                id: "notif_".concat(Date.now(), "_").concat(Math.random()),
                createdAt: new Date().toISOString(),
                read: false
            };
            setNotifications({
                "NotificationProvider.useCallback[addNotification]": (prev)=>[
                        newNotification,
                        ...prev
                    ].slice(0, 20)
            }["NotificationProvider.useCallback[addNotification]"]); // Limit to 20 notifications
        }
    }["NotificationProvider.useCallback[addNotification]"], []);
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[markAllAsRead]": ()=>{
            setNotifications({
                "NotificationProvider.useCallback[markAllAsRead]": (prev)=>prev.map({
                        "NotificationProvider.useCallback[markAllAsRead]": (n)=>({
                                ...n,
                                read: true
                            })
                    }["NotificationProvider.useCallback[markAllAsRead]"])
            }["NotificationProvider.useCallback[markAllAsRead]"]);
        }
    }["NotificationProvider.useCallback[markAllAsRead]"], []);
    const clearNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[clearNotifications]": ()=>{
            setNotifications([]);
        }
    }["NotificationProvider.useCallback[clearNotifications]"], []);
    const unreadCount = notifications.filter((n)=>!n.read).length;
    const value = {
        notifications,
        unreadCount,
        addNotification,
        markAllAsRead,
        clearNotifications
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/notification-context.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(NotificationProvider, "LB11cIXHp2m/NZk+h5WjEaOXUow=");
_c = NotificationProvider;
function useNotifications() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
_s1(useNotifications, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/placeholder-images.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"user_priya\",\"description\":\"Profile picture of Priya Sharma\",\"imageUrl\":\"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzY4NDQzNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"woman smiling\"},{\"id\":\"user_arjun\",\"description\":\"Profile picture of Arjun Patel\",\"imageUrl\":\"https://images.unsplash.com/photo-1687092084146-a2893f0b896a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtYW4lMjBnbGFzc2VzfGVufDB8fHx8fDE3Njg0MTc1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"man glasses\"},{\"id\":\"user_ananya\",\"description\":\"Profile picture of Ananya Reddy\",\"imageUrl\":\"https://images.unsplash.com/photo-1664813495434-34ac9ab3b5b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3b21hbiUyMG91dGRvb3JzfGVufDB8fHx8fDE3NjgMzg1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"woman outdoors\"},{\"id\":\"user_rohan\",\"description\":\"Profile picture of Rohan Mehta\",\"imageUrl\":\"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBsYXVnaGluZ3xlbnwwfHx8fDE3Njg0ODA5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"man laughing\"},{\"id\":\"user_ishita\",\"description\":\"Profile picture of Ishita Gupta\",\"imageUrl\":\"https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc2ODQ2NDM4M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"woman portrait\"},{\"id\":\"user_shreyan\",\"description\":\"Profile picture of Shreyan Bagchi\",\"imageUrl\":\"https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3Njg0ODUwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"man portrait\"},{\"id\":\"user_ishaan\",\"description\":\"Profile picture of Ishaan Som Singh\",\"imageUrl\":\"https://images.unsplash.com/photo-1629185752040-57f6fa9b4f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bWFuJTIwc21pbGluZ3xlbnwwfHx8fDE3NjgzOTc1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"man smiling\"},{\"id\":\"user_grad_circle\",\"description\":\"Profile picture of Grad Circle\",\"imageUrl\":\"https://images.unsplash.com/photo-1622465911368-72162f8da3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3Njg0MDE3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"company logo\"},{\"id\":\"pet_max\",\"description\":\"Photo of Max, a Golden Retriever\",\"imageUrl\":\"https://images.unsplash.com/photo-1602241628512-459cdd3234fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MHx8fHwxNzY4NDM3ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"golden retriever\"},{\"id\":\"pet_bella\",\"description\":\"Photo of Bella, a Golden Retriever\",\"imageUrl\":\"https://images.unsplash.com/photo-1624956578877-4948166c5dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3Njg0MTA4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"happy dog\"},{\"id\":\"pet_simba\",\"description\":\"Photo of Simba, a Bengal cat\",\"imageUrl\":\"https://images.unsplash.com/photo-1496284777878-ce2e3e4dd028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxiZW5nYWwlMjBjYXR8ZW58MHx8fHwxNzY4MzcxODU5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bengal cat\"},{\"id\":\"pet_rocky\",\"description\":\"Photo of Rocky, an Indian Pariah dog\",\"imageUrl\":\"https://images.unsplash.com/photo-1621757298855-12262a78f0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxpbmRpZSUyMGRvZ3xlbnwwfHx8fDE3Njg0ODU5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"indie dog\"},{\"id\":\"pet_bruno\",\"description\":\"Photo of Bruno, a Beagle\",\"imageUrl\":\"https://images.unsplash.com/photo-1710927865281-9cf4d7ee2782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiZWFnbGUlMjBwdXBweXxlbnwwfHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"beagle puppy\"},{\"id\":\"pet_sheru\",\"description\":\"Photo of Sheru, an Indie dog\",\"imageUrl\":\"https://images.unsplash.com/photo-1601216586144-1b2c8540851c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxpbmRpZSUyMGRvZ3xlbnwwfHx8fDE3Njg0ODU5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"indie dog\"},{\"id\":\"pet_mittens\",\"description\":\"Photo of Mittens, a Persian cat\",\"imageUrl\":\"https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZXJzaWFuJTIwY2F0fGVufDB8fHx8fDE3Njg0NDUxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"persian cat\"},{\"id\":\"pet_spike_lost\",\"description\":\"Photo of Spike, a lost german shepherd\",\"imageUrl\":\"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxnZXJtYW4lMjBzaGVwaGVyZHxlbnwwfHx8fDE3Njk1OTQxNTV8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"german shepherd\"},{\"id\":\"pet_ginger\",\"description\":\"Photo of Ginger, an orange tabby cat\",\"imageUrl\":\"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxvcmFuZ2UlMjBjYXR8ZW58MHx8fHwxNzY4NTI1NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"orange cat\"},{\"id\":\"post_golden_beach\",\"description\":\"A golden retriever on the beach\",\"imageUrl\":\"https://images.unsplash.com/photo-1548262459-4a02c9143899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBiZWFjaHxlbnwwfHx8fDE3Njg1NjQxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"golden retriever beach\"},{\"id\":\"post_simba_code\",\"description\":\"Cat sitting on a desk near a laptop\",\"imageUrl\":\"https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjYXQlMjBsYXB0b3B8ZW58MHx8fHwxNzY4NDg1NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cat laptop\"},{\"id\":\"post_rocky_rescue\",\"description\":\"A happy rescued dog\",\"imageUrl\":\"https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3Njg0MTA4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"happy dog\"},{\"id\":\"post_bruno_paratha\",\"description\":\"A beagle looking guilty\",\"imageUrl\":\"https://images.unsplash.com/photo-1682137145001-5cbdc866c421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxndWlsdHklMjBkb2d8ZW58MHx8fHwxNzY4NDg1NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"guilty dog\"},{\"id\":\"post_bengals_chaos\",\"description\":\"Multiple cats playing together\",\"imageUrl\":\"https://images.unsplash.com/photo-1759568572533-9b435252b388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjYXRzJTIwcGxheWluZ3xlbnwwfHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cats playing\"},{\"id\":\"post_sheru_cubbon\",\"description\":\"A dog enjoying Cubbon Park\",\"imageUrl\":\"https://images.unsplash.com/photo-1608743839000-50a0aa35e979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2clMjBiYWxsfGVufDB8fHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dog ball\"},{\"id\":\"post_mittens_sunbathing\",\"description\":\"A cat sunbathing\",\"imageUrl\":\"https://images.unsplash.com/photo-1729008765113-45cd6a30814c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2F0JTIwc3VuYmF0aGluZ3xlbnwwfHx8fDE3Njg0ODU5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cat sunbathing\"},{\"id\":\"post_grad_circle_office\",\"description\":\"A dog in an office\",\"imageUrl\":\"https://images.unsplash.com/photo-1629786913988-506da2a98db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2clMjBvZmZpY2V8ZW58MHx8fHwxNzY4NDg1OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dog office\"},{\"id\":\"post_bella_birthday\",\"description\":\"A golden retriever with a birthday hat\",\"imageUrl\":\"https://images.unsplash.com/photo-1621231943891-3e9a0f443b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBiaXJ0aGRheXxlbnwwfHx8fDE3Njg1NjQyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dog birthday\"},{\"id\":\"post_max_muddy\",\"description\":\"A muddy golden retriever smiling\",\"imageUrl\":\"https://images.unsplash.com/photo-1615497092850-6a5518765955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdWRkeSUyMGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHx8fDE3Njg1NjQyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"muddy dog\"},{\"id\":\"story_max_playing\",\"description\":\"Dog playing with a ball\",\"imageUrl\":\"https://images.unsplash.com/photo-1608743839000-50a0aa35e979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2clMjBiYWxsfGVufDB8fHx8MTc2ODQ4NTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dog ball\"},{\"id\":\"story_simba_nap\",\"description\":\"Cat napping in the sun\",\"imageUrl\":\"https://images.unsplash.com/photo-1760214695210-7aef133fa9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYXQlMjBuYXBwaW5nfGVufDB8fHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cat napping\"},{\"id\":\"story_rocky_park\",\"description\":\"Dog in a green park\",\"imageUrl\":\"https://images.unsplash.com/photo-1619333774340-3a878585c2e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkb2clMjBwYXJrfGVufDB8fHx8fDE3Njg0MTUyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dog park\"},{\"id\":\"story_bruno_zoomies\",\"description\":\"Blurry photo of a running dog\",\"imageUrl\":\"https://images.unsplash.com/photo-1617181668756-68f6613051d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxydW5uaW5nJTIwZG9nfGVufDB8fHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"running dog\"},{\"id\":\"story_cats_window\",\"description\":\"Cats looking out a window\",\"imageUrl\":\"https://images.unsplash.com/photo-1538097507583-1986951d5a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjYXQlMjB3aW5kb3d8ZW58MHx8fHwxNzY4NDc0MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cat window\"},{\"id\":\"landing-hero\",\"description\":\"A happy person with their dog\",\"imageUrl\":\"https://images.unsplash.com/photo-1719985971106-7c72d1f7c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cGVyc29uJTIwZG9nfGVufDB8fHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person dog\"},{\"id\":\"landing-feature-1\",\"description\":\"A collage of pet photos\",\"imageUrl\":\"https://images.unsplash.com/photo-1656153164394-99c8867e0746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwZXQlMjBjb2xsYWdlfGVufDB8fHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"pet collage\"},{\"id\":\"landing-feature-2\",\"description\":\"A person using a phone to check pet health\",\"imageUrl\":\"https://images.unsplash.com/photo-1663661745737-87c8741e9191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cGhvbmUlMjBoZWFsdGh8ZW58MHx8fHwxNzY4NDg1NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"phone health\"},{\"id\":\"landing-cta\",\"description\":\"A group of people with their pets at a park\",\"imageUrl\":\"https://images.unsplash.com/photo-1606577017430-20c1a74aa888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwZW9wbGUlMjBwZXRzfGVufDB8fHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"people pets\"},{\"id\":\"landing-lost-found\",\"description\":\"A sad looking dog with a lost poster in the background\",\"imageUrl\":\"https://images.unsplash.com/photo-1604294525410-d856980b196e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsb3N0JTIwZG9nfGVufDB8fHx8fDE3Njg1MjU4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"lost dog\"},{\"id\":\"event_yappy_hour\",\"description\":\"People and dogs at an outdoor brewery\",\"imageUrl\":\"https://images.unsplash.com/photo-1658449692429-06ca8a2c286f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2clMjBicmV3ZXJ5fGVufDB8fHx8MTc2ODUzOTg0MHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dog brewery\"},{\"id\":\"event_indie_playdate\",\"description\":\"Many different dogs playing together in a park\",\"imageUrl\":\"https://images.unsplash.com/photo-1558509807-e81a373b5b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkb2dzJTIwcGFya3xlbnwwfHx8fDE3Njg1Mzk4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dogs park\"},{\"id\":\"pet_buddy_adopt\",\"description\":\"A happy golden retriever\",\"imageUrl\":\"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MHx8fHwxNzY4NDM3ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"golden retriever\"},{\"id\":\"pet_oreo_adopt\",\"description\":\"A black and white cat\",\"imageUrl\":\"https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwY2F0fGVufDB8fHx8fDE3Njg1NjQyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"black white cat\"},{\"id\":\"pet_chip_doodle\",\"description\":\"Photo of Chip, a golden doodle\",\"imageUrl\":\"https://images.unsplash.com/photo-1568393691622-c7c13b243293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxnb2xkZW5kb29kbGV8ZW58MHx8fHwxNzI5Nzc0NDgxfDA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"happy goldendoodle\"},{\"id\":\"pet_byte_doodle\",\"description\":\"Photo of Byte, a golden doodle puppy\",\"imageUrl\":\"https://images.unsplash.com/photo-1618359469273-05459a997d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxnb2xkZW5kb29kbGUlMjBwdXBweXxlbnwwfHx8fDE3Mjk3NzQ1MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"goldendoodle puppy\"},{\"id\":\"pet_whiskers_lost\",\"description\":\"Photo of Whiskers, a lost siamese cat\",\"imageUrl\":\"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0fGVufDB8fHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"siamese cat\"},{\"id\":\"post_shadow_void\",\"description\":\"A black cat staring\",\"imageUrl\":\"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhdHxlbnwwfHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"black cat\"},{\"id\":\"post_sheru_couch\",\"description\":\"A dog on a couch\",\"imageUrl\":\"https://images.unsplash.com/photo-1588012882298-a1b49165383a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkb2clMjBjb3VjaHxlbnwwfHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"dog couch\"},{\"id\":\"post_shadow_silly\",\"description\":\"A cat being silly\",\"imageUrl\":\"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaWxseSUyMGNhdHxlbnwwfHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"silly cat\"},{\"id\":\"post_coco_new\",\"description\":\"A pomeranian puppy\",\"imageUrl\":\"https://images.unsplash.com/photo-1565779038234-9a367f088308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb21lcmFuaWFuJTIwcHVwcHl8ZW58MHx8fHwxNzY5Njg4NDEyfDA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"pomeranian puppy\"},{\"id\":\"post_mittens_annoyed\",\"description\":\"An annoyed cat\",\"imageUrl\":\"https://images.unsplash.com/photo-1513245543132-31f507417b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhbm5veWVkJTIwY2F0fGVufDB8fHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"annoyed cat\"},{\"id\":\"post_coco_paws\",\"description\":\"Puppy paws\",\"imageUrl\":\"https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHBhd3N8ZW58MHx8fHwxNzY5Njg4NDEyfDA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"puppy paws\"},{\"id\":\"post_chip_welcome\",\"description\":\"An office dog\",\"imageUrl\":\"https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2d8ZW58MHx8fHwxNzY5Njg4NDEyfDA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"office dog\"},{\"id\":\"post_chip_work\",\"description\":\"A dog with a laptop\",\"imageUrl\":\"https://images.unsplash.com/photo-1557495235-340eb887a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkb2clMjBsYXB0b3B8ZW58MHx8fHwxNzY5Njg4NDEyfDA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"dog laptop\"},{\"id\":\"post_chip_productive\",\"description\":\"A happy dog\",\"imageUrl\":\"https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3Njg0MTA4NDh8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"happy dog\"},{\"id\":\"post_zorro_desk\",\"description\":\"A rabbit on a desk\",\"imageUrl\":\"https://images.unsplash.com/photo-1629898565927-725359405e34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBkZXNrfGVufDB8fHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"rabbit desk\"},{\"id\":\"post_zorro_salad\",\"description\":\"A rabbit eating\",\"imageUrl\":\"https://images.unsplash.com/photo-1518796745738-41048802f99a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBlYXRpbmd8ZW58MHx8fHwxNzY5Njg4NDEyfDA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"rabbit eating\"},{\"id\":\"post_zorro_tail\",\"description\":\"A rabbit tail\",\"imageUrl\":\"https://images.unsplash.com/photo-1585110396000-c9ffd42a410c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjB0YWlsfGVufDB8fHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"rabbit tail\"},{\"id\":\"post_rocket_new\",\"description\":\"A small rabbit\",\"imageUrl\":\"https://images.unsplash.com/photo-1590390317309-a0354143a41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHJhYmJpdHxlbnwwfHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"small rabbit\"},{\"id\":\"post_rocket_tiny\",\"description\":\"A tiny rabbit\",\"imageUrl\":\"https://images.unsplash.com/photo-1591782293483-3b1204631d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0aW55JTIwcmFiYml0fGVufDB8fHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"tiny rabbit\"},{\"id\":\"post_rocket_cute\",\"description\":\"A cute rabbit\",\"imageUrl\":\"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcmFiYml0fGVufDB8fHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"cute rabbit\"},{\"id\":\"post_byte_barkend\",\"description\":\"A goldendoodle puppy\",\"imageUrl\":\"https://images.unsplash.com/photo-1620189507195-68709e24653a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnb2xkZW5kb29kbGUlMjBwdXBweXxlbnwwfHx8fDE3Mjk3NzQ1MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"doodle puppy\"},{\"id\":\"post_byte_friends\",\"description\":\"Two dogs together\",\"imageUrl\":\"https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0d28lMjBkb2dzfGVufDB8fHx8fDE3Njk2ODg0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"imageHint\":\"two dogs\"},{\"id\":\"post_byte_meeting\",\"description\":\"Two dogs playing\",\"imageUrl\":\"https://images.unsplash.com/photo-1529429617124-95b109e86bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkb2dzJTIwcGxheWluZ3xlbnwwfHx8fDE3Njg0ODU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dogs playing\"}]}"));}),
"[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaceHolderImages",
    ()=>PlaceHolderImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mock-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockData",
    ()=>mockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.mjs [app-client] (ecmascript)");
;
;
const getImageUrl = (id)=>{
    var _PlaceHolderImages_find;
    return ((_PlaceHolderImages_find = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === id)) === null || _PlaceHolderImages_find === void 0 ? void 0 : _PlaceHolderImages_find.imageUrl) || '';
};
const now = new Date();
const mockData = {
    users: [
        {
            userId: "user_001",
            email: "priya.sharma@test.com",
            password: "Test@123",
            displayName: "Priya Sharma",
            photoURL: getImageUrl("user_priya"),
            location: {
                city: "Mumbai",
                state: "Maharashtra",
                country: "India"
            },
            bio: "Dog mom to two adorable Golden Retrievers! Love hiking and beach walks with my fur babies 🐕",
            joinedAt: "2024-09-15",
            postCount: 12,
            petCount: 2,
            followers: 145,
            following: 89,
            petIds: [
                "pet_001",
                "pet_002"
            ]
        },
        {
            userId: "user_032",
            email: "Happy@test.com",
            password: "Test@123",
            displayName: "happy",
            photoURL: "https://picsum.photos/seed/happy/400/400",
            location: {
                city: "Unknown",
                state: "",
                country: "India"
            },
            bio: "",
            joinedAt: "2026-01-15T16:57:33.947Z",
            postCount: 0,
            petCount: 0,
            followers: 0,
            following: 0,
            petIds: []
        },
        {
            userId: "user_002",
            email: "arjun.patel@test.com",
            password: "Test@123",
            displayName: "Arjun Patel",
            photoURL: getImageUrl("user_arjun"),
            location: {
                city: "Bangalore",
                state: "Karnataka",
                country: "India"
            },
            bio: "Cat dad and software engineer. My cat probably codes better than I do.",
            joinedAt: "2024-10-20",
            postCount: 8,
            petCount: 1,
            followers: 112,
            following: 75,
            petIds: [
                "pet_003"
            ]
        },
        {
            userId: "user_003",
            email: "ananya.reddy@test.com",
            password: "Test@123",
            displayName: "Ananya Reddy",
            photoURL: getImageUrl("user_ananya"),
            location: {
                city: "Hyderabad",
                state: "Telangana",
                country: "India"
            },
            bio: "Proud parent of an adopted Indie dog. #AdoptDontShop",
            joinedAt: "2023-05-11",
            postCount: 25,
            petCount: 1,
            followers: 320,
            following: 150,
            petIds: [
                "pet_004"
            ]
        },
        {
            userId: "user_004",
            email: "rohan.mehta@test.com",
            password: "Test@123",
            displayName: "Rohan Mehta",
            photoURL: getImageUrl("user_rohan"),
            location: {
                city: "Delhi",
                state: "NCR",
                country: "India"
            },
            bio: "Beagle owner, which means I'm a professional snack defender.",
            joinedAt: "2024-01-02",
            postCount: 15,
            petCount: 1,
            followers: 98,
            following: 62,
            petIds: [
                "pet_005"
            ]
        },
        {
            userId: "user_005",
            email: "ishita.gupta@test.com",
            password: "Test@123",
            displayName: "Ishita Gupta",
            photoURL: getImageUrl("user_ishita"),
            location: {
                city: "Pune",
                state: "Maharashtra",
                country: "India"
            },
            bio: "Life is just a series of cat naps and zoomies. Wouldn't have it any other way.",
            joinedAt: "2023-11-18",
            postCount: 18,
            petCount: 3,
            followers: 210,
            following: 110,
            petIds: [
                "pet_006",
                "pet_007",
                "pet_008"
            ]
        },
        {
            userId: "user_006",
            email: "shreyan.bagchi@test.com",
            password: "Test@123",
            displayName: "Shreyan Bagchi",
            photoURL: getImageUrl("user_shreyan"),
            location: {
                city: "Bangalore",
                state: "Karnataka",
                country: "India"
            },
            bio: "Just a guy and his dog, exploring the Garden City.",
            joinedAt: "2024-08-01",
            postCount: 12,
            petCount: 3,
            followers: 50,
            following: 20,
            petIds: [
                "pet_009",
                "pet_011",
                "pet_016"
            ]
        },
        {
            userId: "user_007",
            email: "ishaan.singh@test.com",
            password: "Test@123",
            displayName: "Ishaan Som Singh",
            photoURL: getImageUrl("user_ishaan"),
            location: {
                city: "Bangalore",
                state: "Karnataka",
                country: "India"
            },
            bio: "Persian cat enthusiast. My camera roll is 99% cat photos.",
            joinedAt: "2024-07-22",
            postCount: 15,
            petCount: 3,
            followers: 78,
            following: 45,
            petIds: [
                "pet_010",
                "pet_012",
                "pet_015"
            ]
        },
        {
            userId: "user_008",
            email: "grad.circle@test.com",
            password: "Test@123",
            displayName: "Grad Circle",
            photoURL: getImageUrl("user_grad_circle"),
            location: {
                city: "Bangalore",
                state: "Karnataka",
                country: "India"
            },
            bio: "We're a pet-friendly workspace in Bangalore! Pawsitivity is part of our culture.",
            joinedAt: "2024-06-10",
            postCount: 9,
            petCount: 2,
            followers: 150,
            following: 12,
            petIds: [
                "pet_013",
                "pet_017"
            ]
        }
    ],
    pets: [
        {
            petId: "pet_001",
            ownerId: "user_001",
            ownerName: "Priya Sharma",
            name: "Max",
            type: "Dog",
            breed: "Golden Retriever",
            gender: "Male",
            age: {
                years: 3,
                months: 0
            },
            birthDate: "2021-06-15",
            color: "Golden",
            weight: 32,
            photo: getImageUrl("pet_max"),
            specialNeeds: "None",
            activityLevel: 8,
            microchipId: "123456789",
            createdAt: "2024-09-15"
        },
        {
            petId: "pet_002",
            ownerId: "user_001",
            ownerName: "Priya Sharma",
            name: "Bella",
            type: "Dog",
            breed: "Golden Retriever",
            gender: "Female",
            age: {
                years: 2,
                months: 0
            },
            birthDate: "2022-04-01",
            color: "Cream",
            weight: 28,
            photo: getImageUrl("pet_bella"),
            specialNeeds: "None",
            activityLevel: 9,
            microchipId: "987654321",
            createdAt: "2024-09-15"
        },
        {
            petId: "pet_003",
            ownerId: "user_002",
            ownerName: "Arjun Patel",
            name: "Simba",
            type: "Cat",
            breed: "Bengal",
            gender: "Male",
            age: {
                years: 4,
                months: 0
            },
            birthDate: "2020-08-20",
            color: "Spotted Brown",
            weight: 6,
            photo: getImageUrl("pet_simba"),
            specialNeeds: "None",
            activityLevel: 7,
            microchipId: "112233445",
            createdAt: "2024-10-20"
        },
        {
            petId: "pet_004",
            ownerId: "user_003",
            ownerName: "Ananya Reddy",
            name: "Rocky",
            type: "Dog",
            breed: "Indian Pariah",
            gender: "Male",
            age: {
                years: 5,
                months: 0
            },
            birthDate: "2019-01-01",
            color: "Brown",
            weight: 20,
            photo: getImageUrl("pet_rocky"),
            specialNeeds: "Rescued",
            activityLevel: 8,
            microchipId: "N/A",
            createdAt: "2023-05-11"
        },
        {
            petId: "pet_005",
            ownerId: "user_004",
            ownerName: "Rohan Mehta",
            name: "Bruno",
            type: "Dog",
            breed: "Beagle",
            gender: "Male",
            age: {
                years: 2,
                months: 6
            },
            birthDate: "2022-07-10",
            color: "Tricolor",
            weight: 12,
            photo: getImageUrl("pet_bruno"),
            specialNeeds: "Loves food a bit too much.",
            activityLevel: 10,
            microchipId: "556677889",
            createdAt: "2024-01-02"
        },
        {
            petId: "pet_006",
            ownerId: "user_005",
            ownerName: "Ishita Gupta",
            name: "Leo",
            type: "Cat",
            breed: "Bengal",
            gender: "Male",
            age: {
                years: 1,
                months: 2
            },
            birthDate: "2023-11-01",
            color: "Spotted Silver",
            weight: 5,
            photo: "https://picsum.photos/seed/leo/400/400",
            specialNeeds: "None",
            activityLevel: 9,
            microchipId: "121212121",
            createdAt: "2023-11-18"
        },
        {
            petId: "pet_007",
            ownerId: "user_005",
            ownerName: "Ishita Gupta",
            name: "Luna",
            type: "Cat",
            breed: "Bengal",
            gender: "Female",
            age: {
                years: 1,
                months: 2
            },
            birthDate: "2023-11-01",
            color: "Spotted Brown",
            weight: 4,
            photo: "https://picsum.photos/seed/luna/400/400",
            specialNeeds: "None",
            activityLevel: 9,
            microchipId: "343434343",
            createdAt: "2023-11-18"
        },
        {
            petId: "pet_008",
            ownerId: "user_005",
            ownerName: "Ishita Gupta",
            name: "Milo",
            type: "Cat",
            breed: "Bengal",
            gender: "Male",
            age: {
                years: 1,
                months: 2
            },
            birthDate: "2023-11-01",
            color: "Spotted Snow",
            weight: 5.5,
            photo: "https://picsum.photos/seed/milo/400/400",
            specialNeeds: "None",
            activityLevel: 9,
            microchipId: "565656565",
            createdAt: "2023-11-18"
        },
        {
            petId: "pet_009",
            ownerId: "user_006",
            ownerName: "Shreyan Bagchi",
            name: "Sheru",
            type: "Dog",
            breed: "Indie",
            gender: "Male",
            age: {
                years: 3,
                months: 0
            },
            birthDate: "2021-09-01",
            color: "Fawn",
            weight: 18,
            photo: getImageUrl("pet_sheru"),
            specialNeeds: "None",
            activityLevel: 7,
            microchipId: "N/A",
            createdAt: "2024-08-01"
        },
        {
            petId: "pet_010",
            ownerId: "user_007",
            ownerName: "Ishaan Som Singh",
            name: "Mittens",
            type: "Cat",
            breed: "Persian",
            gender: "Female",
            age: {
                years: 2,
                months: 0
            },
            birthDate: "2022-10-10",
            color: "White",
            weight: 4,
            photo: getImageUrl("pet_mittens"),
            specialNeeds: "Requires daily grooming.",
            activityLevel: 5,
            microchipId: "445566778",
            createdAt: "2024-07-22"
        },
        {
            petId: "pet_011",
            ownerId: "user_006",
            ownerName: "Shreyan Bagchi",
            name: "Shadow",
            type: "Cat",
            breed: "Bombay",
            gender: "Male",
            age: {
                years: 1,
                months: 5
            },
            birthDate: "2023-04-10",
            color: "Black",
            weight: 4.5,
            photo: "https://picsum.photos/seed/shadowcat/400/400",
            specialNeeds: "Loves to hide in boxes.",
            activityLevel: 6,
            microchipId: "SHD654321",
            createdAt: "2024-09-01"
        },
        {
            petId: "pet_012",
            ownerId: "user_007",
            ownerName: "Ishaan Som Singh",
            name: "Coco",
            type: "Dog",
            breed: "Pomeranian",
            gender: "Female",
            age: {
                years: 0,
                months: 8
            },
            birthDate: "2024-01-20",
            color: "Orange Sable",
            weight: 2,
            photo: "https://picsum.photos/seed/cocodog/400/400",
            specialNeeds: "Very smol and needs supervision.",
            activityLevel: 9,
            microchipId: "COCO12345",
            createdAt: "2024-09-10"
        },
        {
            petId: "pet_013",
            ownerId: "user_008",
            ownerName: "Grad Circle",
            name: "Chip",
            type: "Dog",
            breed: "Golden Doodle",
            gender: "Male",
            age: {
                years: 2,
                months: 1
            },
            birthDate: "2022-08-01",
            color: "Apricot",
            weight: 25,
            photo: getImageUrl("pet_chip_doodle"),
            specialNeeds: "Chief Morale Officer.",
            activityLevel: 8,
            microchipId: "CHIP98765",
            createdAt: "2024-09-12"
        },
        {
            petId: "pet_015",
            ownerId: "user_007",
            ownerName: "Ishaan Som Singh",
            name: "Zorro",
            type: "Rabbit",
            breed: "Holland Lop",
            gender: "Male",
            age: {
                years: 1,
                months: 0
            },
            birthDate: "2023-09-15",
            color: "Broken Black",
            weight: 1.8,
            photo: "https://picsum.photos/seed/zorrorabbit/400/400",
            specialNeeds: "Needs lots of hay.",
            activityLevel: 4,
            microchipId: "ZORRO12345",
            createdAt: "2024-09-15"
        },
        {
            petId: "pet_016",
            ownerId: "user_006",
            ownerName: "Shreyan Bagchi",
            name: "Rocket",
            type: "Rabbit",
            breed: "Netherland Dwarf",
            gender: "Male",
            age: {
                years: 0,
                months: 10
            },
            birthDate: "2023-11-15",
            color: "Chestnut",
            weight: 1.2,
            photo: "https://picsum.photos/seed/rocketrabbit/400/400",
            specialNeeds: "Very energetic.",
            activityLevel: 8,
            microchipId: "ROCKET54321",
            createdAt: "2024-09-15"
        },
        {
            petId: "pet_017",
            ownerId: "user_008",
            ownerName: "Grad Circle",
            name: "Byte",
            type: "Dog",
            breed: "Golden Doodle",
            gender: "Female",
            age: {
                years: 1,
                months: 0
            },
            birthDate: "2023-09-15",
            color: "Cream",
            weight: 22,
            photo: getImageUrl("pet_byte_doodle"),
            specialNeeds: "Head of Bark-end Development.",
            activityLevel: 7,
            microchipId: "BYTE54321",
            createdAt: "2024-09-15"
        }
    ],
    posts: [
        {
            postId: "post_001",
            userId: "user_001",
            userName: "Priya Sharma",
            userPhoto: getImageUrl("user_priya"),
            petId: "pet_001",
            petName: "Max",
            image: getImageUrl("post_golden_beach"),
            caption: "Salty paws and sandy noses. Max living his best life at the beach today! 🌊 #beachday #dogsofpetconnect",
            likes: 75,
            likedBy: [],
            comments: [
                {
                    commentId: "cmt_001",
                    userId: "user_002",
                    userName: "Arjun Patel",
                    userPhoto: getImageUrl("user_arjun"),
                    text: "Looks amazing! I need to take Simba to the beach sometime.",
                    timestamp: "2025-01-15T12:35:00Z"
                },
                {
                    commentId: "cmt_002",
                    userId: "user_004",
                    userName: "Rohan Mehta",
                    userPhoto: getImageUrl("user_rohan"),
                    text: "So much fun!",
                    timestamp: "2025-01-15T12:45:00Z"
                }
            ],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString()
        },
        {
            postId: "post_002",
            userId: "user_002",
            userName: "Arjun Patel",
            userPhoto: getImageUrl("user_arjun"),
            petId: "pet_003",
            petName: "Simba",
            image: getImageUrl("post_simba_code"),
            caption: "Simba judging my code reviews from his favorite perch 😂 #catsofinstagram #coderlife",
            likes: 34,
            likedBy: [
                "user_005"
            ],
            comments: [
                {
                    commentId: "cmt_003",
                    userId: "user_005",
                    userName: "Ishita Gupta",
                    userPhoto: getImageUrl("user_ishita"),
                    text: "That's the look of a senior developer.",
                    timestamp: "2025-01-15T09:10:00Z"
                }
            ],
            saved: true,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString()
        },
        {
            postId: "post_003",
            userId: "user_003",
            userName: "Ananya Reddy",
            userPhoto: getImageUrl("user_ananya"),
            petId: "pet_004",
            petName: "Rocky",
            image: getImageUrl("post_rocky_rescue"),
            caption: "4 years ago, I found Rocky on the streets. Today, he's my best friend ❤️ #AdoptDontShop #rescuedog",
            likes: 89,
            likedBy: [
                "user_001",
                "user_002",
                "user_004",
                "user_005"
            ],
            comments: [
                {
                    commentId: "cmt_004",
                    userId: "user_001",
                    userName: "Priya Sharma",
                    userPhoto: getImageUrl("user_priya"),
                    text: "He looks so happy! You're an amazing pet parent.",
                    timestamp: "2025-01-13T10:00:00Z"
                }
            ],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 3).toISOString()
        },
        {
            postId: "post_004",
            userId: "user_004",
            userName: "Rohan Mehta",
            userPhoto: getImageUrl("user_rohan"),
            petId: "pet_005",
            petName: "Bruno",
            image: getImageUrl("post_bruno_paratha"),
            caption: "Bruno stole an entire paratha from the table today. Living up to the Beagle reputation 😂 #beaglelife",
            likes: 56,
            likedBy: [
                "user_001"
            ],
            comments: [
                {
                    commentId: "cmt_005",
                    userId: "user_001",
                    userName: "Priya Sharma",
                    userPhoto: getImageUrl("user_priya"),
                    text: "Classic Beagle behavior! 😂",
                    timestamp: "2025-01-12T15:00:00Z"
                },
                {
                    commentId: "cmt_006",
                    userId: "user_005",
                    userName: "Ishita Gupta",
                    userPhoto: getImageUrl("user_ishita"),
                    text: "The struggle is real!",
                    timestamp: "2025-01-12T15:30:00Z"
                }
            ],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 4).toISOString()
        },
        {
            postId: "post_005",
            userId: "user_005",
            userName: "Ishita Gupta",
            userPhoto: getImageUrl("user_ishita"),
            image: getImageUrl("post_bengals_chaos"),
            caption: "Three bengals = chaos multiplied by infinity 😅 #bengalcat #catmom",
            likes: 42,
            likedBy: [
                "user_002"
            ],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 5).toISOString()
        },
        {
            postId: "post_006",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            petId: "pet_009",
            petName: "Sheru",
            image: getImageUrl("post_sheru_cubbon"),
            caption: "Sunday morning vibes at Cubbon Park. Sheru loves the open space! #bangalorediaries #dogsofbangalore",
            likes: 28,
            likedBy: [
                "user_007",
                "user_008"
            ],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString()
        },
        {
            postId: "post_007",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            petId: "pet_010",
            petName: "Mittens",
            image: getImageUrl("post_mittens_sunbathing"),
            caption: "The queen claims her throne (and the sunniest spot in the house). #persiancat #catlife",
            likes: 52,
            likedBy: [
                "user_006",
                "user_002"
            ],
            comments: [],
            saved: true,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString()
        },
        {
            postId: "post_008",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            petId: "pet_009",
            petName: "Sheru",
            image: getImageUrl("post_grad_circle_office"),
            caption: "We had a very good boy visit us at Grad Circle today! Sheru kept the team morale high. #petfriendlyoffice #bangalorestartups",
            likes: 95,
            likedBy: [
                "user_006",
                "user_007",
                "user_001"
            ],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 6).toISOString()
        },
        {
            postId: "post_009",
            userId: "user_001",
            userName: "Priya Sharma",
            userPhoto: getImageUrl("user_priya"),
            petId: "pet_002",
            petName: "Bella",
            image: getImageUrl("post_bella_birthday"),
            caption: "Happy 2nd Birthday to my sweet Bella! 🎂 Can't believe how fast time flies. #birthdaygirl #dogbirthday",
            likes: 72,
            likedBy: [
                "user_002",
                "user_003",
                "user_004"
            ],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString()
        },
        {
            postId: "post_010",
            userId: "user_001",
            userName: "Priya Sharma",
            userPhoto: getImageUrl("user_priya"),
            petId: "pet_001",
            petName: "Max",
            image: getImageUrl("post_max_muddy"),
            caption: "Someone had a little too much fun in the monsoon puddles today... Worth it for that smile! 🐾 #monsoon #muddydog",
            likes: 61,
            likedBy: [
                "user_005"
            ],
            comments: [],
            saved: true,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 4).toISOString()
        },
        {
            postId: "post_011",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            petId: "pet_011",
            petName: "Shadow",
            image: getImageUrl("post_shadow_void"),
            caption: "The void stares back. #bombaycat #blackcat",
            likes: 33,
            likedBy: [
                "user_007"
            ],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString()
        },
        {
            postId: "post_012",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            petId: "pet_009",
            petName: "Sheru",
            image: getImageUrl("post_sheru_couch"),
            caption: "King of the couch.",
            likes: 41,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 5).toISOString()
        },
        {
            postId: "post_013",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            petId: "pet_011",
            petName: "Shadow",
            image: getImageUrl("post_shadow_silly"),
            caption: "I think my cat is broken.",
            likes: 55,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 10).toISOString()
        },
        {
            postId: "post_014",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            petId: "pet_012",
            petName: "Coco",
            image: getImageUrl("post_coco_new"),
            caption: "Welcome to the family, Coco! So much floof in such a tiny package. #pomeranian #puppy",
            likes: 102,
            likedBy: [
                "user_006",
                "user_001"
            ],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString()
        },
        {
            postId: "post_015",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            petId: "pet_010",
            petName: "Mittens",
            image: getImageUrl("post_mittens_annoyed"),
            caption: "Mittens is not impressed with the new puppy. 😂",
            likes: 67,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 3).toISOString()
        },
        {
            postId: "post_016",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            petId: "pet_012",
            petName: "Coco",
            image: getImageUrl("post_coco_paws"),
            caption: "Tiny paws, big adventures.",
            likes: 88,
            likedBy: [],
            comments: [],
            saved: true,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 7).toISOString()
        },
        {
            postId: "post_017",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            petId: "pet_013",
            petName: "Chip",
            image: getImageUrl("post_chip_welcome"),
            caption: "Meet the newest member of the Grad Circle team, Chip! He's in charge of mandatory belly rub breaks.",
            likes: 150,
            likedBy: [
                "user_006",
                "user_007"
            ],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString()
        },
        {
            postId: "post_018",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            petId: "pet_013",
            petName: "Chip",
            image: getImageUrl("post_chip_work"),
            caption: "Chip hard at work during our weekly stand-up.",
            likes: 123,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 4).toISOString()
        },
        {
            postId: "post_019",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            petId: "pet_013",
            petName: "Chip",
            image: getImageUrl("post_chip_productive"),
            caption: "Did you know a pet-friendly office can reduce stress and increase productivity? Chip is doing his part!",
            likes: 111,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 9).toISOString()
        },
        {
            postId: "post_020",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            petId: "pet_015",
            petName: "Zorro",
            image: getImageUrl("post_zorro_desk"),
            caption: "Zorro exploring his new kingdom (my desk).",
            likes: 45,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString()
        },
        {
            postId: "post_021",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            petId: "pet_015",
            petName: "Zorro",
            image: getImageUrl("post_zorro_salad"),
            caption: "Salad for one, please. 🥬",
            likes: 58,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 4).toISOString()
        },
        {
            postId: "post_022",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            petId: "pet_015",
            petName: "Zorro",
            image: getImageUrl("post_zorro_tail"),
            caption: "The definition of a fluffy tail.",
            likes: 62,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 8).toISOString()
        },
        {
            postId: "post_023",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            petId: "pet_016",
            petName: "Rocket",
            image: getImageUrl("post_rocket_new"),
            caption: "Meet Rocket, the newest and tiniest member of the family!",
            likes: 71,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString()
        },
        {
            postId: "post_024",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            petId: "pet_016",
            petName: "Rocket",
            image: getImageUrl("post_rocket_tiny"),
            caption: "He's so small! My phone is bigger than he is.",
            likes: 82,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 6).toISOString()
        },
        {
            postId: "post_025",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            petId: "pet_016",
            petName: "Rocket",
            image: getImageUrl("post_rocket_cute"),
            caption: "It's hard to get anything done with this level of cuteness around.",
            likes: 75,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 11).toISOString()
        },
        {
            postId: "post_026",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            petId: "pet_017",
            petName: "Byte",
            image: getImageUrl("post_byte_barkend"),
            caption: "Our new Head of Bark-end Development, Byte, ensuring all our code is paw-some.",
            likes: 99,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 3).toISOString()
        },
        {
            postId: "post_027",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            petId: "pet_017",
            petName: "Byte",
            image: getImageUrl("post_byte_friends"),
            caption: "Byte and Chip are the best of friends. #officepups",
            likes: 130,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 7).toISOString()
        },
        {
            postId: "post_028",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            petId: "pet_017",
            petName: "Byte",
            image: getImageUrl("post_byte_meeting"),
            caption: "Important meeting in progress.",
            likes: 115,
            likedBy: [],
            comments: [],
            saved: false,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 12).toISOString()
        }
    ],
    stories: [
        {
            storyId: "story_001",
            userId: "user_001",
            userName: "Priya",
            userPhoto: getImageUrl("user_priya"),
            storyImage: getImageUrl("story_max_playing"),
            caption: "Play time! #doglife",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            expiresAt: "2025-01-16T10:00:00Z"
        },
        {
            storyId: "story_002",
            userId: "user_002",
            userName: "Arjun",
            userPhoto: getImageUrl("user_arjun"),
            storyImage: getImageUrl("story_simba_nap"),
            caption: "Sleepy Sunday 😴 #catnap",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            expiresAt: "2025-01-16T09:00:00Z"
        },
        {
            storyId: "story_003",
            userId: "user_003",
            userName: "Ananya",
            userPhoto: getImageUrl("user_ananya"),
            storyImage: getImageUrl("story_rocky_park"),
            caption: "Park adventures! #rescuedog",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            expiresAt: "2025-01-16T11:00:00Z"
        },
        {
            storyId: "story_004",
            userId: "user_004",
            userName: "Rohan",
            userPhoto: getImageUrl("user_rohan"),
            storyImage: getImageUrl("story_bruno_zoomies"),
            caption: "Mid-day zoomies #beagle",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            expiresAt: "2025-01-16T08:00:00Z"
        },
        {
            storyId: "story_005",
            userId: "user_005",
            userName: "Ishita",
            userPhoto: getImageUrl("user_ishita"),
            storyImage: getImageUrl("story_cats_window"),
            caption: "Bird watching crew #catlife",
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            expiresAt: "2025-01-16T12:00:00Z"
        }
    ],
    events: [
        {
            eventId: "event_001",
            organizerId: "user_008",
            organizerName: "Grad Circle",
            organizerPhoto: getImageUrl("user_grad_circle"),
            title: "Paws & Pints: Yappy Hour",
            description: "Join us for a fun evening of craft beer for humans and puppuccinos for dogs! A great chance to socialize and meet other pet lovers in the city.",
            bannerImage: getImageUrl("event_yappy_hour"),
            date: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString(),
            startTime: "17:00",
            endTime: "20:00",
            location: {
                venue: "Toit (Pet-Friendly Area)",
                city: "Bangalore",
                address: "298, 100 Feet Road, Namma Metro Pillar 62, Indiranagar",
                landmark: "Indiranagar"
            },
            petTypes: [
                'Dogs'
            ],
            maxAttendees: 50,
            isFree: false,
            attendeeCount: 28,
            attendees: [],
            status: 'upcoming',
            createdAt: "2025-02-15T10:00:00Z"
        },
        {
            eventId: "event_002",
            organizerId: "user_003",
            organizerName: "Ananya Reddy",
            organizerPhoto: getImageUrl("user_ananya"),
            title: "Cubbon Park Indie Playdate",
            description: "A casual weekend meetup for all our lovely indie dogs and their parents at the Cubbon Park dog park. Let's celebrate our amazing desi hounds!",
            bannerImage: getImageUrl("event_indie_playdate"),
            date: new Date(new Date().setDate(new Date().getDate() + 21)).toISOString(),
            startTime: "08:00",
            endTime: "10:00",
            location: {
                venue: "The Dog Park at Cubbon Park",
                city: "Bangalore",
                address: "Behind Cubbon Park Aquarium, Kasturba Road",
                landmark: "Cubbon Park"
            },
            petTypes: [
                'Dogs'
            ],
            maxAttendees: null,
            isFree: true,
            attendeeCount: 16,
            attendees: [
                {
                    userId: "user_001",
                    userName: "Priya Sharma",
                    userPhoto: getImageUrl("user_priya"),
                    rsvpDate: "2025-02-18T10:00:00Z"
                }
            ],
            status: 'upcoming',
            createdAt: "2025-02-20T11:00:00Z"
        }
    ],
    forumTopics: [
        {
            topicId: "topic_001",
            categoryId: "dog-talk",
            userId: "user_001",
            userName: "Priya Sharma",
            userPhoto: getImageUrl("user_priya"),
            title: "Best dog-friendly cafes in Bangalore?",
            content: "Hey everyone! My husband and I are looking for some new spots to take Max and Bella on the weekends. We've been to TherPUP and Snoopy Paws Cafe, but would love to hear your recommendations!",
            views: 128,
            replyCount: 4,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 3).toISOString(),
            replies: [
                {
                    "replyId": "reply_001",
                    "userId": "user_002",
                    "userName": "Arjun Patel",
                    "userPhoto": getImageUrl("user_arjun"),
                    "content": "I've heard good things about The Pet People Cafe in HSR Layout. They have a nice rooftop area.",
                    "timestamp": "2025-02-23T11:00:00Z"
                },
                {
                    "replyId": "reply_002",
                    "userId": "user_006",
                    "userName": "Shreyan Bagchi",
                    "userPhoto": getImageUrl("user_shreyan"),
                    "content": "Toit in Indiranagar is a classic choice! They are very welcoming to pets in their outdoor section.",
                    "timestamp": "2025-02-23T12:30:00Z"
                },
                {
                    "replyId": "reply_003",
                    "userId": "user_008",
                    "userName": "Grad Circle",
                    "userPhoto": getImageUrl("user_grad_circle"),
                    "content": "We're not a cafe, but we're a pet-friendly workspace! Feel free to drop by for a coffee if you're in the area.",
                    "timestamp": "2025-02-23T14:00:00Z"
                },
                {
                    "replyId": "reply_004",
                    "userId": "user_004",
                    "userName": "Rohan Mehta",
                    "userPhoto": getImageUrl("user_rohan"),
                    "content": "Don't forget The Hole In The Wall Cafe in Koramangala!",
                    "timestamp": "2025-02-24T09:00:00Z"
                }
            ]
        },
        {
            topicId: "topic_002",
            categoryId: "cat-corner",
            userId: "user_002",
            userName: "Arjun Patel",
            userPhoto: getImageUrl("user_arjun"),
            title: "Tips for introducing a new cat to your home?",
            content: "I'm thinking of adopting another cat, but I'm worried about how Simba will react. He's been the only king of this castle for a while now. Any advice on making the introduction smooth?",
            views: 74,
            replyCount: 2,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 5).toISOString(),
            replies: [
                {
                    "replyId": "reply_005",
                    "userId": "user_005",
                    "userName": "Ishita Gupta",
                    "userPhoto": getImageUrl("user_ishita"),
                    "content": "Take it slow! Keep them in separate rooms for a few days and let them smell each other's scent first.",
                    "timestamp": "2025-01-21T18:00:00Z"
                },
                {
                    "replyId": "reply_006",
                    "userId": "user_001",
                    "userName": "Priya Sharma",
                    "userPhoto": getImageUrl("user_priya"),
                    "content": "Exactly what Ishita said. And feed them on opposite sides of a closed door. That helps create a positive association.",
                    "timestamp": "2025-01-22T09:00:00Z"
                }
            ]
        },
        {
            topicId: "topic_003",
            categoryId: "health",
            userId: "user_004",
            userName: "Rohan Mehta",
            userPhoto: getImageUrl("user_rohan"),
            title: "Struggling with my Beagle's weight. Help!",
            content: "Bruno is a foodie and has put on a few extra kilos. The vet has advised us to get his weight under control. Any tips for managing a Beagle's diet without them staging a protest? 😂",
            views: 210,
            replyCount: 8,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
            replies: [
                {
                    "replyId": "reply_007",
                    "userId": "user_001",
                    "userName": "Priya Sharma",
                    "userPhoto": getImageUrl("user_priya"),
                    "content": "Switch to a low-calorie diet food and measure his portions exactly. Also, more exercise! It's tough with Beagles, I know.",
                    "timestamp": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString()
                }
            ]
        },
        {
            topicId: "topic_004",
            categoryId: "all-pets",
            userId: "user_003",
            userName: "Ananya Reddy",
            userPhoto: getImageUrl("user_ananya"),
            title: "Question about pet adoption process in Hyderabad",
            content: "A friend of mine is looking to adopt a puppy in Hyderabad. Does anyone have recommendations for good shelters or rescue organizations to contact?",
            views: 55,
            replyCount: 1,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 4).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 6).toISOString(),
            replies: []
        },
        {
            topicId: "topic_005",
            categoryId: "dog-talk",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            title: "Good groomers for long-haired dogs in Bangalore South?",
            content: "Sheru could really use a trim and a spa day. Any recommendations for good and patient groomers in the Jayanagar/JP Nagar area?",
            views: 45,
            replyCount: 1,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 4).toISOString(),
            replies: []
        },
        {
            topicId: "topic_006",
            categoryId: "cat-corner",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            title: "Persian cat food brands - which is best?",
            content: "I've been feeding Mittens Royal Canin, but I'm wondering if there are better options out there for Persian cats. What do you all feed your long-haired feline friends?",
            views: 88,
            replyCount: 3,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 3).toISOString(),
            replies: []
        },
        {
            topicId: "topic_007",
            categoryId: "all-pets",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            title: "Share your pet-friendly office stories!",
            content: "We love having pets at our workspace! It's amazing for morale. Does anyone else work in a pet-friendly office? Share your experiences and photos!",
            views: 112,
            replyCount: 5,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
            replies: []
        },
        {
            topicId: "topic_008",
            categoryId: "all-pets",
            userId: "user_006",
            userName: "Shreyan Bagchi",
            userPhoto: getImageUrl("user_shreyan"),
            title: "Rabbit-proofing my apartment - tips needed!",
            content: "Rocket is a little explorer and loves to chew on everything. Especially wires! Any tips or product recommendations for rabbit-proofing an apartment?",
            views: 30,
            replyCount: 1,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
            replies: []
        },
        {
            topicId: "topic_009",
            categoryId: "dog-talk",
            userId: "user_007",
            userName: "Ishaan Som Singh",
            userPhoto: getImageUrl("user_ishaan"),
            title: "Pomeranian puppy training is a challenge!",
            content: "Coco is adorable but has so much energy. Potty training is going... slowly. Any tips for training a high-energy, intelligent puppy like a Pomeranian?",
            views: 65,
            replyCount: 2,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
            replies: []
        },
        {
            topicId: "topic_010",
            categoryId: "dog-talk",
            userId: "user_008",
            userName: "Grad Circle",
            userPhoto: getImageUrl("user_grad_circle"),
            title: "Best chew toys for a Golden Doodle?",
            content: "Our office doodles, Chip and Byte, go through toys like crazy. We need some recommendations for durable chew toys that can stand up to their enthusiasm. Any ideas?",
            views: 95,
            replyCount: 4,
            lastReplyAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 3).toISOString(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 5).toISOString(),
            replies: []
        }
    ],
    lostPetAlerts: [
        {
            alertId: "lpa_001",
            status: 'active',
            ownerId: "user_004",
            ownerName: "Rohan Mehta",
            ownerPhone: "+91-9988776655",
            petId: "pet_005",
            petName: "Spike",
            petType: 'Dog',
            breed: "German Shepherd",
            age: {
                years: 4,
                months: 0
            },
            gender: 'Male',
            color: "Black and Tan",
            petPhoto: getImageUrl("pet_spike_lost"),
            distinctiveMarks: "He has a floppy right ear.",
            lastSeenLocation: {
                address: "Koramangala 8th Block",
                city: "Bangalore",
                landmark: "Near Bethany High School"
            },
            lastSeenDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString().split('T')[0],
            lastSeenTime: "21:00",
            description: "Spike is a gentle giant but can be timid around new people. He escaped from our backyard. He is wearing a blue collar with a name tag.",
            reward: 5000,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString()
        },
        {
            alertId: "lpa_003",
            status: 'active',
            ownerId: "user_001",
            ownerName: "Priya Sharma",
            ownerPhone: "+91-9876543210",
            petId: "pet_018",
            petName: "Whiskers",
            petType: 'Cat',
            breed: "Siamese",
            age: {
                years: 2,
                months: 0
            },
            gender: 'Female',
            color: "Cream with dark points",
            petPhoto: getImageUrl("pet_whiskers_lost"),
            distinctiveMarks: "She has striking blue eyes.",
            lastSeenLocation: {
                address: "Jayanagar 4th Block",
                city: "Bangalore",
                landmark: "Near the Jayanagar shopping complex"
            },
            lastSeenDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString().split('T')[0],
            lastSeenTime: "18:00",
            description: "Whiskers is very friendly but might be scared. She slipped out the front door. She is not wearing a collar. We miss her dearly.",
            reward: 2000,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString()
        },
        {
            alertId: "lpa_002",
            status: 'found',
            ownerId: "user_007",
            ownerName: "Ishaan Som Singh",
            ownerPhone: "+91-9123456789",
            petId: "pet_012",
            petName: "Ginger",
            petType: 'Cat',
            breed: "Domestic Shorthair",
            age: {
                years: 1,
                months: 0
            },
            gender: 'Male',
            color: "Orange Tabby",
            petPhoto: getImageUrl("pet_ginger"),
            distinctiveMarks: "Small nick on his left ear.",
            lastSeenLocation: {
                address: "Indiranagar 12th Main",
                city: "Bangalore",
                landmark: "Near 12th Main Park"
            },
            lastSeenDate: "2025-02-18",
            lastSeenTime: "22:00",
            description: "Ginger is an indoor cat and is not used to being outside. He is probably hiding somewhere nearby. He was found hiding under a car on the next street. Thanks to everyone who helped!",
            reward: 5000,
            createdAt: "2025-02-18T23:00:00Z"
        }
    ],
    tipArticles: [],
    conversations: [
        {
            conversationId: "convo_001",
            participants: [
                "user_001",
                "user_004"
            ],
            lastMessage: "Sounds great! Let me know what time works for you.",
            lastMessageBy: "user_001",
            lastMessageAt: "2025-01-18T14:00:00Z",
            unreadCount: {
                "user_001": 0,
                "user_004": 2
            },
            messages: [
                {
                    messageId: "msg_001",
                    senderId: "user_004",
                    text: "Hey! Just saw you on the matchmaker. Bruno would love to meet Max. Would you be up for a playdate?",
                    createdAt: "2025-01-18T13:55:00Z",
                    readBy: [
                        "user_001"
                    ]
                },
                {
                    messageId: "msg_002",
                    senderId: "user_001",
                    text: "Hi Rohan! Yes, absolutely! Max would love that. He's very friendly.",
                    createdAt: "2025-01-18T13:58:00Z",
                    readBy: []
                },
                {
                    messageId: "msg_003",
                    senderId: "user_001",
                    text: "Sounds great! Let me know what time works for you.",
                    createdAt: "2025-01-18T14:00:00Z",
                    readBy: []
                }
            ],
            createdAt: "2025-01-18T13:55:00Z"
        },
        {
            conversationId: "convo_002",
            participants: [
                "user_001",
                "user_003"
            ],
            lastMessage: "He's doing great! So much energy.",
            lastMessageBy: "user_001",
            lastMessageAt: "2025-01-17T18:30:00Z",
            unreadCount: {
                "user_001": 0,
                "user_003": 0
            },
            messages: [
                {
                    messageId: "msg_004",
                    senderId: "user_003",
                    text: "Hi Priya! I saw your post about Rocky's adoption anniversary. So heartwarming. How is he doing?",
                    createdAt: "2025-01-17T18:25:00Z",
                    readBy: [
                        "user_001"
                    ]
                },
                {
                    messageId: "msg_005",
                    senderId: "user_001",
                    text: "He's doing great! So much energy.",
                    createdAt: "2025-01-17T18:30:00Z",
                    readBy: [
                        "user_003"
                    ]
                }
            ],
            createdAt: "2025-01-17T18:25:00Z"
        },
        {
            conversationId: "convo_003",
            participants: [
                "user_001",
                "user_002"
            ],
            lastMessage: "Haha, definitely! Let's connect next week.",
            lastMessageBy: "user_002",
            lastMessageAt: "2025-01-16T11:45:00Z",
            unreadCount: {
                "user_001": 1,
                "user_002": 0
            },
            messages: [
                {
                    messageId: "msg_006",
                    senderId: "user_001",
                    text: "That picture of Simba judging your code is hilarious!",
                    createdAt: "2025-01-16T11:40:00Z",
                    readBy: [
                        "user_002"
                    ]
                },
                {
                    messageId: "msg_007",
                    senderId: "user_002",
                    text: "I know right? He's the real boss around here. We should get our pets together sometime, though I'm not sure how Simba would feel about a dog!",
                    createdAt: "2025-01-16T11:42:00Z",
                    readBy: [
                        "user_001"
                    ]
                },
                {
                    messageId: "msg_008",
                    senderId: "user_001",
                    text: "We could try a slow introduction at a park maybe?",
                    createdAt: "2025-01-16T11:43:00Z",
                    readBy: [
                        "user_002"
                    ]
                },
                {
                    messageId: "msg_009",
                    senderId: "user_002",
                    text: "Haha, definitely! Let's connect next week.",
                    createdAt: "2025-01-16T11:45:00Z",
                    readBy: []
                }
            ],
            createdAt: "2025-01-16T11:40:00Z"
        },
        {
            conversationId: "convo_004",
            participants: [
                "user_006",
                "user_007"
            ],
            lastMessage: "For sure! Let's plan something.",
            lastMessageBy: "user_007",
            lastMessageAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
            unreadCount: {
                "user_006": 1,
                "user_007": 0
            },
            messages: [
                {
                    messageId: "msg_010",
                    senderId: "user_007",
                    text: "Hey Shreyan, welcome to PetConnect!",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: [
                        "user_006"
                    ]
                },
                {
                    messageId: "msg_011",
                    senderId: "user_006",
                    text: "Thanks for the welcome! Love your cat photos.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: [
                        "user_007"
                    ]
                },
                {
                    messageId: "msg_020",
                    senderId: "user_007",
                    text: "Thanks! We should get all our pets together for a chaotic playdate sometime.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: []
                },
                {
                    messageId: "msg_021",
                    senderId: "user_006",
                    text: "Haha, a dog, two cats, and two rabbits. What could go wrong?",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: [
                        "user_007"
                    ]
                },
                {
                    messageId: "msg_022",
                    senderId: "user_007",
                    text: "For sure! Let's plan something.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: []
                }
            ],
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString()
        },
        {
            conversationId: "convo_005",
            participants: [
                "user_008",
                "user_006"
            ],
            lastMessage: "He's here now! Come say hi if you're around.",
            lastMessageBy: "user_008",
            lastMessageAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
            unreadCount: {
                "user_006": 1,
                "user_008": 0
            },
            messages: [
                {
                    messageId: "msg_012",
                    senderId: "user_008",
                    text: "Hi Shreyan! We saw your post about Sheru. Feel free to bring him by our pet-friendly workspace sometime!",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
                    readBy: [
                        "user_006"
                    ]
                },
                {
                    messageId: "msg_013",
                    senderId: "user_006",
                    text: "Wow, that's awesome! I might just do that.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
                    readBy: [
                        "user_008"
                    ]
                },
                {
                    messageId: "msg_014",
                    senderId: "user_008",
                    text: "Great! Just give us a heads-up.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
                    readBy: [
                        "user_006"
                    ]
                },
                {
                    messageId: "msg_015",
                    senderId: "user_006",
                    text: "Will do, thanks!",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString(),
                    readBy: [
                        "user_008"
                    ]
                },
                {
                    messageId: "msg_023",
                    senderId: "user_008",
                    text: "He's here now! Come say hi if you're around.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 0).toISOString(),
                    readBy: []
                }
            ],
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 2).toISOString()
        },
        {
            conversationId: "convo_006",
            participants: [
                "user_008",
                "user_007"
            ],
            lastMessage: "Perfect, see you then!",
            lastMessageBy: "user_007",
            lastMessageAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
            unreadCount: {
                "user_007": 0,
                "user_008": 0
            },
            messages: [
                {
                    messageId: "msg_016",
                    senderId: "user_008",
                    text: "Hey Ishaan, the team loved meeting Coco. You're welcome to bring her by anytime!",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: [
                        "user_007"
                    ]
                },
                {
                    messageId: "msg_017",
                    senderId: "user_007",
                    text: "That's so great to hear! She had a blast. We'll definitely be back next week.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: [
                        "user_008"
                    ]
                },
                {
                    messageId: "msg_018",
                    senderId: "user_008",
                    text: "Awesome. Chip and Byte are already looking forward to it.",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: [
                        "user_007"
                    ]
                },
                {
                    messageId: "msg_019",
                    senderId: "user_007",
                    text: "Perfect, see you then!",
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString(),
                    readBy: [
                        "user_008"
                    ]
                }
            ],
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 1).toISOString()
        }
    ],
    adoptionPets: [
        {
            "adoptionId": "adopt_001",
            "name": "Buddy",
            "type": "Dog",
            "breed": "Golden Retriever",
            "age": {
                "years": 2,
                "months": 0
            },
            "gender": "Male",
            "photo": getImageUrl("pet_buddy_adopt"),
            "location": "Bangalore, KA",
            "story": "Buddy is a super friendly and playful boy who loves everyone he meets. He's great with kids and other dogs. He knows basic commands and is fully house-trained. He would make a perfect family companion.",
            "reasonForAdoption": "His family is relocating internationally for work and sadly cannot take him with them. They are heartbroken and want to find him a home where he'll be loved just as much.",
            "contact": {
                "name": "Rohan Sharma",
                "phone": "+91 98765 43211"
            }
        },
        {
            "adoptionId": "adopt_002",
            "name": "Oreo",
            "type": "Cat",
            "breed": "Domestic Shorthair",
            "age": {
                "years": 1,
                "months": 6
            },
            "gender": "Female",
            "photo": getImageUrl("pet_oreo_adopt"),
            "location": "Mumbai, MH",
            "story": "Oreo is a curious and affectionate cat who loves to cuddle and play with feather toys. She's a bit shy at first but warms up quickly. She is litter-trained and gets along well with other cats.",
            "reasonForAdoption": "Her previous owner developed allergies. Oreo is looking for a quiet and loving home.",
            "contact": {
                "name": "Aisha Khan",
                "phone": "+91 91234 56789"
            }
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/data-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProvider",
    ()=>DataProvider,
    "useData",
    ()=>useData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const DataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DataProvider(param) {
    let { children } = param;
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockData"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataContext.Provider, {
        value: {
            data,
            setData
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/data-context.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(DataProvider, "f3Co0NqTuv7vW1FTNL+wFacCTlY=");
_c = DataProvider;
function useData() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}
_s1(useData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "DataProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_26c23a6a._.js.map