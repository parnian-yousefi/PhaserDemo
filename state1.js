demo.state1 = function(){};
demo.state1.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#EEEEEE";
        console.log("State1");
        addKeyCallBackEventListener();
    },
    update : function(){}
}