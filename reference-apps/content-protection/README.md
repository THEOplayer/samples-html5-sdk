# OptiView Player content protection snippets

These files are not runnable apps. Each one shows the `contentProtection` source configuration for a DRM vendor integration of the OptiView Player Web SDK:

| File | Integration |
|---|---|
| [`arris-titanium.js`](arris-titanium.js) | ARRIS Titanium |
| [`axinom.js`](axinom.js) | Axinom |
| [`buydrm-keyos.js`](buydrm-keyos.js) | BuyDRM KeyOS |
| [`drm-custom-integration.js`](drm-custom-integration.js) | A DRM server without a vendor integration: license URLs, headers and credentials for FairPlay, PlayReady and Widevine |

## Using a snippet
1. Create a player as shown in any of the other reference apps or the [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/) guide.
2. Copy the snippet for your DRM vendor into your app, after the player is created.
3. Replace the `<...>` placeholders with your stream URL, license server URLs, certificate URL and token.

DRM playback needs a browser with a Content Decryption Module (Widevine, PlayReady or FairPlay) and a page served over HTTPS or from _localhost_.

## Documentation
* [DRM introduction](https://optiview.dolby.com/docs/theoplayer/how-to-guides/drm/introduction/)
* [Live examples](https://optiview.dolby.com/docs/theoplayer/examples/)
