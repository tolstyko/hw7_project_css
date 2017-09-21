function plusFontSize(text){
    var currentStyle = getComputedStyle(text);
    text.style.fontSize = +currentStyle.fontSize.slice(0, -2) + 2 + 'px';
};

function minusFontSize(text){
    var currentStyle = getComputedStyle(text);
    text.style.fontSize = +currentStyle.fontSize.slice(0, -2) - 2 + 'px';
} 