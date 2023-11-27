
document.getElementById('undobtn').addEventListener('click', function () {
    document.execCommand('undo', false, null);
    saveContent();
});

document.getElementById('redobtn').addEventListener('click', function () {
    document.execCommand('redo', false, null);
    saveContent();
});


document.getElementById('align-leftbtn').addEventListener('click', function () {
    document.execCommand('justifyLeft', false, null);
    saveContent();
});

document.getElementById('align-centerbtn').addEventListener('click', function () {
    document.execCommand('justifycenter', false, null);
    saveContent();
});

document.getElementById('align-rightbtn').addEventListener('click', function () {
    document.execCommand('justifyright', false, null);
    saveContent();
});

document.getElementById('align-justifybtn').addEventListener('click', function () {
    document.execCommand('justifyfull', false, null);
    saveContent();
});


function toggleColorPalette() {
    let colorPalette = document.getElementById('colorPalette');
    colorPalette.style.display = (colorPalette.style.display === 'block') ? 'none' : 'block';
}

function applyColor() {
    let selectedColor = document.getElementById('colorPicker').value;
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let span = document.createElement('span');
    span.style.color = selectedColor;
    range.surroundContents(span);
    toggleColorPalette();
    document.getElementById('colorBtn').style.color = selectedColor;
}


document.getElementById('italicbtn').addEventListener('click', function () {
    document.execCommand('italic', false, null);
});

document.getElementById('underlinebtn').addEventListener('click', function () {
    document.execCommand('underline', false, null);
});
  
document.getElementById('boldbtn').addEventListener('click', function () {
    document.execCommand('bold', false, null);
    saveContent();
});



