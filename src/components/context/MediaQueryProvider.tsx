import React, { createContext, useContext, useEffect, useState } from 'react';
import { Matches } from '../interfaces/index';
interface MediaQueryListInterface {
  [key: string]: MediaQueryList;
}

interface MediaQueryProviderProps {
  children: React.ReactNode;
  queries: Record<string, string>;
}

const defaultValue = {};
const MediaQueryContext = createContext<Partial<Matches>>(defaultValue);

const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
  queries,
}) => {
  const [queryMatch, setQueryMatch] = useState<Matches>({});
  // flag for checking if event listener is attached.

  let isEventListenerAttached = false;

  useEffect(() => {
    const mediaQueryLists: MediaQueryListInterface = {};
    const keys = Object.keys(queries);

    /* logic for handling resizing events
       - required when moving from potrait to landscape mode in mobile device
    */
    const handleMediaQuery = (): any => {
      const updatedMatches = keys.reduce<Matches>((acc, media) => {
        acc[media] = mediaQueryLists[media].matches;
        return acc;
      }, {});
      setQueryMatch(updatedMatches);
    };

    /*Initial media query to check viewport - mobile or desktop*/
    if (window && window.matchMedia) {
      const matches: Matches = keys.reduce<Matches>((acc, media) => {
        if (media) {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          acc[media] = mediaQueryLists[media].matches;
        }
        return acc;
      }, {});
      // set the media query match result in state
      setQueryMatch(matches);
      isEventListenerAttached = true;
      keys.forEach((mediaQuery) =>
        mediaQueryLists[mediaQuery].addEventListener('change', handleMediaQuery)
      );
    }
  }, [queries]);
  return (
    <MediaQueryContext.Provider value={queryMatch}>
      {children}
    </MediaQueryContext.Provider>
  );
};

const useMediaQuery = (): Partial<Matches> => {
  const context = useContext(MediaQueryContext);
  if (context === defaultValue) {
    throw new Error(
      'useMediaQuery must be used for components wrapped in MediaQueryProvider'
    );
  }
  return context;
};

const getLayout = (
  mediaQuery: Partial<Partial<Record<string, Boolean>>>
): string => Object.keys(mediaQuery).find((key) => mediaQuery[key]) || '';

export { useMediaQuery, MediaQueryProvider, getLayout };
