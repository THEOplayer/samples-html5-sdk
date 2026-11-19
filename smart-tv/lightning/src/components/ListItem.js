import { Lightning } from '@lightningjs/sdk';

export default class ListItem extends Lightning.Component {
    static _template() {
        return {
            rect: true,
            color: 0xffffc50f,
            alpha: 0.6,
            flex: { justifyContent: 'flex-start', direction: 'row', padding: 5 },
            Label: {}
        };
    }

    _init() {
        this.patch({ Label: { text: { textColor: 'black', text: this.item.label } } });
    }

    _focus() {
        this.patch({ smooth: { alpha: 1, scale: 1.1 } });
    }

    _unfocus() {
        this.patch({ smooth: { alpha: 0.6, scale: 1 } });
    }

    _handleEnter() {
        if (this.item.onEnter) {
            this.item.onEnter();
        }
    }
}
