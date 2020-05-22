let paint=document.getElementById('paintbox');
let context=paint.getContext('2d');
let playerSpeed=3;
let gameOn=true;
 class Box{
         
        constructor(size,color)
        {
            this.size=size;
            this.color=color;
            this.x=0;
            this.y=0;
        }
 }
 paint.addEventListener('mousedown',()=>
 {
     p.speed=playerSpeed;
 })
  paint.addEventListener('mouseup',()=>
  {
      p.speed=0;
  })
class player extends Box{

          constructor(speed){
          super(25,'green');
             this.speed=0;
             this.y=50;
          }
          move()
          {
              this.x+=this.speed;
              if(this.x+this.size>300)
           {
               this.speed=-(Math.abs(this.speed));
           }
           if(this.x<0)
           {
               this.speed=(Math.abs(this.speed));
           }
          }
}
class enemy extends Box{
      
       constructor(speed)
       {
           super(25,'red');
           this.speed=speed;
       }
       move()
       {
           this.y+=this.speed;
           if(this.y+this.size>150)
           {
               this.speed=-(Math.abs(this.speed));
           }
           if(this.y<0)
           {
               this.speed=(Math.abs(this.speed));
           }
       }
}
function drawBox(box)
{
      context.fillStyle=box.color;
      context.fillRect(box.x,box.y,box.size,box.size);
}
let p=new player(1000);
let e1=new enemy(2);
let e2=new enemy(4);
let e3=new enemy(8);
let e4=new enemy(12);
e1.x=50;
e2.x=120;
e3.x=200;
e4.x=275;
function isCollided(box1,box2)
{
    if((box1.y+box1.size>=box2.y)&&(box1.y<=box2.y+box2.size)&&(box2.x+box2.size>=box1.x)&&(box2.x<=box1.x+box1.size))
    return true;
    else
    return false;
    
}
function loopgame()
{
    if(!gameOn)
    return;
    context.clearRect(0, 0, 800, 800);
    e1.move();
    p.move();
    e2.move();
    e3.move();
    e4.move();
    if (isCollided(e1, p) || isCollided(e2, p) || isCollided(e3, p)||isCollided(e4, p)) {
        gameOn = false  
        window.alert('Game Over')
      }
    drawBox(e1);
    drawBox(p);
    drawBox(e2);
    drawBox(e3);
    drawBox(e4);
    

    window.requestAnimationFrame(loopgame);
}
loopgame();
