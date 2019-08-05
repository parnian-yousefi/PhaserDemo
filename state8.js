demo.state8 = function(){};
demo.state8.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#777777";
        console.log("State8");
        addKeyCallBackEventListener();
    },
    update : function(){}
};