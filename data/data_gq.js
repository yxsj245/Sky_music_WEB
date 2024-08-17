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
                    { author: "作者：未知", title: "雨林", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://xiaozhux.lanzoub.com/iPRhq27okldi", authorLink: "作者链接" },
                    { author: "作者：Starrr_光遇", title: "云巢小镇|Season of Revival", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://xiaozhux.lanzoub.com/iSzs227oklej", authorLink: "https://www.bilibili.com/video/BV1ue411R7YZ/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者：Hokubu-", title: "重生之路", cover: "https://imgos.cn/2024/08/11/66b8bbcd8ae4f.jpg", download: "https://xiaozhux.lanzoub.com/iIcCi27oklfa", authorLink: "https://www.bilibili.com/video/BV1hh411m7Nz/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
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
                    { author: "作者:辉与耀", title: "Dead Silence Interlude-死寂", cover: "https://imgos.cn/2024/08/11/66b8af733e48a.jpg", download: "https://xiaozhux.lanzoub.com/iU3lh27olixg", authorLink: "https://www.bilibili.com/video/BV1AA411j7ug/?spm_id_from=333.880.my_history.page.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:燃氦", title: "再见深海", cover: "https://imgos.cn/2024/08/11/66b8bd092be6a.jpg", download: "https://xiaozhux.lanzoub.com/inSS727ol6bc", authorLink: "https://www.bilibili.com/video/BV1bd4y1W7M9/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:-coko-", title: "大鱼海棠", cover: "https://imgos.cn/2024/08/12/66b97b6a9e87c.jpg", download: "https://xiaozhux.lanzoub.com/iD6LM27ol61c", authorLink: "https://www.bilibili.com/video/BV1yr4y1N7UL/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:千念丶", title: "一次就好", cover: "https://imgos.cn/2024/08/12/66b98204348b6.jpg", download: "https://xiaozhux.lanzoub.com/ioZM527oln1e", authorLink: "https://www.bilibili.com/video/BV1ap4y1s7yF/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "起风了", cover: "https://imgos.cn/2024/08/12/66b989d245133.jpg", download: "https://xiaozhux.lanzoub.com/i1CeX27ol69a", authorLink: "https://www.bilibili.com/video/BV16e4y1U7UQ/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "起风了", cover: "https://imgos.cn/2024/08/12/66b989d245133.jpg", download: "https://xiaozhux.lanzoub.com/iokhj27ol67i", authorLink: "https://sky.wtfxxj.top/" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "你从未离去", cover: "https://imgos.cn/2024/08/12/66b9a736d9cb1.jpg", download: "https://xiaozhux.lanzoub.com/i19JH27ol65g", authorLink: "https://www.bilibili.com/video/BV1ei4y1C7qP/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "笼", cover: "https://imgos.cn/2024/08/12/66b9aba123e2d.jpg", download: "https://xiaozhux.lanzoub.com/i4voN27ol63e", authorLink: "https://www.bilibili.com/video/BV1VX4y1W7KH/?share_source=copy_web" },
                ]
            },
            {
                name: "轻松",
                scores: [
                    { author: "作者:秃秃不睡觉", title: "暖暖", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iBu7E27om22f", authorLink: "https://www.bilibili.com/video/BV1hX4y137tv/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:I皮卡QI", title: "青花瓷", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iiKsp27om5ja", authorLink: "https://www.bilibili.com/video/BV1Xy4y1G7Us/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:plzdnst", title: "诀别书", cover: "https://imgos.cn/2024/08/12/66b97e7bb6c7d.jpg", download: "https://xiaozhux.lanzoub.com/isSR827om8aj", authorLink: "https://www.bilibili.com/video/BV18w4m1f7WP/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "有点甜", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/i78ms27omade", authorLink: "https://www.bilibili.com/video/BV1La411j7ST/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "兰亭序", cover: "https://imgos.cn/2024/08/12/66b97e7bb6c7d.jpg", download: "https://xiaozhux.lanzoub.com/iactF27ome7c", authorLink: "https://www.bilibili.com/video/BV1Bg411G7Zx/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:我是一元啊呀", title: "小星星", cover: "https://imgos.cn/2024/08/12/66b988d370684.jpg", download: "https://xiaozhux.lanzoub.com/iOiVM27omhdg", authorLink: "https://www.bilibili.com/video/BV1Gg411j7yG/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "江南", cover: "https://imgos.cn/2024/08/12/66b98e60dcd3e.jpg", download: "https://xiaozhux.lanzoub.com/i5ILn27omkgh", authorLink: "https://www.bilibili.com/video/BV1GZ4y1Q7Av/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "错位时空", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/i249M27omnwb", authorLink: "https://www.bilibili.com/video/BV133411q7fy/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:白术今天做谱了吗", title: "世间美好与你环环相扣", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iCsk527omquh", authorLink: "https://www.bilibili.com/video/BV12i4y1A7hE/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "告白气球", cover: "https://imgos.cn/2024/08/12/66b97e7bb6c7d.jpg", download: "https://xiaozhux.lanzoub.com/iVUwl27omufg", authorLink: "https://www.bilibili.com/video/BV1if4y1a7T9/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "小情歌", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/i9nQ027omx3c", authorLink: "https://www.bilibili.com/video/BV1Qy4y147BD/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:丶又菜又爱玩", title: "听我说谢谢你", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iY8ah27omzpg", authorLink: "https://www.bilibili.com/video/BV1Yf4y1L77U/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                ]
            },
            {
                name: "欢快",
                scores: [
                    { author: "作者:Sky光遇琴谱_瞳", title: "孤勇者", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iqTj627onfsf", authorLink: "https://www.bilibili.com/video/BV1YY4y1Y7iK/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:未知", title: "心如止水", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iHBfe27oni9e", authorLink: "" },
                    { author: "作者:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "悬溺", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/ixtZI27onvcf", authorLink: "https://sky.wtfxxj.top/" },
                ]
            },
            {
                name: "忧伤",
                scores: [

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
                    { author: "作者:未知", title: "Canon-卡农", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iOcwW27oo2qb", authorLink: "作者链接" },
                    { author: "作者:-coko-", title: "斗地主", cover: "https://imgos.cn/2024/08/11/66b8b5bd64b0c.jpg", download: "https://xiaozhux.lanzoub.com/im49H27oo6qf", authorLink: "https://www.bilibili.com/video/BV1PA411M7L5/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:未知", title: "跳舞的线", cover: "https://imgos.cn/2024/08/11/66b8b9c91f6d7.jpg", download: "https://xiaozhux.lanzoub.com/iMi6X27oog5e", authorLink: "" },
                    { author: "作者:未知", title: "星际穿越", cover: "https://imgos.cn/2024/08/11/66b8ba75a928c.jpg", download: "https://xiaozhux.lanzoub.com/ibStj27ookha", authorLink: "" },
                    { author: "作者:未知", title: "猪八戒背媳妇", cover: "https://imgos.cn/2024/08/11/66b8bf0384d14.jpg", download: "https://xiaozhux.lanzoub.com/iaMkA27ooo8f", authorLink: "" },
                    { author: "作者:Sky光遇琴谱_瞳", title: "He's A Pirate-加勒比海盗", cover: "https://imgos.cn/2024/08/12/66b9a9006c82b.jpg", download: "https://xiaozhux.lanzoub.com/iMfKa27oos1c", authorLink: "" },
                    { author: "作者:未知", title: "气象站台", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/irF6627oovdc", authorLink: "" },
                    { author: "作者:绵羊啊喂", title: "golden hour", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iaYdI27ooy4b", authorLink: "https://www.bilibili.com/video/BV1NR4y197jM/?share_source=copy_web&vd_source=c5f5824942ad78e96c57e8f7a8cd31cc" },

                ]
            },
            {
                name: "悬疑",
                scores: [
                    { author: "作者:辉与耀", title: "scarsong", cover: "https://imgos.cn/2024/08/11/66b8b0678f351.jpg", download: "https://xiaozhux.lanzoub.com/iVyUH27op4ha", authorLink: "https://www.bilibili.com/video/BV1oa411c7m8/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "轻松",
                scores: [
                    { author: "作者:丶又菜又爱玩", title: "start over", cover: "https://imgos.cn/2024/08/11/66b8b18ff21a0.jpg", download: "https://xiaozhux.lanzoub.com/i9nKO27opf7g", authorLink: "https://www.bilibili.com/video/BV14o4y1S7jq/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:sky荼苏", title: "幻昼", cover: "https://imgos.cn/2024/08/12/66b974ff5d697.jpg", download: "https://xiaozhux.lanzoub.com/i1Wr827opf9i", authorLink: "https://www.bilibili.com/video/BV19u4y1Q7Bh/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:-coko-", title: "いつも何度でも-千与千寻片尾曲", cover: "https://imgos.cn/2024/08/12/66b978263e834.jpg", download: "https://xiaozhux.lanzoub.com/imJRv27opfaj", authorLink: "https://www.bilibili.com/video/BV12y4y1E7LR/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:白术今天做谱了吗", title: "所念所念皆星河", cover: "https://imgos.cn/2024/08/12/66b9858766a3b.jpg", download: "https://xiaozhux.lanzoub.com/i3yxD27opfcb", authorLink: "https://www.bilibili.com/video/BV1zq4y1P7Jq/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" },
                    { author: "作者:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "Flower Dance-花之舞", cover: "https://img.picui.cn/free/2024/08/17/66c08682b2038.jpg", download: "https://xiaozhux.lanzoub.com/iQm9627opffe", authorLink: "https://sky.wtfxxj.top/" },
                ]
            },
            {
                name: "忧伤",
                scores: [
                    { author: "作者:𝐚𝐮𝐭𝐢𝐳𝐳𝟐.", title: "下潜", cover: "https://img.picui.cn/free/2024/08/17/66c087db64fef.jpg", download: "https://xiaozhux.lanzoub.com/iY15027opmpg", authorLink: "https://sky.wtfxxj.top/" },
                ]
            }
            // 可以无限添加小类别
        ]

    },
    "festival": {
        name: "特殊节日",
        subcategories: [{
                name: "生日",
                scores: [
                    { author: "作者:Sky光遇琴谱_瞳", title: "生日快乐歌", cover: "https://imgos.cn/2024/08/12/66b9870271e14.jpg", download: "https://xiaozhux.lanzoub.com/iselX27oprgh", authorLink: "https://www.bilibili.com/video/BV17b4y1v7h1/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "圣诞节",
                scores: [
                    { author: "作者:菲涅尔透镜", title: "Jingle Bells-铃儿响叮当", cover: "https://imgos.cn/2024/08/12/66b98b66b0fb1.jpg", download: "https://xiaozhux.lanzoub.com/iaIBQ27opvuf", authorLink: "https://www.bilibili.com/video/BV1Rz4y167ws/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "春节",
                scores: [
                    { author: "作者:是小社不是小杜", title: "春节序曲", cover: "https://imgos.cn/2024/08/12/66b98c9b08834.jpg", download: "https://xiaozhux.lanzoub.com/iPDfZ27oq0xi", authorLink: "https://www.bilibili.com/video/BV1xF411H7pW/?share_source=copy_web&vd_source=6fdda38be5eb9fcf9f074fd04e9bf9ae" }
                ]
            },
            {
                name: "国庆节/红歌",
                scores: [
                    { author: "作者:辉与耀", title: "义勇军进行曲", cover: "https://imgos.cn/2024/08/12/66b990d7915e8.jpg", download: "https://xiaozhux.lanzoub.com/iOksg27oqgne", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:辉与耀", title: "十送红军", cover: "https://imgos.cn/2024/08/12/66b9917a81ef6.jpg", download: "https://xiaozhux.lanzoub.com/ieqT527oqgof", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:辉与耀", title: "强军战歌", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/itqua27oqgpg", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:辉与耀", title: "没有共产党就没有新中国", cover: "https://imgos.cn/2024/08/12/66b9924ddfa50.jpg", download: "https://xiaozhux.lanzoub.com/iXl2c27oqgta", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:辉与耀", title: "红星歌", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iOvFT27oqgwd", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:辉与耀", title: "红旗飘飘", cover: "https://imgos.cn/2024/08/11/66b8a30590df3.jpg", download: "https://xiaozhux.lanzoub.com/iQ8ad27oqgxe", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                    { author: "作者:辉与耀", title: "歌唱祖国", cover: "https://imgos.cn/2024/08/12/66b9938893d33.jpg", download: "https://xiaozhux.lanzoub.com/iY8Sd27oqh1i", authorLink: "https://www.bilibili.com/video/BV1UU4y1A7zj/?spm_id_from=333.337.search-card.all.click&vd_source=b9164e170da2c7d86ebccefdfb549639" },
                ]
            },

            // 可以无限添加小类别
        ]
    },
    "gamebgm": {
        name: "其它游戏BGM",
        subcategories: [{
                name: "原神",
                scores: [
                    { author: "作者:未知", title: "主题曲", cover: "https://imgos.cn/2024/08/13/66bacb9754ab8.png", download: "https://xiaozhux.lanzoub.com/i6RZE27oqygf", authorLink: "" },
                ]
            },
            {
                name: "第五人格",
                scores: [

                ]
            }

            // 可以无限添加小类别
        ]
    }

};