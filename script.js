const home_btn = document.getElementById(home_btn);
const project_btn = document.getElementById(project_btn);
const about_btn = document.getElementById(about_btn);
const social_btn = document.getElementById(social_btn);

home_btn.onclick = goHome;
project_btn.onclick = goProject;
about_btn.onclick = goAbout;
social_btn.onclick = goSocial;

function goHome() {
    title_section.style.display = "contens";
    project_section.style.display = "none";
    about_me.style.display = "none";
    socials.style.display = "none";
};

function goProject() {
    title_section.style.display = "none";
    project_section.style.display = "contents";
    about_me.style.display = "none";
    socials.style.display = "none";
};

function goAbout() {
    title_section.style.display = "none";
    project_section.style.display = "none";
    about_me.style.display = "contents";
    socials.style.display = "none";
};

function goSocial() {
    title_section.style.display = "none";
    project_section.style.display = "none";
    about_me.style.display = "none";
    socials.style.display = "contents";
};
