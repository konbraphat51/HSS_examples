<template>
    <div class="ScriptViwer">
        <h3>Script:</h3>
        <pre class="script"><code class="javascript">
{{script}}
        </code></pre>
    </div>
</template>

<script>
    export default {
        name: 'ScriptViewer',
        props: {
            script: {
                type: String,
                required: true
            },
        },
        updated() {
            //highlight code
            document.querySelectorAll('code').forEach((block) => {
                hljs.highlightBlock(block)
            })
        },
    }
</script>