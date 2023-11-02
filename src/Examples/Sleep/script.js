async function main() {
    //en: This will be shown immediately
    //ja: これはすぐに表示されます
    DrawText("1", 100, 100)

    //en: Stops the program for 1000 milliseconds (1 second)
    //en: Don't forget to put "await" in front of Sleep
    //ja: プログラムを1000ミリ秒(1秒)止めます
    //ja: Sleepの前に"await"を付けるのを忘れないでください
    await Sleep(1000)

    //en: This will be shown after 1 second
    //ja: これは1秒後に表示されます
    DrawText("2", 100, 200)

    await Sleep(1000)
    SetFont("100px Arial")
    SetColor("red")
    DrawText("うおおおおおおおお", 100, 300)
}