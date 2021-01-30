window.onload=()=>{
    $("#puppies").click(updatePic);
    $("#kitties").click(updatePic);
};
let url ="http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php";

function updatePic(e){
    fetch(url+"?animal="+this.value,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res=> res.text())
    .then(displayPic)
    .catch((err)=>console.log(err));
}
function displayPic(response){
    console.log(response);
    $("#pictures").children().remove();
    $("#pictures").append(response);
}

