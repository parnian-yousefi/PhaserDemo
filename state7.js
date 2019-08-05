demo.state7 = function(){};
demo.state7.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#888888";
        console.log("State7");
        addKeyCallBackEventListener();
    },
    update : function(){}
};