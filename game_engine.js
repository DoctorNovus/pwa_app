class Game{
    constructor(){
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
    }

    createRect(x, y , w, h){
        this.ctx.fillRect(x, y, w, h)
    }
}