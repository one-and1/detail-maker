export function uid() {
    return Math.random().toString(36).slice(2, 9);
  }
  
  export function splitLines(text: string) {
    return text
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }