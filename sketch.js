 var canvas;
 var music;
 var box_1 , box_2 , box_3 , box_4;
 var ball;
 var isTouching;

  function preload(){
    music = loadSound("music.mp3");
    
  } 

  function setup(){
    canvas = createCanvas(800,800);

    box_1 = cerateSprite(10,700,30,10);
    box_1.shapeColor = "yellow"
    box_2 = cerateSprite(40,700,30,10);
    box_2.shapeColor = "pink"
    box_3 = cerateSprite(70,700,30,10);
    box_3.shapeColor = "blue"
    box_4 = cerateSprite(100,700,30,10);
    box_4.shapeColor = "green"
    ball = cerateSprite(140,700,10,10);
    ball.shapeColor = "white"
  }

  function draw() {
   background(0);
   //ellipse(x, y, 50, 50);
   //ellipse(x2, y2, 30, 30);

   let x = 50;
   let xSpeed; 

   let y = 50; 
   let ySpeed;
  
   if (keyDown("space")){

    ball.velocityX = 3;
    ball.velocityY = 3;

    x = x + xSpeed;
    y = y + ySpeed;
   }
  
   // x2 = x2 + xSpeed2;
   // y2 = y2 + ySpeed2; 
  
   xSpeed = bounce(x, xSpeed, 0, width);
   ySpeed = bounce(y, ySpeed, 0, height);
  
   //   xSpeed2 = bounce(x2, xSpeed2, 0, width);
   //   ySpeed2 = bounce(y2, ySpeed2, 0, height); 
  }

  

  function isTouching(box_1 , ball) {
   if(box_1.x - ball.x < ball.width/2 + box_1.width/2 &&
    ball.x - box_1.x < ball.width/2 + box_1.width/2 &&
    box_1.y - ball.y < ba.height/2 + box_1.height/2 &&
    ball.y - box_1.y < ball.height/2 + box_1.height/2){
   return true;}
  }      

    //add condition to check if box touching surface and make it box
    drawSprite();
   


   //Ctrl+F4 = Exit;
   //Ctrl++ = zoom In;
   //Ctrl-- = zoom Out;
   //Ctrl+S = Save;
   //Ctrl+Z = Undo;
   //Ctrl+Y = redo;
   //Ctrl+N = New File;
   //Ctrl+Shift+N  = New Window;
   //Ctrl+O = Open File;
   //Ctrl+K+Ctrl+O = Open Folder;
   //Ctrl+X = Cut;
   //Ctrl+C = Copy;
   //Ctrl+V = Paste;
   //Ctrl+F = Find;
   //Ctrl+H = Replace;
   //Ctrl+Shift+F = Find in Files;
   //Ctrl+Shift+H = Replce in Files;
   //Ctrl+/ = Toggle Line Comment;
   //Shift+Alt+A = Toggle Block Comment;
   //Ctrl+A = Select All;
   //Shift+Alt+RightArrow =  Expand Selection;
   //Shift+Alt+leftArrow =  shrink Selection;
   //Shift+Alt+upArrow =  Expand Selection;
   //Shift+Alt+DownArrow =  Expand Selection;
   //
   //
   //
   //
   //Shift+Alt+RightArrow =  Expand Selection;
   //
   //
   //