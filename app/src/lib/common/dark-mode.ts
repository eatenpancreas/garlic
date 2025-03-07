export function toggleDarkMode() {
	const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

	document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Strict`;
	if (currentTheme == 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}
