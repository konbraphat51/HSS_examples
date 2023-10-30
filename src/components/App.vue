<template>
    <TopBar />
    <Description />
    <ExampleList :selected_example="selected_example" :example_descriptions="example_descriptions"/>
    <ExampleViewer :selected_example="selected_example" :example_descriptions="example_descriptions"/>
</template>

<script>
    export default Vue.defineComponent({
        name: 'App',
        components: {
            "TopBar": Vue.defineAsyncComponent(() => loadModule("src/components/TopBar/TopBar.vue", options)),
            "Description": Vue.defineAsyncComponent(() => loadModule("src/components/Description/Description.vue", options)),
            "ExampleList": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/ExampleList.vue", options)),
            "ExampleViewer": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleViewer/ExampleViewer.vue", options)),
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        },
        mounted() {
            this.getExampleData()
        },
        data() {
            return {
                examples: [
                    "Movement",
                    "MoveByKey",
                ],
                selected_example: "Movement",
                example_descriptions: {}
            }
        },
        methods: {
            getExampleData() {
                //read description files
                for (let example of this.examples) {
                    const path = "src/Examples/" + example + "/description.json"
                    fetch(path)
                        .then(response => response.json())
                        .then(data => {
                            this.example_descriptions[example] = data
                        })
                }
            }
        }
    })
</script>