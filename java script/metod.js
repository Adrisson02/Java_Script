// Método forEach() 
const frutas = ['apple', 'orange', 'cherry']; frutas.forEach(minhaFuncao); 
 
function minhaFuncao(item, index) {     console.log(`Índice: ${index}`);     console.log(`Elemento: ${item}`); } 

// Métodos forEach() com Arrow Function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
    console.log(`Índice: ${index}`);
    console.log(`Elementos: ${item}`);
});
 
// forEach() com array de objetos 
console.clear(); 
const tarefas = [     
    {         
    id: 1,         
    texto: 'Levar o lixo para fora',         
    isCompleted: true,     
},     
    {         
        id: 2,         
        texto: 'Encontrar com o chefe',         
        isCompleted: true,     
    },     
    {        
        id: 3,         
        texto: 'Consulta no dentista',         
        isCompleted: false,     
}, 
];
tarefas.forEach((teste) => console.log(teste.texto)); 
 
// Método map() 
const numeros = [4, 9, 16, 25]; 
const newArray = numeros.map(Math.sqrt); 

console.clear(); 
console.log('Números:'); 
console.log(numeros); 
console.log('Novo array:'); 
console.log(newArray); 
 
// Outro exemplo do map 
console.clear(); 
const mapText = tarefas.map((valor) => {     
    return valor.texto; });
     //Imprime o novo array 
     console.log(mapText); 

     //Métodos filter
     console.clear();
     const idades = [32,33,16,40];

     let filtroIdade = idades.filter((idade) => {
         return idade >= 18;
     });
     console.log(filtroIdade);

     //Outros exemplos do filter
     console.clear();
     const filtroCompletas = tarefas.filter((item)=> {
        return item.isCompleted === true;
    }) ;

    console.log(filtroCompletas);

    //Métodos find()
    console.clear();
    const meuArray = [
        { nome: 'apples', quantidade: 2},
        {nome: 'bananas', quantidade: 0},
        {nome: 'cerejas', quantidade: 5},
    ];

    console.log(
        meuArray.find((frutas) => {
            return frutas.nome === 'cerejas';
        })
    );