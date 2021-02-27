var n = 4;
openPopupButtons = new Array(n);
popupBlocks = new Array(n);
closePopupButtons = new Array(n);
var addPopupClickListener = function (index) {
    openPopupButtons[index].addEventListener('click', function (evt) {
        evt.preventDefault();
        document.body.classList.add('stop-scrolling')
        popupBlocks[index].classList.add('popup-block-show');
    });
    closePopupButtons[index].addEventListener('click', function (evt) {
        evt.preventDefault();
        document.body.classList.remove('stop-scrolling')
        popupBlocks[index].classList.remove('popup-block-show');
    });
}
for (var i = 1; i <= n; i++) {
    var openButtonclassName = '.popup-button-' + i;
    var popupBlockClassName = '.popup-block-' + i;
    var closeBlockClassName = '.button-close-popup-' + i;
    openPopupButtons[i - 1] = document.querySelector(openButtonclassName);
    popupBlocks[i - 1] = document.querySelector(popupBlockClassName)
    closePopupButtons[i - 1] = popupBlocks[i - 1].querySelector(closeBlockClassName);
    addPopupClickListener(i - 1);
}
