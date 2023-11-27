
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