<template>
    <div ref="ScriptLoader"></div>
</template>

<script>
export default {
    name: 'ScriptLoader',
    props: {
        script: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            HSS_loaded: false
        }
    },
    methods: {
        loadScript() {
            //reload HSS / main script
            //  and run the main() function

            //reset
            this.removeFormerScript()

            //prepare main script
            let scriptLoader = this.$refs["ScriptLoader"]
            let scriptUsing = this.script_edited
            let main_script = document.createElement("script")
            main_script.innerHTML = scriptUsing

            //load HSS
            if (!this.HSS_loaded) {
                let loader_script = document.createElement("script")
                loader_script.setAttribute("src", "HotSoupScript/Private/ModulesLoader.js")
                this.$refs["ScriptLoader"].appendChild(loader_script)

                this.HSS_loaded = true

                //load main script after HSS loaded
                loader_script.onload = () => {
                    scriptLoader.appendChild(main_script)
                }
            } else {
                //HSS already loaded
                //-> load main script immediately
                scriptLoader.appendChild(main_script)
            }
        },
        removeFormerScript() {
            //remove the former script
            //  and the former script's functions

            //stop main function
            if (typeof (__stop) == "boolean") {
                __stop = true
            }

            //remove all HTML elements by the former script
            if (typeof (EraceAllHTML) == "function") {
                EraceAllHTML()
            }

            //remove script elements
            this.$refs["ScriptLoader"].innerHTML = ""
        }
    },
    computed: {
        script_edited() {
            let output = this.script

            //define stop flag
            output = "var __stop = false\n" + output

            let returner = "if (__stop) { return }\n"

            //set return under all await() functions
            let lines = output.split(/\r\n|\r|\n/)
            let cnt = 0

            while (cnt < lines.length) {
                if (lines[cnt].match("Sleep")) {
                    //await() function
                    //set return under the await() function
                    lines.splice(cnt + 1, 0, returner)
                    cnt += 2
                } else {
                    //not await() function
                    cnt += 1
                }
            }
            output = lines.join("\n")

            return output
        }
    },
    watch: {
        script: function (newVal, oldVal) {
            this.loadScript()
        }
    },
    mounted() {
        this.loadScript()
    },
}
</script>