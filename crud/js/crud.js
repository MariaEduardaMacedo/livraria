document.addEventListener("DOMContentLoaded", () => {
    const botaoSalvar = document.getElementById("salvar");

    // Função para obter os dados do formulário
    const getDadosForm = () => {
        const title = document.getElementById("title").value;
        const subtitle = document.getElementById("subtitle").value;
        const image = document.getElementById("image").value;
        const price = document.getElementById("price").value;

        if (!title || !price) {
            alert("Preencha os campos obrigatórios.");
            return null;
        }

        return { title, subtitle, image, price };
    };

    // Função para listar livros
    const getLivros = async () => {
        try {
            const response = await fetch(
                "https://1dfe952b-3b07-4b52-b02d-52d3d875487b-00-z42zufyaspi7.worf.replit.dev/books",
            );
            const dados = await response.json();

            console.log("Livros recebidos:", dados); // Verifique os dados recebidos

            if (response.ok) {
                if (dados && dados.length > 0) {
                    setCardItens(dados);
                } else {
                    console.log("Nenhum livro encontrado");
                }
            } else {
                console.error("Erro ao buscar livros:", dados);
            }
        } catch (error) {
            console.error("Erro ao conectar à API:", error);
        }
    };

    // Função para criar os elementos na listagem
    const setCardItens = (livros) => {
        console.log("Livros a serem renderizados:", livros); // Verifique o conteúdo dos livros

        const listDados = document.getElementById("listDados");
        listDados.innerHTML = ""; // Limpa a listagem antes de renderizar

        livros.forEach((livro) => {
            const linha = document.createElement("div");
            linha.className = "linha dados";

            linha.innerHTML = `
                <div>${livro.title}</div>
                <div>${livro.subtitle}</div>
                <div>${livro.price}</div>
                <div>
                    <span onclick="editarLivro(${livro.id})">
                        <img src="icones/editar.png" alt="Editar">
                    </span>
                    <span onclick="excluirLivro(${livro.id})">
                        <img src="icones/excluir.png" alt="Excluir">
                    </span>
                </div>
            `;

            listDados.appendChild(linha);
        });
    };

    // Função para adicionar um livro
    const postLivro = async (livro) => {
        try {
            const response = await fetch(
                "https://1dfe952b-3b07-4b52-b02d-52d3d875487b-00-z42zufyaspi7.worf.replit.dev/books",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(livro),
                },
            );

            if (response.ok) {
                alert("Livro salvo com sucesso!");
                getLivros();
            } else {
                alert("Erro ao salvar o livro.");
            }
        } catch (error) {
            console.error("Erro ao conectar à API:", error);
        }
    };

    // Função para editar um livro
    const editarLivro = async (id) => {
        try {
            const response = await fetch(
                `https://1dfe952b-3b07-4b52-b02d-52d3d875487b-00-z42zufyaspi7.worf.replit.dev/books/${id}`,
            );
            const livro = await response.json();

            if (response.ok) {
                document.getElementById("title").value = livro.title;
                document.getElementById("subtitle").value = livro.subtitle;
                document.getElementById("image").value = livro.image;
                document.getElementById("price").value = livro.price;

                sessionStorage.setItem("idLivro", id);
                botaoSalvar.innerText = "Atualizar";
            } else {
                alert("Erro ao buscar o livro.");
            }
        } catch (error) {
            console.error("Erro ao conectar à API:", error);
        }
    };

    // Função para atualizar um livro
    const putLivro = async (livro) => {
        const id = sessionStorage.getItem("idLivro");
        try {
            const response = await fetch(
                `https://1dfe952b-3b07-4b52-b02d-52d3d875487b-00-z42zufyaspi7.worf.replit.dev/books/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(livro),
                },
            );

            if (response.ok) {
                alert("Livro atualizado com sucesso!");
                getLivros();
                sessionStorage.removeItem("idLivro");
                botaoSalvar.innerText = "Salvar";
            } else {
                alert("Erro ao atualizar o livro.");
            }
        } catch (error) {
            console.error("Erro ao conectar à API:", error);
        }
    };

    // Função para excluir um livro
    const excluirLivro = async (id) => {
        if (!confirm("Deseja realmente excluir este livro?")) return;

        try {
            const response = await fetch(
                `https://1dfe952b-3b07-4b52-b02d-52d3d875487b-00-z42zufyaspi7.worf.replit.dev/books/${id}`,
                {
                    method: "DELETE",
                },
            );

            if (response.ok) {
                alert("Livro excluído com sucesso!");
                getLivros();
            } else {
                alert("Erro ao excluir o livro.");
            }
        } catch (error) {
            console.error("Erro ao conectar à API:", error);
        }
    };

    // Evento de clique no botão "Salvar"
    botaoSalvar.addEventListener("click", () => {
        const dados = getDadosForm();

        if (dados) {
            if (botaoSalvar.innerText === "Salvar") {
                postLivro(dados);
            } else {
                putLivro(dados);
            }
        }
    });

    // Carrega os livros ao abrir a página
    getLivros();
});
