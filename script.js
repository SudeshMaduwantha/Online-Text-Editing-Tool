document.getElementById('undobtn').addEventListener('click', function () {
    document.execCommand('undo', false, null);
    saveContent();
});

document.getElementById('redobtn').addEventListener('click', function () {
    document.execCommand('redo', false, null);
    saveContent();
});
