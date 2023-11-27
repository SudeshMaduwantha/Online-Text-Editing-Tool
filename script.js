document.getElementById('underlinebtn').addEventListener('click', function () {
    document.execCommand('underline', false, null);
    saveContent();
});