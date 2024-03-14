function returnAddButtons(){ // Retorna variáveis com os botões para adição
    let addButtons = [
        document.getElementById('addCG'), document.getElementById('addCL'),
        document.getElementById('addCoG'), document.getElementById('addCoL'),
        document.getElementById('addGG'), document.getElementById('addGL')
    ]; return addButtons;
}
function returnSubButtons(){ // Retorna variáveis com os botões para subtração
    let subButtons = [
        document.getElementById('subCG'), document.getElementById('subCL'),
        document.getElementById('subCoG'), document.getElementById('subCoL'),
        document.getElementById('subGG'), document.getElementById('subGL')
    ]; return subButtons;
}
function returnQuantValue(){ // Retorna as quantidades selecionadas de cada item
    let quantValues = [
        document.getElementById('quantCG'), document.getElementById('quantCL'),
        document.getElementById('quantCoG'), document.getElementById('quantCoL'),
        document.getElementById('quantGG'), document.getElementById('quantGL')
    ]; return quantValues;
}
function returnItemsValue(){ // Retorna os valores de cada item
    let unitValor = [10, 5, 10, 4, 10, 4.50]
    // Cerveja Garrafa, Cerveja Lata, Coca Garrafa, Coca Lata, Guaraná Garrafa, Guaraná Lata;
    return unitValor;
}
function returnItemTypes(){
    let itemTypes = ['CG', 'CL', 'CoG', 'CoL', 'GG', 'GL'];
    return itemTypes;
}

function getChecked(){ // Retorna booleanos com os valores das checkboxes
    var arrayChecks = [
        document.querySelector('#CerGar').checked,
        document.querySelector('#CerLat').checked,
        document.querySelector('#CocGar').checked,
        document.querySelector('#CocLat').checked,
        document.querySelector('#GuaGar').checked,
        document.querySelector('#GuaLat').checked
    ]
    enableButton(arrayChecks);
    disableButton(arrayChecks);
}

function enableButton(input){ // Habilita o botão para adicionar mais itens
    let arrayChecks = input;
    let addButtons = returnAddButtons();
    for (i = 0; i < arrayChecks.length; i++)
    {
        if (arrayChecks[i] == true)
        {
            addButtons[i].disabled = '';
        }
    }
}
 
function disableButton(input){ // Desabilita o botão para adicionar itens
    let arrayChecks = input;
    let addButtons = returnAddButtons();
    for (i = 0; i < arrayChecks.length; i++)
    {
        if (arrayChecks[i] == false)
        {
            addButtons[i].disabled = 'true';
        }
    }
}

function enableSubButton(newValue, input){ // Habilita o botão para tirar itens
    if (newValue >= 1)
    {
        let newId = input.id.split('add'); newId[0] = 'sub';
        let elementId = newId.join('');
        document.getElementById(elementId).disabled = '';
    }
}

function disableSubButton(newValue, input){ // Desabilita o botão para tirar itens
    if (newValue == 0)
    {
        document.getElementById(input.id).setAttribute('disabled', 'true');
    }
}

function addToQuant(input){ // Adiciona na quantidade de itens 
    let itemTypes = returnItemTypes();
    let newId = input.id.split('add'); newId[0] = 'quant';
    let arrayToChange = itemTypes.indexOf(newId[1]);
    keepQuants(arrayToChange);
    console.log(arrayToChange);
    let elementId = newId.join('');
    let elementFull = document.getElementById(elementId);
    elementFull.removeAttribute('readonly');
    elementFull.value++;
    elementFull.setAttribute('readonly', true);
    let newValue = elementFull.value;
    enableSubButton(newValue, input);
}

function subFromQuant(input){ // Subtrai da quantidade de itens
    let newId = input.id.split('sub'); newId[0] = 'quant';
    let elementId = newId.join('');
    let elementFull = document.getElementById(elementId);
    elementFull.removeAttribute('readonly');
    elementFull.value--;
    elementFull.setAttribute('readonly', true);
    let newValue = elementFull.value;
    disableSubButton(newValue, input); 
}

var quants = [0,0,0,0,0,0];

function keepQuants(arrayToChange){ // Atualiza a quantidade de cada item selecionado
    quants[arrayToChange]++;
    return quants;
}

function sumFinalValue(){ //Soma o valor total dos itens selecionados
    let unitValor = returnItemsValue();
    let quants = keepQuants();
    let sum = 0
    for (i = 0; i < unitValor.length; i++)
    {
        sum += unitValor[i] * quants[i];
        console.log(unitValor[i], quants[i]);
    } 
    document.getElementById('valorFinal').innerHTML = 'Preço: R$' + sum;
    console.log('finalizado');
}

