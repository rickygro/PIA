document.addEventListener('DOMContentLoaded', function() {
    const colorChangeButton = document.querySelector('#color-change-button');
    const body = document.body;

    const savedColorMode = localStorage.getItem('colorMode');
    if (savedColorMode === 'white-mode') {
        body.classList.add('white-mode');
    }

    colorChangeButton.addEventListener('click', () => {
        body.classList.add('transitioning');
        
        if (body.classList.contains('white-mode')) {
            body.classList.remove('white-mode');
            localStorage.setItem('colorMode', '');
        } else {
            body.classList.add('white-mode');
            localStorage.setItem('colorMode', 'white-mode');
        }

        setTimeout(() => {
            body.classList.remove('transitioning');
        }, 1000); 
    });
});