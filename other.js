function back(){

    window.location= "game_login.html";


}
function get_score(){
    var score=localstorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>score:"+score+"</h1>";
}