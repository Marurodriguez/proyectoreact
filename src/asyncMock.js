const products = [  
    {
    id:1, 
    name:"Aro naranja",
    category:"Aros",
    price:"3500",
    description: "Aro en vidrio flameado transparente y naranja",
    image:"./images/aroID1.png",
    stock:10,

    },

    {
        id:2, 
        name:"Aro turquesa",
        category:"Aros",
        price:"3500",
        description: "Aro en vidrio flameado transparente y turquesa",
        image:"./images/aroID2.png",
        stock:10,
    
        },
    
        {
            id:3, 
            name:"Dije violeta",
            category:"Dijes",
            price:"5000",
            description: "Dije en vidrio flameado transparente y violeta",
            image:"./images/dijeID3.png",
            stock:10,
        
            }

]

export const getProductsFromBD = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}