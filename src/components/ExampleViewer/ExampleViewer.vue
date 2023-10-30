<template>
    <div class="ExampleViewerEntity">
        <h2> {{title}} </h2>
        <MainCanvas />
        <ScriptViwer />
        <ExampleDescription />
    </div>
</template>

<script>
    export default {
        name: 'ExampleViewer',
        components: {
            "MainCanvas": Vue.defineAsyncComponent(
                () => loadModule("src/components/ExampleViewer/MainCanvas.vue", options)
            ),

            "ScriptViwer": Vue.defineAsyncComponent(
                () => loadModule("src/components/ExampleViewer/ScriptViewer.vue", options)
            ),

            "ExampleDescription": Vue.defineAsyncComponent(
                () => loadModule("src/components/ExampleViewer/ExampleDescription.vue", options)
            ),
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
        },
        data() {
            return {
                example_script: "",
            }
        },
        computed: {
            title() {
                if (this.example_descriptions[this.selected_example] != undefined) {
                    //fetched already
                    return this.example_descriptions[this.selected_example][i18n.global.locale.value]["title"]
                }else{
                    //not fetched yet
                    return ""
                }
            }
        },
        watch: {
            selected_example: function (newID, oldID) {
                //fetch selected script String
                const path = "src/Examples/" + newID + "/script.js"
                fetch(path)
                    .then(data => {
                        this.example_script = data
                    })
            }
        },
    }
</script>