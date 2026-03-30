html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Scroll & Dark Mode</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        html {
            scroll-behavior: smooth;
        }
        .dark {
            color-scheme: dark;
        }
        .dark body {
            background-color: #1a202c;
            color: #e2e8f0;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 transition-colors duration-300">
    <nav class="sticky top-0 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 z-50">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#" class="text-xl font-bold dark:text-white">Logo</a>
            <div class="space-x-4">
                <a href="#section1" class="nav-link hover:text-blue-600 dark:hover:text-blue-400">Section 1</a>
                <a href="#section2" class="nav-link hover:text-blue-600 dark:hover:text-blue-400">Section 2</a>
                <a href="#section3" class="nav-link hover:text-blue-600 dark:hover:text-blue-400">Section 3</a>
                <button id="darkModeToggle" class="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg transition-colors">
                    Toggle Dark
                </button>
            </div>
        </div>
    </nav>

    <main class="container mx-auto px-4 py-12">
        <section id="section1" class="min-h-screen flex items-center">
            <div class="max-w-3xl">
                <h1 class="text-4xl font-bold mb-6 dark:text-white">Section 1</h1>
                <p class="text-lg mb-8 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#section2" class="scroll-btn px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Scroll to Next
                </a>
            </div>
        </section>

        <section id="section2" class="min-h-screen flex items-center">
            <div class="max-w-3xl">
                <h2 class="text-3xl font-bold mb-6 dark:text-white">Section 2</h2>
                <p class="text-lg mb-8 dark:text-gray-300">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div class="space-x-4">
                    <a href="#section1" class="scroll-btn px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        Back to Top
                    </a>
                    <a href="#section3" class="scroll-btn px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Continue
                    </a>
                </div>
            </div>
        </section>

        <section id="section3" class="min-h-screen flex items-center">
            <div class="max-w-3xl">
                <h2 class="text-3xl font-bold mb-6 dark:text-white">Section 3</h2>
                <p class="text-lg mb-8 dark:text-gray-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <a href="#section1" class="scroll-btn px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Back to Top
                </a>
            </div>
        </section>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('darkModeToggle');
            const html = document.documentElement;
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            
            const setDarkMode = (isDark) => {
                if (isDark) {
                    html.classList.add('dark');
                    toggleBtn.textContent = 'Toggle Light';
                } else {
                    html.classList.remove('dark');
                    toggleBtn.textContent = 'Toggle Dark';
                }
                localStorage.setItem('darkMode', isDark);
            };
            
            const savedMode = localStorage.getItem('darkMode');
            if (savedMode !== null) {
                setDarkMode(savedMode === 'true');
            } else {
                setDarkMode(prefersDark.matches);
            }
            
            toggleBtn.addEventListener('click', () => {
                setDarkMode(!html.classList.contains('dark'));
            });
            
            prefersDark.addEventListener('change', (e) => {
                if (localStorage.getItem('darkMode') === null) {
                    setDarkMode(e.matches);
                }
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#') return;
                    
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>