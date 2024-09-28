const themes = ['dark', 'light'];

const getCurrentTheme = () => document.documentElement.dataset.theme;

export const getNextTheme = () => {
    const currentTheme = getCurrentTheme();
    const indexThemeCurrent = themes.indexOf(currentTheme || 'dark');

    return themes[(indexThemeCurrent + 1) % themes.length];
};

export const updateToggleThemeIcon = () => {
    const currentTheme = getCurrentTheme();
    document.querySelector(`#icon-theme-${currentTheme}`)?.classList.add("hidden");

    const themeNext = getNextTheme();
    document.querySelector(`#icon-theme-${themeNext}`)?.classList.remove("hidden");
};

export const toggleMarkdownTheme = (newTheme: string) => {
    const contentElement = document.getElementById('markdown');
    if (!contentElement) {
        return;
    }

    if (newTheme === "dark") {
        contentElement.classList.add('prose-invert');
    } else {
        contentElement.classList.remove('prose-invert');
    }
};
