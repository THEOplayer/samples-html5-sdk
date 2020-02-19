if (HLS) {
    let drmConfiguration = {
        "fairplay": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
            "certificateURL": "CERTIFICATE_URL>"
            // "certificate": "<CERTIFICATE_AS_STRING_OR_UInt8Array>",
            // "headers": {"<KEY>": "<VALUE>"},
            // "useCredentials": <true||false>
        }
    };
    player.source = {
        "sources": {
            "src": "<HLS_STREAM_URL>",
            "type": "application/x-mpegurl",
            "contentProtection": drmConfiguration
        }
    }
} else if (MPEG-DASH) {
    let drmConfiguration = {
        "playready": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"
            // "headers": {"<KEY>": "<VALUE>"},
            // "useCredentials": <true||false>
        },
        "widevine": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"
            // "headers": {"<KEY>": "<VALUE>"},
            // "useCredentials": <true||false>
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
