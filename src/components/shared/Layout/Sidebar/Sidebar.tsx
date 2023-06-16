import styles from './Sidebar.module.scss';
import { removeFromStorage } from '@/services/auth/auth.helper';
import categoriesService from '@/services/categories.service';
import { useAuth } from '@/utils/hooks';
import { ExpandLess, ExpandMore, Logout } from '@mui/icons-material';
import { Collapse, List, ListItemText } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';

export const Sidebar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const { data: response } = useQuery(['get categories'], () =>
    categoriesService.getAll()
  );
  const { user } = useAuth();

  const onLogout = () => {
    removeFromStorage();
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menuList}>
          <li>
            <Link href={'/orders'}>
              <div className={styles.menuItemHeader}>Orders</div>
            </Link>
          </li>
          <li>
            <div
              className={styles.menuItemHeader}
              onClick={() => setShowCategories(!showCategories)}
            >
              <span>Categories</span>
              <span>{showCategories ? <ExpandLess /> : <ExpandMore />}</span>
            </div>
            <Collapse in={showCategories}>
              <List>
                {response?.data.map(category => (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <ListItemText className={styles.category}>
                      {category.name}
                    </ListItemText>
                  </Link>
                ))}
              </List>
            </Collapse>
          </li>
        </ul>
        {user && (
          <div className={styles.logout} onClick={onLogout}>
            <Logout /> Logout
          </div>
        )}
      </nav>
    </aside>
  );
};
