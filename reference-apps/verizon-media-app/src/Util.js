export class Util {
    static downloadURI(uri, name) {
        const link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }

    static slug(value) {
        return value.toLowerCase().replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
    }
}