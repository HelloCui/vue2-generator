module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "identifier": {
      "type": "string",
      "required": false,
      "message": "Project identifier",
      "default": "com.midea.msd.identifier"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "skipInterpolation": "src/**/*.vue",
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};
