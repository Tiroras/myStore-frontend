import { Favorites } from '@/components/Favorites';
import { NextPageAuth } from '@/types/auth.types';
import { useProfile } from '@/utils/hooks';

const FavoritesPage: NextPageAuth = () => {
  const { profile } = useProfile();
  console.log('prof', profile);
  return (
    <>
      <Favorites
        data={{
          products: profile?.favorites || [],
          length: profile?.favorites.length || 0
        }}
      />
    </>
  );
};

FavoritesPage.isOnlyUser = true;

export default FavoritesPage;
