export let appConfig = appConfig || {
    language: 'en',
    tabs: [
        {
            name: "Multi-Asset DRM",
            source: {
                integration: 'uplynk',
                id: ['e973a509e67241e3aa368730130a104d', 'e70a708265b94a3fa6716666994d877d'],
                contentProtected: true,
                assetType: 'asset',
                preplayParameters: {}
            },
            features: ["Preplay", "Asset Info", "DRM", "Multi-Asset"],
            config: {
                'general': ["coming-up-notification", "show-asset-markers"],
                'queue': true
            },
            experimental: ["preview-thumbnails"]
        },
        {
            name: "Ads",
            source: {
                "integration": "uplynk",
                "id": [
                    "41afc04d34ad4cbd855db52402ef210e",
                    "c6b61470c27d44c4842346980ec2c7bd",
                    "588f9d967643409580aa5dbe136697a1",
                    "b1927a5d5bd9404c85fde75c307c63ad",
                    "7e9932d922e2459bac1599938f12b272",
                    "a4c40e2a8d5b46338b09d7f863049675",
                    "bcf7d78c4ff94c969b2668a6edc64278",
                ],
                "contentProtected": false,
                "assetType": "asset",
                "preplayParameters": {
                    ad: "adtest",
                    "ad.lib": "15_sec_spots"
                }
            },
            features: ["Preplay", "Asset Info", "Ads", "Multi-Asset", "SSAI"],
            config: {
                'general': ["coming-up-notification", "ad-notification", "show-asset-markers", "show-ad-break-markers"],
                'skip-offset': '-1',
                'seek-over-ad': 'play-all',
                'queue': true
            }
        },
        // // The following stream is down for the moment.
        // {
        //     name: "Live",
        //     source: {
        //         integration: 'uplynk',
        //         assetType: 'channel',
        //         id: '3c367669a83b4cdab20cceefac253684',
        //         preplayParameters: { 'ad': 'cleardashnew'},
        //         playbackUrlParameters: {},
        //         ping: {
        //             adImpressions: false,
        //             freeWheelVideoViews: false,
        //             linearAdData: true
        //         },
        //         contentProtected: true
        //     },
        //     features: ["Preplay", "Ping", "Asset Info", "DRM", "Ads", "SSAI"],
        //     config: {
        //         'general': ["coming-up-notification"],
        //         'queue': false
        //     }
        // }
    ]
};
