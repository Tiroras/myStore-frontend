import styles from './FavoriteButton.module.scss';
import usersService from '@/services/users.service';
import { useAuth, useProfile } from '@/utils/hooks';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cn from 'classnames';
import React from 'react';

interface IProps {
  productId: number;
  className?: string;
}

export const FavoriteButton: React.FC<IProps> = ({ productId, className }) => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ['toggle favorite'],
    () => usersService.toggleFavorites(productId),
    {
      onSuccess() {
        queryClient.invalidateQueries(['get profile']);
      }
    }
  );

  if (!user) return null;

  const isExists = profile?.favorites.some(fav => fav.id === productId);

  const handleClick = () => {
    mutate();
  };

  return (
    <Tooltip title={isExists ? 'Remove from favorites' : 'To favorite'}>
      <div className={cn(styles.favorite, className)}>
        {isExists ? (
          <Favorite onClick={handleClick} htmlColor='white' />
        ) : (
          <FavoriteBorder onClick={handleClick} htmlColor='white' />
        )}
      </div>
    </Tooltip>
  );
};
