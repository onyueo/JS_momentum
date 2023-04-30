// NAME TAG

const savedUsername = localStorage.getItem("username");

const nametag = document.querySelector(".up");
function nameTag() {
    nametag.classList.add("name_tag");
    nametag.innerText = `${savedUsername}' Room`;
}

nameTag();





