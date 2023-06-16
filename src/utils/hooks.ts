import usersService from '@/services/users.service';
import { IResponse, TypeOut } from '@/types';
import { IFullUser } from '@/types/user.types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { rootActions } from 'store/actions';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export const useAuth = () => useAppSelector(state => state.userReducer);

export const useAuthRedirect = () => {
  const { user } = useAuth();
  const { replace } = useRouter();

  useEffect(() => {
    user && replace('/');
  }, [replace, user]);
};

export const useProfile = () => {
  const { user } = useAuth();
  const { data: profile } = useQuery(
    ['get profile'],
    () => usersService.getProfile(),
    { select: ({ data }: IResponse<IFullUser>) => data, enabled: !!user }
  );

  return { profile };
};

export const useCart = () => {
  const items = useAppSelector(state => state.cartReducer.items);
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return { items, total };
};

export const useOutside = (initialsVisible: boolean): TypeOut => {
  const [isVisible, setIsVisible] = useState(initialsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (e: any) => {
    ref.current && !ref.current.contains(e.target) && setIsVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};

export const useModal = (initialState = false) => {
  const [visible, setVisible] = useState(initialState);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return [visible, handleOpen, handleClose];
};
