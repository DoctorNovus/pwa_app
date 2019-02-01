class Game{
    constructor(){
        this.canvas = document.getElementById("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
    }

    clear(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    createRect(x, y , w, h){
        this.ctx.fillRect(x, y, w, h);
    }
}