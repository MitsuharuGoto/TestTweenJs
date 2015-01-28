$(function(){
(function(){
    if(typeof jQuery == 'undefined')return;
    jQuery.noConflict();
    jQuery(function($){
        //対象の要素を取得
        var twObj = $('#obj');
        twObj.text('クリック');
        twObj.click(function(){
            twObj.text('クリック');
            //クリックしたら実行
            init();
        });
        //要素をわかりやすくCSS適応
        twObj.css({
           　'position':'absolute',
           　'left':'0xp',
           　'height':'50px',
           　'width':'50px',
           　'background-color':'#0FF',
           　'font-size':'12px'
        });
        function init() {
            //new TWEEN.Tween(引数)に初期座標
            var tween = new TWEEN.Tween( { x: 0 } )
                //２秒後に目的地まで移動。
                //というより、キー「x」のバリューは２秒後に400になる。
                .to( { x: 400 }, 2000 )
                //to()までの数値変化のイージング種類
                .easing( TWEEN.Easing.Elastic.InOut )
                //最初に一回だけonUpdateメソッドで対象要素にCSS,leftを適応。
                .onUpdate( function () {
                    twObj.css('left', this.x + 'px');
                    //console.log(this.x);
                })
                //移動した後に実行するonComplete
                .onComplete(function(){
                    twObj.text('おしまい');
                });
            //tweenを実行
            tween.start();
        }
        //setIntervalやsetTimeoutの代わり
        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
        //アニメーション実行
        animate();
    });
})();
});
