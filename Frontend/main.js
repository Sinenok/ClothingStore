const itemData = [
    {
        imgSrc: 'img/2.webp',
        price: 'dsadsadsadsadadasd',
        article: 'wwsadsadsadsw',
        description: 'zzz',
        btnMinus: '-',
        btnPlus: '+'
    },
    {
        imgSrc: 'img/3.webp',
        price: '2334',
        article: '234',
        description: 'zzz',
        btnMinus: '-',
        btnPlus: '+'
    },
    {
        imgSrc: 'img/2.webp',
        price: 'qqq',
        article: '234',
        description: 'zzz',
        btnMinus: '-',
        btnPlus: '+'
    }
];

const tableClothes = document.querySelectorAll('table')[0]
const tableRowe = document.createElement('tr')
tableClothes.append(tableRowe)


function couter(){
    const productBtns = document.querySelectorAll('.counter_btn');
    productBtns.forEach(productBtn => {
    productBtn.addEventListener('click', () => {
        const direction = productBtn.dataset.direction;
        const busket = this.document.querySelector('.counter_value');
        const currentBusketValue = +busket.value;
        let newtBusketValue;  

        if (direction === 'plus')
            newtBusketValue = currentBusketValue + 1;

        if (direction === 'minus')
            newtBusketValue = currentBusketValue - 1 > 0 ? currentBusketValue - 1 : 0;
        
        busket.value = newtBusketValue;
    });
});
}

function createTableElements(arrTegs){
    let arrOut = []
    arrTegs.forEach(teg => {
        let element = document.createElement(teg)
        arrOut.push(element)
    })
    return arrOut
}

function setTableElements(arrTags){
    let indexNumber = 0
    let tableColumn
    let divBlockText
    let divBtnMinus
    let divBtnPlus
    arrTags.forEach(tag => {
        indexNumber++

        if (indexNumber === 1){
            tableRowe.append(tag)    ///исправил с tableRow в let
            tableColumn = tag
        }
        
        if (indexNumber === 2)
            tableColumn.append(tag)

        if (indexNumber === 3){
            tableColumn.append(tag)
            tag.className = 'table-clothes_text'
            divBlockText = tag
        }

        if (indexNumber === 4){
            divBlockText.append(tag)
            tag.className = 'price'
        }
            
        if (indexNumber === 5){
            divBlockText.append(tag)
            tag.className = 'table-clothes_btn-minus'
            divBtnMinus = tag
        }

        if (indexNumber === 6){
            tag.className = 'counter_btn'
            divBtnMinus.append(tag)
            tag.dataset.direction = 'minus'
        }
        
        if (indexNumber === 7){
            divBlockText.append(tag)
            tag.className = 'table-clothes_btn-plus'
            divBtnPlus = tag
        }
        
        if (indexNumber === 9){
            tag.className = 'counter_btn'
            divBtnPlus.append(tag)
            tag.dataset.direction = 'plus'
        } 
        
        if (indexNumber === 10){
            divBlockText.append(tag)
            tag.className = 'art'
        }
        
        if (indexNumber === 12){
            divBlockText.append(tag)
            tag.className = 'description'
        }  
    })
    return tableColumn
}

function setTableContent(tableColumn, itemData){
    tableColumn.childNodes.forEach(itemColumn => {
        if (itemColumn.tagName === 'IMG'){
            itemColumn.src = itemData.imgSrc
        }
        else if (itemColumn.className === 'table-clothes_text'){
            itemColumn.childNodes.forEach(item => {
                if (item.className === 'price'){
                    console.log(item);
                    item.textContent = itemData.price
                }
                else if (item.className === 'art'){
                    item.textContent = itemData.article
                }
                else if (item.className === 'art'){
                    item.textContent = itemData.article
                }
                else if (item.className === 'description'){
                    item.textContent = itemData.description
                }
                else if (item.className === 'table-clothes_btn-minus'){
                    item.childNodes.forEach(itemBtnMinus => {
                        itemBtnMinus.textContent = itemData.btnMinus
                    })
                }
                else if (item.className === 'table-clothes_btn-plus'){
                    item.childNodes.forEach(itemBtnPlus => {
                        itemBtnPlus.textContent = itemData.btnPlus
                    })
                }
            })
        }
    })
    return tableColumn
}

function addTableElemens(tableColumn, tableRow){//foreach
    let cloneNode = tableColumn.cloneNode(true);
    tableRow.appendChild(cloneNode);
    return tableRow
}


//Создание 1 ячейки
const arrTagString = ['td', 'img', 'div', 'span', 'div', 'button', 'div', 'br', 'button', 'span', 'br', 'span']
const arrTags = createTableElements(arrTagString)
let firstColumn = setTableElements(arrTags)
// let clon = firstColumn.cloneNode(true)
// tableRowe.append(clon)

//Создание второй ячейки
const arrTagStringSecond = ['td', 'img', 'div', 'span', 'div', 'button', 'div', 'br', 'button', 'span', 'br', 'span']
const arrTagsSecond = createTableElements(arrTagStringSecond)
setTableElements(arrTagsSecond, tableClothes)

//Заполнение первой ячейки элементами
const getFirstTableColumn = tableClothes.querySelectorAll('td')[0]
let firstTableColumn = setTableContent(getFirstTableColumn, itemData[0])

//Заполнение второй ячейки элементами
const getSecondTableColumn = tableClothes.querySelectorAll('td')[1]
let secondTableColumn = setTableContent(getSecondTableColumn, itemData[1])

// Клонирование и добавление ячеек
addTableElemens(firstTableColumn, tableRowe)
addTableElemens(secondTableColumn, tableRowe)


couter()