class Game {
  constructor() {}
  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start(){
    form = new Form()
    form.display();
    player =  new Player()
    player.getCount()
    car1=createSprite(width/2-50, height-100);
    car1.addImage("car1",car1_img)
    car2=createSprite(width/2+100, height-100);
    car2.addImage("car2",car2_img)
    cars = [car1, car2]

  }

  handleElements(){
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("Car Racing")

  }

  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers !== undefined ){
      Image(track,0,-height*5, width, height*6)
    }
    drawSprites();

  }
 
}
