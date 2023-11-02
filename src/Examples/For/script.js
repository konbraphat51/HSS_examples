async function main() {
    SetFont("30px Arial")

    //en: Let's draw 1 - 10
    //ja: 1から10を描画してみましょう

    //en: This is what we never want to do
    //ja: これは絶対にやりたくないことです
    DrawText("1", 100, 100)
    DrawText("2", 100, 130)
    DrawText("3", 100, 160)
    DrawText("4", 100, 190)
    DrawText("5", 100, 220)
    DrawText("6", 100, 250)
    DrawText("7", 100, 280)
    DrawText("8", 100, 310)
    DrawText("9", 100, 340)
    DrawText("10", 100, 370)

    //en: Let's use "for"
    //en: "for" is used for "loop"
    //ja: "for"を使ってみましょう
    //ja: "for"は"繰り返し"に使います
    
    //en: Sorry, but remember this for now
    //ja: 残念ですが、とりあえずこの構文は丸暗記してください
    for (let cnt = 0; cnt < 10; cnt++) {
        //en: "cnt" is a variable that memorizes the number of loops
        //en:   It starts from 0, and increases by 1 every time it loops
        //en:   In fast words, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        //ja: "cnt"はループの回数を記録する変数です
        //ja:   0から始まり、ループする度に1ずつ増えます
        //ja:   要するに、0, 1, 2, 3, 4, 5, 6, 7, 8, 9となります     
        
        //en: y position.
        //en:   This is how to use "cnt" efficiently
        //en:   This makes "y" shift by 30 per loop
        //ja: y座標
        //ja:   "cnt"はこうやって効果的に使うことができます
        //ja:   この式により、y座標がループする度に30ずつ変わります
        var y = 100 + cnt * 30

        //en: Draw the number
        //en:   Becareful that cnt starts from 0
        //ja: 数字を描画
        //ja:   cntは0から始まることに注意
        DrawText(cnt + 1, 200, y)
    }

    //en: For who wants to know more:
    //en:   "let cnt = 0;" is simply making a variable
    //en:   "cnt < 10;" is the condition to loop. This will loop until this condition is broken
    //en:   "cnt++" means "add cnt by 1"
    //ja: もっと知りたい人のために:
    //ja:   "let cnt = 0;"は単に変数を作っているだけです
    //ja:   "cnt < 10;"はループの条件です。この条件が破れるまでループします
    //ja:   "cnt++"は"cntを1増やす"という意味です

    //en: Using Sleep() could make it more fun
    //ja: Sleep()を使うともっと楽しくかも？
    await Sleep(1000)

    for (let cnt = 0; cnt < 20; cnt++) {
        var y = 100 + cnt * 30
        DrawText(cnt + 1, 300, y)
        await Sleep(100)
    }
}