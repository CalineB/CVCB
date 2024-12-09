
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM complètement chargé");

    const goals = document.querySelectorAll('.goal');
    console.log("Tous les éléments <i class='goal'> trouvés : ", goals);

    goals.forEach(goal => {
        goal.style.display = "none"; 
        goal.addEventListener("click", () => {
            goal.style.display = goal.style.display === "none" ? "block" : "none";
            console.log("Basculer l'affichage de l'élément <i class='goal'> : ", goal.style.display);
        });
    });

    const jobs = document.querySelectorAll('.job');
    console.log("Tous les éléments <p class='job'> trouvés : ", jobs);

    jobs.forEach(job => {
        job.addEventListener("click", () => {
            const goalContent = job.querySelector('.goal');
            if (goalContent) {
                goalContent.style.display = goalContent.style.display === "none" ? "block" : "none";
                console.log("Basculer l'affichage de <i class='goal'> dans <p class='job'> : ", goalContent.style.display);
            }
        });
    });
});
