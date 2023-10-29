<template>
    <div id="ExampleList">
        <CategorySelector />
        <ul class="options">
            <ExampleOption v-for="description in descriptions" v-bind:title="description.title" v-bind:description="description.option_description"/>
        </ul>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'ExampleList',
        components:{
            "CategorySelector": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/CategorySelector/CategorySelector.vue", options)),
            "ExampleOption": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/ExampleOption.vue", options)),
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        },
        props: {
            selected_example: {
                type: String,
                required: true
            },
            example_descriptions: {
                type: Object,
                required: true
            }
        },
        computed: {
            descriptions() {
                let output = {}
                for (let example in this.example_descriptions) {
                    output[example] = this.example_descriptions[example][i18n.global.locale.value]
                }
                return output
            }
        },
    })
</script>
