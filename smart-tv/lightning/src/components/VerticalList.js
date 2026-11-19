import { Lightning } from '@lightningjs/sdk';
import ListItem from './ListItem';

export default class VerticalList extends Lightning.Component {
    static _template() {
        return {
            flex: { direction: 'column' }
        };
    }

    _init() {
        this.index = 0;
    }

    set items(items) {
        this.children = items.map((item, index) => {
            return {
                ref: 'ListItem-' + index,
                type: ListItem,
                item
            };
        });
    }

    _getFocused() {
        return this.children[this.index];
    }

    _handleUp() {
        if (this.index > 0) {
            this.index--;
        }
    }

    _handleDown() {
        if (this.index < this.children.length - 1) {
            this.index++;
        }
    }
}
