document.getElementById('boldbtn').addEventListener('click', function () {
    document.execCommand('bold', false, null);
    saveContent();
});