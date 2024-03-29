var demo = {}, lituris, bg;
demo.state0 = function(){};
demo.state0.prototype = {
    preload : function(){
        game.load.spritesheet('background' , 'assets/spritesheets/Background.png' , 640 , 420);
        game.load.spritesheet('lituris' , 'assets/spritesheets/my.png' , 152 , 199);
    },
    create : function(){
        game.stage.backgroundColor = "#FFFFFF";
        console.log("State0");
        addKeyCallBackEventListener();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        lituris = game.add.sprite(0,0, 'lituris');
    },
    update : function(){}
}

function addKeyCallBack(key , fn , args){
    game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function changeState(i , stateNum){
    game.state.start("state" + stateNum);
}

function addKeyCallBackEventListener(){
    addKeyCallBack(Phaser.Keyboard.ZERO , changeState , 0);
    addKeyCallBack(Phaser.Keyboard.ONE , changeState , 1);
    addKeyCallBack(Phaser.Keyboard.TWO , changeState , 2);
    addKeyCallBack(Phaser.Keyboard.THREE , changeState , 3);
    addKeyCallBack(Phaser.Keyboard.FOUR , changeState , 4);
    addKeyCallBack(Phaser.Keyboard.FIVE , changeState , 5);
    addKeyCallBack(Phaser.Keyboard.SIX , changeState , 6);
    addKeyCallBack(Phaser.Keyboard.SEVEN , changeState , 7);
    addKeyCallBack(Phaser.Keyboard.EIGHT , changeState , 8);
    addKeyCallBack(Phaser.Keyboard.NINE , changeState , 9);
}