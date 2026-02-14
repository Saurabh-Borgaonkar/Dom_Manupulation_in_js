
function Createcard(title,views,month,duration,img){

    let viewstr='';
    if(views<1000)
    {
        viewstr=views;
    }else if(views>1000000)
    {
        viewstr=views/1000000 +'m';
    }else{
        viewstr=views/1000 +"k";
    }
    let html=`  <div class="container">

        <div class="card">
            <div class="img">
            <img src="" alt="img">
            <p>${duration}</p>
            </div>
            <div class="text">
                <h3>${title}</h3>
                <p>${viewstr} views . ${month} </p>
            </div>
        </div>
    </div>
</body> `

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;
//document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;
}
Createcard("Events,Event Bubbling,setInterval & setTimeout | Sigma web development Course - Tutorial #74",1100000," 11 month ago","27.10","img")