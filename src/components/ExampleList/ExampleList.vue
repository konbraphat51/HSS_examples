<template>
    <div id="ExampleList">
        <h2> {{ $t("ExampleList.title") }} </h2>
        <!-- UnderConstruction -->
        <!-- <CategorySelector /> -->
        <ol class="options">
            <!-- <ExampleOption v-for="(description, id) in descriptions" v-bind:title="description.title" v-bind:description="description.option_description" :option-id="id" @onClick="select"/> -->
            <ExampleOption 
                v-for="example in examples_loaded"  
                :title="example_descriptions[example]['title']" 
                :description="example_descriptions[example]['option_description']"
                :option-id="example"
                @onClick="select"
            />
        </ol>
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
        mounted() {
            this.update_examples_loaded()
        },
        data() {
            return {
                examples_loaded: []
            }
        },
        props: {
            selected_example: {
                type: String,
                required: true
            },
            example_descriptions: {
                type: Object,
                required: true
            },
            example_list: {
                type: Array,
                required: true
            }
        },
        methods: {
            select (example) {
                this.$emit("onSelected", example)
            },
            update_examples_loaded(){
                //reset
                this.examples_loaded.splice(0, this.examples_loaded.length)
                
                //add by order
                for (let cnt = 0; cnt < this.example_list.length; cnt++) {
                    let example = this.example_list[cnt]
                    if (!!this.example_descriptions[example]) {
                        this.examples_loaded.push(example)
                    }
                }
            }
        },
        watch: {
            example_descriptions: {
                handler: function (newVal, oldVal) {
                    this.update_examples_loaded()
                },
                deep: true
            }
        }
    })
</script>

<i18n>
    {
        "en": {
            "ExampleList": {
                "title": "Examples List"
            }
        },
        "ja": {
            "ExampleList": {
                "title": "サンプル一覧"
            }
        }
    }
</i18n>