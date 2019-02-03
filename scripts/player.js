class Player{
    constructor(x,y,width,height) {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    create(){
        Engine.color("blue");
        Engine.createRect(this.x, this.y, this.width, this.height);
    }

    test(x, y){
        Engine.locate(x,y);
    }

    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
}