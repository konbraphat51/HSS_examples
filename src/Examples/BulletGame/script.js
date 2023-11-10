async function main() {
    //en: Make variable for player + set initial position
    //ja: 自機の変数を作成 + 初期位置の指定
    var x = 500
    var y = 500

    //en: If you set as variable, it is easier to adjust.
    //en:   You only have to edit here.
    //ja: 変数にしておくと調整が楽です。
    //ja:   ここだけ編集すればいいのです。
    var speed = 3
    var radius = 15

    //en: Class of bullet
    //en: Make it easier to manage hundreds of bullets
    //ja: 弾のクラス
    //en: 何百発の弾を管理するのに便利
    class Bullet{
        x = 100
        y = 0
    }

    //en: List of all bullets in the game 
    //ja: ゲーム中のすべての弾のリスト
    var bullets = []

    var bullet_radius = 15
    var bullet_speed = 4

    var score = 0
    var high_score = 0

    //en: infinite loop
    //ja: 無限ループ
    while(true) {
        //en: Clear canvas
        //ja: 画面リセット
        SetColor("white")
        DrawRect(0, 0, GetCanvasSize()[0], GetCanvasSize()[1])

        //en: Draw player
        //ja: 自機の表示
        SetColor("palegreen")
        DrawCircle(x, y, radius)

        //en: Move by key input
        //ja: キー入力による移動
        if (GetKey("ArrowRight")) {
            //en: If right arrow key is pressed, move right
            //ja: 右矢印キーが押されていたら右に移動
            x += speed
        }
        //en: Left
        //ja: 左
        if (GetKey("ArrowLeft")) {
            x -= speed
        }
        //en: Up
        //ja: 上
        if (GetKey("ArrowUp")) {
            y -= speed
        }
        //en: Down
        //ja: 下
        if (GetKey("ArrowDown")) {
            y += speed
        }

        //en: Focus on each bullet
        //en:   -> Use "for" loop
        //en: cnt < bullets.length means "as much as the bullet exists"
        //ja: それぞれの弾について注目して処理する
        //ja:   -> forループを使う
        //ja: cnt < bullets.length は「弾が存在する全ての分について」
        for (let cnt = 0; cnt < bullets.length; cnt++) { 
            //en: Pythagorean theorem
            //ja: 三平方の定理
            var distance = ((x-bullets[cnt].x)**2 + (y-bullets[cnt].y)**2)**0.5
            
            //en: Collision detection
            //ja: 当たり判定
            if (distance < radius + bullet_radius) {
                //en: hitted!
                //ja: 当たった！

                //en: Make the hitted bullet red
                //ja: 当たった弾を赤くする
                SetColor("red")

                //en: Reset the score
                //ja スコアをリセット
                score = 0
            } else {
                //en: Not hitted
                //ja: 当たっていない場合

                //en: Make the bullet black
                //ja: 弾を黒くする
                SetColor("black")
            }

            //en: Draw the bullet
            //ja: 弾の描画
            DrawCircle(bullets[cnt].x, bullets[cnt].y, bullet_radius)

            //en: Move the bullet
            //ja: 弾の移動
            bullets[cnt].y += bullet_speed

            //en: Delete the bullet that went too far down
            //en: You have to do this 
            //en:   to prevent `bullets` list get too big and crashes.
            //ja: 下に行き過ぎたbulletを削除
            //ja: これをしないと、
            //ja:  `bullets`リストが大きくなりすぎて、プログラムがクラッシュします。
            if (bullets[cnt].y > GetCanvasSize()[1]) {
                //en: bullet exceeded the bottom canvas
                //ja: 弾がキャンバスの下枠を超えた

                //en: Delete the bullet
                //ja: 弾を削除
                bullets.splice(cnt, 1)

                //en: Adjust the cnt because we deleted one
                //en: If we don't, next bullet will be skipped
                //ja: 1つ削除したので、cntを調整
                //ja: これをしないと、次の弾がスキップされてしまう
                cnt -= 1
            }
        }

        //en: Generate a bullet with 10% probability
        //ja: 10%の確率で弾を生成
        if (Math.random() < 0.1) {
            //en: Make a new bullet instance
            //ja: 新しい弾のインスタンスを作成
            var bullet = new Bullet()

            //en: Randomly set the initial position
            //ja: 初期位置をランダムに設定

            bullet.x = Math.random() * 800          //0～800
            bullet.y = Math.random() * 200 -300     //-300～-100
    
            //en: Save the bullet in the list
            //ja: 弾をリストに保存
            bullets.push(bullet)
        }

        //en: Add score for surviving
        //ja: 時間経過の分のスコアの加算
        score += 0.1

        //en: high score
        //ja: ハイスコア
        if (high_score < score) {
            //en: high score is updated
            //ja: ハイスコアが更新された
            high_score = score
        }

        //en: show score
        //ja: スコア表示
        SetFont("50px Arial")
        SetColor("black")
        DrawText(Math.floor(score), 650, 100)

        //en: show high score
        //ja: ハイスコア表示
        SetColor("red")
        DrawText(Math.floor(high_score), 650, 170)

        //en: cool time
        //ja: 冷却時間
        await Sleep(10)
    }
}