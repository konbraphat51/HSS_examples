async function main() {
    // en: The default color is black.
    // ja: デフォルトの色は黒です。
    DrawText("Black", 100, 100)

    // en: You can change the color with SetColor function.
    // ja: SetColor関数で色を変更できます。
    SetColor("red")
    DrawText("Red", 100, 200)

    // en: The settings continues until the next SetColor()
    // ja: 次のSetColor()が呼ばれるまで設定は続きます。
    DrawText("Red2", 200, 200)

    // en: There is no meaning use SetColor() AFTER drawing.
    // en: Programming flows from "up to down".
    // ja: 描画した後にSetColor()を呼んでも意味はありません。
    // ja: プログラムは上から下に流れます。
    DrawText("Green?", 100, 300)
    SetColor("green")

    // en: You can also specify HEX color code. You can get it from here:
    // ja: HEXカラーコードも指定できます。ここから取得できます：
    // https://www.google.com/search?q=color+picker&oq=color+&gs_lcrp=EgZjaHJvbWUqDwgCEAAYQxiDARixAxiKBTIGCAAQRRg5MgYIARAAGDgyDwgCEAAYQxiDARixAxiKBTIJCAMQABhDGIoFMgoIBBAAGLEDGIAEMg8IBRAAGEMYgwEYsQMYigUyBggGEEUYPTIGCAcQRRg80gEIMzE1MGoxajeoAgCwAgA&sourceid=chrome&ie=UTF-8
    SetColor("#bad5ff")
    DrawText("Blue", 100, 400)
}