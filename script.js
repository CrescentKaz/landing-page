import WaIcon from '@awesome.me/webawesome/dist/react/icon';



function goHome() {
    title_section.style.display = "contents";
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
