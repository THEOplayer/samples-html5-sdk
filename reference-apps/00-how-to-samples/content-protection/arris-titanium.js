if (HLS) {
    let drmConfiguration = {
        "integration": "titanium",
        "accountName": "<ACCOUNT_NAME>",
        "customerName": "<CUSTOMER_NAME>",
        "friendlyName": "<FRIENDLY_NAME>",
        "portalId": "<PORTAL_ID>",
        "authToken": "<AXINOM_TOKEN>",
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
        "integration": "titanium",
        "accountName": "<ACCOUNT_NAME>",
        "customerName": "<CUSTOMER_NAME>",
        "friendlyName": "<FRIENDLY_NAME>",
        "portalId": "<PORTAL_ID>",
        "authToken": "<AXINOM_TOKEN>",
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
