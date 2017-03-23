class Rect {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }


  cacl(){
    return this.width * this.height;
  }
}


module.exports = Rect;