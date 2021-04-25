import { useEffect, useState } from 'react';

type TypeNavigationParams = [number[], (n: number) => void];

export default function useNavigation(): TypeNavigationParams {
  const [path, setPath] = useState([]);

  function addPath(n: number) {
    setPath([...path, n]);
  }

  useEffect(() => {
    console.log(path);
  }, [path]);

  return [path, addPath];
}
