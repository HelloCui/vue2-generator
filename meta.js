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
        "author": {
            "type": "string",
            "message": "Author"
        },
        "platform": {
            "type": "list",
            "message": "Platform",
            "choices": [{
                    "name": "cordova",
                    "value": "cordova",
                    "short": "cordova"
                },
                {
                    "name": "微信",
                    "value": "wechat",
                    "short": "wechat"
                }
            ]
        },
        "identifier": {
            "when": "platform == 'cordova'",
            "type": "string",
            "required": false,
            "message": "Project identifier",
            "default": ""
        },
        "vux": {
            "type": "confirm",
            "message": "是否使用vux?"
        },
        "doc": {
            "type": "confirm",
            "message": "是否需要文档"
        }
    },
    "filters": {
        "CubeModule.json": "platform == 'cordova'",
        "build/webpack.doc.conf.js": "doc == true",
        "docs": "doc == true"
    },
    "skipInterpolation": ["src/**/!(App).vue", "docs/**/*"],
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};
