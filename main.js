const app = Vue.createApp({
    //data: function(){ // same as
    data(){ //ES6 Shorthand
        return {
            product: 'Boots',
            description: 'Agility boots that increase your walking speed',
        }
    } 
})