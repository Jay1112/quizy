interface AppThemeType {
  LIGHT: string;
  DARK: string;
}

export default function useTheme() {
  const QUIZY_APP_THEME: string = "QUIZY_APP_THEME";
  const AppTheme: AppThemeType = {
    LIGHT: "light",
    DARK: "dark",
  };

  // current theme
  const getTheme: () => string = () => {
    return localStorage.getItem(QUIZY_APP_THEME) || "";
  };

  // set theme
  const setTheme: (theme: string) => void = (theme: string) => {
    localStorage.setItem(QUIZY_APP_THEME, theme);
  };

  // it is being used to initialize the theme when app mounts for the first time
  const initAppTheme: () => void = () => {
    const theme: string = getTheme();
    if (theme) {
      appplyTheme(theme);
    } else {
      setTheme(AppTheme.LIGHT);
      appplyTheme(AppTheme.LIGHT);
    }
  };

  const toggleTheme: () => void = () => {
    const theme: string = getTheme();
    if (theme) {
      const newTheme: string =
        theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
      setTheme(newTheme);
      appplyTheme(newTheme);
    } else {
      appplyTheme(AppTheme.LIGHT);
    }
  };

  const appplyTheme: (theme: string) => void = (theme: string) => {
    document.documentElement.classList.toggle(
      AppTheme.DARK,
      theme === AppTheme.DARK
    );
  };

  return {
    getTheme,
    setTheme,
    initAppTheme,
    toggleTheme,
    appplyTheme,
  };
}
