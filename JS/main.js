
document.querySelector('.buttonContainer').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const action = event.target.getAttribute('data-action');
        if (action) {
            window.open(action, '_blank');
        } else {
            console.error("No action defined for this button.");
        }
    }
});