import { useContext } from 'react';

import { UserContext } from './UserProvider';

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};

export default useUserContext;
