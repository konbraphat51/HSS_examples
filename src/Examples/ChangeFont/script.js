async function main() {
    // en: The default font is "sans-serif" and size of 10px.
    DrawText("Default", 100, 100)

    // en: You can change the size and font with SetFont function.
    // en: put in "(number)px (font name)".
    // ja: SetFont()で大きさとフォントを変更できます。
    // ja: "(数字)px (フォント名)"と入れてください。
    SetFont("50px Times New Roman")
    DrawText("x5 bigger!!!", 100, 200)    
}