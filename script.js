// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// 移动端菜单按钮
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 添加iframe错误处理
document.querySelector('.news-iframe').onerror = function() {
    this.style.display = 'none';
    this.parentElement.innerHTML = `
        <div class="news-error">
            <p>新闻加载失败，请直接访问 
                <a href="http://www.xinhuanet.com" target="_blank">新华网</a>
            </p>
        </div>
    `;
};

// 修改背景轮播效果
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        // 移除之前的prev类
        slides.forEach(slide => slide.classList.remove('prev'));
        
        // 当前slide变为prev
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        
        // 更新当前slide索引
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 激活新的slide
        slides[currentSlide].classList.add('active');
    }
    
    // 每4秒切换一次图片
    setInterval(nextSlide, 4000);
}

// 页面加载完成后初始化轮播
document.addEventListener('DOMContentLoaded', initSlideshow); 