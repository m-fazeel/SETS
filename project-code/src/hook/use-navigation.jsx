'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isNotificationsActive, setIsNotificationsActive] = useState(false);
  const [isSettingsActive, setSettingsActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsExploreActive(false);
    setIsNotificationsActive(false);
    setSettingsActive(false);

    switch (pathname) {
      case '/':
        setIsHomeActive(true);
        break;
      case '/inventory':
        setIsExploreActive(true);
        break;
      case '/notifications':
        setIsNotificationsActive(true);
        break;
      case '/settings':
        setSettingsActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isSettingsActive,
  };
};

export default useNavigation;