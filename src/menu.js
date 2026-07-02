const displayMenu = () => {
    return `
        <div class="menu-page animate-fade-in">
            <h1 class="page-title">The Cryptic Menu</h1>
            <p class="tagline">Every dish is a puzzle, every flavor a clue.</p>
            
            <div class="menu-grid">
                <div class="menu-item glass-panel">
                    <div class="menu-item-image-wrapper">
                        <img src="images/salad.png" alt="A vibrant, fresh salad featuring leafy greens, heirloom tomatoes, and edible flowers" />
                    </div>
                    <div class="menu-item-info">
                        <h3>The Cipher Garden Salad</h3>
                        <p class="food-description">Crisp seasonal botanicals, microgreens, heirloom tomatoes, and a cryptographic citrus-herb vinaigrette.</p>
                        <div class="menu-item-footer">
                            <span class="price">$11.50</span>
                        </div>
                    </div>
                </div>
                
                <div class="menu-item glass-panel">
                    <div class="menu-item-image-wrapper">
                        <img src="images/soup.png" alt="A rich mushroom soup garnished with microgreens and truffle oil" />
                    </div>
                    <div class="menu-item-info">
                        <h3>Whispering Truffle Soup</h3>
                        <p class="food-description">Slow-simmered wild forest mushrooms, roasted garlic, and black truffle essence, served with toasted rustic sourdough.</p>
                        <div class="menu-item-footer">
                            <span class="price">$14.59</span>
                        </div>
                    </div>
                </div>
                
                <div class="menu-item glass-panel">
                    <div class="menu-item-image-wrapper">
                        <img src="images/pizza-sm.png" alt="A hot stone-baked pizza with melted mozzarella, basil leaves, and pepperoni" />
                    </div>
                    <div class="menu-item-info">
                        <h3>Enigma Stone-Baked Pizza</h3>
                        <p class="food-description">Fior di latte mozzarella, rich San Marzano tomato reduction, secret mountain herbs, and optional spicy calabrian salami.</p>
                        <div class="menu-item-footer">
                            <span class="price">$18.99</span>
                        </div>
                    </div>
                </div>
                
                <div class="menu-item glass-panel">
                    <div class="menu-item-image-wrapper">
                        <img src="images/pasta.png" alt="A beautifully plated nest of squid ink pasta topped with plump shrimp and fresh herbs" />
                    </div>
                    <div class="menu-item-info">
                        <h3>Nebula Ink Linguine</h3>
                        <p class="food-description">Hand-crafted black squid ink linguine, pan-seared wild gulf shrimp, and a shimmering saffron-garlic white wine emulsion.</p>
                        <div class="menu-item-footer">
                            <span class="price">$22.99</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="background-div">
                <img class="hero-image" src="images/restaurant.jpg" alt="A dimly lit, luxurious restaurant dining room with glowing candle lamps" />
            </div>
            
            <footer class="footer">
                <p>© 1963-${new Date().getFullYear()} Mister MacGuffin's Diner. Crafted for mystery.</p>
            </footer>
        </div>
    `;
}

export default displayMenu;