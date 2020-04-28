export class Playlist {
    static addItem(item, index, tabName) {
        const html =
            "<button class='btn btn-default w-100 text-left mb-3' id='item_" + item.asset + "'>"
            + "<div class='media'>"
            + "<img src='" + item.poster_url + "'"
            + "class='mr-3' alt='" + item.desc + "'>"
            + "<div class='media-body'>" + item.desc + "</div>"
            + "</div>"
            + "</button>";

        const itemElement = document.createElement('div');
        itemElement.onclick = item.clickCallback;
        itemElement.innerHTML = html;
        const playlistId = "playlist_" + tabName;
        const playlistNode = document.getElementById(playlistId);
        if (playlistNode) {
            playlistNode.appendChild(itemElement);
        }
    }
    static clear(index, tabName) {
        const playlistId = "playlist_" + tabName;
        const playlistNode = document.getElementById(playlistId);
        if (playlistNode) {
            playlistNode.innerHTML = '';
        }
    }
    static updateActiveItem(item) {
        const allMedia = document.querySelectorAll('.media');
        for (let i = 0; i < allMedia.length; i++) {
            allMedia[i].parentNode.classList.remove('active-asset')
        }
        const playlistItemMatchingCurrentAsset = document.querySelectorAll('.tab-pane.active .media')[item.index];
        if (playlistItemMatchingCurrentAsset) {
            playlistItemMatchingCurrentAsset.parentNode.classList.add('active-asset');
        }
        document.querySelector("#currentAssetDescription").innerText = item.resource.description;
    }
}