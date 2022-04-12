
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.



function cardCreate(filteredIcons){
	const container = document.getElementById('container');
	// container.innerHTML = '';
	let row = document.getElementById('row');
	for(let i=0; i < filteredIcons.length; i++){
		
		let card = document.createElement('div');
		card.innerHTML = ` 
		<div class="col square rounded">
                    <i class="fa-solid fa-${icons[i].name} ${icons[i].color}">
					<p class="sub">${icons[i].name}</p>
					
                    </i>
                </div>
		`


		container.append(row);
		row.append(card);
	}
	}

cardCreate(icons);

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

let select = document.getElementById('iconCells');
// PRENDO IL VALORE INIZIALE
let scelta = select.options[select.selectedIndex].value;
// console.log(scelta)


let currentValue = document.getElementById("iconCells");
currentValue.addEventListener('change',cicloCard);


function cicloCard(){
	const iconType = this.value;
	
	const filteredIcons = icons.filter((icona)=>{
		return icona.type === iconType || !iconType 
	});
	// console.log(iconType)
	// console.log(filteredIcons)
	// if(iconType === ''){

	// 	cardCreate(icons)
	// }else{
	// 	cardCreate(filteredIcons)
	// }
    cardCreate(filteredIcons)
};
