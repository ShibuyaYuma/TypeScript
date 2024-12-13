//アロー関数
export const logMessage = (message: string): void => {
    console.log("Function basic sample 1:", message);
}

//名前付き関数
export function logMessage2(message: string): void {
    console.log("Function basic sample 2:", message);
}

//関数式
export const logMessage3 = function(message: string): void {
    console.log("Function basic sample 3:", message);
}

//アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log("Function basic sample 4:", message);

export const alwaysThrowError = (message: string): never => {
    throw new Error(message);
}