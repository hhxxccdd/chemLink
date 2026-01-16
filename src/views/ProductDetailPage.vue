<template>
    <div class="bg-[#F9FAFB] text-slate-900 flex flex-col min-h-screen">
        <!-- Banner（跟 detail.html 一样的渐变背景） -->
        <section class="banner-bg py-16 text-center border-b border-slate-100">
            <h1 class="text-3xl font-black text-[#002B4D] mb-3">产品中心</h1>
            <p class="text-slate-400 text-xs tracking-wider uppercase">
                挑战自我，以全新的原创思维引领创新
            </p>
        </section>

        <main class="flex-grow py-10 px-6">
            <div class="max-w-[1280px] mx-auto">
                <!-- 加载态 -->
                <div v-if="loading" class="text-center py-20 text-slate-400">
                    正在加载数据...
                </div>

                <!-- 未找到 -->
                <div v-else-if="!product"
                    class="text-center py-20 bg-white rounded-[4px] shadow-sm border border-slate-100">
                    <div class="text-slate-300 mb-4 text-5xl">🧪</div>
                    <h2 class="text-xl font-bold text-slate-700">未找到相关产品</h2>
                    <p class="text-slate-500 mt-2 mb-6 text-sm">可能是ID错误或产品已下架</p>

                    <button class="btn-primary px-6 py-2 rounded text-sm font-bold" @click="goBackToList">
                        返回产品中心
                    </button>
                </div>

                <!-- 正常详情（跟 detail.html 一样的三列 Grid） -->
                <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <!-- 左侧：编号信息 + 返回 -->
                    <div class="lg:col-span-3 order-2 lg:order-1">
                        <div class="bg-white rounded-[4px] shadow-sm border border-slate-100 overflow-hidden">
                            <div class="flex justify-between items-center px-5 py-4 border-b border-slate-50">
                                <span class="text-sm text-slate-400">产品编号</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ product.item || "-" }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center px-5 py-4 border-b border-slate-50">
                                <span class="text-sm text-slate-400">CAS号</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ product.cas || "-" }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center px-5 py-4">
                                <span class="text-sm text-slate-400">EC号</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ product.ec || "-" }}
                                </span>
                            </div>
                        </div>

                        <button
                            class="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-[#0060b0] mt-6 transition-colors"
                            @click="goBack">
                            <span class="text-base leading-none">←</span>
                            返回列表
                        </button>
                    </div>

                    <!-- 中间：正文 -->
                    <div
                        class="lg:col-span-6 order-1 lg:order-2 bg-white rounded-[4px] shadow-sm border border-slate-100 p-8 min-h-[500px]">
                        <h1 class="text-2xl font-bold text-[#002B4D] mb-8 leading-tight">
                            {{ product.title }}
                        </h1>

                        <div class="mb-8">
                            <h3 class="section-badge">产品描述</h3>
                            <p class="text-slate-600 text-sm leading-relaxed text-justify">
                                {{ product.desc || "暂无详细描述" }}
                            </p>
                        </div>

                        <div class="mb-8">
                            <h3 class="section-badge">产品分组</h3>
                            <p class="text-slate-600 text-sm">{{ categoryName || "-" }}</p>
                        </div>

                        <div v-if="product.synonyms" class="mb-8">
                            <h3 class="section-badge">同义词</h3>
                            <p class="text-slate-600 text-sm">{{ product.synonyms }}</p>
                        </div>

                        <div class="mb-2">
                            <h3 class="section-badge">主要应用</h3>
                            <p class="text-slate-600 text-sm leading-relaxed text-justify">
                                {{ product.uses || "暂无应用说明" }}
                            </p>
                        </div>
                    </div>

                    <!-- 右侧：操作卡片 -->
                    <div class="lg:col-span-3 order-3 lg:order-3">
                        <div class="bg-white rounded-[4px] shadow-sm border border-slate-100 p-6 sticky top-24">
                            <div class="text-sm font-bold text-slate-800 mb-4 text-center">相关操作</div>

                            <div class="space-y-3">
                                <button
                                    class="w-full btn-primary py-2.5 rounded-[2px] text-sm font-bold transition shadow-sm"
                                    @click="onRequestSample">
                                    申请样品
                                </button>

                                <button class="w-full btn-outline py-2.5 rounded-[2px] text-sm font-bold transition"
                                    @click="onRequestDocs">
                                    获取 MSDS/TDS
                                </button>
                            </div>

                            <div class="mt-4 text-xs text-slate-400 leading-6">
                                提示：这里先做UI展示，后续你可以把按钮接到表单/邮件/CRM。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { productCatalog } from "@/utils/data.js"

const route = useRoute()
const router = useRouter()

const loading = ref(true)
const product = ref(null)
const categoryName = ref("")

const findProductByNumericId = (idNum) => {
    for (const cat of productCatalog) {
        const match = (cat.products || []).find((p) => Number(p.id) === idNum)
        if (match) return { product: match, categoryName: cat.name }
    }
    return { product: null, categoryName: "" }
}

const goBack = () => {
    router.push("/products")
}

const goBackToList = () => router.push("/products")

const onRequestSample = () => {
    // 先留空：你后续可接“申请样品”表单
    alert("已点击：申请样品（后续可接表单/接口）")
}

const onRequestDocs = () => {
    // 先留空：你后续可接“MSDS/TDS 下载/申请”
    alert("已点击：获取 MSDS/TDS（后续可接下载/接口）")
}

onMounted(() => {
    const idNum = Number(route.params.id)
    const result = findProductByNumericId(idNum)
    product.value = result.product
    categoryName.value = result.categoryName
    loading.value = false
})
</script>

<style scoped>
/* 来自 detail.html 的风格：banner-bg / btn-primary / btn-outline */
.banner-bg {
    background: linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%);
}

.btn-primary {
    background-color: #0060b0;
    color: white;
}

.btn-primary:hover {
    background-color: #004e90;
}

.btn-outline {
    background-color: white;
    border: 1px solid #0060b0;
    color: #0060b0;
}

.btn-outline:hover {
    background-color: #f0f7ff;
}

.section-badge {
    font-size: 12px;
    font-weight: 700;
    color: #0060b0;
    background: rgba(239, 246, 255, 0.6);
    display: inline-block;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.75rem;
}
</style>
