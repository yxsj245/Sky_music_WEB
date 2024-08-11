// 定义类别和乐谱数据
const data = {
    "sky-bgm": {
        name: "Sky背景音乐",
        subcategories: [{
                name: "欧若拉",
                scores: [
                    { author: "作者：未知", title: "AURORA-Runaway", cover: "https://imgos.cn/2024/08/11/66b8ac09e5e20.jpg", download: "曲谱文件下载地址", authorLink: "作者链接" }
                ]
            },
            {
                name: "其它音乐",
                scores: [
                    { author: "作者：未知", title: "雨林", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%85%89%E9%81%87BGM/%E5%85%B6%E5%AE%83/%E9%9B%A8%E6%9E%97.json", authorLink: "作者链接" },
                    { author: "作者：Starrr_光遇", title: "云巢小镇|Season of Revival", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E5%86%8D%E8%A7%81%E6%B7%B1%E6%B5%B7.json", authorLink: "https://www.bilibili.com/video/BV1ue411R7YZ/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者：Hokubu-", title: "重生之路", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%85%89%E9%81%87BGM/%E5%85%B6%E5%AE%83/%E9%87%8D%E7%94%9F%E4%B9%8B%E8%B7%AF%EF%BC%88%E5%89%8D%E6%AE%B5%EF%BC%89.json", authorLink: "https://www.bilibili.com/video/BV1hh411m7Nz/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            // 可以无限添加小类别
        ]
    },
    "songs": {
        name: "歌曲",
        subcategories: [{
                name: "电影主题曲",
                scores: [
                    { author: "作者:辉与耀", title: "Dead Silence Interlude-死寂", cover: "https://imgos.cn/2024/08/11/66b8af733e48a.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%85%89%E9%81%87BGM/%E6%AC%A7%E8%8B%A5%E6%8B%89/Dead%20Silence%20Interlude.json", authorLink: "https://www.bilibili.com/video/BV1AA411j7ug/?spm_id_from=333.880.my_history.page.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:燃氦", title: "再见深海", cover: "https://imgos.cn/2024/08/11/66b8bd092be6a.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E5%86%8D%E8%A7%81%E6%B7%B1%E6%B5%B7.json", authorLink: "https://www.bilibili.com/video/BV1bd4y1W7M9/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            // 可以无限添加小类别
        ]
    },
    "instrumental": {
        name: "纯音乐",
        subcategories: [{
                name: "欢快",
                scores: [
                    { author: "作者:未知", title: "Canon-卡农", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/Canon.txt", authorLink: "作者链接" },
                    { author: "作者:-coko-", title: "斗地主", cover: "https://imgos.cn/2024/08/11/66b8b5bd64b0c.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E6%96%97%E5%9C%B0%E4%B8%BB.json", authorLink: "https://www.bilibili.com/video/BV1PA411M7L5/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:未知", title: "跳舞的线", cover: "https://imgos.cn/2024/08/11/66b8b9c91f6d7.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E8%B7%B3%E8%88%9E%E7%9A%84%E7%BA%BF.json", authorLink: "" },
                    { author: "作者:未知", title: "星际穿越", cover: "https://imgos.cn/2024/08/11/66b8ba75a928c.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E6%98%9F%E9%99%85%E7%A9%BF%E8%B6%8A.json", authorLink: "" },
                    { author: "作者:未知", title: "猪八戒背媳妇", cover: "https://imgos.cn/2024/08/11/66b8bf0384d14.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E7%8C%AA%E5%85%AB%E6%88%92%E8%83%8C%E5%AA%B3%E5%A6%87.json", authorLink: "" }
                ]
            },
            {
                name: "悬疑",
                scores: [
                    { author: "作者:辉与耀", title: "scarsong", cover: "https://imgos.cn/2024/08/11/66b8b0678f351.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%82%AC%E7%96%91/scarsong.json", authorLink: "https://www.bilibili.com/video/BV1oa411c7m8/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "轻松",
                scores: [
                    { author: "作者:丶又菜又爱玩", title: "start over", cover: "https://imgos.cn/2024/08/11/66b8b18ff21a0.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/start%20over.json", authorLink: "https://www.bilibili.com/video/BV14o4y1S7jq/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            // 可以无限添加小类别
        ]
    }
};
