import { Hono } from "hono";
import { getCookie } from "hono/cookie";

const app = new Hono();

app.get("*", (c) => {
  // The name of the cookie
  const COOKIE_NAME = "Cookie_2";

  // Get the specific cookie value using Hono's cookie helper
  const cookieValue = getCookie(c, COOKIE_NAME);
  console.log(cookieValue);

  if (cookieValue) {
    // Respond with the cookie value
    return c.text(cookieValue);
  }

  return c.text("No cookie with name: " + COOKIE_NAME);
});

export default app;
