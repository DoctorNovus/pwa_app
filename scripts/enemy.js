class Enemy{
    constructor(){
        if(this.x == null){
            this.x = Math.floor(Math.random() * canvas.width) + 1;
       }

       if(this.y == null){
            this.y = Math.floor(Math.random() * canvas.height) + 1;
       }
    }

    create(x,y,width,height){
        this.x = x;
        this.y = y;
        Engine.color("red");
        Engine.createRect(this.x, this.y, width, height);

    }

    update(canvas){
           if(this.velX == null){
                this.velX = 20;
           }

           if(this.velY == null){
                this.velY = 20;
           }

           if((this.y <= 10) || (this.y >= canvas.height - 50)){
                    this.velY *= -1;
            }
    
            if((this.x <= 10) || (this.x >= canvas.width - 50)){
                    this.velX *= -1;
            }

            this.x += this.velX;
            this.y += this.velY;
             
    }
}
