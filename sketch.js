var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var carr1, carr2, carr3, carr4, bg;

function preload(){
carr1 = loadImage("images/car1.png");
carr2 = loadImage("images/car2.png");
carr3 = loadImage("images/car3.png");
carr4 = loadImage("images/car4.png");
bg = loadImage("images/track.jpg");}

function setup(){
canvas = createCanvas(displayWidth - 20, displayHeight-20);
database = firebase.database();
game = new Game();
game.getState();
game.start();}

function draw(){
if(playerCount === 4){
game.update(1);}

if(gameState === 1){
clear();
game.play();}

if(gameState === 2){
game.end();}}