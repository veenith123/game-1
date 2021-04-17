class Game{
  constructor(){

  }
  getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
          gameState = data.val();
      })

  }

  update(state) {
      database.ref('/').update({
          gameState: state
      });
  }
  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
          playerCount = playerCountRef.val();
          player.getCount();
      }
      form = new Form()
      form.display();
            }
            gameend = createSprite(770,430);
            gameend.scale = 0.34;
            gameend.addImage("gameend",gameend_img);
            gameend.visible = false;

            gamebg1 = createSprite(770,430);
            gamebg1.scale = 1;
            gamebg1.addImage("gamebg1",gamebg1_img);
            gameend.depth = gamebg1.depth+100000000000;

            ship = createSprite(768,430);
            ship.scale = 0.33;
            ship.addImage("ship",ship_img);

            bomb1 = createSprite(-100,0);
            bomb1.scale = 0.040;
            bomb1.addImage("bomb1",bomb_img);


            grass = createSprite(110,786);
            grass.scale = 0.4;
            grass.addImage("grass",grass_img);

            grass1 = createSprite(1428,786);
            grass1.scale = 0.4;
            grass1.addImage("grass1",grass1_img);

            board = createSprite(24,127);
            board.scale = 0.7;
            board.addImage("board",board_img);

            board1 = createSprite(1512,127);
            board1.scale = 0.7;
            board1.addImage("board1",board1_img);

            wood = createSprite(85,768);
            wood.scale = 0.3;
            wood.addImage("wood",wood_img);

            wood1 = createSprite(1451,768);
            wood1.scale = 0.3;
            wood1.addImage("wood1",wood1_img);

            blank = createSprite(-700,590,50,20);
            blank.addImage("blank",blank_img);
            blank.scale = 0.8;
            
            mushroom1 = createSprite(1443,200);
            mushroom1.addImage("mushroom1",mushroom1_img);
            mushroom1.scale = 0.6;

            mushroom2 = createSprite(1443,400);
            mushroom2.addImage("mushroom2",mushroom2_img);
            mushroom2.scale = 0.6;
             
            mushroom3 = createSprite(97,200);
            mushroom3.addImage("mushroom3",mushroom3_img);
            mushroom3.scale = 0.6;

            mushroom4 = createSprite(96,400);
            mushroom4.addImage("mushroom4",mushroom4_img);
            mushroom4.scale = 0.6;

            mushroom5 = createSprite(97,610);
            mushroom5.addImage("mushroom5",mushroom5_img);
            mushroom5.scale = 0.6;

            mushroom6 = createSprite(96,580);
            mushroom6.addImage("mushroom6",mushroom6_img);
            mushroom6.scale = 0.6;
             
            mushroom7 = createSprite(1443,610);
            mushroom7.addImage("mushroom7",mushroom7_img);
            mushroom7.scale = 0.6;

            mushroom8 = createSprite(1443,580);
            mushroom8.addImage("mushroom8",mushroom8_img);
            mushroom8.scale = 0.6;

            player1 = createSprite(200,200);
            player1.addImage("player1",player_img);
            player1.scale = 0.1;

            player2 = createSprite(200,200);
            player2.addImage("player2", player_img);
            player2.scale = 0.08;

            players=[player1,player2];

            mushroom1.depth = gamebg1.depth+1;
            mushroom2.depth = gamebg1.depth+1;
            mushroom3.depth = gamebg1.depth+1;
            mushroom4.depth = gamebg1.depth+1;
            mushroom5.depth = gamebg1.depth+1;
            mushroom6.depth = gamebg1.depth+1;
            mushroom7.depth = gamebg1.depth+1;
            mushroom8.depth = gamebg1.depth+1;

            gameend.depth = mushroom1.depth+100000000000;
            gameend.depth = mushroom2.depth+100000000000;
            gameend.depth = mushroom3.depth+100000000000;
            gameend.depth = mushroom4.depth+100000000000;
            gameend.depth = mushroom5.depth+100000000000;
            gameend.depth = mushroom6.depth+100000000000;
            gameend.depth = mushroom7.depth+100000000000;
            gameend.depth = mushroom8.depth+100000000000;


            ship.depth = player1.depth+1
            gamebg1.depth= blank.depth+2
            wood.depth = gamebg1.depth+1000;
            gameend.depth = ship.depth+100000000000;
            gameend.depth = wood.depth+100000000000;
            gameend.depth = grass.depth+100000000000; 
            gameend.depth = wood1.depth+100000000000;  
            gameend.depth = grass1.depth+100000000000;  
            gameend.depth = board.depth+100000000000; 
            gameend.depth = board.depth+100000000000;         
            
            
        }
        play(){
            form.hide();
    
            Player.getPlayerInfo();
            if (key == 'a') {
            bomb1.velocityY = 7;
            bomb1.x = player1.x;
            bomb1.y = player1.y;
             }
             if (player1.x > 1420 || player2.x > 1420 ){
               player1.x = 1420;
               player2.x = 1420;
             }
             if (player1.x < 120 || player2.x < 120 ){
              player1.x = 120;
              player2.x = 120;
            }

            if(allPlayers !== undefined){
              background(bg2_img);
              var x =100;
              var y=160;
             
              drawSprites();
              if(player.score === 50){
                gameend.visible = true;  
                bomb1.destroy();
                player1.destroy();
                player2.destroy();
        
                textSize(40);
                fill(rgb(128,228,154));
                text( allPlayers.player2.name ,1255,615);
        
                textSize(40);
                fill(rgb(102,225,134));
                text( allPlayers.player1.name , 150, 615);

                textSize(30);
                fill("red");
                text( allPlayers.player1.name , 700, 365);

                textSize(40);
                fill(rgb(128,228,154));
                text( allPlayers.player2.score ,1013,600);
        
                textSize(40);
                fill(rgb(102,225,134));
                text( allPlayers.player1.score , 475, 600);

                }

              for(var plr in allPlayers){
                 var index =0;
                  index = index+1;
                  x = 500-allPlayers[plr].distance;
                  y=162;

                 
                  
                  players[index -1].x =mouseX;
                  players[index - 1].y = y;
                    players[index].visible=false;

                 
                      textSize(25);
                      fill(rgb(0,211,255));
                      text( allPlayers.player2.score ,1500,130);
                     text( allPlayers.player1.score , 10, 130);


      }
      

              if (frameCount % 300 === 0) {
                tanks = createSprite(random(0, 85), 772);
                tanks.scale = 0.05;
                tanks.velocityX = 2;
                tanks.setCollider("rectangle", 200, 200, 800, 800);
                tanks.debug = true;
                var rand = Math.round(random(1,6));
                switch(rand){
                    case 1: tanks.addImage("tank1",tank1_img);
                    break;
                    case 2: tanks.addImage("tank2", tank2_img);
                    break;
                    case 3: tanks.addImage("tank3", tank3_img);
                    break;
                    case 4: tanks.addImage("tank4", tank4_img);
                    break;
                    case 5: tanks.addImage("tank5", tank5_img);
                    break;
                    case 6: tanks.addImage("tank6", tank6_img);
                    break;
                }
                
                gamebg1.depth = tanks.depth+1
                blank.depth = tanks.depth+1
                wood.depth = tanks.depth+1
                wood1.depth = tanks.depth+1
                grass.depth = tanks.depth+1
                grass1.depth = tanks.depth+1
                gameend.depth = tanks.depth+10

                tankGroup.add(tanks);
              }

              if (player.index !== null) {
                for(var i = 0; i< tankGroup.length;i++){
                    if(tankGroup.get(i).isTouching(bomb1)){
                      tankGroup.get(i).destroy();
                      bomb1.destroy();
                      bomb1 = createSprite(-100,0);
                      bomb1.scale = 0.040;
                      bomb1.addImage("bomb1",bomb_img);
                      player1.depth = bomb1.depth+1;
                      player2.depth = bomb1.depth+1;
                      player.score =player.score+5;
                      player.update();

                      if (key == 'a') {
                        bomb1.velocityY = 7;
                        bomb1.x = player1.x;
                        bomb1.y = player1.y;
                      }

                    }
                  }
                  }
                }
            }
            }
          


