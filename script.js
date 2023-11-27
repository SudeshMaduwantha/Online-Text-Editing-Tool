document.getElementById('italicbtn').addEventListener('click', function () {
    document.execCommand('italic', false, null);
    saveContent();
});