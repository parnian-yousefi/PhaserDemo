demo.state6 = function(){};
demo.state6.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#999999";
        console.log("State6");
        addKeyCallBackEventListener();
    },
    update : function(){}
};