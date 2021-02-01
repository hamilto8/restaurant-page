const displayMenu = () => {
    return `
    <div class="menu">
        <div class="foods">
            <h4>Foods:</h4>
            <div class="menu-item">
                <img src="/images/salad.png"/>
                <p class="food-description">Salad: $1.50</p>
            </div>
            <div class="menu-item">
                <img src="/images/soup.png"/>
                <p class="food-description">Soup: $7.59</p>
            </div>
            <div class="menu-item">
                <img src="/images/pizza-sm.png"/>
                <p class="food-description">Pizza: $8.99</p>
            </div>
            <div class="menu-item">
                <img src="/images/pasta.png"/>
                <p class="food-description">Pasta: $9.99</p>
            </div>
        </div>
        </div>
        <div class="background-div">
            <img class="hero-image" src="/images/restaurant.jpg" />
        </div>
    `;
}

export default displayMenu