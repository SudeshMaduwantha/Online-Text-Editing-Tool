
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

