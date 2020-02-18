if (HLS) {
    let drmConfiguration = {
        "integration": "keyos",
        "customdata": "<CUSTOMDATA>",
        "fairplay": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
            "certificateURL": "CERTIFICATE_URL>"
        }
    };
    player.source = {
        "sources": {
            "src": "<HLS_STREAM_URL>",
            "type": "application/x-mpegurl",
            "contentProtection": drmConfiguration
        }
    }
} else if (DASH) {
    let drmConfiguration = {
        "integration": "keyos",
        "customdata": "<CUSTOMDATA>",
        "playready": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"
        },
        "widevine": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"
        }
    };
    player.source = {
        "sources": {
            "src": "<DASH_STREAM_URL>",
            "type": "application/dash+xml",
            "contentProtection": drmConfiguration
        }
    }
}
