const update = ()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours>=12?"pm":"am";
    document.getElementById("time").innerHTML=`${hours%12}:${minutes}:${seconds} ${ampm}`;
}
setInterval(update,1000);