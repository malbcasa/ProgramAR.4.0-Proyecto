const ol = document.getElementsByClassName("areas-content--ol")[0];

export function show(data,atributo){
    data.then(response => {

        ol.innerHTML = ''; 

        for (let element in response[atributo]){
            const li = document.createElement('li');
            li.innerHTML = response[atributo][element];
            if(Array.isArray(response[atributo])){
                li.innerHTML = response[atributo][element];
            }else{
                li.innerHTML = `${element} : ${response[atributo][element]} `;
                
            }
            li.classList.add("m-12")
            li.classList.add("font-Tilt")
           // li.classList.add("items-center")
            ol.appendChild(li);
        }
    })
}
