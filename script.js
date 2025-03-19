const titleSection = document.getElementById(title_section);
const projectSection = document.getElementById(project_section);
const aboutSection = document.getElementById(about_section);
const socialSection = document.getElementById(social_section);

const homeBtn = document.getElementById(home_btn);
const projectBtn = document.getElementById(project_btn);
const aboutBtn = document.getElementById(about_btn);
const socialBtn = document.getElementById(social_btn);

homeBtn.onclick = goHome;
projectBtn.onclick = goProject;
aboutBtn.onclick = goAbout;
socialBtn.onclick = goSocial;

function goHome() {
    titleSection.style.display = "contens";
    projectSection.style.display = "none";
    aboutSection.style.display = "none";
    socialSection.style.display = "none";
};

function goProject() {
    titleSection.style.display = "none";
    projectSection.style.display = "contents";
    aboutSection.style.display = "none";
    socialSection.style.display = "none";
};

function goAbout() {
    titleSection.style.display = "none";
    projectSection.style.display = "none";
    aboutSection.style.display = "contents";
    socialSection.style.display = "none";
};

function goSocial() {
    titleSection.style.display = "none";
    projectSection.style.display = "none";
    aboutSection.style.display = "none";
    socialSection.style.display = "contents";
};
