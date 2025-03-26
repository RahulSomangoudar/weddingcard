let flipState = 0;

function flipPage() {
    const book = document.querySelector('.book');

    if (flipState === 0) {
        book.classList.add('flip');
        flipState = 1;
    } else if (flipState === 1) {
        book.classList.add('flip-2');
        flipState = 2;
    } else {
        book.classList.remove('flip', 'flip-2');
        flipState = 0;
    }
}
