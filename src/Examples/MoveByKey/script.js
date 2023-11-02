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

        //en: draw character
        //ja: 文字を描画
        SetColor("black")
        DrawText("a", x, y)

        //en: move by key input
        //ja: キー入力によって移動
        if (GetKey("ArrowLeft")) {
            //en: If the "ArrowLeft" key is pressed, GetKey("ArrowLeft") will be `true`
            //en: if the corresponding key is pressed, this part will run
            //ja: "ArrowLeft"キーが押されたら、GetKey("ArrowLeft")は`true`になります
            //ja: 対応するキーが押されたらこの部分が実行されます
            x -= speed;
        }
        if (GetKey("ArrowRight")) {
            x += speed;
        }
        if (GetKey("ArrowUp")) {
            y -= speed;
        }
        if (GetKey("ArrowDown")) {
            y += speed;
        }

        //en: cool time
        //ja: 冷却時間
        await Sleep(10);
    }
}