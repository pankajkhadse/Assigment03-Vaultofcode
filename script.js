 // Video Data with Real Demo Videos
const videos = [
    { 
        id: 1, 
        title: 'Summer Fashion Campaign', 
        category: 'ecommerce', 
        thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '0:45', 
        description: 'Dynamic product showcase for summer collection' 
    },
    { 
        id: 2, 
        title: 'Epic Gaming Montage', 
        category: 'gaming', 
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '2:30', 
        description: 'High-energy gaming highlights with cinematic effects' 
    },
    { 
        id: 3, 
        title: 'Champions League Final', 
        category: 'football', 
        thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '1:45', 
        description: 'Match highlights with dynamic transitions' 
    },
    { 
        id: 4, 
        title: 'Tech Product Launch', 
        category: 'ads', 
        thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '0:30', 
        description: 'Sleek product advertisement with modern aesthetics' 
    },
    { 
        id: 5, 
        title: 'Instagram Reel - Travel', 
        category: 'short', 
        thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '0:15', 
        description: 'Viral-worthy travel content' 
    },
    { 
        id: 6, 
        title: 'Wildlife Documentary', 
        category: 'documentary', 
        thumbnail: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '5:20', 
        description: 'Nature storytelling with cinematic grading' 
    },
    { 
        id: 7, 
        title: 'Cinematic Color Grade', 
        category: 'color', 
        thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '3:10', 
        description: 'Professional color grading showcase' 
    },
    { 
        id: 8, 
        title: 'Anime AMV - Epic', 
        category: 'anime', 
        thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '2:00', 
        description: 'High-energy anime music video' 
    },
    { 
        id: 9, 
        title: 'YouTube Tutorial Series', 
        category: 'long', 
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '12:45', 
        description: 'Educational content with engaging edits' 
    },
    { 
        id: 10, 
        title: 'FIFA Skill Compilation', 
        category: 'gaming', 
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '3:25', 
        description: 'Gaming highlights with smooth transitions' 
    },
    { 
        id: 11, 
        title: 'Fashion Brand Commercial', 
        category: 'ads', 
        thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '1:00', 
        description: 'Luxury brand advertisement' 
    },
    { 
        id: 12, 
        title: 'TikTok Viral Dance', 
        category: 'short', 
        thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '0:30', 
        description: 'Trending short-form content' 
    },
    { 
        id: 13, 
        title: 'Premier League Goals', 
        category: 'football', 
        thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '2:15', 
        description: 'Best goals compilation with effects' 
    },
    { 
        id: 14, 
        title: 'Product Unboxing', 
        category: 'ecommerce', 
        thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '4:30', 
        description: 'Engaging product review and showcase' 
    },
    { 
        id: 15, 
        title: 'Historical Documentary', 
        category: 'documentary', 
        thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '8:00', 
        description: 'Historical storytelling with archival footage' 
    },
    { 
        id: 16, 
        title: 'Moody Film Look', 
        category: 'color', 
        thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '1:30', 
        description: 'Cinematic color correction demo' 
    },
    { 
        id: 17, 
        title: 'Anime Fight Scene Edit', 
        category: 'anime', 
        thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '1:45', 
        description: 'Action-packed anime edit' 
    },
    { 
        id: 18, 
        title: 'Valorant Highlights', 
        category: 'gaming', 
        thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '3:00', 
        description: 'Pro-level gaming montage' 
    },
    { 
        id: 19, 
        title: 'Makeup Tutorial', 
        category: 'long', 
        thumbnail: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '10:20', 
        description: 'Beauty tutorial with professional editing' 
    },
    { 
        id: 20, 
        title: 'Restaurant Promo', 
        category: 'ads', 
        thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop', 
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '0:40', 
        description: 'Food photography and video ad' 
    }
];

// Render Portfolio
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = '';

    videos.forEach((video, index) => {
        if (filter === 'all' || video.category === filter) {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <img src="${video.thumbnail}" class="video-thumbnail">
                <div class="video-overlay"><div class="play-icon">▶</div></div>
                <div class="video-info">
                    <span class="video-category">${video.category}</span>
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-duration">⏱️ ${video.duration}</p>
                </div>
            `;

            card.onclick = () => openLightbox(video);
            grid.appendChild(card);
        }
    });
}

// Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderPortfolio(this.dataset.filter);
    });
});

// Lightbox
function openLightbox(video) {
    const lightbox = document.getElementById('lightbox');
    const videoContainer = document.getElementById('lightboxVideo');
    const infoContainer = document.getElementById('lightboxInfo');

    videoContainer.innerHTML = `
        <video controls autoplay style="width:100%; max-height:70vh; border-radius:10px;">
            <source src="${video.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    
    infoContainer.innerHTML = `
        <span class="video-category">${video.category}</span>
        <h2>${video.title}</h2>
        <p style="color:#aaa;margin-top:1rem">${video.description}</p>
        <p style="color:#888;margin-top:0.5rem">Duration: ${video.duration}</p>
        <div style="margin-top:1rem;">
            <button onclick="downloadVideo('${video.videoUrl}', '${video.title}')" style="background:#4CAF50; color:white; border:none; padding:8px 16px; border-radius:5px; cursor:pointer;">Download</button>
        </div>
    `;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Download video function
function downloadVideo(videoUrl, title) {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `${title}.mp4`;
    link.click();
}

document.getElementById('closeBtn').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const video = lightbox.querySelector('video');
    if (video) {
        video.pause();
    }
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') {
        const lightbox = document.getElementById('lightbox');
        const video = lightbox.querySelector('video');
        if (video) {
            video.pause();
        }
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Mobile Menu
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

// Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        document.getElementById('navLinks').classList.remove('active');
    });
});

// Initial Portfolio Render
renderPortfolio();

// Stars Background
function generateStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

generateStars();

// Function to show temporary message on button
function showTemporaryMessage(button, successMessage, duration = 1500) {
    const originalText = button.value;
    const originalBackground = button.style.backgroundColor;
    
    // Change button text and style
    button.value = successMessage;
    button.style.backgroundColor = '#4CAF50'; // Green color for success
    
    button.disabled = true;
    
    // Revert back after duration
    setTimeout(() => {
        button.value = originalText;
        button.style.backgroundColor = originalBackground;
        button.disabled = false;
    }, duration);
}

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const submitBtn = this.querySelector('.form-submit-btn');
    const originalText = submitBtn.value;
    
    // Change button to show loading state briefly
    submitBtn.value = "Submitting...";
    submitBtn.disabled = true;
    
    // Perform AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Show success message on button immediately
                submitBtn.value = "Submitted!";
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Clear form fields
                document.getElementById("contactForm").reset();
                
                // Revert back to original after 1.5 seconds
                setTimeout(() => {
                    submitBtn.value = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 1500);
            } else {
                // Show error on button temporarily
                submitBtn.value = "Error!";
                submitBtn.style.backgroundColor = '#f44336';
                
                setTimeout(() => {
                    submitBtn.value = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 1000);
            }
        }
    };
    
    // Convert FormData to object for better logging
    const formData = new FormData(this);
    const formDataObj = Object.fromEntries(formData);
    console.log("Contact form data being submitted:", formDataObj);
    
    xhr.send(new FormData(this));
});

// Email Subscribe Form
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const submitBtn = this.querySelector('.email-btn');
    const originalText = submitBtn.value;
    
    // Change button to show loading state briefly
    submitBtn.value = "Subscribing...";
    submitBtn.disabled = true;
    
    // Perform AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Show success message on button immediately
                submitBtn.value = "Subscribed!";
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Clear form fields
                document.getElementById("emailForm").reset();
                
                // Revert back to original after 1.5 seconds
                setTimeout(() => {
                    submitBtn.value = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 1500);
            } else {
                // Show error on button temporarily
                submitBtn.value = "Error!";
                submitBtn.style.backgroundColor = '#f44336';
                
                setTimeout(() => {
                    submitBtn.value = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 1000);
            }
        }
    };
    
    // Convert FormData to object for better logging
    const formData = new FormData(this);
    const formDataObj = Object.fromEntries(formData);
    console.log("Email form data being submitted:", formDataObj);
    
    xhr.send(new FormData(this));
});

// Close lightbox when X button is clicked
document.getElementById('closeBtn').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const video = lightbox.querySelector('video');
    if (video) {
        video.pause(); // Pause the video when closing
    }
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close lightbox when clicking outside the content
document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') {
        const lightbox = document.getElementById('lightbox');
        const video = lightbox.querySelector('video');
        if (video) {
            video.pause(); // Pause the video when closing
        }
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});