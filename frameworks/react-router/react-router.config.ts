import type { Config } from '@react-router/dev/config';
export default {
  ssr: true,
  // Opt in to the React Router 8 behavior now, so dev and build don't print future flag warnings.
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true
  }
} satisfies Config;
