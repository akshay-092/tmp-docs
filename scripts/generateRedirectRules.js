const {
  generateVersionRedirects,
  getOverviewRedirects,
} = require("./generateRedirects");
const path = require("path");
const fs = require("fs");

const documentationDirectory = "android-chat-ui-kit_versioned_docs";
const component = "ui-kit";
const platform = "android";
const latestVersion = "5.0";
const defaultVersion = "4.0";
const versions = ["4.0", "3.0", "2.0"];
const outputPath = path.join(
  __dirname,
  `${platform}-${component}_redirects.json`
);

/**
 * Generates redirect rules to fix half-broken links and ensure proper version handling.
 * Redirects follow these rules:
 * 1. `/ui-kit/{platform}` → `/ui-kit/{platform}/v{latestVersion}/overview`
 * 2. `/ui-kit/{platform}/{latestVersion}` → `/ui-kit/{platform}/v{latestVersion}/overview`
 * 3. `/ui-kit/{platform}/{defaultVersion}` → `/ui-kit/{platform}/v{defaultVersion}/overview`
 * 4. `/ui-kit/{platform}/{fromVersion}` → `/ui-kit/{platform}/v{toVersion}/overview`
 *
 * @param {string[]} versions - List of available versions.
 * @param {string} platform - Target platform (e.g., "react").
 * @param {string} defaultVersion - Default version that should explicitly have a redirect.
 * @param {string} latestVersion - Latest version to which all version-less URLs should redirect.
 * @returns {Object[]} Array of redirect objects with `from` and `to` paths.
 */
const reactOverviewRedirects = getOverviewRedirects(
  versions,
  platform,
  defaultVersion,
  latestVersion
);

/**
 * Generates redirect rules for old documentation versions.
 *
 * This method scans through directories corresponding to old versions by appending `version-{versionNumber}`
 * to the base directory path. It then extracts all slugs from those directories and creates redirect rules.
 *
 * - Redirects each `fromVersion` (e.g., `5.0`) to its corresponding `toVersion` (e.g., `v5`).
 * - Generates version-less redirects for the `defaultVersion`, ensuring that users accessing unversioned URLs
 *   are directed to the appropriate version.
 *
 * @param {string} directory - The base documentation directory.
 * @param {Array<string>} versions - The list of old versions to process.
 * @param {string} baseUrl - The base URL for the documentation.
 * @param {string} defaultVersion - The version to use for version-less redirects.
 * @returns {Object[]} Array of redirect objects with `from` and `to` paths.
 */
const reactRedirectionsForOldVersions = generateVersionRedirects(
  path.join(__dirname, documentationDirectory),
  versions,
  `${component}/${platform}`,
  defaultVersion
);

const redirects = [
  ...reactOverviewRedirects,
  ...reactRedirectionsForOldVersions,
];

// Write redirects to JSON file
fs.writeFileSync(outputPath, JSON.stringify(redirects, null, 2), "utf8");
console.log(`Redirects written to ${outputPath}`);
