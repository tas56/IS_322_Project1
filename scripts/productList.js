(function (){

    let mockDatabase = [
        {id: 1, name: "Tree Of Life", category: "silver", price: "$48.50", description:"Super cool space pendant", sale: false, image: "img/treeOfLife.jpg"},
        {id: 2, name: "Peace", category: "gold", price: "$28.50", description:"", image: "img/peace.jpg"},
        {id: 3, name: "Milky Way", category: "glass", price: "$18.50", description:"", image: "img/space.jpg"},
        {id: 4, name: "Dark Gems", category: "glass", price: "$99.50", description:"", image: "img/darkgems.jpg"},
        {id: 5, name: "Purple Heart", category: "glass", price: "$75.50", description:"", image: "img/purpleheart.jpg"},
        {id: 6, name: "Gold Heart", category: "gold", price: "$48.50", description:"", image: "img/goldheart.jpg"},
        {id: 7, name: "Anchor", category: "gold", price: "$46.50", description:"", image: "img/anchor.jpg"},
        {id: 8, name: "White Marble", category: "glass", price: "$43.50", description:"", image: "img/marble.jpg"},
        {id: 9, name: "Shamrock", category: "silver", price: "$49.50", description:"", image: "img/shamrock.jpg"},
    ];

    function renderList(results){
        let productSection = document.querySelector('#products');

        productSection.innerHTML = '';

        let productList = results.map( result => {
            return '<div class="card">' +
                '  <img src=" ' + result.image + ' " alt="">' +
                '  <div class="card-container">' +
                '    <h4><b> ' + result.name + ' </b></h4>' +
                '    <p> ' + result.price + '<a href="#">learn more</a></p>' +
                '  </div>' +
                '</div>'
        });

        productList.forEach( row => { productSection.innerHTML += row; });
    }

    renderList(mockDatabase);


    document.querySelector('#orderBy').addEventListener('change',  (event) => {
        orderBy(event.target.value);
    });

    function orderBy(sortValue){
        if(sortValue === 'name'){
            const sortedCompanies = mockDatabase.sort((a,b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB ){
                    return -1;
                } else return 1;
            });
            renderList(sortedCompanies);
        } else if (sortValue === 'lowPrice'){
           const sortedLowToHigh = mockDatabase.sort( (a,b) =>{
               if(a.price > b.price){
                   return 1;
               } else return -1;
           });
            renderList(sortedLowToHigh);
        } else if (sortValue === 'highPrice'){
            const sortedHighToLow = mockDatabase.sort( (a,b) =>{
                if(b.price > a.price){
                    return 1;
                } else return -1;
            });
            renderList(sortedHighToLow);
        }
    }




})();