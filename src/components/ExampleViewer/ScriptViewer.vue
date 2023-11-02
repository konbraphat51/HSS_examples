<template>
    <div class="ScriptViwer">
        <h3> {{t("ScriptViwer.title")}} </h3>
        <pre class="script"><code ref="codeblock" class="javascript">
{{script_edited}}
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
        computed:{
            script_edited(){
                //symbol -> i18n locale
                const language_symbols_dictio = {
                    "en:": "en",
                    "ja:": "ja"
                }

                const language_symbols = Object.keys(language_symbols_dictio)
        
                let output = ""

                let lines = this.script.split("\n")
                lines.forEach(line => {
                    //process translation commentation
                    if (line.match("//")) {
                        //commentation included in the line

                        let another_language = false
                        let line_splited = line.split("//")
                        let line_edited = line_splited[0]
                        for (let cnt = 1; cnt < line_splited.length; cnt++) {
                            language_symbols.forEach(symbol=>{
                                if (line_splited[cnt].match(symbol)) {
                                    if (i18n.global.locale.value == language_symbols_dictio[symbol]) {
                                        //same language
                                        line_splited[cnt] = line_splited[cnt].replace(symbol, "")
                                    } else {
                                        //another language
                                        another_language = true
                                    }
                                }
                            })

                            line_edited += "//" + line_splited[cnt]
                        }

                        if (!another_language) {
                            //the same language
                            output += line_edited + "\n"
                        } 
                        // else {
                        //     //another language
                        //     continue
                        // }
                    } else {
                        //no commentation included in the line
                        output += line + "\n"
                    }
                });

                return output
            }
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        },
        updated() {
            //highlight code
            hljs.highlightBlock(this.$refs["codeblock"])
        },
    }
</script>

<i18n>
    {
        "en":{
            "ScriptViwer":{
                "title": "Script:"
            }
            
        },

        "ja":{
            "ScriptViwer": {
                "title": "コード:"
            }
        }
    }
</i18n>