<template>
    <div>
        <!-- 页面横幅 -->
        <section class="page-banner">
            <div class="container">
                <h1>{{ t("contactPage.title") }}</h1>
                <p>{{ t("contactPage.subtitle") }}</p>
            </div>
        </section>

        <!-- 联系信息和表单 -->
        <section class="section-padding">
            <div class="container">
                <div class="contact-grid">
                    <!-- 联系信息 -->
                    <div class="contact-info">
                        <h2 class="section-title">{{ t("contactPage.contactInfo.title") }}</h2>
                        
                        <div class="contact-details">
                            <div class="contact-item">
                                <div class="contact-icon-box"><i class="fas fa-map-marker-alt"></i></div>
                                <div class="contact-text">
                                    <h3>{{ t("contactPage.contactInfo.address.title") }}</h3>
                                    <p>{{ t("contactPage.contactInfo.address.content") }}</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon-box"><i class="fas fa-phone"></i></div>
                                <div class="contact-text">
                                    <h3>{{ t("contactPage.contactInfo.phone.title") }}</h3>
                                    <p>{{ t("contactPage.contactInfo.phone.content") }}</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon-box"><i class="fas fa-envelope"></i></div>
                                <div class="contact-text">
                                    <h3>{{ t("contactPage.contactInfo.email.title") }}</h3>
                                    <p>{{ t("contactPage.contactInfo.email.content") }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- 社交媒体 -->
                        <div class="social-media">
                            <h3>{{ t("contactPage.social.title") }}</h3>
                            <div class="social-icons">
                                <a href="#" class="social-icon"><i class="fab fa-weixin"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-qq"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- 联系表单 -->
                    <div class="contact-form">
                        <h2 class="section-title">{{ t("contactPage.form.title") }}</h2>
                        <form class="form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name">{{ t("contactPage.form.name") }}*</label>
                                    <input type="text" id="name" name="name" required :placeholder="t('contactPage.form.namePlaceholder')">
                                </div>

                                <div class="form-group">
                                    <label for="email">{{ t("contactPage.form.email") }}*</label>
                                    <input type="email" id="email" name="email" required :placeholder="t('contactPage.form.emailPlaceholder')">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="company">{{ t("contactPage.form.company") }}</label>
                                    <input type="text" id="company" name="company" :placeholder="t('contactPage.form.companyPlaceholder')">
                                </div>

                                <div class="form-group">
                                    <label for="phone">{{ t("contactPage.form.phone") }}</label>
                                    <input type="tel" id="phone" name="phone" :placeholder="t('contactPage.form.phonePlaceholder')">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="subject">{{ t("contactPage.form.subject") }}*</label>
                                <input type="text" id="subject" name="subject" required :placeholder="t('contactPage.form.subjectPlaceholder')">
                            </div>

                            <div class="form-group">
                                <label for="message">{{ t("contactPage.form.message") }}*</label>
                                <textarea id="message" name="message" rows="6" required :placeholder="t('contactPage.form.messagePlaceholder')"></textarea>
                            </div>

                            <button type="submit" class="btn-primary">{{ t("contactPage.form.submit") }}</button>
                        </form>
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

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

@media (max-width: 1024px) {
    .contact-grid {
        gap: 48px;
    }
}

@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
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

/* 联系信息样式 */
.contact-info {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.contact-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 30px;
}

.contact-icon-box {
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

.contact-text h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--brand-blue);
}

.contact-text p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin: 0;
}

/* 社交媒体样式 */
.social-media {
    margin-top: 40px;
}

.social-media h3 {
    font-size: 18px;
    margin-bottom: 20px;
    color: var(--brand-blue);
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icon {
    width: 45px;
    height: 45px;
    background: var(--brand-light-blue);
    color: var(--brand-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: var(--brand-blue);
    color: white;
    transform: translateY(-3px);
}

/* 联系表单样式 */
.contact-form {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: flex;
    gap: 20px;
}

@media (max-width: 768px) {
    .form-row {
        flex-direction: column;
        gap: 20px;
    }
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
}

.form-group label {
    font-size: 14px;
    font-weight: bold;
    color: #333;
}

.form-group input,
.form-group textarea {
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--brand-blue);
    box-shadow: 0 0 0 2px rgba(0, 100, 200, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.btn-primary {
    display: inline-block;
    background-color: var(--brand-blue);
    color: white;
    padding: 12px 32px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: flex-start;
}

.btn-primary:hover {
    background-color: var(--brand-blue-hover);
    transform: translateY(-2px);
}


</style>