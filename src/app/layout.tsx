"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import { store } from "../store";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
