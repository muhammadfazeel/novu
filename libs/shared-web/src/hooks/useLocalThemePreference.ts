import { useLocalStorage } from '@mantine/hooks';

export function useLocalThemePreference() {
  const [themeStatus, setThemeStatus] = useLocalStorage<string>({
    key: 'mantine-theme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  return { themeStatus, setThemeStatus };
}
