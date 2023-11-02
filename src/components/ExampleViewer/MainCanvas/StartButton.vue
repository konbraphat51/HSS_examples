<template>
    <div id="StartButton">
        <button @click="toggle">{{ label }}</button>
    </div>
</template>

<script>
    export default {
        name: 'StartButton',
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        },
        methods: {
            toggle () {
                if (this.isRunning) {
                    //stop
                    
                    //stop flag
                    if (typeof(__stop) == "boolean") {
                        __stop = true
                    }
                } else {
                    //start

                    //stop flag
                    if (typeof(__stop) == "boolean") {
                        __stop = false
                    }

                    StartAsync(main)
                }
                
                //switch
                this.isRunning = !this.isRunning
            }
        },
        data() {
            return {
                isRunning: false
            }
        },
        computed: {
            label() {
                if (this.isRunning) {
                    return this.t("stop")
                } else {
                    return this.t("start")
                }
            }
        }
    }
</script>

<i18n>
{
    "en": {
        "start": "Start",
        "stop": "Stop"
    },
    "ja": {
        "start": "再生",
        "stop": "停止"
    }
}
</i18n>