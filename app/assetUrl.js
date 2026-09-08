import versions from "./assetVersions.json";

export function assetUrl(path) {
  const version = versions[path];
  return version ? `${encodeURI(path)}?v=${version}` : path;
}
