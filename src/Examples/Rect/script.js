async function main() {
    //en: DrawRect() draws a rectangle
    //en: left 2 parameters shows the coordinate of the upper left corner of the rectangle,
    //en:   right 2 parameters shows the coordinate of the lower right corner of the rectangle
    //ja: DrawRect() は四角形を描画します。
    //ja: 左の2つのパラメータは四角形の左上の座標を示し、
    //ja:   右の2つのパラメータは四角形の右下の座標を示します。
    DrawRect(100, 200, 300, 400)

    //en: You can use SetColor() as same as DrawText()
    //en: And behold, the green rectangle is ON the black rectangle!!
    //ja: DrawText() と同じように SetColor() を使うことができます。
    //ja: そして、緑の四角形が黒い四角形の「上に」描かれています！
    SetColor("palegreen")
    DrawRect(200, 300, 400, 500)

    //en: Yes, program flows "from up to down",
    //en:   so the green rectangle is drawn after the black rectangle,
    //en:   seen as if the green drawn on the black.
    //ja: そう、プログラムは「上から下へ」と流れます。
    //ja:   だから緑の四角形は黒い四角形の後に描かれているのです。
    //ja:   つまり、緑の四角形が黒い四角形の「上に」描かれているように見えるのです。

    

    //en: After 3 seconds...
    //ja: 3秒後に…
    await Sleep(3000)

    //en: GetCanvasSize() returns the size of the canvas
    //en: We haven't done Array(list) yet, so just remember:
    //en:     x-size(width): GetCanvasSize()[0]
    //en:     y-size(height): GetCanvasSize()[1]
    //ja: GetCanvasSize() はキャンバスのサイズを返します。
    //ja: 配列(リスト)はまだやっていないので、これだけ覚えておいてください:
    //ja:     xサイズ（横幅）: GetCanvasSize()[0]
    //ja:     yサイズ（縦幅）: GetCanvasSize()[1]
    SetColor("white")
    DrawRect(0, 0, GetCanvasSize()[0], GetCanvasSize()[1])

    //en: Have you seen it?
    //en: Everything is gone!
    //en: That's because we drew a white rectangle on the whole canvas.
    //en: As because the canvas is white, we recognize as if everything is gone.
    //ja: 分かりましたか？
    //ja: 全部消えてしまいました！
    //ja: それは、キャンバス全体に白い四角形を描いたからです。
    //ja: キャンバスが白いので、消えたように見えるのです。

    //en: I will leave a message on the canvas.
    //ja: キャンバスにメッセージを残しておきます。
    SetColor("black")
    SetFont("20px sans-serif")
    DrawText("Don't worry, this is not a bug", 10, 300)
}