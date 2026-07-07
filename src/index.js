import displayMenu from './menu';
import aboutPage from './about';
import contactUs from './contact';

const contentDiv = document.querySelector('#content');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

let currentPage = null;

function routeFocus() {
    const heading = contentDiv.querySelector('h1, h2, h3, h4, h5');
    if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
    } else {
        contentDiv.setAttribute('tabindex', '-1');
        contentDiv.focus();
    }
}

function updateActiveButton(buttonId) {
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.id === buttonId) {
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        }
    });
}

function transitionTo(pageContentGenerator, buttonId) {
    const newContent = pageContentGenerator();
    if (currentPage === newContent) return;
    
    currentPage = newContent;
    updateActiveButton(buttonId);
    
    if (!document.startViewTransition) {
        contentDiv.innerHTML = newContent;
        routeFocus();
        return;
    }
    
    const transition = document.startViewTransition(() => {
        contentDiv.innerHTML = newContent;
    });
    
    transition.finished.finally(() => {
        routeFocus();
    });
}

// Form Submission Handler (Event Delegation)
document.addEventListener('submit', (e) => {
    if (e.target && e.target.id === 'mystery-contact-form') {
        e.preventDefault();
        const form = e.target;
        
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            const firstInvalid = form.querySelector(':invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        
        const container = form.parentElement;
        form.style.opacity = '0';
        form.style.transform = 'translateY(10px)';
        form.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    renderSuccessMessage(container);
                });
            } else {
                renderSuccessMessage(container);
            }
        }, 300);
    }
});

function renderSuccessMessage(container) {
    container.innerHTML = `
        <div class="success-panel animate-fade-in">
            <div class="success-icon-wrapper">
                <i class="fas fa-envelope-open-text success-icon"></i>
            </div>
            <h2>Transmission Encrypted</h2>
            <p class="success-message-text">Your report has been securely encoded. If your identity matches our clearance database, a contact agent will rendezvous at your coordinates.</p>
            <p class="signature">— Mister MacGuffin</p>
        </div>
    `;
    const heading = container.querySelector('h2');
    if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
    }
}

// Event Listeners
menuBtn.addEventListener('click', () => transitionTo(displayMenu, 'menu-btn'));
aboutBtn.addEventListener('click', () => transitionTo(aboutPage, 'about-btn'));
contactBtn.addEventListener('click', () => transitionTo(contactUs, 'contact-btn'));

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    transitionTo(aboutPage, 'about-btn');
});