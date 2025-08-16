document.addEventListener("DOMContentLoaded", function () {
    //Declaracion de mi vector que va a llenar el html
    let programsLTE =
    [
        {
            id: "LTE1",
            nombre: "🐍 Python Course",
            descripcion: " Learn Python from scratch and master one of the most in-demand skills in tech. Perfect for automation, data analysis, Web3, and more.",
            descipcionLarga :"This course is designed to teach you Python from the ground up through hands-on projects. You'll learn data structures, control flow, functions, popular libraries, and how to apply Python in fields like automation, web development, data science, and blockchain. No prior experience needed.",
             categoria : "1", 
            imagen: "Img/LearnToEarn/python.webp", 
            valoracion: "8"
        },
        {
            id: "LTE2",
            nombre: "🗄️ MySQL Course ",
            descripcion: "Learn to create, manage, and query databases using MySQL—an essential skill for developers, analysts, and Web3 projects.",
            descipcionLarga :"In this course, you'll learn how to structure and query databases professionally using MySQL. Covering everything from SQL basics to advanced operations, it's ideal for anyone looking to handle data efficiently in web development, data analysis, or decentralized applications.",
            categoria : "2", 
            imagen: "Img/LearnToEarn/MYSQL.jpeg",
            valoracion: "9"
        },
        {
            id: "LTE3",
            nombre: "🤖 Artificial Intelligence Course",
            descripcion: "Discover the power of AI: learn to build intelligent models that solve real-world problems in automation, data, and Web3.",
            descipcionLarga :"This course introduces you to the world of artificial intelligence, from core concepts to building real models using Python and libraries like TensorFlow or Scikit-Learn. You’ll learn about machine learning, neural networks, data processing, and how to apply AI in real-world projects—including in Web3 environments.",
            categoria : "3", 
            imagen: "Img/LearnToEarn/AI.webp",
            valoracion: "10"
        }
    ]

    const contenedorProgram = document.getElementById("contenedor-programLTE");
    const contenedorModales = document.getElementById("modales-programLTE");

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
        for (let i= 0; i < programsLTE .length; i++)
        {
            const program = programsLTE [i];

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

