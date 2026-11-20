export function swapClasses (element : HTMLElement, originalClass : string, newClass : string) {
    element.classList.remove(originalClass);
    element.classList.add(newClass);
}
