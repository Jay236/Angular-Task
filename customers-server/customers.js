var faker = require('faker')

function customerData(){
    var customers= []
    for(var id = 0; id < 50; id++){
    var name = faker.name.findName();
    var state = faker.address.city();
        
    customers.push({
       "id": id,
      "Name": name,
      "State": state
    })
}
   return {"customers": customers} 
    
}
module.exports = customerData
//console.log('Name: ' + name + '\n' ' State: '+ state);