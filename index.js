import {setInner, show,hide} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.0.5/croot.js";

window.uploadImage = uploadImage;


function uploadImage() {
    hide("inputfile");

    const input = document.getElementById('imageInput');
    const file = input.files[0];

    if (!file) {
        alert('Please select an image file');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    fetch('https://satudata.fly.dev/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setInner("isi",data.content);
        show("inputfile");
    })
    .catch(error => {
        console.error('Error:', error);
        setInner("isi",data.error);
        show("inputfile");
    });
}
