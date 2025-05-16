let activeDropdown = null;

function switchLanguage(lang) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${lang}-content`).classList.add('active');

    // Update hero text based on language
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (lang === 'nepali') {
        heroTitle.textContent = 'प्लान नेपालमा स्वागत छ';
        heroSubtitle.textContent = 'सशक्तिकरण र अवसर मार्फत जीवन परिवर्तन।';
    } else if (lang === 'hindi') {
        heroTitle.textContent = 'प्लान नेपाल में आपका स्वागत है';
        heroSubtitle.textContent = 'सशक्तिकरण और अवसर के माध्यम से जीवन को बदलना।';
    } else {
        heroTitle.textContent = 'Welcome to Plan Nepal';
        heroSubtitle.textContent = 'Transforming lives through empowerment and opportunity.';
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    if (activeDropdown) {
        hideDropdown(activeDropdown);
    }
}

function toggleSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const backdrop = document.getElementById('side-menu-backdrop');
    sideMenu.classList.toggle('active');
    backdrop.classList.toggle('active');
}

function showDropdown(dropdownId) {
    if (activeDropdown === dropdownId) return;
    if (activeDropdown) {
        hideDropdown(activeDropdown);
    }
    const dropdown = document.getElementById(dropdownId);
    const backdrop = document.getElementById('dropdown-backdrop');
    if (dropdown) {
        dropdown.classList.add('active');
        backdrop.classList.add('active');
        document.getElementById('navbar').classList.add('active');
        activeDropdown = dropdownId;

        // Animate dropdown items
        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });
    }
}

function hideDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const backdrop = document.getElementById('dropdown-backdrop');
    if (dropdown) {
        dropdown.classList.remove('active');
        backdrop.classList.remove('active');
        document.getElementById('navbar').classList.remove('active');
        activeDropdown = null;

        // Reset animation for dropdown items
        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach(item => {
            item.classList.remove('animate');
        });
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const messageDiv = document.getElementById('login-message');

    // Basic validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Please enter a valid email.';
        return;
    }
    if (password.length < 6) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Password must be at least 6 characters.';
        return;
    }

    // Mock login success
    messageDiv.className = 'success';
    messageDiv.textContent = 'Login successful!';
    document.getElementById('login-form').reset();
    setTimeout(() => {
        toggleSideMenu();
        messageDiv.textContent = '';
    }, 1500);
}

function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const messageDiv = document.getElementById('register-message');

    // Basic validation
    if (username.length < 3) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Username must be at least 3 characters.';
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Please enter a valid email.';
        return;
    }
    if (password.length < 6) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Password must be at least 6 characters.';
        return;
    }
    if (password !== confirmPassword) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Passwords do not match.';
        return;
    }

    // Mock register success
    messageDiv.className = 'success';
    messageDiv.textContent = 'Registration successful!';
    document.getElementById('register-form').reset();
    setTimeout(() => {
        toggleSideMenu();
        messageDiv.textContent = '';
    }, 1500);
}

// Set default language to English
window.onload = () => {
    switchLanguage('english');
};

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        if (activeDropdown) {
            hideDropdown(activeDropdown);
        }
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Handle dropdown interactions
document.querySelectorAll('.nav-link').forEach(link => {
    const dropdownId = link.getAttribute('data-dropdown');
    if (window.innerWidth > 768) {
        link.addEventListener('mouseenter', () => showDropdown(dropdownId));
        link.addEventListener('mouseleave', () => setTimeout(() => {
            if (!document.querySelector(`#${dropdownId}:hover`)) {
                hideDropdown(dropdownId);
            }
        }, 300));
        document.getElementById(dropdownId).addEventListener('mouseenter', () => {
            showDropdown(dropdownId);
        });
        document.getElementById(dropdownId).addEventListener('mouseleave', () => {
            hideDropdown(dropdownId);
        });
    } else {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showDropdown(dropdownId);
        });
    }
});

// Close dropdown when clicking backdrop
document.getElementById('dropdown-backdrop').addEventListener('click', () => {
    if (activeDropdown) {
        hideDropdown(activeDropdown);
    }
});

// Close side menu when clicking backdrop
document.getElementById('side-menu-backdrop').addEventListener('click', () => {
    toggleSideMenu();
});


// later Added 

 // Show more details (simulated)
 function showMore(sectorId) {
  const sector = document.getElementById(sectorId);
  const newContent = document.createElement("div");
  newContent.innerHTML = `
      <h3 style="margin-top:20px;color:#1a5276">अतिरिक्त विवरण</h3>
      <p>यस योजनाको कार्यान्वयनका लागि निम्न कदमहरू अपनाइनेछ:</p>
      <ul>
          <li>त्रैमासिक प्रगति मूल्याङ्कन</li>
          <li>स्थानीय सरकार संग समन्वय</li>
          <li>निजीक्षेत्रको सहभागिता</li>
      </ul>
      <button class="btn" onclick="closeDetails(this)">बन्द गर्नुहोस्</button>
  `;
  sector.appendChild(newContent);
}

function closeDetails(button) {
  button.parentElement.remove();
}

// Initialize - animate first sector
document.addEventListener("DOMContentLoaded", function() {
  // Open first sector by default
  document.querySelector(".sector h2").click();
  
  // Add animation to list items
  const items = document.querySelectorAll("li");
  items.forEach((item, index) => {
      item.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
      item.style.opacity = "0";
  });
});


// Fade-in animation for sections
const sections = document.querySelectorAll('.section-hidden');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('section-visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Toggle detailed content
const buttons = document.querySelectorAll('.btn-animate');
buttons.forEach(button => {
button.addEventListener('click', () => {
const content = button.nextElementSibling;
content.classList.toggle('open');
});
});


// ... existing code ...

function toggleNepalSector(contentId) {
    const content = document.getElementById(contentId);
    const icon = content.previousElementSibling.querySelector('.nepal-toggle-icon');
    
    // Toggle content visibility
    content.classList.toggle('nepal-content-active');
    
    // Toggle icon
    icon.textContent = content.classList.contains('nepal-content-active') ? '−' : '+';
    
    // Animate action items if content is being shown
    if (content.classList.contains('nepal-content-active')) {
        const actionItems = content.querySelectorAll('.nepal-action-item');
        actionItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });
        
        // Animate progress bar if it exists
        const progressBar = content.querySelector('.nepal-progress-bar');
        if (progressBar) {
            animateNepalProgressBar(progressBar.id);
        }
    } else {
        // Remove animation classes when hiding
        const actionItems = content.querySelectorAll('.nepal-action-item');
        actionItems.forEach(item => {
            item.classList.remove('animate');
        });
    }
}

function animateNepalProgressBar(progressId) {
    const progressBar = document.getElementById(progressId);
    if (!progressBar) return;
    
    const targetWidth = progressBar.getAttribute('data-progress') || '100%';
    progressBar.style.width = '0%';
    
    setTimeout(() => {
        progressBar.style.width = targetWidth;
    }, 100);
}

// Add hover effect for action items
document.addEventListener('DOMContentLoaded', function() {
    const actionItems = document.querySelectorAll('.nepal-action-item');
    
    actionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Initialize first sector
    const firstSector = document.querySelector('.nepal-sector');
    if (firstSector) {
        const contentId = firstSector.querySelector('.nepal-sector-content').id;
        toggleNepalSector(contentId);
    }
});

// ... existing code ...





