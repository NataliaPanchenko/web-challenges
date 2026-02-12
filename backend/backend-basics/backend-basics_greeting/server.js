import { createServer } from "node:http";

// export const server = …

export const server = createServer((request, response) => {
  const name = "Natalia";
  response.end(`Hello, ${name}!`);
});
