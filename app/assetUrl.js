const versions = import.meta.env.ASSET_VERSIONS;

export function assetUrl(path) {
  const version = versions[path];
  return version ? `${encodeURI(path)}?v=${version}` : path;
}
