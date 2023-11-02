async function main() {
    SetFont("50px Sans-serif")
    
    // en: Remind that you can print numbers without "".
    // ja: ""なしで数字を表示できることを思い出してください。
    DrawText(100, 100, 100)

    // en: You can also calculate with numbers.
    // ja: 数字で計算もできます。
    DrawText(100 + 100, 100, 200)
    DrawText(100 - 100, 300, 200)

    // en: "multiply" is "*" and "divide" is "/".
    // ja: 掛け算は"*"、割り算は"/"です。
    DrawText(100 * 100, 100, 300)
    DrawText(100 / 100, 300, 300)
}