<template>
    <StartButton />
    <canvas id="canvas" width="800" height="600"></canvas>
    <ScriptLoader :script="script" />
</template>

<script>
    export default {
        name: 'MainCanvas',    
        components: {
            "ScriptLoader": Vue.defineAsyncComponent(
                () => loadModule("src/components/ExampleViewer/MainCanvas/ScriptLoader.vue", options)
            ),
            "StartButton": Vue.defineAsyncComponent(
                () => loadModule("src/components/ExampleViewer/MainCanvas/StartButton.vue", options)
            )
        },
        props: {
            script: {
                type: String,
                required: true
            }
        },
    }
</script>

<style>
    #canvas {
        border: 1px solid black;
    }
</style>