// 显示子类别
function showSubcategories(category) {
    const subcategoryList = document.getElementById('subcategory-list');
    subcategoryList.innerHTML = '';

    const subcategories = data[category].subcategories;
    subcategories.forEach(subcategory => {
        const li = document.createElement('li');
        li.textContent = subcategory.name;
        li.onclick = () => showMusicList(category, subcategory.name);
        subcategoryList.appendChild(li);
    });

    document.getElementById('subcategories').classList.remove('hidden');
}

// 显示乐谱信息
function showMusicList(category, subcategoryName) {
    const musicList = document.getElementById('music-list');
    musicList.innerHTML = '';

    const subcategories = data[category].subcategories;
    const subcategory = subcategories.find(sub => sub.name === subcategoryName);
    subcategory.scores.forEach(score => {
        const div = document.createElement('div');
        div.className = 'music-item';

        const cover = document.createElement('img');
        cover.src = score.cover;
        cover.alt = score.title;

        const title = document.createElement('p');
        title.textContent = score.title;

        const author = document.createElement('a');
        author.href = score.authorLink; // 使用不同的作者链接
        author.textContent = score.author;

        const download = document.createElement('a');
        download.href = score.download;
        download.textContent = '下载乐谱';
        download.download = score.title + '.json'; // 设置文件名，确保下载而不是打开

        div.appendChild(cover);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(download);

        musicList.appendChild(div);
    });

    musicList.classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    const particles = [];
    const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', (e) => {
        const particleCount = 5; // 每次生成的粒子数量
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(e.clientX, e.clientY, colors[Math.floor(Math.random() * colors.length)]));
        }
    });

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.opacity = 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size *= 0.95;
            this.opacity -= 0.02;
        }

        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1; // 重置透明度
        }
    }

    function handleParticles() {
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].size <= 0.5 || particles[i].opacity <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }

    animate();
});

// 定义全局搜索函数
function filterMusic() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const musicList = document.getElementById('music-list');
    musicList.innerHTML = '';

    // 遍历所有类别和子类别
    for (const category in data) {
        const subcategories = data[category].subcategories;

        subcategories.forEach(subcategory => {
            const scores = subcategory.scores;

            scores.forEach(score => {
                if (score.title.toLowerCase().includes(searchQuery) ||
                    score.author.toLowerCase().includes(searchQuery)) {

                    const div = document.createElement('div');
                    div.className = 'music-item';

                    const cover = document.createElement('img');
                    cover.src = score.cover;
                    cover.alt = score.title;

                    const title = document.createElement('p');
                    title.textContent = score.title;

                    const author = document.createElement('a');
                    author.href = score.authorLink;
                    author.textContent = score.author;

                    const download = document.createElement('a');
                    download.href = score.download;
                    download.textContent = '打开乐谱';

                    div.appendChild(cover);
                    div.appendChild(title);
                    div.appendChild(author);
                    div.appendChild(download);

                    musicList.appendChild(div);
                }
            });
        });
    }

    if (searchQuery === '') {
        document.getElementById('music-list').classList.add('hidden');
    } else {
        document.getElementById('music-list').classList.remove('hidden');
    }
}