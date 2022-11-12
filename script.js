

function abreModal (title, cont, posicaoTitulo = null, conteudoBtnAcao = null, tamanhoBotãoAcao = false) {
    const modal = document.querySelector("dialog");
    const btnModal = document.querySelector("#btnModal");
    const titulo = document.querySelector("dialog h1");
    const conteudo = document.querySelector("dialog #conteudo");
    conteudo.innerHTML = '';

    titulo.innerHTML = `${title}`;
    conteudo.innerHTML += `${cont}`;
    
    btnModal.addEventListener("click", () => {
        modal.close();
    })
    
    if(tamanhoBotãoAcao) {
        tamanhoBotãoAcao =  'width: 356px; height: 60px; left: 23%; top: 67%;';
    } else {
        tamanhoBotãoAcao;
    }


    switch (posicaoTitulo) {
        case 1:  // titulo ficara colado na esquerda 
            document.querySelector(".cabecalho").style = 'justify-content: flex-start';
            titulo.style = 'padding-left: 25px';
            btnModal.style = 'top: 25%';
            break;
        case 2:  // ficara apenas o titulo centralizado no cabeçalho, com o botão de fechar embaixo 
            btnModal.style = 'display: none';
            const btnFechar = document.createElement("button");
            btnFechar.innerHTML = `${conteudoBtnAcao}`;
            btnFechar.style = `width: 110px; height: 33px; position: absolute; top: 82%; border-radius: 8px; left: 41%; background-color: var(--corSecundaria); border: none; cursor: pointer; ${tamanhoBotãoAcao}`;
            conteudo.appendChild(btnFechar);
            break;
        case 3:  // ficara com o titulo no meio do cabeçalho e o botão de fechar no mesmo lugar e tambem com um botão de ação ao final do modal 
            const btnFechar3 = document.createElement("button");
            btnFechar3.innerHTML = `${conteudoBtnAcao}`;
            btnFechar3.style = `width: 110px; height: 33px; position: absolute; top: 82%; border-radius: 8px; left: 41%; background-color: var(--corSecundaria); border: none; cursor: pointer; ${tamanhoBotãoAcao}`;
            conteudo.appendChild(btnFechar3);
            break;
    
        default:
            break;
    }

    modal.showModal();
}

let SelecioneTipoPagamento = `
    <div style='width: 648px; height: 350px; display: flex; justify-content: space-evenly; align-items: center'>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer'>
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%;'> 
                <div> <i style='font-size: 6rem;' class="fa fa-qrcode"></i> </div>
                <p> QR CODE </p>
            </div>
        </div>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer'>
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%;'> 
                <div> <i style='font-size: 6rem;' class="fa-solid fa-keyboard"></i> </div>
                <p> DIGITAR </p>
            </div>
        </div>
    </div>`

let FormaDePagamento = `
    <div style='width: 648px; height: 350px; display: flex; justify-content: space-evenly; align-items: center'>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer'>
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%;'> 
                <div> <i style='font-size: 6rem;' class="fa fa-file-invoice-dollar"></i> </div>
                <p> BOLETO </p>
            </div>
        </div>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer'>
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%;'> 
                <div> <i style='font-size: 6rem;' class="fa fa-money-bills"></i> </div>
                <p> DIGITAR </p>
            </div>
        </div>
    </div>`

let digitarSenha = `
    <div style='width: 648px; height: 330px; display: flex; justify-content: center; align-items: center;'> 
        <input type='text' placeholder='Digite sua senha' 
        style='background: #FFFFFF; box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.25); border-radius: 8px; width: 546px; height: 59px; padding-left: 20px; font-size: 1rem; color: #000'/>
    </div>`


let EscolhaDataDeVencimento = `
    <div style='width: 648px; height: 336px; display: flex; justify-content: center; align-items: center;'>
        <div style='width: 359px; height: 150px. display: flex; display: flex; justify-content: center; align-items: center;'>
            <input type='date' class='inputData' />
        </div>
    </div>
`

abreModal('forma de pagamento', EscolhaDataDeVencimento, 3, 'GERAR BOLETO', true);

// document.querySelector("#btn").addEventListener("click", () => {
//     abreModal('forma de pagamento', EscolhaDataDeVencimento, 3, 'GERAR BOLETO');
// })
