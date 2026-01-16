<template>
    <div>
        <footer id="contact">
            <div class="max-w-[1280px] mx-auto px-6">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a href="#" class="footer-logo">ChemLink 衢州化联</a>
                        <p style="padding-right:20px; font-size:14px; line-height:1.8;">
                            我们期待与您携手，共同探索碳中和技术与绿色材料的未来可能性。无论是技术咨询、产品合作还是定制开发，铂昕锐团队都将为您提供专业、高效的响应与服务。
                        </p>
                    </div>

                    <div class="footer-col footer-links">
                        <h4>快速导航</h4>
                        <ul>
                            <li><router-link to="/">首页</router-link></li>
                            <li><router-link to="/aboutUs">关于我们</router-link></li>
                            <li><router-link to="/products">产品中心</router-link></li>
                            <li><router-link to="/news">新闻动态</router-link></li>
                        </ul>
                    </div>

                    <div class="footer-col footer-links">
                        <h4>关注我们</h4>
                        <ul>
                            <li><i class="iconfont icon-weixin"></i> 铂昕锐BXR</li>
                            <li><i class="iconfont icon-QQ"></i> 铂昕锐碳中和材料</li>
                            <li><i class="iconfont icon-douyin"></i> 铂昕锐官方抖音</li>
                        </ul>
                    </div>

                    <div class="footer-col contact-list">
                        <h4>联系方式</h4>
                        <ul>
                            <li><i class="iconfont icon-weizhi"></i>浙江省衢州市柯城区凯旋北路3号</li>
                            <li><i class="iconfont icon-youxiang"></i> contact@chemlink-qz.com</li>
                            <li><i class="iconfont icon-f-phone-dianhua"></i> +86 570 1234 567</li>
                            <li><i class="iconfont icon-chuanzhen"></i> +86 570 1234 568</li>
                        </ul>
                    </div>
                </div>

                <div class="copyright">
                    <p>© 2025 衢州化联科技有限公司 (ChemLink) | 版权所有</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
footer {
    background-color: #f5f9ff;
    color: #475569;

    /* ✅ 缩小上下内边距 */
    padding: 40px 0 18px;

    border-top: 1px solid #e2e8f0;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;

    /* ✅ 缩小列间距和整体底部间距 */
    gap: 24px;
    margin-bottom: 28px;
}

/* 标题颜色变深 */
.footer-col h4 {
    color: #1e293b;
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: bold;
}

/* Logo颜色变品牌蓝 */
.footer-logo {
    color: var(--brand-blue);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    display: block;
}

.contact-list li {
    display: flex;
    align-items: flex-start;
    /* 让两列从顶部对齐 */
    gap: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 1.6;
    /* 控制文字高度，保证稳定 */
}

/* 图标列：固定宽度 + 不收缩 */
.contact-list i {
    width: 18px;
    min-width: 18px;
    flex: 0 0 18px;
    text-align: center;

    color: var(--brand-blue);

    /* 关键：去掉手动偏移 */
    margin-top: 0;

    /* 图标本身也给个 line-height */
    line-height: 1.6;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a:hover {
    color: var(--brand-blue);
}

.copyright {
    border-top: 1px solid #e2e8f0;
    padding-top: 14px;
    text-align: center;
    font-size: 12px;
    color: #94a3b8;
}
</style>