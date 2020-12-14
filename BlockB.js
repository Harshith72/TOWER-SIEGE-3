class BlockB{
  constructor(x, y, width, height){
      var options = {
          'isStatic': false
      }

      this.body   = Bodies.rectangle(x, y, width, height, options);
      this.width  = width;
      this.height = height;

      World.add(userWorld, this.body);
  }
 score() {
    if(this.Visibility < 0 && this.Visibility > -105){
        score = score + 1;
    }
  }
  
  display(){
    if(this.body.speed<7){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(1);
        stroke("grey");
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
    else{
        World.remove(userWorld,this.body);
        push();
        this.visibility =  this.visibility - 5;
        tint(255,this.visibility);
        pop();
    };
  }
 
}