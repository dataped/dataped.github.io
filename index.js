import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.0.5/croot.js";

window.uploadImage = uploadImage;


function uploadImage() {
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
        alert('Image uploaded successfully');
        setInner("isi",data.content);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error uploading image');
    });
}
