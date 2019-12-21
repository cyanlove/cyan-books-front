const books = [
	{
		id: 1,
		title: "Pol Colomo y sus amigos",
		slug: "pol-colomo-y-sus-amigos",
		authorId: 1,
		author: "Jaco Baldrich",
		genre: "Children",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 2,
		title: "Vida y Azañas de Pol Colomo",
		slug: "vida-y-azañas-de-pol-colomo",
		authorId: 2,
		author: "Pol Colomo",
		genre: "Biography",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 3,
		title: "Cuando Pol Colomo entra en tu vida",
		slug: "cuando-pol-colomo-entra-en-tu-vida",
		authorId: 1,
		author: "Jaco Baldrich",
		genre: "Philosophy",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 4,
		title: "¿Por qué Pol Colomo y no Juan Palomo?",
		slug: "por-que-pol-colomo-y-no-juan-palomo",
		authorId: 3,
		author: "Uri Ustrell",
		genre: "Cooking",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 5,
		title: "Pol Colomo, solamente",
		slug: "pol-colomo-solamente",
		authorId: 2,
		author: "Pol Colomo",
		genre: "Poetry",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 6,
		title: "|*()|_ {()|_()|`´|(), el hacker",
		slug: "pol-colomo-el-hacker",
		authorId: 3,
		author: "Uri Ustrell",
		genre: "Software",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 7,
		title: "Un nuevo caso para: Pol Colom(b)o",
		slug: "un-nuevo-caso-para-pol-colombo",
		authorId: 1,
		author: "Jaco Baldrich",
		genre: "Crime",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 8,
		title: "¿Qué come Pol Colomo?",
		slug: "que-come-pol-colomo",
		authorId: 1,
		author: "Jaco Baldrich",
		genre: "Suspense",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 9,
		title: "Conviértete en maestro del póker con Pol Colomo",
		slug: "conviertete-en-maestro-del-poker-con-pol-colomo",
		authorId: 2,
		author: "Pol Colomo",
		genre: "Self help",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	},
	{
		id: 10,
		title: "Pol Colomo Fundamentals",
		slug: "pol-colomo-fundamentals",
		authorId: 3,
		author: "Uri Ustrell",
		genre: "Encyclopedia",
		cover: "https://www.polcolomo.com/assets/img/pol-bg-home-mbl.png"
	}
];

const newBook = {
	id: null,
	title: "",
	authorId: null,
	author: "",
	slug: "",
	genre: "",
	cover: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
	newBook,
	books
};
