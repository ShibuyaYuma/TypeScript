function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }
  
  // いずれも戻り値はないため、戻り値の型として`never`が使われる