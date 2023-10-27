<template>
    <div class="ExampleViewerEntity">
        <MainCanvas />
        <ScriptViwer />
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
        }
    }
</script>