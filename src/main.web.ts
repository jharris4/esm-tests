import { isEvenFunction } from "test-package";

console.log("test-package web isEvenFunction & readFileText: ", isEvenFunction);

export { isEvenFunction };

export const isWebEvenFunction = (val: number): boolean => {
    return isEvenFunction(val);
};
