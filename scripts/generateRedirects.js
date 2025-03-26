const fs = require("fs");
const path = require("path");
const matter = require("gray-matter"); // For parsing front matter

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
 * @param {string} docsDir - The base documentation directory.
 * @param {Array<string>} fromVersions - The list of old versions to process.
 * @param {string} baseUrl - The base URL for the documentation.
 * @param {string} defaultVersion - The version to use for version-less redirects.
 * @returns {Object[]} Array of redirect objects with `from` and `to` paths.
 */
function generateVersionRedirects(
  docsDir,
  fromVersions,
  baseUrl,
  defaultVersion
) {
  if (!Array.isArray(fromVersions) || fromVersions.length === 0) {
    return;
  }

  const redirects = [];

  function getSlug(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content); // Extract front matter
    return data.slug || null; // Return slug if exists
  }

  function generateToVersion(fromVersion) {
    return `v${fromVersion.split(".")[0]}`;
  }

  function addRedirects(dir, fromVersion) {
    if (!fs.existsSync(dir)) {
      console.error(`Error: Directory ${dir} does not exist.`);
      return;
    }

    const toVersion = generateToVersion(fromVersion);
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);

      if (fs.statSync(fullPath).isDirectory()) {
        addRedirects(fullPath, fromVersion);
      } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
        const slug = getSlug(fullPath);
        if (slug) {
          const cleanedSlug = slug.replace(/^\/+/g, "");

          // Version-less redirect for defaultVersion
          if (fromVersion === defaultVersion) {
            redirects.push({
              from: `/${baseUrl}/${cleanedSlug}`,
              to: `/${baseUrl}/${toVersion}/${cleanedSlug}`,
            });
          }

          // Redirect fromVersion → toVersion
          redirects.push({
            from: `/${baseUrl}/${fromVersion}/${cleanedSlug}`,
            to: `/${baseUrl}/${toVersion}/${cleanedSlug}`,
          });
        }
      }
    });
  }

  // Loop through fromVersions
  fromVersions.forEach((fromVersion) => {
    const versionedDocsDir = path.join(docsDir, `version-${fromVersion}`); // Append fromVersion to docsDir
    addRedirects(versionedDocsDir, fromVersion);
  });

  return redirects;
}

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
const getOverviewRedirects = (
  versions,
  platform,
  defaultVersion,
  latestVersion
) => {
  if (!Array.isArray(versions) || versions.length === 0) {
    return [];
  }

  // Function to convert `fromVersion` to `toVersion` (e.g., "5.0" → "v5")
  const formatVersion = (version) => `v${version.split(".")[0]}`;

  return [
    // Redirect base URL to latest version's overview
    {
      from: `/ui-kit/${platform}`,
      to: `/ui-kit/${platform}/${formatVersion(latestVersion)}/overview`,
    },
    // Redirect latest version explicitly
    {
      from: `/ui-kit/${platform}/${formatVersion(latestVersion)}`,
      to: `/ui-kit/${platform}/${formatVersion(latestVersion)}/overview`,
    },
    // Redirect defaultVersion to its mapped version
    {
      from: `/ui-kit/${platform}/${formatVersion(defaultVersion)}`,
      to: `/ui-kit/${platform}/${formatVersion(defaultVersion)}/overview`,
    },
    // Redirect each version to its corresponding `toVersion`
    ...versions.map((version) => ({
      from: `/ui-kit/${platform}/${version}`,
      to: `/ui-kit/${platform}/${formatVersion(version)}/overview`,
    })),
  ];
};

module.exports = { getOverviewRedirects, generateVersionRedirects };
