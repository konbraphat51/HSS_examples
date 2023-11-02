<template>
    <button 
        id="StartButton"
        @click="toggle">
            {{ label }}
    </button>
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

                    //reset HSS condition
                    SetColor("black")
                    SetFont("10px sans-serif")

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
            },
            color() {
                if (this.isRunning) {
                    return "#ff0000"
                } else {
                    return "#00ff00"
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

<style>
    #StartButton {
        background-color: v-bind(color);
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #000000;
        width: 45%;
    }
    #StartButton:hover {
        background-color: #65ccff;
    }
</style>