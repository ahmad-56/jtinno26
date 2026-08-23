import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./app.css";

export const links = () => [
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico?v=3",
  },
  {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "/favicon.ico?v=3",
  },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <Meta />
        <Links />
      </head>

      <body className="overflow-x-hidden">
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";

    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>

      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}