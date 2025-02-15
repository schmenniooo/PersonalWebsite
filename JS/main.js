

document.addEventListener('DOMContentLoaded', function () {

    const buttonContainer = document.querySelector('.buttonContainer');

    if (buttonContainer) {

        buttonContainer.addEventListener('click', function (event) {

            const button = event.target.closest('button');

            if (button) {
                const action = button.getAttribute('data-action');
                if (action) {
                    window.open(action, '_blank');
                } else {
                    console.error("No action defined for this button.");
                }
            }
        });
    } else {
        console.error("Button container not found.");
    }
});
