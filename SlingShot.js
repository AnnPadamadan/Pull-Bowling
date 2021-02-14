class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.7,
            length: 1
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("yellow");
            strokeWeight(1);
            //if(pointA.x < 220) {
                //strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                
                
            //}
            //else{
              //  strokeWeight(3);
               //line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                
                
            //}
           
            
            pop();
        }

      
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
}