let image = document.querySelector('.album-art');
let album_description = document.querySelector('.description');
image.addEventListener('click', display_info);
function display_info() {
  album_description.style.display="block";
}
