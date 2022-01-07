import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
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

export const CatchBoundary = () => {
  let caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="mb-3">
        <div className="text-3xl mb-2">Details</div>
        <div className="p-4 rounded shadow-lg border bg-orange-200 border-orange-600">
          <div className="text-gray-700 font-bold text-xl mb-2">
            {caught.statusText}
          </div>
          <p>
            {caught.status} {caught.statusText}
          </p>
        </div>
      </div>
    </Document>
  );
};

export const ErrorBoundary = ({ error }: any) => {
  return (
    <Document title="Error!!!">
      <div className="text-3xl mb-2">Details</div>
      <div className="p-4 rounded shadow-lg border bg-rose-200 border-rose-600">
        <h1 className="text-gray-700 font-bold text-xl mb-2">
          Something went wrong
        </h1>
        <p>{error.message}</p>
      </div>
    </Document>
  );
};
