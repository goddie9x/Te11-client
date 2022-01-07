declare global {
    type Dict<T> = Record<string, T>;
  
    type Opt<T> = T | null | undefined;
  }
  
  export {};
  