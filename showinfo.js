const ul = document.getElementsByClassName("areas-content--ul")[0];

export function show(data,atributo){
    data.then(response => {

        ul.innerHTML = ''; 

        for (let element in response[atributo]){
            const li = document.createElement('li');
            li.innerHTML = response[atributo][element];
            if(Array.isArray(response[atributo])){
                li.innerHTML = response[atributo][element];
            }else{
                li.innerHTML = `${element} : ${response[atributo][element]} `;
                
            }
            ul.appendChild(li);
        }
    })
}
