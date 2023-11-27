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