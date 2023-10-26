<template>
    <div id="CategorySelector">
        <ul>
            <li class="CategoryOption">

            </li>
        </ul>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'ExampleList',
        components:{
            "CategoryOption": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/CategorySelector/CategoryCard.vue", options)),
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        }
    })
</script>

<i18n>
    {
        "en": {
            "category_title": "Category"
        },
        "ja": {
            "category_title": "カテゴリ"
        }
    }
</i18n>