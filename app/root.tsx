import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import { ReactNode } from "react";

export const meta: MetaFunction = () => {
  return { title: "KalFlix", description: "Sample Page" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Document = ({ children }: { children: ReactNode; title?: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  console.log(error);

  return (
    <Document title="Error!!!">
      <div className="error-container">
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </div>
    </Document>
  );
};
