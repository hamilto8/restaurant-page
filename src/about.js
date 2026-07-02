const aboutPage = () => {
    return `
        <div class="about-page animate-fade-in">
            <h1 class="page-title">Mister MacGuffin's</h1>
            <p class="tagline">Serving Mysterious Dinners Since 1963</p>
            
            <div class="story-panel glass-panel">
                <h2>Our Enigmatic Origin</h2>
                <p class="story-text">
                    Established in 1963 under circumstances that remain strictly classified, Mister MacGuffin's Mystery Diner is the world's premier establishment for enigmatic gastronomy. Our recipes are redacted, our ingredients are confidential, and our kitchen operates in absolute secrecy.
                </p>
                <p class="story-text">
                    Every dish is a puzzle, every flavor a clue. We do not ask what you want; we serve you what your destiny dictates. Dine with us, and decode the ultimate culinary mystery.
                </p>
            </div>
            
            <div class="background-div">
                <img class="hero-image" src="images/pizza.jpg" alt="A delicious, fresh-baked artisanal pizza emerging from a glowing brick oven" />
            </div>
            
            <footer class="footer">
                <p>© 1963-${new Date().getFullYear()} Mister MacGuffin's Diner. Crafted for mystery.</p>
            </footer>
        </div>
    `;
}

export default aboutPage;