class BlockA{
    constructor(x, y, width, height){
        var options = {
            'isStatic': false
        }
  
        this.body1   = Bodies.rectangle(x, y, width, height, options);
        this.width  = width;
        this.height = height;
        this.visibility = 255;
  
        World.add(userWorld, this.body1);
    }

    display(){
        if(this.body1.speed<5){
            var pos = this.body1.position;
            push();
            rectMode(CENTER);
            strokeWeight(1);
            stroke("brown");
            fill("red");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
        else{
            World.remove(userWorld,this.body1);
            push();
            this.visibility =  this.visibility - 5;
            tint(255,this.visibility);
            pop();
        } 

  }
  score() {
    if(this.Visibility < 0 && this.Visibility > -105){
        score = score + 1;
    }
  }

  }
