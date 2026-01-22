<template>
    <div>
        <!-- 页面横幅 -->
        <section class="page-banner">
            <div class="container">
                <h1>{{ t("aboutPage.title") }}</h1>
                <p>{{ t("aboutPage.subtitle") }}</p>
            </div>
        </section>

        <!-- 公司简介 -->
        <section class="section-padding">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h4 style="color:var(--brand-blue); font-weight:bold; margin-bottom:10px;">
                            {{ t("aboutPage.company.label") }} / {{ t("aboutPage.company.labelEn") }}
                        </h4>

                        <h2 class="section-title">
                            {{ t("aboutPage.company.title") }}
                        </h2>

                        <p class="text-desc">
                            {{ t("aboutPage.company.p1") }}
                        </p>

                        <p class="text-desc">
                            {{ t("aboutPage.company.p2") }}
                        </p>

                        <p class="text-desc">
                            {{ t("aboutPage.company.p3") }}
                        </p>
                    </div>

                    <div class="about-img">
                        <img src="../images/企业图.png" alt="Company Building" />
                    </div>
                </div>
            </div>
        </section>

        <!-- 核心优势 -->
        <section class="section-padding bg-gray">
            <div class="container">
                <div class="section-header">
                    <h4 style="color:var(--brand-blue); font-weight:bold; margin-bottom:10px;">
                        {{ t("aboutPage.advantages.label") }} / {{ t("aboutPage.advantages.labelEn") }}
                    </h4>
                    <h2 class="section-title">{{ t("aboutPage.advantages.title") }}</h2>
                </div>

                <div class="advantages-grid">
                    <div class="advantage-item">
                        <div class="advantage-icon-box"><i class="fas fa-flask"></i></div>
                        <div class="advantage-text">
                            <h3>{{ t("aboutPage.advantages.t1") }}</h3>
                            <p>{{ t("aboutPage.advantages.d1") }}</p>
                        </div>
                    </div>

                    <div class="advantage-item">
                        <div class="advantage-icon-box"><i class="fas fa-users-cog"></i></div>
                        <div class="advantage-text">
                            <h3>{{ t("aboutPage.advantages.t2") }}</h3>
                            <p>{{ t("aboutPage.advantages.d2") }}</p>
                        </div>
                    </div>

                    <div class="advantage-item">
                        <div class="advantage-icon-box"><i class="fas fa-file-contract"></i></div>
                        <div class="advantage-text">
                            <h3>{{ t("aboutPage.advantages.t3") }}</h3>
                            <p>{{ t("aboutPage.advantages.d3") }}</p>
                        </div>
                    </div>

                    <div class="advantage-item">
                        <div class="advantage-icon-box"><i class="fas fa-leaf"></i></div>
                        <div class="advantage-text">
                            <h3>{{ t("aboutPage.advantages.t4") }}</h3>
                            <p>{{ t("aboutPage.advantages.d4") }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 愿景使命 -->
        <section class="section-padding">
            <div class="container">
                <div class="vision-mission-grid">
                    <div class="vision-item">
                        <h3>{{ t("aboutPage.vision.title") }}</h3>
                        <p class="text-desc">{{ t("aboutPage.vision.content") }}</p>
                    </div>

                    <div class="mission-item">
                        <h3>{{ t("aboutPage.mission.title") }}</h3>
                        <p class="text-desc">{{ t("aboutPage.mission.content") }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.page-banner {
    background: linear-gradient(to right, rgba(0, 50, 120, .7), rgba(0, 100, 200, .3)),
        url('https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 120px 0 80px;
    text-align: center;
}

.page-banner h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: bold;
}

.page-banner p {
    font-size: 18px;
    opacity: 0.9;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

@media (max-width: 1024px) {
    .about-grid {
        gap: 48px;
    }
}

@media (max-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }
}

.text-desc {
    color: #555;
    margin-bottom: 20px;
    text-align: justify;
    text-indent: 2em;
}

.section-title {
    font-size: 32px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #111;
}

.section-padding {
    padding: 100px 0;
}

@media (max-width: 1024px) {
    .section-padding {
        padding: 80px 0;
    }
}

@media (max-width: 768px) {
    .section-padding {
        padding: 64px 0;
    }
}

.bg-gray {
    background-color: #f1f5f9;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}

@media (max-width: 768px) {
    .advantages-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}

.advantage-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.advantage-icon-box {
    width: 60px;
    height: 60px;
    background: var(--brand-light-blue);
    color: var(--brand-blue);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
}

.advantage-text h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--brand-blue);
}

.advantage-text p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
}

.vision-mission-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

@media (max-width: 768px) {
    .vision-mission-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}

.vision-item,
.mission-item {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.vision-item h3,
.mission-item h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--brand-blue);
}

.about-img img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .1);
}
</style>