<template>
    <div>
        <main id="products-page" class="bg-slate-50 min-h-[calc(100vh-72px)]">
            <section class="py-10">
                <div class="max-w-[1280px] mx-auto px-6">
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <div class="text-[#0060b0] font-bold text-xs tracking-widest uppercase mb-2">
                                {{ t("productList.topLabel") }}
                            </div>
                            <h1 class="text-3xl font-black text-slate-900">
                                {{ t("productList.title") }}
                            </h1>
                            <p class="text-slate-500 text-sm mt-2">
                                {{ t("productList.subtitle") }}
                            </p>
                        </div>

                        <div class="w-full md:w-auto">
                            <div class="relative group">
                                <input v-model="searchQuery" type="text"
                                    :placeholder="t('productList.searchPlaceholder')"
                                    class="w-full md:w-[380px] bg-white border border-slate-200 rounded-[4px] px-4 py-2.5 text-sm transition-all shadow-sm focus:border-[#0060b0] focus:ring-2 focus:ring-[#0060b0]/10 outline-none" />
                                <span
                                    class="absolute right-3 top-2.5 text-slate-400 group-hover:text-[#0060b0] transition-colors">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <aside class="lg:col-span-3">
                            <div
                                class="bg-white lg:rounded-[4px] border-b lg:border border-slate-200 shadow-sm top-[72px] z-30">
                                <div class="hidden lg:block px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                    <div class="text-sm font-bold text-slate-800">
                                        {{ t("productList.bigCatTitle") }}
                                    </div>
                                </div>

                                <ul
                                    class="flex lg:flex-col overflow-x-auto lg:overflow-x-visible p-2 gap-1 no-scrollbar scroll-smooth">
                                    <li v-for="(cat, index) in productData" :key="index" class="shrink-0 lg:w-full">
                                        <button @click="activeCategoryIndex = index" :class="[
                                            'w-full text-left px-4 py-2 text-sm rounded transition-all whitespace-nowrap lg:whitespace-normal',
                                            activeCategoryIndex === index
                                                ? 'bg-[#0060b0] text-white lg:bg-[#0060b0]/5 lg:text-[#0060b0] font-bold'
                                                : 'text-slate-600 hover:bg-slate-50'
                                        ]">
                                            {{ isEn ? (cat.category_en || cat.category) : (cat.category ||
                                                cat.category_en) }}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        <section class="lg:col-span-9">
                            <div class="bg-white rounded-[4px] border border-slate-200 shadow-sm min-h-[500px]">
                                <div
                                    class="product-header px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white z-20 rounded-t-[4px]">
                                    <div>
                                        <h2 class="text-lg font-bold text-slate-900">
                                            {{ isSearching ? t('productList.searchResult') : (isEn ?
                                                (productData[activeCategoryIndex]?.category_en ||
                                                    productData[activeCategoryIndex]?.category) :
                                                (productData[activeCategoryIndex]?.category ||
                                                    productData[activeCategoryIndex]?.category_en)) }}
                                        </h2>
                                    </div>

                                    <div class="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                        {{ t("productList.count", { n: displayProducts.length }) }}
                                    </div>
                                </div>

                                <div class="p-6 space-y-6">
                                    <div v-if="loading" class="text-center py-20 text-slate-400">
                                        {{ t('productsPage.loading') }}
                                    </div>

                                    <div v-else-if="displayProducts.length === 0"
                                        class="text-center py-20 text-slate-400">
                                        {{ t("productList.empty") }}
                                    </div>

                                    <!-- 产品页 -->
                                    <div v-for="(prod, pIdx) in displayProducts" :key="prod.id || pIdx"
                                        class="group p-6 rounded-lg border border-slate-100 hover:border-[#0060b0]/30 hover:shadow-md transition-all bg-white relative min-h-[110px] flex flex-col justify-center">
                                        <div class="pr-28">
                                            <h3
                                                class="text-lg font-bold text-[#0060b0] group-hover:translate-x-1 transition-transform mb-2">
                                                {{ isEn ? (prod.name_en || prod.name) : (prod.name || prod.name_en) }}
                                            </h3>
                                            <div class="flex flex-wrap gap-x-6 gap-y-1">
                                                <div v-if="prod?.cas" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.cas") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.cas
                                                        }}</span>
                                                </div>

                                                <div v-if="prod?.item" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.item") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.item
                                                        }}</span>
                                                </div>

                                                <div v-if="prod?.ec" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.ec") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.ec
                                                        }}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="absolute right-5 bottom-5">
                                            <router-link :to="`/products/${prod.id}`"
                                                class="flex items-center gap-1 text-[13px] font-bold text-[#0060b0] hover:text-[#004a99] transition-all group/btn">
                                                <span>{{ t("productList.detail") }}</span>
                                                <i
                                                    class="fas fa-arrow-right text-[10px] transform group-hover/btn:translate-x-1 transition-transform"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    </div>

</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { apiGetCatalog } from '../api/getProducts.js'

const { t, locale } = useI18n()

// 分组后的数据：[{ category, category_en, products: [...] }]
const productData = ref([])
const loading = ref(false)

// 当前选中的分类下标
const activeCategoryIndex = ref(0)

// 搜索关键词（带防抖）
const searchQuery = ref('')
const debouncedQuery = ref('')
let _debounceTimer = null

// 简单防抖：停止输入 300ms 后才更新 debouncedQuery
watch(searchQuery, (val) => {
    if (_debounceTimer) clearTimeout(_debounceTimer)
    _debounceTimer = setTimeout(() => {
        debouncedQuery.value = (val || '').toString().trim()
    }, 300)
}, { immediate: true })

// 当前语言：你们规定为 zh-CN / en-US
const isEn = computed(() => locale.value === 'en-US')

// 拉取 catalog 数据：拍平 acf，并按 category 分组
async function loadCatalog() {
    loading.value = true

    const raw = await apiGetCatalog()

    // 1) 拍平：id 与 acf 同级
    const flatList = (Array.isArray(raw) ? raw : []).map(p => ({
        id: p?.id,
        ...(p?.acf || {})
    }))

    // 2) 按 category 分组（默认归入“其他”）
    const map = new Map()

    flatList.forEach(p => {
        const cat = (p?.category || '').toString().trim() || '其他'
        const catEn = (p?.category_en || '').toString().trim() || 'Others'

        if (!map.has(cat)) {
            map.set(cat, { category: cat, category_en: catEn, products: [] })
        }
        map.get(cat).products.push(p)
    })

    productData.value = Array.from(map.values())

    if (activeCategoryIndex.value >= productData.value.length) {
        activeCategoryIndex.value = 0
    }

    loading.value = false
}

onMounted(loadCatalog)

// 是否正在搜索（有内容才算搜索）
const isSearching = computed(() => debouncedQuery.value.trim().length > 0)

// 搜索匹配规则：必须“完全匹配” CAS 或中/英文名（忽略大小写与首尾空格）
function productMatches(prod, qRaw) {
    const q = (qRaw || '').toString().trim()
    if (!q) return false

    const qLower = q.toLowerCase()

    const cas = (prod?.cas || '').toString().trim().toLowerCase()
    const nameZh = (prod?.name || '').toString().trim().toLowerCase()
    const nameEn = (prod?.name_en || '').toString().trim().toLowerCase()

    return (cas && cas === qLower) || (nameZh && nameZh === qLower) || (nameEn && nameEn === qLower)
}

// 最终展示的产品列表：搜索时跨分类；不搜索时显示当前分类
const displayProducts = computed(() => {
    const q = debouncedQuery.value.trim()
    if (!q) return productData.value[activeCategoryIndex.value]?.products || []

    // 跨所有分类查找
    const all = productData.value.flatMap(c => Array.isArray(c?.products) ? c.products : [])
    return all.filter(p => productMatches(p, q))
})
</script>


<style scoped>
.product-header {
    top: 72px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

@media (max-width: 1024px) {
    aside {
        position: sticky;
        top: 72px;
        z-index: 30;
    }

    .product-header {
        top: 128px;
        z-index: 20;
    }
}

input:focus {
    border-color: #0060b0 !important;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 96, 176, 0.1);
}
</style>
