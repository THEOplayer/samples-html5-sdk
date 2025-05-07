import {Tab} from "./tab/Tab";
import {Util} from "../Util";

export class AppModal {

    constructor(app) {
        this.app = app;
        this.init();
    }

    init() {
        const app = this.app;
        this.initSaveButtonListener();
        this.initResetButtonListener();
        this.initDownloadButtonListener();
        let configInLocalStorage = localStorage.getItem('appConfig');
        if (configInLocalStorage) {
            configInLocalStorage = JSON.parse(configInLocalStorage);
            app.appConfig = configInLocalStorage;
        }
        document.querySelector('#editAppModal textarea').value = JSON.stringify(app.appConfig, null, "\t");
    }

    initSaveButtonListener() {
        const app = this.app;
        const saveAppConfig = document.querySelector('#save-app-config');
        saveAppConfig.addEventListener('click', function(e) {
            let newConfig = document.querySelector('#editAppModal textarea');
            if (newConfig) {
                newConfig = JSON.parse(newConfig.value);
                localStorage.setItem('appConfig', JSON.stringify(newConfig));
                Tab.destroyAll();
                app.appConfig = newConfig;
                app.init();
                $('.switch').bootstrapMaterialDesign();
            }
        });
    }

    initResetButtonListener() {
        const resetAppConfig = document.querySelector('#reset-app-config');
        resetAppConfig.addEventListener('click', function(e) {
            localStorage.removeItem('appConfig');
            location.reload();
        });
    }

    initDownloadButtonListener() {
        const downloadAppConfig = document.querySelector('#download-app-config');
        downloadAppConfig.addEventListener('click', function(e) {
            let currentConfig = document.querySelector('#editAppModal textarea');
            if (currentConfig) {
                currentConfig = JSON.stringify(JSON.parse(currentConfig.value), null, "\t");
                const data = new Blob([currentConfig], {type: 'application/json'});
                const textFile = window.URL.createObjectURL(data);
                Util.downloadURI(textFile, "uplynkAppConfig.json");
            }
        });
    }
}
