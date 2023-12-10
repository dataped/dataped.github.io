import {setInner, show,hide} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.0.5/croot.js";
import {postFile} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.2/croot.js";

window.uploadImage = uploadImage;

const target_url='https://satudata.fly.dev/upload';

function uploadImage() {
    hide("inputfile");
    if (!file) {
        alert('Please select an image file');
        return;
    }
    postFile(target_url,"imageInput","image",renderToHtml);
}

function renderToHtml(result){
    console.log(result);
    setInner("isi",result.content);
    show("inputfile");
}
