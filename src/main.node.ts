import { isEvenFunction, readFileText } from "test-package";

console.log("test-package node isEvenFunction & readFileText: ", isEvenFunction, readFileText);

export { isEvenFunction, readFileText };

export const isNodeEvenFunction = (val: number): boolean => {
    return isEvenFunction(val);
};

export const readNodeFileText = (filename: string): string => {
    return readFileText(filename);
};
