document.addEventListener("DOMContentLoaded", function () {
    //Declaracion de mi vector que va a llenar el html
    let programsTrading=
    [
        {
            id: "tradi1",
            nombre: "📊  Manual Trading",
            descripcion: " Master technical analysis and make informed trading decisions on your own—no bots, no automation, just real strategy and skill.",
            descipcionLarga :"This course teaches you how to read charts, identify patterns, manage risk, and build your own trading strategy. Ideal for those who want full control over their trades—no bots, just knowledge, discipline, and skill.",
             categoria : "1", 
            imagen: "Img/Trading/manual.png", 
            valoracion: "9"
        },
        {
            id: "Tradi2",
            nombre: "🤖Algorithmic Trading",
            descripcion: "Learn to build trading bots that execute automated strategies in real time. Automate your trades and boost your performance in the markets.",
            descipcionLarga :"In this course, you'll learn how to program trading systems that operate on your behalf. Master languages like Python, work with exchange APIs, and develop algorithms that analyze data, manage risk, and execute trades efficiently. Perfect for traders looking to scale their strategies with technology.",
            categoria : "2", 
            imagen: "Img/Trading/algoritmico.webp",
            valoracion: "10"
        },
       
    ]

    const contenedorProgram = document.getElementById("contenedor-programTrading");
    const contenedorModales = document.getElementById("modales-programTrading");

    function pintarProgram(filtroCategoria, textoBuscar)
    {                
        if(filtroCategoria === undefined && textoBuscar=== undefined)
            {
            filtroCategoria = 0;
            textoBuscar = "";
        }

        contenedorProgram.innerHTML = "";
        contenedorModales.innerHTML = "";

        //Categoria puede 0-Todos 1-Beginner  2-Advanced
        //Filtrar programs
        let programFiltrados = [];

        //For para filtrar
        for (let i= 0; i < programsTrading .length; i++)
        {
            const program = programsTrading [i];

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
            categoria = "Advanced";
            break;
       
    }

    return categoria;
}



