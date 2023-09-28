/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    theoplayerLicenseString: 'your_license_string',
    theoplayerLibraryLocation: '/vendor/theoplayer/'
  },
  webpack: (config, _options) => {
    // Workaround for https://github.com/webpack/webpack/issues/17711
    config.optimization.innerGraph = false;
    return config;
  }
}
