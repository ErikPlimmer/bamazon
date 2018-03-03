  
const mys = require(`mysql`);
const ask = require(`inquirer`);

const connectionConfig = {
    host: `127.0.0.1`,
    port: `3306`,
    user: `root`,
    password: `1744`,
    database: `bamazon_db`
}

const conn = mys.createConnection(connectionConfig);



function getItems(callback){
    conn.query("SELECT * FROM products",(err,res)=>{
        if(err)
            throw(err);
        let product_name = [];
        res.forEach(i=>product_name.push("\n" +" ID-" + i.id + " " + i.product_name + " Price: $"+ i.price + "\n" +  " We Currently have " + i.stock_quantity + " in stock" + "\n"));

        console.log("\n", "\n", "Products:" ,product_name.join(' '));

    });
    productListPrompt();

}

function productListPrompt(){

    
        ask.prompt([
            {
            name: "productList",
            message: "What item would you like ?",
            type: "input"
        },{ 
            name: "number",
            message: "How many would you like to buy?",
            type: "input"
        }
        ]).then(function(res){
            console.log(res);
        });
        conn.end();
}


function getId(callback) {
    conn.query("SELECT * FROM products",(err,res)=>{
        if(err) throw(err);
        let items = [];
        res.forEach(i=>items.push(i.id));
        // callback(items);    
        console.log(items);
    });
}

// getId();
getItems();





