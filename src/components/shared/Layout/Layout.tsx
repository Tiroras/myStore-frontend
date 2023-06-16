import { Header } from './Header';
import styles from './Layout.module.scss';
import { Sidebar } from './Sidebar';
import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
