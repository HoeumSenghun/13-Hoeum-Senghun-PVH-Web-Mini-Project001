// tongle hamberger mobile screen
const mobileMenuButton = document.querySelector('button');
        const mobileMenu = document.querySelector('.hidden.md\\:hidden');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });