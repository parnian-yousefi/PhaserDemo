demo.state4 = function(){};
demo.state4.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#BBBBBB";
        console.log("State4");
        addKeyCallBackEventListener();
    },
    update : function(){}
};