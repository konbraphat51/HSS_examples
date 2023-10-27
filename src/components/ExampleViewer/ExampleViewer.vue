<template>
    <div class="ExampleViewerEntity">
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
        }
    }
</script>