<template>
    <StartButton />
    <canvas ref="canvas" id="canvas" width="800" height="600"></canvas>
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
        mounted() {
            //prevent moving page by key
            window.addEventListener("keydown", function (e) {
                // space and arrow keys
                if (["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"].indexOf(e.key) > -1) {
                    e.preventDefault();
                }
            }, false);
        },
    }
</script>

<style>
    #canvas {
        border: 1px solid black;
        width: 100%;
        height: auto;
    }
</style>