var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StepperEvents = void 0;
    const react_1 = __importStar(require("react"));
    const StepperEvents = (props) => {
        const { initial = 0, onChange = (count) => {
            console.log(count);
        } } = props;
        const [count, setCount] = (0, react_1.useState)(initial);
        const increment = () => {
            const newCount = count + 1;
            setCount(newCount);
            onChange(newCount);
        };
        const decrement = () => {
            const newCount = count - 1;
            setCount(newCount);
            onChange(newCount);
        };
        return (react_1.default.createElement("div", { "data-testid": "stepper" },
            react_1.default.createElement("button", { "aria-label": "decrement", onClick: decrement }, "-"),
            count,
            react_1.default.createElement("button", { "aria-label": "increment", onClick: increment }, "+")));
    };
    exports.StepperEvents = StepperEvents;
});
//# sourceMappingURL=StepperEvents.js.map