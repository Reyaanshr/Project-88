canvas = new fabric.canvas ("myCanvas");
var player_object = "https://toppng.com/uploads/preview/olf-ball-png-clipart-clip-art-white-golf-ball-115630304769mmevkbmfk.png";
var block_object = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aBMpyFhBvYer_z9Qyg0lI3XULqHpZ5VPrA&usqp=CAU";
var block_x = 30;
var block_y = 30;

var player_x = 10;
var player_y = 10;

function new_image(get_image){
    fabric.Image.fromUrl(get_image , function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
        canvas.add(player_object);
    });
}

window.addEventListener(keydown , my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed == '37'){
        left();
    }
    if(keyPressed == '38'){
        up();
    }
    if(keyPressed == '39'){
        right();
    }
    if(keyPressed == '40'){
        down();
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_img_height;
        console.log("block image height = " + block_img_height);
        console.log("player x = " + player_x + "|y = " + player_y);
        canvas.remove(player_object);
        updatePlayer();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_img_height;
        console.log("block image height = " + block_img_height);
        console.log("player x = " + player_x + "|y = " + player_y);
        canvas.remove(player_object);
        updatePlayer();
    }
}

function right(){
    if(player_x < 0){
        player_x = player_x - block_img_width;
        console.log("block image width = " + block_img_width);
        console.log("player x = " + player_x + "|y = " + player_y);
        canvas.remove(player_object);
        updatePlayer();
    }
}

function left(){
    if(player_x <= 850){
        player_x = player_x + block_img_width;
        console.log("block image width = " + block_img_width);
        console.log("player x = " + player_x + "|y = " + player_y);
        canvas.remove(player_object);
        updatePlayer();
    }
}