/* eslint-disable no-undef */
import { Lightning, Router } from '@lightningjs/sdk';
import VerticalList from '../components/VerticalList';
import SOURCES from '../../static/sources.json';

export default class SourceList extends Lightning.Component {
    static _template() {
        return {
            Logo: {
                x: 100,
                y: 50,
                texture: { type: lng.textures.ImageTexture, src: 'static/images/lightning_logo.png' }
            },
            ListWrapper: {
                flex: { direction: 'column', padding: 100 },
                VersionLabel: {
                    flexItem: { marginBottom: 20 },
                    text: { fontColor: 0xffffffff, fontSize: 32 }
                },
                List: { type: VerticalList }
            }
        };
    }

    _firstEnable() {
        this.tag('VersionLabel').patch({ text: { text: `THEOplayer SDK v${THEOplayer.version}` } });
        this.tag('List').items = SOURCES.map((src, index) => ({
            label: src.name,
            onEnter: () => {
                this.selectSource(index);
            }
        }));
    }

    selectSource(index) {
        Router.navigate(`player/${index}`);
    }

    _getFocused() {
        return this.tag('List');
    }
}
