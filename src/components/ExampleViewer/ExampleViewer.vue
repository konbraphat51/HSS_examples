<template>
    <div class="ExampleViewerEntity">
        <MainCanvas />
    </div>
</template>

<script>
    export default {
        name: 'ExampleViewer',
        components: {
            "MainCanvas": Vue.defineAsyncComponent(
                () => loadModule("src/components/ExampleViewer/MainCanvas.vue", options)
            ),
        }
    }
</script>