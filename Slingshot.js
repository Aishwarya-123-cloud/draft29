class Slingshot{
    constructor(objectA, objectB){
        var options = {
            bodyA:objectA,
            pointB:objectB,
            stiffness: 0.03,
            length:10
        }
         this.pointB =objectB
         this.Slingshot = Constraint.create(options)
         World.add(world,this.Slingshot);
    }
    fly(){
        this.Slingshot.bodyA = null
    }
    attach(body) {
        this.chain.bodyA = body;
    }

    display(){
        if (this.Slingshot.bodyA){
        var pointA = this.Slingshot.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(6)
        stroke("neon")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        }
    }
}