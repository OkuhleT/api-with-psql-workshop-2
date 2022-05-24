document.addEventListener('alpine:init', () => {
    Alpine.data('container', () => ({
        garments: [],
        genderFilter: '',
        seasonFilter: '',
        maxPrice: 0,

        init() {
            this.filterData()
            this.filterPrice()
        },
        filterData() {
            
        fetch(`/api/garments?gender=${this.genderFilter}&season=${this.seasonFilter}`)
            .then(r => r.json())
            .then(userData => {
                console.log(userData);
                this.garments = userData.data

            }).catch(err => console.log(err))

    },
    filterPrice(){
             console.log(this.maxPrice);
        fetch(`/api/garments/price=${this.maxPrice}`)
            .then(r => r.json())
            .then(userData => {
                console.log(userData);
                this.garments = userData.data

            }).catch(err => console.log(err))


            
    }
        
    }));
})