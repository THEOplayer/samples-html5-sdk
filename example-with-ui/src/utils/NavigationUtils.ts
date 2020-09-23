import {Component} from "../BaseComponent";

function filterUnFocusable (array: Component[]): Component[] {
    return array.filter((entry) => entry.isFocusable());
}

export function selectPreviousItem (item: Component, array: Component[]): Component | undefined {
    let focusableComponents = filterUnFocusable(array),
        index = focusableComponents.indexOf(item);

    if ((index - 1) >= 0) {
        return focusableComponents[index - 1];
    } else {
        return undefined;
    }
}

export function selectNextItem (item: Component, array: Component[]): Component | undefined {
    let focusableComponents = filterUnFocusable(array),
        index = focusableComponents.indexOf(item);

    if ((index + 1) < focusableComponents.length && index !== -1) {
        return focusableComponents[index + 1];
    } else {
        return undefined;
    }
}
