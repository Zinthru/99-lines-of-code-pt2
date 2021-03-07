document.addEventListener('DOMContentLoaded',function(){



    let button = document.createElement("Button");
    let btnText = document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);



    document.addEventListener("click",function(){
        let friends = ["Ty","Brad","Walker","Breelyn","Jip"];

        for(i=0;i<friends.length; i++) {
            let friendDiv = document.createElement('div');
            friendDiv.className = ('friend');
            // Div created
            let h3 = document.createElement('h3');
            let h3txt = document.createTextNode(friends[i]);
            h3.appendChild(h3txt);
            friendDiv.appendChild(h3);
            document.body.appendChild(friendDiv);
            
            
            for (t=99;t>0;t--) {
                let negativeOne = t -1;
                let song = document.createElement('p');
                let songTxt;
                if(t>1) {
                    songTxt = document.createTextNode(i+" lines of code in the file, " + t + " lines of code; "+friends[i]+" strikes one out, clears it all out, "+negativeOne+" lines of code in the file");
                } else  {
                    songTxt = document.createTextNode("1 line of code in the file, 1 line of code; " + friends[i]+ " strikes one out, clears it all out, no more lines of code in the file");
                }
                song.appendChild(songTxt);
                h3.appendChild(song);
            }
        }
    })
})