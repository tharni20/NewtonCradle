class Rope {
    constructor (bodyA,pointB){
        var options = {
         bodyA:bodyA,
         pointB:pointB,
         stiffness: 0.04,
         length:200
        }
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }
    
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y)
     }
    }