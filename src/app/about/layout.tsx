import React from "react";
import styles from "./styles.module.css";
import type { Metadata } from 'next'


export const metadata:Metadata={
  title:'About Page',
  description:'Created by Lyndell Dobluis'
}
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Nav bar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
