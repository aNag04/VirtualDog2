class Food{
    constructor(){
        this.foodStock =0
        this.lastFeed;
        this.image = loadImage("Milk.png")

    }
    updateFoodStock(fs){
        this.foodStock = fs
    }
    getFeedTime(lastFeed){this.lastFeed = lastFeed}
    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1
        }
    }
    getFoodStock(){
        return this.foodStock
    }
    display(
        
    )
}