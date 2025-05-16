let activeDropdown = null;

// Language translations object
const translations = {
    english: {
        'page-title': 'Hami-Nepali | Plan Nepal -Hamro Nepal',
        'login-title': 'Login',
        'login-button': 'Login',
        'register-title': 'Register',
        'register-button': 'Register',
        'social-login-title': 'Social Login',
        'google-login': 'Login with Google',
        'facebook-login': 'Login with Facebook',
        'nav-home': '🇳🇵 My Nepal 🇳🇵',
        'nav-beauty': '🌈 Beauty on Eye',
        'nav-positivity': '🇳🇵 Nepal\'s Positivity 🌸',
        'nav-hope': '🕊️ But Hope Remains',
        'nav-youth': '👩‍🎓 Educated & Skilled Youth',
        'nav-plan': '🎯 My Plan',
        'nav-education': '📚 Education Plan',
        'nav-jobs': 'Jobs Available',
        'nav-homes': '🏠 Housing and Education',
        'nav-child-protection': 'Child Protection & Education',
        'nav-corruption': 'Corruption',
        'nav-corruption-how': '🇳🇵 How Nepal Became a Corrupt Nation? 🕳️',
        'nav-corruption-wealth': '🚫 Leaders\' Wealth',
        'nav-corruption-stop': '🚫 End Corruption',
        'nav-health': 'Healthcare Services 🩺',
        'nav-food': 'Food Security',
        'nav-stop-corruption': '🚫 Control Corruption',
        'nav-contact': 'Contact',
        'hero-title': 'Welcome to Nepal - The Land of Himalayas',
        'hero-subtitle': 'Discover the rich tapestry of Nepal\'s 3000-year history, from the ancient Kirat dynasty to the modern federal democratic republic. Home to Mount Everest, birthplace of Buddha, and a melting pot of diverse cultures, traditions, and natural wonders.',
        'nepal-title': 'Nepal: Nature\'s Precious Gift',
        'nepal-subtitle': 'Rich in Mountains, Rivers, Forests, and Biodiversity - Nepal\'s Natural Resources',
        'sector-nature': '1. Mountains and Natural Beauty',
        'stat-peaks': 'Himalayan Peaks',
        'stat-peaks-desc': 'Above 8,000 meters',
        'stat-parks': 'National Parks',
        'stat-parks-desc': 'Protected Areas',
        'stat-biodiversity': 'Biodiversity',
        'stat-biodiversity-desc': 'Plant Species',
        'nature-description': 'Nepal is nature\'s precious gift. Its mountains, rivers, forests, and biodiversity are unique worldwide. Sagarmatha (Everest) is the world\'s highest peak, which has enhanced Nepal\'s glory.',
        'nature-progress': '100% Natural Resources',
        'nature-features': 'Natural Features',
        'nature-feature-1': 'Himalayan Mountain Range: Sagarmatha, Kanchenjunga, Dhaulagiri, Annapurna',
        'nature-feature-2': 'Sacred Lakes: Tilicho, Rara, Phewa, Begnas',
        'nature-feature-3': 'World Heritage Sites: Lumbini, Chitwan National Park, Kathmandu Valley',
        'nature-feature-4': 'Diverse Climate: From Tropical to Himalayan Regions',
        'nature-feature-5': 'World-Famous Trekking Routes',
        'nature-special': 'Special Natural Features',
        'nature-special-1': 'Kali Gandaki Gorge: World\'s Deepest Gorge',
        'nature-special-2': 'Rara Lake: Nepal\'s Largest Lake',
        'nature-special-3': 'Mustang: Living Museum of Ancient Tibetan Culture',
        'nature-special-4': 'Annapurna Conservation Area: World\'s Most Visited Trekking Area',
        'footer-title': 'MERO NEPAL',
        'footer-quote': '"Natural resources are Nepal\'s invaluable assets — conservation and wise use is the path to prosperity." 🇳🇵',
        'footer-description': 'Nepal is a beautiful country rich in natural resources. Mountains, rivers, forests, minerals, water resources, wildlife, and biodiversity are Nepal\'s most important assets.',
        'footer-design': 'Designed with ❤️ by Subash',
        'footer-copyright': ' News--War. All rights reserved.',
        'nepal-hope-title': '1. Direction of Nepal\'s Hope and Future',
        'nepal-opportunities-title': '2. Development Opportunities',
        'nepal-education-title': '3. Education and Capacity Building',
        'nepal-health-title': '4. Healthcare and Wellness',
        'nepal-culture-title': '5. Cultural Heritage and Tourism'
    },
    nepali: {
        'page-title': 'मेरो नेपाल नेपाल योजना',
        'login-title': 'लग इन',
        'login-button': 'लग इन',
        'register-title': 'दर्ता',
        'register-button': 'दर्ता',
        'social-login-title': 'सामाजिक लग इन',
        'google-login': 'गुगलबाट लग इन',
        'facebook-login': 'फेसबुकबाट लग इन',
        'nav-home': '🇳🇵 मेरो नेपाल 🇳🇵',
        'nav-beauty': '🌈 सौन्दर्य आँखाले देखिन्छ',
        'nav-positivity': '🇳🇵 नेपालको सकारात्मकता 🌸',
        'nav-hope': '🕊️ तर आशा बाँकी छ',
        'nav-youth': '👩‍🎓 शिक्षित र सीपयुक्त युवा पुस्ता',
        'nav-plan': '🎯 मेरो योजना',
        'nav-education': '📚 शिक्षा योजना',
        'nav-jobs': 'रोजगारी उपलब्ध',
        'nav-homes': '🏠 आवास (घर) र शिक्षा (शैक्षिक सुविधा)',
        'nav-child-protection': 'बाल संरक्षण र शिक्षा',
        'nav-corruption': 'भ्रष्टाचार',
        'nav-corruption-how': '🇳🇵 नेपाल कसरी भ्रष्ट राष्ट्र बन्दै गयो? 🕳️',
        'nav-corruption-wealth': '🚫 नेताको सम्पत्ति',
        'nav-corruption-stop': '🚫 भ्रष्टाचार अन्त्य गर्ने',
        'nav-health': 'स्वास्थ्य सेवा 🩺',
        'nav-food': 'आहार सुनिश्चित',
        'nav-stop-corruption': '🚫 भ्रष्टाचार नियन्त्रण',
        'nav-contact': 'सम्पर्क',
        'hero-title': 'हिमालको भूमि नेपालमा स्वागत छ ',
        'hero-subtitle': 'किरात राजवंशदेखि आधुनिक संघीय लोकतान्त्रिक गणतन्त्रसम्म नेपालको ३००० वर्षको इतिहासको समृद्ध परम्परा पत्ता लगाउनुहोस्। सगरमाथा, बुद्धको जन्मस्थान, र विविध संस्कृति, परम्परा र प्राकृतिक आश्चर्यहरूको मिश्रण।',
        'nepal-title': 'नेपाल: प्रकृतिको अमूल्य उपहार',
        'nepal-subtitle': 'हिमाल, नदी, जंगल र जैविक विविधताको धनी - नेपालको प्राकृतिक सम्पदा',
        'sector-nature': '१. हिमाल र प्राकृतिक सौन्दर्य',
        'stat-peaks': 'हिमाली चुचुराहरू',
        'stat-peaks-desc': '८,००० मिटर भन्दा माथि',
        'stat-parks': 'राष्ट्रिय निकुञ्ज',
        'stat-parks-desc': 'संरक्षित क्षेत्र',
        'stat-biodiversity': 'जैविक विविधता',
        'stat-biodiversity-desc': 'वनस्पति प्रजाति',
        'nature-description': 'नेपाल प्रकृतिको अमूल्य उपहार हो। यहाँको हिमाल, नदी, जंगल र जैविक विविधता विश्वभरमा अद्वितीय छ। सगरमाथा (एभरेस्ट) विश्वको सबैभन्दा अग्लो चुचुरो हो, जसले नेपालको गौरव बढाएको छ।',
        'nature-progress': '१००% प्राकृतिक सम्पदा',
        'nature-features': 'प्राकृतिक विशेषताहरू',
        'nature-feature-1': 'हिमाली पर्वत श्रृंखला: सगरमाथा, कञ्चनजङ्घा, धौलागिरी, अन्नपूर्णा',
        'nature-feature-2': 'पवित्र तालहरू: तिलिचो, रारा, फेवा, बेगनास',
        'nature-feature-3': 'विश्व सम्पदा स्थल: लुम्बिनी, चितवन राष्ट्रिय निकुञ्ज, काठमाडौं उपत्यका',
        'nature-feature-4': 'विविध जलवायु: उष्ण प्रदेशदेखि हिमाली क्षेत्रसम्म',
        'nature-feature-5': 'विश्व प्रसिद्ध ट्रेकिङ मार्गहरू',
        'nature-special': 'विशेष प्राकृतिक विशेषताहरू',
        'nature-special-1': 'कालीगण्डकी गोर्ज: विश्वको सबैभन्दा गहिरो गोर्ज',
        'nature-special-2': 'रारा ताल: नेपालको सबैभन्दा ठुलो ताल',
        'nature-special-3': 'मुस्ताङ: प्राचीन तिब्बती संस्कृतिको जीवन्त संग्रहालय',
        'nature-special-4': 'अन्नपूर्णा संरक्षण क्षेत्र: विश्वको सबैभन्दा धेरै ट्रेकर आउने क्षेत्र',
        'footer-title': 'मेरो नेपाल',
        'footer-quote': '"प्राकृतिक स्रोतहरू नेपालको अमूल्य सम्पत्ति हुन् — संरक्षण र विवेकपूर्ण उपयोग नै समृद्धिको बाटो हो।" 🇳🇵',
        'footer-description': 'नेपाल एक प्राकृतिक स्रोतहरूले भरिपूर्ण सुन्दर देश हो। हिमाल, नदी, जंगल, खनिज, जलस्रोत, वन्यजन्तु र जैविक विविधता नेपालको सबैभन्दा महत्वपूर्ण सम्पत्ति हुन्।',
        'footer-design': 'सुबाशद्वारा ❤️ संग डिजाइन गरिएको',
        'footer-copyright': ' न्युज--वार। सर्वाधिकार सुरक्षित।',
        'nepal-hope-title': '१. नेपालको आशा र भविष्यको दिशा',
        'nepal-opportunities-title': '२. विकासको अवसरहरू',
        'nepal-education-title': '३. शिक्षा र क्षमता विकास',
        'nepal-health-title': '४. स्वास्थ्य सेवा र कल्याण',
        'nepal-culture-title': '५. सांस्कृतिक विरासत र पर्यटन'
    },
    hindi: {
        'page-title': 'मेरी योजना-- Hami-Nepali | Plan Nepal--नेपाल योजना',
        'login-title': 'लॉग इन',
        'login-button': 'लॉग इन',
        'register-title': 'पंजीकरण',
        'register-button': 'पंजीकरण',
        'social-login-title': 'सामाजिक लॉग इन',
        'google-login': 'गूगल से लॉग इन करें',
        'facebook-login': 'फेसबुक से लॉग इन करें',
        'nav-home': '🇳🇵 मेरा नेपाल 🇳🇵',
        'nav-beauty': '🌈 सौंदर्य दृष्टि में है',
        'nav-positivity': '🇳🇵 नेपाल की सकारात्मकता 🌸',
        'nav-hope': '🕊️ लेकिन उम्मीद बाकी है',
        'nav-youth': '👩‍🎓 शिक्षित और कुशल युवा',
        'nav-plan': '🎯 मेरी योजना',
        'nav-education': '📚 शिक्षा योजना',
        'nav-jobs': 'रोजगार उपलब्ध',
        'nav-homes': '🏠 आवास और शैक्षिक सुविधाएं',
        'nav-child-protection': 'बाल संरक्षण और शिक्षा',
        'nav-corruption': 'भ्रष्टाचार',
        'nav-corruption-how': '🇳🇵 नेपाल कैसे भ्रष्ट राष्ट्र बना? 🕳️',
        'nav-corruption-wealth': '🚫 नेताओं की संपत्ति',
        'nav-corruption-stop': '🚫 भ्रष्टाचार समाप्त करें',
        'nav-health': 'स्वास्थ्य सेवा 🩺',
        'nav-food': 'खाद्य सुरक्षा',
        'nav-stop-corruption': '🚫 भ्रष्टाचार नियंत्रण',
        'nav-contact': 'संपर्क',
        'hero-title': 'हिमालय की भूमि नेपाल में आपका स्वागत है ',
        'hero-subtitle': 'किरात राजवंश से आधुनिक संघीय लोकतांत्रिक गणराज्य तक नेपाल के 3000 वर्ष के इतिहास की समृद्ध परंपरा का अन्वेषण करें। माउंट एवरेस्ट, बुद्ध की जन्मभूमि, और विविध संस्कृतियों, परंपराओं और प्राकृतिक आश्चर्यों का मिश्रण।',
        'nepal-title': 'नेपाल: प्रकृति का अनमोल उपहार',
        'nepal-subtitle': 'पर्वत, नदियों, जंगलों और जैव विविधता से समृद्ध - नेपाल के प्राकृतिक संसाधन',
        'sector-nature': '१. पर्वत और प्राकृतिक सौंदर्य',
        'stat-peaks': 'हिमालयन चोटियां',
        'stat-peaks-desc': '८,००० मीटर से ऊपर',
        'stat-parks': 'राष्ट्रीय उद्यान',
        'stat-parks-desc': 'संरक्षित क्षेत्र',
        'stat-biodiversity': 'जैव विविधता',
        'stat-biodiversity-desc': 'पादप प्रजातियां',
        'nature-description': 'नेपाल प्रकृति का अनमोल उपहार है। इसके पर्वत, नदियां, जंगल और जैव विविधता विश्व में अद्वितीय हैं। सागरमाथा (एवरेस्ट) विश्व की सबसे ऊंची चोटी है, जिसने नेपाल की गौरव को बढ़ाया है।',
        'nature-progress': '१००% प्राकृतिक संसाधन',
        'nature-features': 'प्राकृतिक विशेषताएं',
        'nature-feature-1': 'हिमालयन पर्वत श्रृंखला: सागरमाथा, कंचनजंघा, धौलागिरी, अन्नपूर्णा',
        'nature-feature-2': 'पवित्र झीलें: तिलिचो, रारा, फेवा, बेगनास',
        'nature-feature-3': 'विश्व विरासत स्थल: लुंबिनी, चितवन राष्ट्रीय उद्यान, काठमांडू घाटी',
        'nature-feature-4': 'विविध जलवायु: उष्णकटिबंधीय से हिमालयी क्षेत्र तक',
        'nature-feature-5': 'विश्व प्रसिद्ध ट्रेकिंग मार्ग',
        'nature-special': 'विशेष प्राकृतिक विशेषताएं',
        'nature-special-1': 'काली गंडकी गॉर्ज: विश्व की सबसे गहरी गॉर्ज',
        'nature-special-2': 'रारा झील: नेपाल की सबसे बड़ी झील',
        'nature-special-3': 'मुस्तांग: प्राचीन तिब्बती संस्कृति का जीवंत संग्रहालय',
        'nature-special-4': 'अन्नपूर्णा संरक्षण क्षेत्र: विश्व का सबसे अधिक ट्रेकर आने वाला क्षेत्र',
        'footer-title': 'मेरा नेपाल',
        'footer-quote': '"प्राकृतिक संसाधन नेपाल के अनमोल संपत्ति हैं — संरक्षण और विवेकपूर्ण उपयोग ही समृद्धि का मार्ग है।" 🇳🇵',
        'footer-description': 'नेपाल प्राकृतिक संसाधनों से समृद्ध एक सुंदर देश है। पर्वत, नदियां, जंगल, खनिज, जल संसाधन, वन्यजीव और जैव विविधता नेपाल की सबसे महत्वपूर्ण संपत्ति हैं।',
        'footer-design': 'सुबाश द्वारा ❤️ के साथ डिज़ाइन किया गया',
        'footer-copyright': ' न्यूज--वार । सर्वाधिकार सुरक्षित।',
        'nepal-hope-title': '१. नेपाल की आशा और भविष्य की दिशा',
        'nepal-opportunities-title': '२. विकास के अवसर',
        'nepal-education-title': '३. शिक्षा और क्षमता विकास',
        'nepal-health-title': '४. स्वास्थ्य सेवा और कल्याण',
        'nepal-culture-title': '५. सांस्कृतिक विरासत और पर्यटन'
    }
};

function switchLanguage(language) {
    // Hide all language content
    document.querySelectorAll('.nepali-content, .english-content, .hindi-content').forEach(el => {
        el.style.display = 'none';
    });

    // Show selected language content
    document.querySelectorAll(`.${language}-content`).forEach(el => {
        el.style.display = 'block';
    });

    // Update navigation items
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            el.textContent = translations[language][key];
        }
    });

    // Update nepal-sector titles
    document.querySelectorAll('.nepal-sector-title').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && translations[language] && translations[language][key]) {
            el.textContent = translations[language][key];
        }
    });

    // Update language selector
    document.querySelector('.language-selector').value = language;

    // Store the language preference
    localStorage.setItem('preferredLanguage', language);
}

// Set initial language based on stored preference or default to Nepali
document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('preferredLanguage') || 'nepali';
    switchLanguage(storedLanguage);
});

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

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to your server
    // For now, we'll just show a success message
    alert('धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।');
    
    // Reset the form
    document.getElementById('contactForm').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        // Clear previous errors
        clearErrors();
        
        // Validate form
        if (!validateForm()) {
            e.preventDefault();
        }
    });
    
    function validateForm() {
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, 'कृपया आफ्नो नाम लेख्नुहोस्');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'कृपया इमेल ठेगाना लेख्नुहोस्');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'कृपया वैध इमेल ठेगाना लेख्नुहोस्');
            isValid = false;
        }
        
        // Validate subject
        const subject = document.getElementById('subject');
        if (subject.value === '') {
            showError(subject, 'कृपया विषय छान्नुहोस्');
            isValid = false;
        }
        
        // Validate message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'कृपया सन्देश लेख्नुहोस्');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'सन्देश धेरै छोटो छ (कम्तिमा १० अक्षर)');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = message;
        formGroup.appendChild(errorElement);
        input.style.borderColor = '#e74c3c';
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
        
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
        });
    }
});

