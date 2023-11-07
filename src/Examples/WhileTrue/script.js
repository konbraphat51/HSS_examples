async function main() {
    //en: while "for" was a loop that repeats for a CERTAIN number,
    //en:   "while(true)" is a loop that repeats forever.
    //ja: "for"は決まった回数だけ繰り返すループであった一方、
    //ja:   "while"は永遠に繰り返すループです。

    var x = 0

    while (true) {
        DrawText("a", x, 100)

        //en: This makes you recognize as this "moving"
        //en:   Try think why? The key to understand this is 
        //en:   to simulate the loop and the varable "x" by yourself 
        //ja: これにより、"移動している"と認識させられます
        //ja:   なぜそうなるか考えてみてください。理解する鍵は、
        //ja:   ループ動作と変数"x"を自分でシミュレーションすることです
        x += 1

        //en: Cool time. This MUST be written in infinite loop,
        //en:   unless you want your program to crash.
        //en:   If you dare, try delete this.
        //ja: 冷却時間。これは無限ループの中に必ず書かないまずいです。
        //ja:  そうしないと、プログラムがクラッシュします。
        //ja:   もしやってみたい人は、これを消してみてください。
        await Sleep(1)
    }
}