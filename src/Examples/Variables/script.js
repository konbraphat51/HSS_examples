async function main() {
    //en: Letters larger
    //ja: 文字を大きくする
    SetFont("50px Arial")

    //en: "var" makes a variable.
    //en: Variables are like boxes that put in and save your data
    //en: In this case, the variable "x" memorizes 334.
    //ja: "var"で変数を作ります。
    //ja: 変数は箱のようなもので、データを入れて保存します。
    //ja: この場合、変数"x"は334を記録します
    var x = 334

    //en: If you put in the variable, the data inside will be used.
    //en:      In this case, the inside data "334" will be used to draw.
    //ja: 変数を書くと、中のデータが使われます。
    //ja:      この場合、中身のデータ"334"が描画されます。
    DrawText(x, 100, 100)

    //en: This is why you should use "" if you want to represent letters.
    //ja: これが、文字を表現する時に""を使う理由です。
    DrawText("x", 250, 100)

    //en: Variable's names could be anything. (Unless it's already used)
    //ja: 変数の名前は何でもOKです。(既に使われていなければ)
    var whateverisok = 123456
    DrawText(whateverisok, 100, 200)

    //en: Variables can be used to calculate.
    //ja: 変数は計算に使えます。

    //en: In this case, the variable "y" memorizes 100.
    //ja: この場合、変数"y"は100を記録します。
    var y = 100

    //en: Put "=" on the right of the operator(+-*/),
    //en:      and you can control the data inside
    //ja: 演算子(+-*/)の右に"="を置くと、中身を操作できます。
    y += 20
    DrawText(y, 100, 300)
}