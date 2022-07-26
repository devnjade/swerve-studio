import { Header } from "components/layout";
import React from "react";
import styles from './index.module.scss';

interface ILayout {
  header?: boolean,
  children?: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ header, children }) => {
  return (
    <div className={styles.wrapper}>
      {header && <Header />}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout;