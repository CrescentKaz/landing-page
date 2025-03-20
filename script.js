const homeBtn = document.getElementById(home_btn);
const projectBtn = document.getElementById(project_btn);
const aboutBtn = document.getElementById(about_btn);
const socialBtn = document.getElementById(social_btn);

homeBtn.onclick = goHome;
projectBtn.onclick = goProject;
aboutBtn.onclick = goAbout;
socialBtn.onclick = goSocial;

function goHome() {
    title_section.style.display = "contens";
    project_section.style.display = "none";
    about_section.style.display = "none";
    social_section.style.display = "none";
};

function goProject() {
    title_section.style.display = "none";
    project_section.style.display = "contents";
    about_section.style.display = "none";
    social_section.style.display = "none";
};

function goAbout() {
    title_section.style.display = "none";
    project_section.style.display = "none";
    about_section.style.display = "contents";
    social_section.style.display = "none";
};

function goSocial() {
    title_section.style.display = "none";
    project_section.style.display = "none";
    about_section.style.display = "none";
    social_section.style.display = "contents";
};
