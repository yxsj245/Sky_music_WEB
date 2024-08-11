// 定义类别和乐谱数据
const data = {
    "sky-bgm": {
        name: "Sky背景音乐",
        subcategories: [{
                name: "欧若拉",
                scores: [
                    { author: "作者：未知", title: "AURORA-Runaway", cover: "sky_totr_blog-header.webp", download: "曲谱文件下载地址", authorLink: "作者链接" }
                ]
            },
            {
                name: "其它音乐",
                scores: [
                    { author: "作者：未知", title: "未知", cover: "sky_totr_blog-header.webp", download: "曲谱文件下载地址", authorLink: "作者链接" }
                ]
            },
            // 可以无限添加小类别
        ]
    },
    "songs": {
        name: "歌曲",
        subcategories: [{
                name: "大类别2",
                scores: [
                    { author: "作者C", title: "乐曲C", cover: "曲谱图片", download: "曲谱文件下载地址", authorLink: "作者链接" }
                ]
            },
            // 可以无限添加小类别
        ]
    },
    "instrumental": {
        name: "纯音乐",
        subcategories: [{
                name: "大类别3",
                scores: [
                    { author: "作者D", title: "乐曲D", cover: "曲谱图片", download: "曲谱文件下载地址", authorLink: "作者链接" }
                ]
            },
            // 可以无限添加小类别
        ]
    }
};
