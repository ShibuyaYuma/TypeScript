//オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, usename?: string): boolean => {
    if(userId === "ABC"){
        console.log("Function parameters sample 1: User is signed in. User is", usename);
        return true;
    }else{
        console.log("Function parameters sample 2: User is not signed in.");
        return false;
    }
}

//デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, usename = "No Nema"): boolean => {
    if(userId === "ABC"){
        console.log("Function parameters sample 3: User is signed in. User is", usename);
        return true;
    }else{
        console.log("Function parameters sample 4: User is not signed in.");
        return false;
    }
}

//レストパラメータを持つ関数
export const sumProductsPrice = (...productPrice: number[]): number => {
    return productPrice.reduce((prevTotal: number, productPrice: number) => {
        return prevTotal + productPrice
    }, 0);
}

//呼び出しシグネチャ(省略記号)
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
    console.log("Function parameters sample 6:", message);
}

//呼び出しシグネチャ(完全)
type FullLogMessage = {
    (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
    console.log("Function parameters sample 6:", message);
}