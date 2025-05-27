const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};
localStorage.setItem('systemInfo', JSON.stringify(systemInfo));
document.getElementById('localStorageFooter').textContent = "System Info: " + JSON.stringify(systemInfo);

fetch('https://jsonplaceholder.typicode.com/posts/3/comments')
.then(res => res.json())
.then(data => {
    const container = document.getElementById('commentsContainer');
    data.forEach(comment => {
        const div = document.createElement('div');
        div.innerHTML= ` <h4>${comment.name}</h4><p>${comment.body}</p>`;
        container.appendChild(div);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("feedbackModal");
    const closeModal = document.getElementById("closeModal");

    // показ модального вікна чрез 1хвв
    setTimeout(() => {
        modal.classList.add("visible");
    }, 60000);

    closeModal.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });
});

function toggleTheme() {
    document.body.classList.toggle('night-theme');
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEvemtListener('click', () => {
    document.body.classList.toggle('night-theme');
});
const currentHour = new Date().getHours();
if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.add('night-theme');
}
