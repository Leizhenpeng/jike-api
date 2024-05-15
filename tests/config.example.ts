import { resolveApiConfig } from '../src'

// This is an example file.
// Since jike requires login to use it, please fill in the following configuration
// and rename this file to `config.ts`.
// You can also copy it from `jike-cli` https://github.com/open-jike/jike-client.
// Run `jike-cli user info -rP`

export const config = resolveApiConfig({
  endpointId: 'jike',
  endpointUrl: 'https://api.ruguoapp.com/',
  bundleId: 'com.ruguoapp.jike',
  buildNo: '2961',
  appVersion: '7.56.2',
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Jike/7.56.2 /sa-sdk-ios/sensors-verify/tr.ruguoapp.com?jike',
  deviceId: '766ECA1A-C654-11EC-89F9-4F2C5FBE0E82',
  idfv: '82283B5C-C654-11EC-B221-BBD1DABE7B57',
  accessToken: 'paste-your-access-token',
})

export const refreshToken = 'paste-your-refresh-token'
