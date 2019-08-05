demo.state3 = function(){};
demo.state3.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#CCCCCC";
        console.log("State3");
        addKeyCallBackEventListener();
    },
    update : function(){}
};