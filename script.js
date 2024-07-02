const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const resultContainer = document.querySelector('.suggestions');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
 return fruits.filter((fruit) => fruit.toLowerCase().includes(str.toLowerCase())
)
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}



function showSuggestions(results, inputVal) {
		// Clear any existing suggestions
		while (suggestions.firstChild) {
			suggestions.removeChild(suggestions.firstChild);
		}
		results.forEach((result) => {
			if (result.toLowerCase().includes(inputVal)) {
				const list = document.createElement('li');
				list.textContent = result;
				suggestions.appendChild(list);
				resultContainer.appendChild(suggestions);
			}
		})
}

function highlightSuggestion(e) {
	// Reset the background color of all suggestions
	suggestions.querySelectorAll('li').forEach(item => item.style.backgroundColor = ''
	);
  // Highlight the current suggestion
	e.target.style.backgroundColor = 'grey';
}

function useSuggestion(e) {
 input.value =	e.target.textContent;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('click', useSuggestion);