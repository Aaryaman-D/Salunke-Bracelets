// JavaScript for cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    // Add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Get product details
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Show added message
            const originalText = this.textContent;
            this.textContent = 'Added!';
            
            // Create toast notification
            const toast = document.createElement('div');
            toast.textContent = `${productName} added to cart`;
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.right = '20px';
            toast.style.backgroundColor = '#4e342e';
            toast.style.color = 'white';
            toast.style.padding = '10px 20px';
            toast.style.borderRadius = '5px';
            toast.style.zIndex = '1000';
            toast.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
            document.body.appendChild(toast);
            
            // Remove toast after 3 seconds
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 3000);
            
            // Reset button text after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});