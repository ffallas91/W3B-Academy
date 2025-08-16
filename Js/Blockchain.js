document.addEventListener("DOMContentLoaded", function () {
    //Declaracion de mi vector que va a llenar el html
    let programsBlockchain =
    [
        {
            id: "Block1",
            nombre: "💰Crypto W3B Pro",
            descripcion: " Explore the world of cryptocurrencies, from the basics to advanced strategies. Learn how to buy, store, and trade securely in the crypto ecosystem.",
            descipcionLarga :"In this course, you will learn the fundamentals of cryptocurrencies, how blockchains work, how to invest safely, and how to make the most of opportunities in the crypto world. Perfect for beginners and enthusiasts looking to take their knowledge further.",
             categoria : "1", 
            imagen: "Img/Blockchain/crypto.jpg", 
            valoracion: "9.9"
        },
        {
            id: "Block2",
            nombre: "💸DeFi",
            descripcion: "Learn how to use decentralized finance protocols to invest, lend, earn interest, and more. Take control of your finances without middlemen",
            descipcionLarga :"This course introduces you to the DeFi ecosystem, where you’ll learn to interact with protocols such as decentralized exchanges (DEXs), lending platforms, yield farming, and more. Perfect for those seeking financial independence and new opportunities in the crypto space",
            categoria : "2", 
            imagen: "Img/Blockchain/defi.jpeg",
            valoracion: "8.7"
        },
        {
            id: "Block3",
            nombre: "📜Smart contracts",
            descripcion: "Learn to build and deploy smart contracts that automate processes and power secure, decentralized Web3 applications—no middlemen required",
            descipcionLarga :"This course teaches you how to develop smart contracts from scratch using languages like Solidity. Connect business logic to the blockchain and discover how smart contracts are revolutionizing industries like finance, logistics, and beyond. Perfect for developers and Web3 enthusiasts.",
            categoria : "3", 
            imagen: "Img/Blockchain/smart.jpg",
            valoracion: "10"
        }
    ]

    const contenedorProgram = document.getElementById("contenedor-programBlockchain");
    const contenedorModales = document.getElementById("modales-programBlockchain");

    function pintarProgram(filtroCategoria, textoBuscar)
    {                
        if(filtroCategoria === undefined && textoBuscar=== undefined)
            {
            filtroCategoria = 0;
            textoBuscar = "";
        }

        contenedorProgram.innerHTML = "";
        contenedorModales.innerHTML = "";

        //Categoria puede 0-Todos 1-Beginner 2-Intermediate 3-Advanced
        //Filtrar programs
        let programFiltrados = [];

        //For para filtrar
        for (let i= 0; i < programsBlockchain .length; i++)
        {
            const program = programsBlockchain [i];

            const nombreProgram = program.nombre.toLowerCase();
            const textoBuscarMinuscula = textoBuscar.toLowerCase();

            const coincideCategoria = (filtroCategoria == 0 || program.categoria == filtroCategoria)
            const coincideTexto =  nombreProgram.includes(textoBuscarMinuscula);

            if(coincideCategoria && coincideTexto)
            {
                programFiltrados .push(program);
            }            
        }
        
        //For para pintar
        for(let i= 0; i < programFiltrados.length; i++)
        { //Este el corchete de entrada del for
    
            let categoria = RetornarCategoria(programFiltrados [i].categoria);
    
            const cartaHTML = `
            <div class="col-md-4 col-sm-6 d-flex justify-content-center mb-4">
            <div class="card h-100" style="width: 100%; max-width: 350px;">
            <img src="${programFiltrados[i].imagen}" class="card-img-top" alt="${programFiltrados[i].nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${programFiltrados[i].nombre}</h5>
                <p class="card-text">${programFiltrados[i].descripcion}</p>
                <button class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#modal-${programFiltrados[i].id}">Info</button>
            </div>
            </div>
             </div>`;

    
            contenedorProgram.innerHTML += cartaHTML;
    
            let estrellasHTML = "";
            let valoracionProgram = parseInt(programFiltrados[i].valoracion);
            

            for(let j = 1; j <=10; j++){
                if(j<=valoracionProgram)
                    estrellasHTML+= `<i class="fa-solid fa-star"></i>`
                else
                    estrellasHTML += `<i class="fa-regular fa-star"></i>`;
            }

            const modalHTML = 
                `<div class="modal fade" id="modal-${programFiltrados[i].id}" tabindex="-1" aria-labelledby="label-${programFiltrados[i].id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="label-${programFiltrados[i].id}">${programFiltrados[i].nombre}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p> ${programFiltrados[i].descipcionLarga}</p>
                                <p><strong>${categoria}</strong></p>
                                ${estrellasHTML}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`
                
            contenedorModales.innerHTML += modalHTML;
    
        } //Esta es corchete de salida del for

    }

    pintarProgram();

    const filtroTexto = document.getElementById("filtroTexto");
    const filtroCategoria = document.getElementById("filtroCategoria");

    filtroTexto.addEventListener("input", function(){
        const filtroTexto = document.getElementById("filtroTexto").value;
        const categoriaSeleccionada = filtroCategoria.value;
        pintarProgram(categoriaSeleccionada, filtroTexto);
    })

    filtroCategoria.addEventListener("change", function(){
        const filtroTexto = document.getElementById("filtroTexto").value;
        const categoriaSeleccionada = filtroCategoria.value;
        pintarProgram(categoriaSeleccionada,filtroTexto);
    })


//Esto de abajo no lo vamos a eliminar    
})


function RetornarCategoria(id)
{
    let categoria = "";

    switch(id)
    {
        case "1":
            categoria = "Beginner";
            break;
        case "2":
            categoria = "Intermediate";
            break;
        case "3":
            categoria = "Advanced";
            break;
    }

    return categoria;
}

