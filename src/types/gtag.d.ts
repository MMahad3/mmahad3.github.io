declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

export {};
