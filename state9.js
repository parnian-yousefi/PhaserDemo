demo.state9 = function(){};
demo.state9.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#666666";
        console.log("State9");
        addKeyCallBackEventListener();
    },
    update : function(){}
};