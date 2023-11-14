<template>
    <div class="ExampleViewerEntity">
        <h2 v-if="selected_example in example_descriptions">
            {{ example_descriptions[selected_example]["title"] }}
        </h2>
        <ScriptViwer :script="example_script" />
        <MainCanvas :script="example_script" />
    </div>
</template>

<script>
export default {
    name: 'ExampleViewer',
    components: {
        "MainCanvas": Vue.defineAsyncComponent(
            () => loadModule("src/components/ExampleViewer/MainCanvas/MainCanvas.vue", options)
        ),

        "ScriptViwer": Vue.defineAsyncComponent(
            () => loadModule("src/components/ExampleViewer/ScriptViewer.vue", options)
        )
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
    watch: {
        selected_example: function (newVal, oldVal) {
            this.loadScript()
        }
    },
    methods: {
        loadScript() {
            //fetch selected script String
            const path = "src/Examples/" + this.selected_example + "/script.js"
            fetch(path)
                .then(response => {
                    return response.text()
                })
                .then(data => {
                    //to string
                    this.example_script = data
                })
        }
    },
    mounted() {
        this.loadScript()
    },
}
</script>