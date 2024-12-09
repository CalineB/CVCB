document.addEventListener("DOMContentLoaded", () => {
    const softSkills = document.querySelectorAll('.soft.skills li.skill');
    const hardSkillsBlocks = document.querySelectorAll('.hard.skills');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    const softSkillsCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let delay = 0;
                softSkills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('active');
                    }, delay);
                    delay += 200; 
                });
                observer.unobserve(entry.target); 
            }
        });
    };

    const hardSkillsCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    };

    const softObserver = new IntersectionObserver(softSkillsCallback, observerOptions);
    const hardObserver = new IntersectionObserver(hardSkillsCallback, observerOptions);

    softObserver.observe(document.querySelector('.soft.skills'));
    hardSkillsBlocks.forEach((block) => hardObserver.observe(block));
});
