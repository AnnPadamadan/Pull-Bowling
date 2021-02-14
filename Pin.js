class Pin{
    constructor(x, y, w, h){
        this.image1 = loadImage("bowling pin.png");

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h);
World.add(world, this.body);
    }

    display(){
var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image1,0, 0, this.w, this.h);
pop();
    }

    score(){
        //150, 450, 200, 10
        if(this.body.speed>5){
            score = score+1;
        
        }

        

    }}
