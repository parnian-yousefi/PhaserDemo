demo.state5 = function(){};
demo.state5.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#AAAAAA";
        console.log("State5");
        addKeyCallBackEventListener();
    },
    update : function(){}
};