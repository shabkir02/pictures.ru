const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragover', 'drop', 'dragleave'].forEach(method => {
        fileInputs.forEach(input => {
            input.addEventListener(method, preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function hightLight(item) {
        item.closest('.file_upload').style.border = '1px solid #000';
    }

    function unhightLight(item) {
        item.closest('.file_upload').style.border = 'none';
    }

    ['dragenter', 'dragover'].forEach(method => {
        fileInputs.forEach(input => {
            input.addEventListener(method, () => hightLight(input), false);
        });
    });

    ['drop', 'dragleave'].forEach(method => {
        fileInputs.forEach(input => {
            input.addEventListener(method, () => unhightLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;