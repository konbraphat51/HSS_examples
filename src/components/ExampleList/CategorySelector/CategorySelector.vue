<template>
    <div id="CategorySelector">
        <ul>
            <CategoryOption v-for="category in categoryNames" v-bind:title="category"/>
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
        },
        computed: {
            categoryNames() {
                //respond by language
                return [
                    this.t("all"),
                    this.t("programming_tutorial"),
                    this.t("HSS_tutorial"),
                    this.t("SampleProducts")
                ];
            }
        }
    })
</script>

<i18n>
    {
        "en": {
            "all": "All",
            "programming_tutorial": "Programming Tutorials",
            "HSS_tutorial": "HotSoupScript Tutorials",
            "SampleProducts": "Sample Products"
        },
        "ja": {
            "all": "全て",
            "programming_tutorial": "プログラミング初心者向け",
            "HSS_tutorial": "HotSoupScriptチュートリアル",
            "SampleProducts": "サンプル作品"
        }
    }
</i18n>