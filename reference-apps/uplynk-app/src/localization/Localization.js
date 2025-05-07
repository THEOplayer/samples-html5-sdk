export class Localization {

    static localizeAppAppCopyright(app, appConfigLanguage) {
        const langCode = this.getLanguageFromQueryParams() || appConfigLanguage;
        if (langCode) {
            const localMap = this.getAppLocalizationMap();
            for (const key in localMap) {
                const selectors = document.querySelectorAll('[data-local="'+key+'"]');
                const localizedValue = localMap[key][langCode];
                if (localizedValue && (selectors && selectors.length > 0)) {
                    for (let i = 0; i < selectors.length; i++) {
                        selectors[i].innerText = localMap[key][langCode];
                    }
                }
            }
        }
    }

    static getAppLocalizationMap() {
        return {
            'general': {
                en: 'General',
                es: 'Configuración',
                ja: '構成',
                nl: 'Algemeen'
            },
            'cun': {
                en: 'Coming up notification',
                es: 'Notificación de contenido',
                ja: 'コンテンツ通知',
                nl: 'Video notificatie'
            },
            'am': {
                en: 'Show asset markers',
                es: 'Marcadores de activos',
                ja: 'アセットマーカー',
                nl: 'Video markeringen'
            },
            'an': {
                en: 'Ad notification',
                es: 'Notificación de publicidad',
                ja: '広告通知',
                nl: 'Advertentie notificatie'
            },
            'queue': {
                en: 'Queue',
                es: 'Cola',
                ja: 'キュー',
                nl: 'Lijst'
            },
            'abm': {
                en: 'Show ad break markers',
                es: 'Marcadores publicitarios',
                ja: '広告マーカー',
                nl: 'Advertentie markeringen'
            },
            'so': {
                en: 'Skip Offset',
                es: 'Saltar desplazamiento',
                ja: 'オフセットをスキップ',
                nl: 'Advertenties Overslaan'
            },
            'soa': {
                en: 'Seek Over Ad',
                es: 'Buscar Anuncio',
                ja: '広告を探す',
                nl: 'Zoeken Voorbij Ads'
            },
            'pa': {
                en: 'Play all',
                es: 'Todos',
                ja: 'すべて',
                nl: 'Alle'
            },
            'pn': {
                en: 'Play none',
                es: 'Ninguna',
                ja: 'なし',
                nl: 'Geen'
            },
            'pl': {
                en: 'Play last',
                es: 'Última',
                ja: '最終',
                nl: 'Laatste'
            },
            'configuration': {
                en: 'Configuration',
                es: "Configuración",
                ja: '構成',
                nl: 'Instellingen'
            },
            'download': {
                en: 'Download',
                es: 'Descargar',
                ja: 'ダウンロード',
                nl: 'Download'
            },
            'reset': {
                en: 'Reset',
                es: 'Reiniciar',
                ja: 'リセット',
                nl: 'Herstellen'
            },
            'save': {
                en: 'Save changes',
                es: 'Salvar',
                ja: 'セーブ',
                nl: 'Opslaan'
            }
        }
    }

    static getLanguageFromQueryParams() {
        function getParameterByName(name) {
            const url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
        const language = getParameterByName('lang');
        return (language && language.toLowerCase());
    }

    /**
     * This function adds a language if the 'lang' query parameter is valid.
     * It falls back to the language configured in the appConfig JSON.
     *
     * Returns the language code if a language was added.
     */
    static getSelectedLanguage(app, appConfigLanguage) {
        const languageCode = this.getLanguageFromQueryParams() || appConfigLanguage;
        const language = this.getVjsLanguage(languageCode);
        if (language) {
            THEOplayer.videojs.addLanguage(languageCode, language);
        }
        return language && languageCode;
    }

    static getVjsLanguage(languageCode) {
        const languages = {
            "es": {
                "Play": "Reproducción",
                "Pause": "Pausa",
                "Current Time": "Tiempo reproducido",
                "Duration Time": "Duración total",
                "Remaining Time": "Tiempo restante",
                "Stream Type": "Tipo de secuencia",
                "LIVE": "DIRECTO",
                "Loaded": "Cargado",
                "Progress": "Progreso",
                "Fullscreen": "Pantalla completa",
                "Non-Fullscreen": "Pantalla no completa",
                "Mute": "Silenciar",
                "Unmute": "No silenciado",
                "Playback Rate": "Velocidad de reproducción",
                "Subtitles": "Subtítulos",
                "subtitles off": "Subtítulos desactivados",
                "Captions": "Subtítulos especiales",
                "captions off": "Subtítulos especiales desactivados",
                "Chapters": "Capítulos",
                "You aborted the media playback": "Ha interrumpido la reproducción del vídeo.",
                "A network error caused the media download to fail part-way.": "Un error de red ha interrumpido la descarga del vídeo.",
                "The media could not be loaded, either because the server or network failed or because the format is not supported.": "No se ha podido cargar el vídeo debido a un fallo de red o del servidor o porque el formato es incompatible.",
                "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "La reproducción de vídeo se ha interrumpido por un problema de corrupción de datos o porque el vídeo precisa funciones que su navegador no ofrece.",
                "No compatible source was found for this media.": "No se ha encontrado ninguna fuente compatible con este vídeo.",
                "Settings": "Configuración"
            },
            "ja": {
                "Play": "再生",
                "Pause": "一時停止",
                "Current Time": "現在の時間",
                "Duration Time": "長さ",
                "Remaining Time": "残りの時間",
                "Stream Type": "ストリームの種類",
                "LIVE": "ライブ",
                "Loaded": "ロード済み",
                "Progress": "進行状況",
                "Fullscreen": "フルスクリーン",
                "Non-Fullscreen": "フルスクリーン以外",
                "Mute": "ミュート",
                "Unmute": "ミュート解除",
                "Playback Rate": "再生レート",
                "Subtitles": "サブタイトル",
                "subtitles off": "サブタイトル オフ",
                "Captions": "キャプション",
                "captions off": "キャプション オフ",
                "Chapters": "チャプター",
                "You aborted the media playback": "動画再生を中止しました",
                "A network error caused the media download to fail part-way.": "ネットワーク エラーにより動画のダウンロードが途中で失敗しました",
                "The media could not be loaded, either because the server or network failed or because the format is not supported.": "サーバーまたはネットワークのエラー、またはフォーマットがサポートされていないため、動画をロードできませんでした",
                "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "破損の問題、またはお使いのブラウザがサポートしていない機能が動画に使用されていたため、動画の再生が中止されました",
                "No compatible source was found for this media.": "この動画に対して互換性のあるソースが見つかりませんでした",
                "Settings": "構成"
            },
            "nl": {
                "Play": "Afspelen",
                "Pause": "Pauze",
                "Current Time": "Huidige tijd",
                "Duration Time": "Looptijd",
                "Remaining Time": "Resterende tijd",
                "Stream Type": "Streamtype",
                "LIVE": "LIVE",
                "Loaded": "Geladen",
                "Progress": "Status",
                "Fullscreen": "Volledig scherm",
                "Non-Fullscreen": "Geen volledig scherm",
                "Mute": "Geluid uit",
                "Unmute": "Geluid aan",
                "Playback Rate": "Weergavesnelheid",
                "Subtitles": "Ondertiteling",
                "subtitles off": "ondertiteling uit",
                "Captions": "Bijschriften",
                "captions off": "bijschriften uit",
                "Chapters": "Hoofdstukken",
                "Descriptions": "Beschrijvingen",
                "descriptions off": "beschrijvingen off",
                "You aborted the media playback": "U hebt de mediaweergave afgebroken.",
                "A network error caused the media download to fail part-way.": "De mediadownload is mislukt door een netwerkfout.",
                "The media could not be loaded, either because the server or network failed or because the format is not supported.": "De media kon niet worden geladen, vanwege een server- of netwerkfout of doordat het formaat niet wordt ondersteund.",
                "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "De mediaweergave is afgebroken vanwege beschadigde data of het mediabestand gebruikt functies die niet door uw browser worden ondersteund.",
                "No compatible source was found for this media.": "Voor deze media is geen ondersteunde bron gevonden.",
                "Play Video": "Video Afspelen",
                "Close": "Sluiten",
                "Modal Window": "Modal Venster",
                "This is a modal window": "Dit is een modaal venster",
                "This modal can be closed by pressing the Escape key or activating the close button.": "Dit modaal venster kan gesloten worden door op Escape te drukken of de 'sluiten' knop te activeren.",
                ", opens captions settings dialog": ", opent bijschriften instellingen venster",
                ", opens subtitles settings dialog": ", opent ondertiteling instellingen venster",
                ", opens descriptions settings dialog": ", opent beschrijvingen instellingen venster",
                ", selected": ", selected",
                "Settings": "Instellingen"
            }
        };
        return languages[languageCode];
    }

}
