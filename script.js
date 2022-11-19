

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
        case 4:  // titulo ficara centralizado com o botão de fechar no mesmo lugar e sem botão de ação.
            titulo.style = 'padding-left: 25px';
            btnModal.style = 'top: 25%';
            break;
        case 5:  // ficara apenas o titulo centralizado no cabeçalho, com o botão de fechar embaixo **a diferença desse pro case 2 é a borda e o botao de fechar centralizado 
            btnModal.style = 'display: none';
            const btnFechar5 = document.createElement("button");
            btnFechar5.innerHTML = `${conteudoBtnAcao}`;
            modal.style = 'padding:0; border:none; border-radius:31px;'
            btnFechar5.style = `width: 110px; height: 33px; position: absolute; top: 82%; border-radius: 8px; left: 37%; background-color: var(--corSecundaria); border: none; cursor: pointer; ${tamanhoBotãoAcao}`;
            conteudo.appendChild(btnFechar5);
            break;
        case 6:  // titulo ficara colado na esquerda e botao de acao em baixo
            document.querySelector(".cabecalho").style = 'justify-content: flex-start';
            const btnFechar6 = document.createElement("button");
            titulo.style = 'padding-left: 25px';
            btnModal.style = 'top: 25%';
            btnFechar6.innerHTML = `${conteudoBtnAcao}`;
            btnFechar6.style = `width: 110px; height: 33px; position: absolute; top: 82%; border-radius: 8px; left: 41%; background-color: var(--corSecundaria); border: none; cursor: pointer; ${tamanhoBotãoAcao}`;
            conteudo.appendChild(btnFechar6);
            break;
        case 7:  // titulo ficara colado na esquerda e botao de acao canto inferior direito
            document.querySelector(".cabecalho").style = 'justify-content: flex-start';
            const btnFechar7 = document.createElement("button");
            titulo.style = 'padding-left: 25px';
            btnModal.style = 'top: 25%';
            btnFechar7.innerHTML = `${conteudoBtnAcao}`;
            btnFechar7.style = `width: 110px; height: 33px; position: absolute; top: 82%; border-radius: 8px; left: 78%; background-color: red; border: none; cursor: pointer; ${tamanhoBotãoAcao}`;
            conteudo.appendChild(btnFechar7);
            break;
    
        default:
            break;
    }

    modal.showModal();
}

let selecioneTipoSenha = `
    <div style='width: 648px; height: 350px; display: flex; justify-content: space-evenly; align-items: center'>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer' onclick="abreModal('QR Code', qrCode, 5, 'FECHAR', false)">
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%;'> 
                <div> <i style='font-size: 6rem;' class="fa fa-qrcode"></i> </div>
                <p> QR CODE </p>
            </div>
        </div>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer' onclick="abreModal('Digitar Senha', digitarSenha, 6, 'CONCLUIR', true)">
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%;'> 
                <div> <i style='font-size: 6rem;' class="fa-solid fa-keyboard"></i> </div>
                <p> DIGITAR </p>
            </div>
        </div>
    </div>`

    // usar case 5
let qrCode = `
    <div style='width: 447px; height: 459px; display: flex; justify-content: space-evenly; align-items: center; border-radius: 0px;'>
    <p style="position: absolute; width: 240px; height: 12px; left: 103px; font-weight:500; font-size:10px; top: 55px; color: black;">Leia o Qr code abaixo para concluir sua compra</p>
        <div style='width: 242px; height: 241px; border-radius: 8px; display: flex; justify-content: center; align-items: center;'>
            <svg width="242" height="241" viewBox="0 0 242 241" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="242" height="241" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_166_122" transform="scale(0.00458925 0.00460829)"/>
                    </pattern>
                    <image id="image0_166_122" width="218" height="217" xlink:href="data:image/png;base64,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"/>
                </defs>
            </svg>
        </div>
    </div>`

    //usar case 4
let formaDePagamento = `
    <div style='width: 648px; height: 350px; display: flex; justify-content: space-evenly; align-items: center'>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer'>
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%; text-align:center'> 
                <div> <i style='font-size: 6rem;' class="fa fa-file-invoice-dollar"></i> </div>
                <p> BOLETO </p>
            </div>
        </div>
        <div style='width: 171px; height: 215px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer'>
            <div style='display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 90%;'> 
                <div> <i style='font-size: 6rem;' class="fa fa-money-bills"></i> </div>
                <p> DINHEIRO </p>
            </div>
        </div>
    </div>`

    //usar case 1
let meioDePagamento = `
    <div style='width: 648px; height: 350px; display: flex; justify-content: space-evenly; align-items: center; flex-direction: column; align-content: center; flex-wrap: wrap;'>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; margin: 0px 4px;' onclick="abreModal('Selecione o tipo de senha', selecioneTipoSenha, 4)">
            <div style='display: flex; flex-direction: column; align-items: center; height: 90%; text-align:center; justify-content: space-evenly;'; > 
                <a style="position: relative; width: 52px; height: 17px; left: 43px; top: -10px; background: #FF820F; border-radius: 0px 7px; font-size: 10pt; font-weight: 300;">Alt + 4</a>
                <div> <i style='font-size: 2.5rem;' class="fa fa-hand-holding-dollar"></i> </div>
                <p> Fidelidade </p>
            </div>
        </div>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; margin: 0px 4px;' onclick="abreModal('Selecione o número de parcelas', selecioneParcela, 1)">
            <div style='display: flex; flex-direction: column; align-items: center; height: 90%; text-align:center; justify-content: space-evenly;' > 
                <a style="position: relative; width: 52px; height: 17px; left: 43px; top: 3px; background: #FF820F; border-radius: 0px 7px; font-size: 10pt; font-weight: 300;">Alt + 1</a>
                <div> <i style='font-size: 2.5rem;' class="mdi mdi-credit-card-remove"></i> </div>
                <p> Crédito Parcelado </p>
            </div>
        </div>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; margin: 0px 4px;' onclick="abreModal('Selecione o tipo de senha', selecioneTipoSenha, 4)">
        <div style='display: flex; flex-direction: column; align-items: center; height: 90%; text-align:center; justify-content: space-evenly;'; >
                <a style="position: relative; width: 52px; height: 17px; left: 43px; top: -10px; background: #FF820F; border-radius: 0px 7px; font-size: 10pt; font-weight: 300;">Alt + 7</a> 
                <div> <i style='font-size: 2.5rem;' class="fa fa-credit-card"></i> </div>
                <p> Débito </p>
            </div>
        </div>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; margin: 0px 4px;' onclick="abreModal('Selecione o tipo de senha', selecioneTipoSenha, 4)">
            <div style='display: flex; flex-direction: column; align-items: center; height: 90%; text-align:center; justify-content: space-evenly;'; >
                <a style="position: relative; width: 52px; height: 17px; left: 43px; top: -10px; background: #FF820F; border-radius: 0px 7px; font-size: 10pt; font-weight: 300;">Alt + 2</a> 
                <div> <i style='font-size: 2.5rem;' class="fa fa-credit-card"></i> </div>
                <p> Crédito </p>
            </div>
        </div>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; margin: 0px 4px;' onclick="abreModal('QR Code', qrCode, 5, 'FECHAR', false)">
            <div style='display: flex; flex-direction: column; align-items: center; height: 90%; text-align:center; justify-content: space-evenly;'; > 
                <a style="position: relative; width: 52px; height: 17px; left: 43px; top: -10px; background: #FF820F; border-radius: 0px 7px; font-size: 10pt; font-weight: 300;">Alt + B</a>
                <div> <i style='font-size: 2.5rem;' class="fa-brands fa-pix"></i> </div>
                <p> Pix </p>
            </div>
        </div>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; margin: 0px 4px;'>
            <div style='display: flex; flex-direction: column; align-items: center; height: 90%; text-align:center; justify-content: space-evenly;'; > 
                <a style="position: relative; width: 52px; height: 17px; left: 43px; top: -7px; background: #FF820F; border-radius: 0px 7px; font-size: 10pt; font-weight: 300;">Alt + P</a>
                <div> <i style='font-size: 2.5rem;' class="mdi mdi-calculator"></i> </div>
                <p> Venda TEF </p>
            </div>
        </div>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; margin: 0px 4px;'>
            <div style='display: flex; flex-direction: column; align-items: center; height: 90%; text-align:center; justify-content: space-evenly;'; > 
                <a style="position: relative; width: 52px; height: 17px; left: 43px; top: -10px; background: #FF820F; border-radius: 0px 7px; font-size: 10pt; font-weight: 300;">Alt + 3</a>
                <div> <i style='font-size: 2.5rem;' class="fa fa-file-invoice-dollar"></i> </div>
                <p> Gerar Boleto </p>
            </div>
        </div>
        <div style='width: 136.5px; height: 136.5px; background-color: var(--corSecundaria); border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; visibility: hidden;' onclick="abreModal('Selecione o tipo de senha', selecioneTipoSenha, 4)">
        </div>
    </div>`

    //usar case 6
let digitarSenha = `
    <div style='width: 648px; height: 354px; display: flex; justify-content: center;'> 
        <input type='password' placeholder='Digite sua senha' style='background: #FFFFFF; box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.25); margin-top:100px; border-radius: 8px; width: 546px; height: 59px; padding-left: 20px; font-size: 1rem; color: #000'/>
    </div>`

    //usar case 6
let validarCodigo = `
    <div style='width: 648px; height: 354px; display: flex; justify-content: center;'> 
        <input type='text' placeholder='Digite o número do resgate' style='background: #FFFFFF; box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.25); margin-top:100px; border-radius: 8px; width: 546px; height: 59px; padding-left: 20px; font-size: 1rem; color: #000'/>
    </div>`

    //usar case 3
let escolhaDataDeVencimento = `
    <div style='width: 648px; height: 336px; display: flex; justify-content: center; align-items: center;'>
        <div style='width: 359px; height: 150px. display: flex; display: flex; justify-content: center; align-items: center;'>
            <input type='date' class='inputData' />
        </div>
    </div>`

    //usar case 6
let selecioneDesconto = `
    <div style='width: 648px; height: 336px; display: flex; justify-content: center; align-items: center;'>
        <div style='width: 359px; height: 150px. display: flex; display: flex; justify-content: center; align-items: center;'>
            <select style="position: absolute; width: 71%; color: black; top: 35%; bottom: 53%; background: #FFFFFF; box-shadow: 5px 8px 12px rgb(0 0 0 / 25%); border-radius: 17px;">
                <option class="select-items"style="color:black;" value="0" selected >Selecione o desconto</option>
                <option class="select-items"style="color:black;" value="1" >10%</option>
                <option class="select-items"style="color:black;" value="2" >20%</option>
            </select>
        </div>
    </div>`

    //usar case 6
let selecionePremio = `
    <div style='width: 648px; height: 336px; display: flex; justify-content: center; align-items: center;'>
        <div style='width: 359px; height: 150px. display: flex; display: flex; justify-content: center; align-items: center;'>
            <select style="position: absolute; width: 71%; color: black; top: 35%; bottom: 53%; background: #FFFFFF; box-shadow: 5px 8px 12px rgb(0 0 0 / 25%); border-radius: 17px;">
                <option class="select-items"style="color:black;" value="0" selected >Selecione o prêmio</option>
                <option class="select-items"style="color:black;" value="1" >Teclado gamer</option>
                <option class="select-items"style="color:black;" value="2" >Mouse Gamer</option>
                <option class="select-items"style="color:black;" value="2" >Kit Gamer</option>
            </select>
        </div>
    </div>`

    //usar case 1
let selecioneParcela = `
    <div style='width: 648px; height: 336px; display: flex; justify-content: center; align-items: center;'>
        <div style='width: 359px; height: 150px. display: flex; display: flex; flex-direction: column; justify-content: center; align-items: center;'>
            <select style="position: absolute; width: 71%; color: black; top: 35%; bottom: 53%; background: #FFFFFF; box-shadow: 5px 8px 12px rgb(0 0 0 / 25%); border-radius: 17px;">
                <option class="select-items"style="color:black;" value="0" selected >Selecione a Parcela</option>
                <option class="select-items"style="color:black;" value="1" >2x - R$5,00 S/JUROS</option>
                <option class="select-items"style="color:black;" value="2" >3x - R$3,33 S/JUROS</option>
                <option class="select-items"style="color:black;" value="2" >4x - R$2,55 C/JUROS DE 2.00%</option>
            </select>
            <button style="width: 356px; height: 59px; background-color: var(--corSecundaria); border-radius: 8px; border: none; cursor: pointer; margin-top:146px;" onclick="abreModal('Selecione o tipo de senha', selecioneTipoSenha, 4)">CONCLUIR</button>
        </div>
    </div>`

    //usar case 7
let resgatePremio = `
    <div style='width: 648px; height: 336px; display: flex; justify-content: center; align-items: center;'>
        <div style="display:flex; flex-direction: column;">
            <button style="width: 466px; height: 60.53px; background-color: var(--corSecundaria); border-radius: 8px; border: none; cursor: pointer; margin-bottom:16px;" onclick="abreModal('Validar Resgate', validarCodigo, 6, 'CONCLUIR', true)">VALIDAR NÚMERO DE RESGATE</button>
            <button style="width: 466px; height: 60.53px; background-color: var(--corSecundaria); border-radius: 8px; border: none; cursor: pointer;" onclick="abreModal('Escolha o prêmio', selecionePremio, 6, 'CONCLUIR', true)">LISTAR PRÊMIOS</button>
        </div>
    </div>`

    // usar function auto cadastro
let cadastroRapido = `
    <div style='width: 425px; height: 533.8px; border:none;'>
        <div style="width: 351.9px; height: 63px; left: 49.3px; top: 52.7px; margin-left:46px">
            <h6 style="color:#000000; font-weight: 500; font-size: 18.7px; line-height: 23px;">Seja bem-vindo ao <br> <b style="color:#000000; font-weight: 800; font-size:30.6px; line-height:37.3px"> CADASTRO RÁPIDO </b> </h6>
        </div>
        <div>
            <select style="position: absolute; width: 321.3px; height: 28.9px; left: 49.3px; top: 84.7px; background: #FFFFFF; box-shadow: 0px 0px 6.8px 1.7px rgba(0, 0, 0, 0.25); border-radius: 3.3941px; font-weight: 400; font-size: 10.1823px; line-height: 12px; color: rgba(0, 0, 0, 0.92);">
                <option class="select-items"style="color:black;" value="" selected >TIPO DO CARTÃO</option>
                <option class="select-items"style="color:black;" value="1" >Crédito</option>
                <option class="select-items"style="color:black;" value="2" >Fidelidade</option>
            </select> 
        </div>
        <div> 
            <label for="txtNomeCompleto" style="color:#000; position:absolute; top: 130px; margin-left:50px; font-weight: 400; font-size: 10.1823px; line-height: 12px;"> NOME COMPLETO</label>
            <input type='text' class="inputAutoCadastro" id="txtNomeCompleto" name="txtNomeCompleto" style='font-weight:500; border:none; position: absolute; width: 322.07px; height: 19.69px; left: 49.3px; top: 148.5px; background: #E1E1E1; border-radius: 3.3941px; border-bottom: 0.678819px solid #0465B3; color:#000;'/>
        </div>
        <div> 
            <label for="txtEmail" style="color:#000; position: absolute; width: 119.56px; height: 15.61px; left: 50.87px; top: 185.89px;  font-weight: 400; font-size: 10.1823px; line-height: 12px;">E-MAIL</label>
            <input type='text' class="inputAutoCadastro" id="txtEmail" name="txtEmail" style='font-weight:500; border:none; position: absolute; width: 322.07px; height: 19.69px; left: 49.37px; top: 203.5px; background: #E1E1E1; border-radius: 3.3941px; border-bottom: 0.678819px solid #0465B3; color:#000;'/>
        </div>
        <div> 
            <label for="txtCpf" style="position: absolute; width: 119.56px; height: 15.61px; left: 50.87px; top: 240.88px; font-style: normal; font-weight: 400; font-size: 10.1823px; line-height: 12px; color: rgba(0, 0, 0, 0.92);">CPF</label>
            <input type='text' class="inputAutoCadastro maskCpf" id="txtCpf" name="txtCpf" style='font-weight:500; position: absolute; width: 322.07px; height: 19.69px; left: 49.37px; top: 258.14px; background: #E1E1E1; border-radius: 3.3941px; border:none; border-bottom: 0.678819px solid #0465B3; color:#000;'/>
        </div>
        <div style="display:flex;">
            <div>
                <label for="txtDataNascimento" style="position: absolute; width: 135.37px; height: 15.61px; left: 49.37px; top: 295.52px; font-style: normal; font-weight: 400; font-size: 10.1823px; line-height: 12px; color: rgba(0, 0, 0, 0.92);">DATA DE NASCIMENTO</label>
                <input type='date' class="inputAutoCadastro" id="txtDataNascimento" name="txtDataNascimento"style='font-weight:500; position:absolute; width: 151.7px; height: 19.69px; left: 50.12px; top: 313.14px; background: #E1E1E1; border-radius: 3.3941px; border:none; border-bottom: 0.678819px solid #0465B3; color:#000;'/>
            </div>
            <div>
                <label for="txtCelular" style="position: absolute; width: 119.56px; height: 15.61px; left: 221.28px; top: 295.52px; font-style: normal; font-weight: 400; font-size: 10.1823px; line-height: 12px; color: rgba(0, 0, 0, 0.92);">CELULAR</label>
                <input type='text' class="inputAutoCadastro" id="txtCelular" name="txtCelular" style='font-weight:500; position: absolute; width: 151.7px; height: 19.69px; left: 220.53px; top: 313.78px; background: #E1E1E1; border-radius: 3.3941px; border:none; border-bottom: 0.678819px solid #0465B3; color:#000;'/>
            </div>
        </div>
        <div style="position:absolute; top:-35px;">
            
            <label for="sexoMasculino" style="position: absolute; width: 105.37px; height: 15.61px; left: 49.37px; top: 388.12px; font-style: normal; font-weight: 500; font-size: 10.1823px; line-height: 12px; color: rgba(0, 0, 0, 0.92);">SEXO:</label>
            <input type="radio" style="position: absolute; width: 7.86px; height: 7.14px; left: 49.37px; top: 405.8px; border: 0.8925px solid #000000;" id="sexoMasculino" name="fav_language" value="M">
            <label for="sexoMasculino" style="position: absolute; width: 54.27px; height: 12px; left: 63.85px; top: 407.42px; font-style: normal; font-weight: 400; font-size: 9.97865px; line-height: 12px; color: rgba(0, 0, 0, 0.92);" >MASCULINO</label>
            
            <input type="radio" style="position: absolute; width: 7.86px; height: 7.14px; left: 126.73px; top: 405.8px; border: 0.8925px solid #000000;" id="sexoFeminino" name="fav_language" value="F">
            <label for="sexoFeminino" style="position: absolute; width: 44.91px; height: 12px; left: 141.21px; top: 407.42px; font-style: normal; font-weight: 400; font-size: 9.97865px; line-height: 12px; color: rgba(0, 0, 0, 0.92);">FEMININO</label>
            
            <input type="radio" style="position: absolute; width: 7.86px; height: 7.14px; left: 196.09px; top: 405.8px; border: 0.8925px solid #000000;" id="sexoNaoDefinido" name="fav_language" value="I">
            <label for="sexoNaoDefinido" style="position: absolute; width: 120.19px; height: 12px; left: 210.57px; top: 407.42px; font-style: normal; font-weight: 400; font-size: 9.97865px; line-height: 12px; color: rgba(0, 0, 0, 0.92);">PREFIRO NÃO DEFINIR</label>
            
            <input type="radio" style="position: absolute; width: 7.86px; height: 7.14px; left: 334.85px; top: 405.8px; border: 0.8925px solid #000000;" id="sexoOutro" name="fav_language" value="O">
            <label for="sexoOutro" style="position: absolute; width: 31.81px; height: 12px; left: 350.33px; top: 407.42px; font-style: normal; font-weight: 400; font-size: 9.97865px; line-height: 12px; color: rgba(0, 0, 0, 0.92);" >OUTRO</label>
        </div>
        <button style="cursor:pointer; border:none; background-color: var(--corSecundaria);position: absolute; width: 219.3px; height: 35.09px; left: 100.3px; top: 448.8px; background: #0465B2; border-radius: 24.6356px;" onclick="modalSucesso()">CADASTRAR</button>
    </div>`

// abreModal('forma de pagamento', EscolhaDataDeVencimento);

// document.querySelector("#btn").addEventListener("click", () => {
//     abreModal('forma de pagamento', EscolhaDataDeVencimento, 3, 'GERAR BOLETO');
// })


function fechaAbreMenu () {
    const menu = document.querySelector('.menuLateral');
    menu.classList.toggle('fechaAbreMenu')

    const iconeFechamentoMenu = document.querySelector('.iconeFechamentoMenu');
    iconeFechamentoMenu.classList.toggle('fa-rotate-180')

    const logoMenu = document.querySelector('.logoMenu');
    const iconeItensMenu = document.querySelectorAll('.itensMenu li i');
    const darkMode = document.querySelector('.darkMode');
    const logOut = document.querySelector('.logOut');
    const iconeLogOut = document.querySelector('.logOut i');
    const textoLogOut = document.querySelector('.logOut p');

    if(menu.classList.contains('fechaAbreMenu')) {
        logoMenu.style = 'display: none';
        iconeFechamentoMenu.style = 'right: 9%;';
        iconeItensMenu.forEach(e => {
            e.style = 'margin-left: 83%;';
            e.parentElement.querySelector('p').style = 'opacity: 0';
        });
        darkMode.style = 'flex-direction: row-reverse;';
        logOut.style = 'width: 17%; margin-left: 75%;';
        iconeLogOut.style = 'left: 25%; top: 25%;';
        textoLogOut.style = 'display: none';
    } else {
        logoMenu.style = '';
        iconeFechamentoMenu.style = '';
        iconeItensMenu.forEach(e => {
            e.style = '';
            setTimeout(() => e.parentElement.querySelector('p').style = '', 200);
        });
        darkMode.style = '';
        logOut.style = '';
        iconeLogOut.style = '';
        textoLogOut.style = '';
    }
}

function darkMode () {
    document.querySelector('body').classList.toggle('darkModetoggle');
    document.querySelector('.darkMode i').classList.toggle('fa-moon');
}

function autoCadastro (cont) {
    const modal = document.querySelector("dialog");
    const divCabecalho = document.getElementById('divCabecalho')
    divCabecalho.classList.remove('cabecalho')
    const conteudo = document.querySelector("dialog #conteudo");
    conteudo.innerHTML = '';

    conteudo.innerHTML += `${cont}`;

    modal.style = 'padding:0; border:none; border-radius:0px;'

    modal.showModal();
}

function modalSucesso (cont) {

    const modal = document.querySelector("dialog");
    const divCabecalho = document.getElementById('divCabecalho')
    divCabecalho.classList.remove('cabecalho')
    const conteudo = document.querySelector("dialog #conteudo");
    conteudo.innerHTML = '';

    conteudo.innerHTML += `${cont}`;

    modal.style = 'padding:0; border:none; border-radius:0px;'

    modal.showModal();
}

// abrir a tela de cadastro rapido
document.querySelector("#btn").addEventListener("click", () => {
    autoCadastro(cadastroRapido);
})

// document.querySelector("#btn").addEventListener("click", () => {
//     abreModal('Meio de Pagamento', meioDePagamento, 1, 'CONCLUIR', true);
// })