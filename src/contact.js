const contactUs = () => {
    return `
        <div class="contact-page animate-fade-in">
            <h1 class="page-title">Send a Transmission</h1>
            <p class="tagline">Report mysterious occurrences or request a classified table booking.</p>
            
            <div class="form-container glass-panel">
                <form id="mystery-contact-form" novalidate>
                    <div class="form-group">
                        <label for="contact-name">Identify Yourself (Full Name)</label>
                        <input type="text" id="contact-name" name="name" required autocomplete="name" placeholder="Agent Jane Doe" />
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-email">Secure Communication Channel (Email)</label>
                        <input type="email" id="contact-email" name="email" required autocomplete="email" placeholder="jane.doe@agency.com" />
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-message">Encoded Message</label>
                        <textarea id="contact-message" name="message" required minlength="10" placeholder="State your coordinates and details of the gastronomic mystery..." rows="4"></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">Send Encrypted Message</button>
                </form>
            </div>
            
            <div class="background-div">
                <img class="hero-image" src="images/write.jpg" alt="A classic fountain pen resting on an elegant handwritten letter on a wooden table" />
            </div>
            
            <footer class="footer">
                <p>© 1963-${new Date().getFullYear()} Mister MacGuffin's Diner. Crafted for mystery.</p>
            </footer>
        </div>
    `;
}

export default contactUs;