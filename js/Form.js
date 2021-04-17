class Form{
  constructor(){
     this.input = createInput("Name");
     this.button = createButton('Play');
     this.greeting = createElement('h2');
     this.greeting1 = createElement('h2');
     this.reset = createButton('Reset');
     this.input1 = createInput("girl/boy");
  }
  hide() {
      this.greeting.hide();
      this.greeting1.hide();
      this.button.hide();
      this.input.hide();
      this.input1.hide();
  }
  display() {
      this.input.position(235,350);
      this.input.style('width', '250px');
      this.input.style('height', '30px');

      this.button.position(308,522);
      this.button.style('width', '124px');
      this.button.style('height', '84px');

      this.input1.position(235,390);
      this.input1.style('width', '250px');
      this.input1.style('height', '30px');

      this.reset.position(466, 629);
      this.reset.style('width', '60px');
      this.reset.style('height', '30px');

      this.button.mousePressed(() => {
          this.input.hide();
          this.input1.hide();
          this.button.hide();
          this.reset.hide();
          player.name = this.input.value();
          playerCount += 1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(200,300);
          this.greeting.style('color', 'black');
          this.greeting.style('font-size', '60px');
          this.greeting1.html("Hello " + player.name)
          this.greeting1.position(202,300);
          this.greeting1.style('color', '#ff002f');
          this.greeting1.style('font-size', '60px');
      });

      this.reset.mousePressed(() => {
          player.updateCount(0);
          game.update(0);
      });

  }
}