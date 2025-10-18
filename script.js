/**
 * script.js
 * Handles Call to Action functionality and animation sequencing.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // A. FUNCTIONALITY (Navigation)
    // ----------------------------------------------------

    const ctaButton = document.getElementById('cta-button');
    // Remove email signup elements from the DOM as requested (keeps HTML unchanged but removes them at runtime)
    const emailForm = document.getElementById('email-signup-form');
    if (emailForm && emailForm.parentNode) {
        emailForm.parentNode.removeChild(emailForm);
    }
    
    // 1. CTA Button: Redirects to a basic 'Donations' page
    ctaButton.addEventListener('click', (e) => {
        // e.preventDefault(); // Uncomment if you want to prevent default navigation and handle it via JS
        console.log("Navigating to Donations Page...");
        // The HTML already links to 'donations.html'
    });

    // 2. CTA Hover: Smooth enlarge/deflate and color transition
    // Add subtle scaling and color transitions without modifying external CSS files.
    if (ctaButton) {
        // Ensure the button has smooth transition for transform and background-color
        ctaButton.style.transition = 'transform 180ms cubic-bezier(0.2, 0.9, 0.3, 1), background-color 220ms ease-in-out, color 220ms ease-in-out';

        // Save original styles to restore on mouseleave
        const originalBackground = getComputedStyle(ctaButton).backgroundColor || '';
        const hoverBgHex = '#FCC907'; // target hover color
        const normalBgHex = '#77A8BB'; // non-hover color (matches --C-Blue-Light)

        // Prepare an initial background color in case it's not explicitly set inline
        // We set it to the normal color so transitions are smooth and predictable
        ctaButton.style.backgroundColor = normalBgHex;

        ctaButton.addEventListener('mouseenter', () => {
            // Slightly enlarge
            ctaButton.style.transform = 'scale(1.06)';
            // Change color to yellow accent
            ctaButton.style.backgroundColor = hoverBgHex;
            // Ensure text color contrasts (use blue dark text for readability)
            ctaButton.style.color = '#003366';
        });

        ctaButton.addEventListener('mouseleave', () => {
            // Slightly deflate back to normal
            ctaButton.style.transform = 'scale(1)';
            // Revert background color
            ctaButton.style.backgroundColor = normalBgHex;
            ctaButton.style.color = '';
        });
    }


    // ----------------------------------------------------
    // B. MOCKUP PAGES (These functions represent the content 
    //    that would be in donations.html and get-involved.html)
    // ----------------------------------------------------

    // Function to create a basic webpage for demonstration
    function createMockPage(headerText, contentHTML) {
        document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${headerText}</title>
                <style>
                    body {
                        font-family: 'Proxima Nova', sans-serif;
                        background-color: #003366; 
                        color: #FFFFFF;
                        padding: 50px;
                        text-align: center;
                        line-height: 1.5;
                    }
                    h1 { color: #FCC907; font-size: 3em; margin-bottom: 30px; }
                    .content { max-width: 600px; margin: 0 auto; background: #004488; padding: 20px; border-radius: 10px; }
                </style>
            </head>
            <body>
                <h1>${headerText}</h1>
                <div class="content">${contentHTML}</div>
            </body>
            </html>
        `);
    }

    // Check if the current page is one of the mock-up pages
    const path = window.location.pathname;
    if (path.includes('donations.html')) {
        createMockPage('Donations', `
            <p>Thank you for your interest in changing lives!</p>
            <p>This is the designated page for processing secure transactions.</p>
            <p style="color: #FCC907;">Donate $5, $10, or $50 today!</p>
        `);
    } else if (path.includes('get-involved.html')) {
        createMockPage('Get Involved', `
            <p>Tell us how you'd like to stay connected and help us in the fight for clean water.</p>
            <form style="text-align: left; margin-top: 20px;">
                <label><input type="checkbox" checked> Subscribe to Charity:Water’s Newsletter</label><br>
                <label><input type="checkbox"> Notify me about upcoming projects and events</label><br>
                <label><input type="checkbox"> Receive updates on current Sponsorships</label>
            </form>
            <p style="margin-top: 20px;">(This is a basic mockup. In a real application, a server would process this form.)</p>
        `);
    }
});