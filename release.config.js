const config = {
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git",
      {
        assets: ["dist/**"]
      }
    ],
    "@semantic-release/github"
  ]
};

module.exports = config;
