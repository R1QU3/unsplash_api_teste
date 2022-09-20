export function clearHTMLCollection(el) {
    Array.from(el.children).forEach(child => child.remove());
}
export function createImage(src = String) {
    const targetImage = document.createElement('img');
    targetImage.setAttribute("src", src);
    return targetImage;
}