
let target = "";
const links = ["https://www.instagram.com/schmenniooo/", "https://github.com/schmenniooo", "https://www.linkedin.com/in/ennio-schmidt-0304472b6/", "mailto:ennio.nick@gmail.com"];

document.querySelector('.buttonContainer').addEventListener('click', function (event) {

    if (event.target.tagName === 'Button') {

        const action = event.target.getAttribute('data-action');

        for (let i = 1; i < links.length; i++) {
            if (action === links[i]) {
                target = action
            } else {
                console.error("Error in links.")
            }
        }
        window.open(target, '_blank');
    }
});