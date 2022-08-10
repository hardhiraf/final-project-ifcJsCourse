const mybutton = document.getElementsByClassName('button_to_app');
const get_tag = document.querySelectorAll('*')
const projectLink  = "project_gallery.html"

mybutton[0].addEventListener('mouseover', function() {
    get_tag.forEach((item) => {
        item.style.background = 'white';
        item.style.color = 'black';
    })
})

mybutton[0].addEventListener('mouseout', function() {
    get_tag.forEach((item) => {
        item.style.background = 'black';
        item.style.color = 'white';
    })
})