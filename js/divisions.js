class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.points = Math.round(random(1,5)) * 100;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        text(this.points, pos.x + 10, pos.y - this.h/2);
        rect(pos.x, pos.y, this.w, this.h);
    }
};