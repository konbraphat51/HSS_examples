async function main() {
    //en: make variable + set initial position here
    //ja: 変数を作り、ついでに初期位置を設定
    var x = 100;
    var y = 100;

    //en: set speed here
    //ja: スピードを設定
    var speed = 5;

    //en: Adjust character size here
    //ja: 文字の大きさをここで調整する
    SetFont("20px Arial")

    while (true) {
        //en: clear all drawings of the previous frame
        //ja: 前のフレームの描画を消す
        SetColor("white")
        DrawRect(0,0,GetCanvasSize()[0],GetCanvasSize()[1])


        //en: move by key input
        //ja: キー入力によって移動
        SetColor("black")
        DrawText("a", x, y)

        //en: move
        //en: Because the `x` is altered, the position moves
        //ja: 移動する
        //ja: `x`が変化するので、位置が移動する
        x += speed;

        //en: cool time
        //ja: 冷却時間
        await Sleep(10);
    }
}