function showAlert(message) {
    alert(message);
}

function toggleTheme() {
    const body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#333';
        body.style.color = '#333';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'black';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skills span');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`You clicked on ${skill.textContent}!`);
        });
    });
});
