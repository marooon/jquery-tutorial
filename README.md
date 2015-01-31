# Jquery Tutorial
## 説明

これはチュートリアルを実現するJquery Pluginです。  デモは[こちら](http://js.marooon.com/jquery/tutorial/demo.html "JQuery Tutorial")です。

## 使い方 ##

まずはjquery.tutorial.jsをロードしてtutotialを呼び出します。
```html
<link rel="stylesheet" href="./jquery.tutorial.css" >
<script src="./jquery.tutorial.js" ></script>
<script>
	$(function(){
		$("#tutorial").tutorial({
            speed: 300,
            color: "#000000",
            opacity: 0.6,
            message: "#message",
            message_text: [
                "ステップ１<br />最初の要素です。",
                "ステップ２<br />2番目の要素です。",
                "ステップ３<br />3番目の要素です。",
                "ステップ４<br />4番目の要素です。最後です。"
            ],
            target: [".step1",".step2",".step3",".step4"],
            dialog: ".tutorial_dialog",
            dialog_positions: [
                "left: 120px; top: 65px;",
                "right: 120px; bottom: 65px;",
                "left: 120px; top: 65px;",
                "right: 120px; bottom: 65px;"
            ],
            tutorial: "#tutorial",
            btn_open: "#btn-open",
		});
	});
</script>
```

そしてtargetに配列で指定されたclassをhtmlの要素に追加します。
上記の場合はstep1〜step4です。

後はmessage_textに指定された文章が順に表示されます。

デザインを変更したい場合はjquery.tutorial.cssを修正してください。

## オプション

speed: 300,                // ウィンドウが切り替わる速度
color: "#000000",          // フォーカスされた要素以外の背景色
opacity: 0.6,              // フォーカスされた要素以外の背景の透過度
message: "#message",       // メッセージが表示される場所
message_text: [            // メッセージのテキスト
    "step1<br />step1.",
    "step2<br />step2.",
    "step3<br />step3.",
    "step4<br />step4."
],
target: [".step1",".step2",".step3",".step4"],    // フォーカスする要素
dialog: ".tutorial_dialog",    // チュートリアルのダイアログ
dialog_positions: [            // チュートリアルダイアログの位置
    "left: 250px; top: 65px;",
    "left: 250px; top: 65px;",
    "left: 250px; top: 65px;",
    "left: 250px; top: 65px;"
],
tutorial: "#tutorial",    // チュートリアルダイアログ本体
btn_open: "#btn-open",    // 開始ボタン
btn_next: "#btn-next",    // 次のフォーカスへ
btn_prev: "#btn-prev",    // 前のフォーカスへ
btn_close: "#btn-close",  // チュートリアル終了
pager: "#pageArea"        // フォーカスする要素数と現在のページ
