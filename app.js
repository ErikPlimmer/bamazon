  
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
            name: "whatId",
            message: "What item would you like ?",
            type: "input"
        },{ 
            name: "number",
            message: "How many would you like to buy?",
            type: "input"
        }
        ]).then(function(answer){
            conn.query("SELECT * FROM products WHERE ?", { id:  answer.whatId }, function(err, res) {
                if(err) throw(err);
                console.log(res[0].stock_quantity);
                let customerOrder = res[0].stock_quantity - answer.number;
                console.log(customerOrder);
                console.log(answer.whatId);
                let query = "UPDATE products SET stock_quantity ? WHERE id ?";
                conn.query (query, [customerOrder, answer.whatID], function(err, result) {
                    console.log(result);
                });
              
            });
           
        });
         
}



function getStock() {
    conn.query("SELECT * FROM products",(err,res)=>{
        if(err) throw(err);
        let stockQ = [];
        res.forEach(i=>stockQ.push(i.stock_quantity));
        // callback(stockQ);    
        console.log(stockQ);
    });
}

getItems();
// conn.end();




