// 定义类别和乐谱数据
const data = {
    "sky-bgm": {
        name: "Sky背景音乐",
        subcategories: [{
                name: "AURORA",
                scores: [
                    { author: "author：unknown", title: "AURORA-Runaway", cover: "https://imgos.cn/2024/08/11/66b8ac09e5e20.jpg", download: "曲谱文件下载地址", authorLink: "author链接" }
                ]
            },
            {
                name: "Other music",
                scores: [
                    { author: "author：unknown", title: "hidden forest", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%85%89%E9%81%87BGM/%E5%85%B6%E5%AE%83/%E9%9B%A8%E6%9E%97.json", authorLink: "author链接" },
                    { author: "author：Starrr_光遇", title: "Season of Revival", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E5%86%8D%E8%A7%81%E6%B7%B1%E6%B5%B7.json", authorLink: "https://www.bilibili.com/video/BV1ue411R7YZ/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author：Hokubu-", title: "eden", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%85%89%E9%81%87BGM/%E5%85%B6%E5%AE%83/%E9%87%8D%E7%94%9F%E4%B9%8B%E8%B7%AF%EF%BC%88%E5%89%8D%E6%AE%B5%EF%BC%89.json", authorLink: "https://www.bilibili.com/video/BV1hh411m7Nz/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            // 可以无限添加小类别
        ]
    },
    "songs": {
        name: "歌曲",
        subcategories: [{
                name: "Movie Theme Song",
                scores: [
                    { author: "author:辉与耀", title: "Dead Silence Interlude", cover: "https://imgos.cn/2024/08/11/66b8af733e48a.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%85%89%E9%81%87BGM/%E6%AC%A7%E8%8B%A5%E6%8B%89/Dead%20Silence%20Interlude.json", authorLink: "https://www.bilibili.com/video/BV1AA411j7ug/?spm_id_from=333.880.my_history.page.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "author:燃氦", title: "再见深海", cover: "https://imgos.cn/2024/08/11/66b8bd092be6a.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E5%86%8D%E8%A7%81%E6%B7%B1%E6%B5%B7.json", authorLink: "https://www.bilibili.com/video/BV1bd4y1W7M9/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:-coko-", title: "大鱼海棠", cover: "https://imgos.cn/2024/08/12/66b97b6a9e87c.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E3%80%8A%E5%A4%A7%E9%B1%BC%EF%BC%88Big+Fish%EF%BC%89%E3%80%8Bcoko.txt", authorLink: "https://www.bilibili.com/video/BV1yr4y1N7UL/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:千念丶", title: "一次就好", cover: "https://imgos.cn/2024/08/12/66b98204348b6.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%BF%A7%E4%BC%A4%E6%AD%8C%E6%9B%B2/%E4%B8%80%E6%AC%A1%E5%B0%B1%E5%A5%BD.txt", authorLink: "https://www.bilibili.com/video/BV1ap4y1s7yF/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "起风了", cover: "https://imgos.cn/2024/08/12/66b989d245133.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E8%B5%B7%E9%A3%8E%E4%BA%86.txt", authorLink: "https://www.bilibili.com/video/BV16e4y1U7UQ/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "起风了", cover: "https://imgos.cn/2024/08/12/66b989d245133.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E8%B5%B7%E9%A3%8E%E4%BA%86(%E6%8D%95%E9%B1%BC%E4%BA%BA).txt", authorLink: "https://sky.wtfxxj.top/" },
                    { author: "author:Sky光遇琴谱_瞳", title: "你从未离去", cover: "https://imgos.cn/2024/08/12/66b9a736d9cb1.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E4%BD%A0%E4%BB%8E%E6%9C%AA%E7%A6%BB%E5%8E%BB.txt", authorLink: "https://www.bilibili.com/video/BV1ei4y1C7qP/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "笼", cover: "https://imgos.cn/2024/08/12/66b9aba123e2d.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E7%AC%BC.txt", authorLink: "https://www.bilibili.com/video/BV1VX4y1W7KH/?share_source=copy_web" },
                ]
            },
            {
                name: "relaxed",
                scores: [
                    { author: "author:秃秃不睡觉", title: "暖暖", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E6%9A%96%E6%9A%96.txt", authorLink: "https://www.bilibili.com/video/BV1hX4y137tv/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:I皮卡QI", title: "青花瓷", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E9%9D%92%E8%8A%B1%E7%93%B7.txt", authorLink: "https://www.bilibili.com/video/BV1Xy4y1G7Us/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:plzdnst", title: "诀别书", cover: "https://imgos.cn/2024/08/12/66b97e7bb6c7d.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E8%AF%80%E5%88%AB%E4%B9%A6.txt", authorLink: "https://www.bilibili.com/video/BV18w4m1f7WP/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "有点甜", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E6%9C%89%E7%82%B9%E7%94%9C.txt", authorLink: "https://www.bilibili.com/video/BV1La411j7ST/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "兰亭序", cover: "https://imgos.cn/2024/08/12/66b97e7bb6c7d.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E5%85%B0%E4%BA%AD%E5%BA%8F.txt", authorLink: "https://www.bilibili.com/video/BV1Bg411G7Zx/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:我是一元啊呀", title: "小星星", cover: "https://imgos.cn/2024/08/12/66b988d370684.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E5%B0%8F%E6%98%9F%E6%98%9F.txt", authorLink: "https://www.bilibili.com/video/BV1Gg411j7yG/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "江南", cover: "https://imgos.cn/2024/08/12/66b98e60dcd3e.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E6%B1%9F%E5%8D%97.txt", authorLink: "https://www.bilibili.com/video/BV1GZ4y1Q7Av/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "错位时空", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA.txt", authorLink: "https://www.bilibili.com/video/BV133411q7fy/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:白术今天做谱了吗", title: "世间美好与你环环相扣", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E4%B8%96%E9%97%B4%E7%BE%8E%E5%A5%BD%E4%B8%8E%E4%BD%A0%E7%8E%AF%E7%8E%AF%E7%9B%B8%E6%89%A3.txt", authorLink: "https://www.bilibili.com/video/BV12i4y1A7hE/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "告白气球", cover: "https://imgos.cn/2024/08/12/66b97e7bb6c7d.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.txt", authorLink: "https://www.bilibili.com/video/BV1if4y1a7T9/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:Sky光遇琴谱_瞳", title: "小情歌", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E5%B0%8F%E6%83%85%E6%AD%8C%EF%BC%88%E8%AF%AD%E7%9E%B3%EF%BC%89.txt", authorLink: "https://www.bilibili.com/video/BV1Qy4y147BD/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:丶又菜又爱玩", title: "听我说谢谢你", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E8%BD%BB%E6%9D%BE%E6%AD%8C%E6%9B%B2/%E5%90%AC%E6%88%91%E8%AF%B4%E8%B0%A2%E8%B0%A2%E4%BD%A0.txt", authorLink: "https://www.bilibili.com/video/BV1Yf4y1L77U/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:fghgghg", title: "知我", cover: "https://img.picui.cn/free/2024/08/18/66c155ee3508e.png", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2/%E7%9F%A5%E6%88%91.txt", authorLink: "https://www.bilibili.com/video/BV14e411w7by/?share_source=copy_web&vd_source=c5f5824942ad78e96c57e8f7a8cd31cc" },

                ]
            },
            {
                name: "Cheerfulness",
                scores: [
                    { author: "author:Sky光遇琴谱_瞳", title: "孤勇者", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E6%AC%A2%E5%BF%AB%E6%AD%8C%E6%9B%B2/%E5%AD%A4%E5%8B%87%E8%80%85.txt", authorLink: "https://www.bilibili.com/video/BV1YY4y1Y7iK/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:unknown", title: "心如止水", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E6%AC%A2%E5%BF%AB%E6%AD%8C%E6%9B%B2/%E5%BF%83%E5%A6%82%E6%AD%A2%E6%B0%B4.txt", authorLink: "" },
                    { author: "author:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "悬溺", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E6%AC%A2%E5%BF%AB%E6%AD%8C%E6%9B%B2/%E6%82%AC%E6%BA%BAjs.txt", authorLink: "https://sky.wtfxxj.top/" },

                ]
            },
            {
                name: "blue",
                scores: [

                ]
            },
            // 可以无限添加小类别
        ]
    },
    "instrumental": {
        name: "纯音乐",
        subcategories: [{
                name: "Cheerfulness",
                scores: [
                    { author: "author:unknown", title: "Canon-卡农", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/Canon.txt", authorLink: "author链接" },
                    { author: "author:-coko-", title: "斗地主", cover: "https://imgos.cn/2024/08/11/66b8b5bd64b0c.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E6%96%97%E5%9C%B0%E4%B8%BB.json", authorLink: "https://www.bilibili.com/video/BV1PA411M7L5/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:unknown", title: "跳舞的线", cover: "https://imgos.cn/2024/08/11/66b8b9c91f6d7.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E8%B7%B3%E8%88%9E%E7%9A%84%E7%BA%BF.json", authorLink: "" },
                    { author: "author:unknown", title: "星际穿越", cover: "https://imgos.cn/2024/08/11/66b8ba75a928c.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E6%98%9F%E9%99%85%E7%A9%BF%E8%B6%8A.json", authorLink: "" },
                    { author: "author:unknown", title: "猪八戒背媳妇", cover: "https://imgos.cn/2024/08/11/66b8bf0384d14.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E7%8C%AA%E5%85%AB%E6%88%92%E8%83%8C%E5%AA%B3%E5%A6%87.json", authorLink: "" },
                    { author: "author:Sky光遇琴谱_瞳", title: "He's A Pirate-加勒比海盗", cover: "https://imgos.cn/2024/08/12/66b9a9006c82b.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/'s%20A%20Pirate(%E5%8A%A0%E5%8B%92%E6%AF%94%E6%B5%B7%E7%9B%97).txt", authorLink: "" },
                    { author: "author:unknown", title: "气象站台", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/%E6%B0%94%E8%B1%A1%E7%AB%99%E5%8F%B0.txt", authorLink: "" },
                    { author: "作者:绵羊啊喂", title: "golden hour", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/golden%20hour.txt", authorLink: "【光遇乐谱《golden hour》超还原完整版-绵羊制谱】 https://www.bilibili.com/video/BV1NR4y197jM/?share_source=copy_web&vd_source=c5f5824942ad78e96c57e8f7a8cd31cc" },

                ]
            },
            {
                name: "suspense",
                scores: [
                    { author: "author:辉与耀", title: "scarsong", cover: "https://imgos.cn/2024/08/11/66b8b0678f351.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%82%AC%E7%96%91/scarsong.json", authorLink: "https://www.bilibili.com/video/BV1oa411c7m8/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "relaxed",
                scores: [
                    { author: "author:丶又菜又爱玩", title: "start over", cover: "https://imgos.cn/2024/08/11/66b8b18ff21a0.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E6%AC%A2%E5%BF%AB/start%20over.json", authorLink: "https://www.bilibili.com/video/BV14o4y1S7jq/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:sky荼苏", title: "幻昼", cover: "https://imgos.cn/2024/08/12/66b974ff5d697.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E8%BD%BB%E6%9D%BE/%E5%B9%BB%E6%98%BC.txt", authorLink: "https://www.bilibili.com/video/BV19u4y1Q7Bh/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:-coko-", title: "いつも何度でも-千与千寻片尾曲", cover: "https://imgos.cn/2024/08/12/66b978263e834.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E8%BD%BB%E6%9D%BE/%E3%80%8A%E3%81%84%E3%81%A4%E3%82%82%E4%BD%95%E5%BA%A6%E3%81%A7%E3%82%82%E3%80%8Bcoko.txt", authorLink: "https://www.bilibili.com/video/BV12y4y1E7LR/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:白术今天做谱了吗", title: "所念所念皆星河", cover: "https://imgos.cn/2024/08/12/66b9858766a3b.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E8%BD%BB%E6%9D%BE/%E6%89%80%E5%BF%B5%E7%9A%86%E6%98%9F%E6%B2%B3.txt", authorLink: "https://www.bilibili.com/video/BV1zq4y1P7Jq/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "author:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "Flower Dance-花之舞", cover: "https://img.picui.cn/free/2024/08/17/66c08682b2038.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E8%BD%BB%E6%9D%BE/Flower%20Dance%20(%E8%8A%B1%E4%B9%8B%E8%88%9E)1.txt", authorLink: "https://sky.wtfxxj.top/" },

                ]
            },
            {
                name: "distressed",
                scores: [
                    { author: "author:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "下潜", cover: "https://img.picui.cn/free/2024/08/17/66c087db64fef.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E5%BF%A7%E4%BC%A4/%E4%B8%8B%E6%BD%9C1.txt", authorLink: "https://sky.wtfxxj.top/" },
                ]
            }
            // 可以无限添加小类别
        ]

    },
    "festival": {
        name: "特殊节日",
        subcategories: [{
                name: "birthday",
                scores: [
                    { author: "author:Sky光遇琴谱_瞳", title: "生日快乐歌", cover: "https://imgos.cn/2024/08/12/66b9870271e14.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E7%94%9F%E6%97%A5/%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%E6%AD%8C.txt", authorLink: "https://www.bilibili.com/video/BV17b4y1v7h1/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "Christmas",
                scores: [
                    { author: "author:菲涅尔透镜", title: "Jingle Bells-铃儿响叮当", cover: "https://imgos.cn/2024/08/12/66b98b66b0fb1.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9C%A3%E8%AF%9E%E8%8A%82/Jingle%20Bells.txt", authorLink: "https://www.bilibili.com/video/BV1Rz4y167ws/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "春节",
                scores: [
                    { author: "author:是小社不是小杜", title: "春节序曲", cover: "https://imgos.cn/2024/08/12/66b98c9b08834.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E6%98%A5%E8%8A%82/%E6%98%A5%E8%8A%82%E5%BA%8F%E6%9B%B2%E3%80%90%E7%AE%80%E7%89%88by%E5%B0%8F%E7%A4%BE%E3%80%91.txt", authorLink: "https://www.bilibili.com/video/BV1xF411H7pW/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "National Day/Red Songs",
                scores: [
                    { author: "author:辉与耀", title: "义勇军进行曲", cover: "https://imgos.cn/2024/08/12/66b990d7915e8.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9B%BD%E5%BA%86%E8%8A%82/%E4%B9%89%E5%8B%87%E5%86%9B%E8%BF%9B%E8%A1%8C%E6%9B%B2.txt", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "author:辉与耀", title: "十送红军", cover: "https://imgos.cn/2024/08/12/66b9917a81ef6.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9B%BD%E5%BA%86%E8%8A%82/%E5%8D%81%E9%80%81%E7%BA%A2%E5%86%9B.txt", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "author:辉与耀", title: "强军战歌", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9B%BD%E5%BA%86%E8%8A%82/%E5%BC%BA%E5%86%9B%E6%88%98%E6%AD%8C.txt", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "author:辉与耀", title: "没有共产党就没有新中国", cover: "https://imgos.cn/2024/08/12/66b9924ddfa50.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9B%BD%E5%BA%86%E8%8A%82/%E6%B2%A1%E6%9C%89%E5%85%B1%E4%BA%A7%E5%85%9A%E5%B0%B1%E6%B2%A1%E6%9C%89%E6%96%B0%E4%B8%AD%E5%9B%BD.txt", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "author:辉与耀", title: "红星歌", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9B%BD%E5%BA%86%E8%8A%82/%E7%BA%A2%E6%98%9F%E6%AD%8C.txt", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "author:辉与耀", title: "红旗飘飘", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9B%BD%E5%BA%86%E8%8A%82/%E7%BA%A2%E6%97%97%E9%A3%98%E9%A3%98.txt", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "author:辉与耀", title: "歌唱祖国", cover: "https://imgos.cn/2024/08/12/66b9938893d33.jpg", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E7%89%B9%E6%AE%8A%E8%8A%82%E6%97%A5/%E5%9B%BD%E5%BA%86%E8%8A%82/%E6%AD%8C%E5%94%B1%E7%A5%96%E5%9B%BD.txt", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                ]
            },

            // 可以无限添加小类别
        ]
    },
    "gamebgm": {
        name: "Other games BGM",
        subcategories: [{
                name: "Genshin Impact",
                scores: [
                    { author: "author:unknown", title: "主题曲", cover: "https://imgos.cn/2024/08/13/66bacb9754ab8.png", download: "https://oss.xiaozhuhome.site/Sky%E6%9B%B2%E8%B0%B1/%E5%8E%9F%E7%A5%9E/%E5%8E%9F%E7%A5%9E%E4%B8%BB%E9%A2%98%E6%9B%B2.txt", authorLink: "" },
                ]
            },
            {
                name: "Identity V",
                scores: [

                ]
            }

            // 可以无限添加小类别
        ]
    }

};