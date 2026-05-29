// ==========================================================================
// MAYURI VIDYALAYAM CORE JAVASCRIPT
// Interactive UI, LocalStorage State, & Admin Dashboard Manager
// ==========================================================================

// --- Default Seed Data ---
const DEFAULT_SETTINGS = {
    phone: "95753343355",
    whatsapp: "9575334335",
    heroTitle: "Join MAYURI VIDYALAYAM – Shape Young Minds, Build the Future.",
    heroSub: "We believe that a school is only as exceptional as its teachers. If you are an inspiring, qualified, and motivated educator, we invite you to grow your career with us in a premium educational environment.",
    logoUrl: "./13406889_283928791956173_5892962584065827854_n.jpg",
    heroUrl: "./mayuri-school-kowthala-adilabad-schools-n5qbmv8eil.webp"
};

const DEFAULT_JOBS = [
    {
        id: "job-1",
        title: "High School PGT Mathematics",
        category: "High School",
        qualification: "M.Sc Mathematics with B.Ed",
        experience: "3+ Years in CBSE/State Boards",
        benefits: "PF, ESI, Free Commute Facility",
        status: "Active"
    },
    {
        id: "job-2",
        title: "TGT Natural Science (Biology)",
        category: "High School",
        qualification: "B.Sc/M.Sc Biology with B.Ed",
        experience: "2+ Years in teaching middle/high school",
        benefits: "Quarterly Performance Bonus, PF",
        status: "Active"
    },
    {
        id: "job-3",
        title: "Primary Teacher (All Subjects)",
        category: "Primary",
        qualification: "D.Ed / B.Ed / Graduation",
        experience: "1+ Years (Freshers with good communication welcome)",
        benefits: "PF, Semi-annual workshops",
        status: "Active"
    },
    {
        id: "job-4",
        title: "Physical Education Teacher (PET)",
        category: "Specialty",
        qualification: "B.P.Ed / M.P.Ed",
        experience: "2+ Years leading sports and drill training",
        benefits: "Free Lunch, Sports kit allowance",
        status: "Active"
    },
    {
        id: "job-5",
        title: "Computer Instructor / IT Teacher",
        category: "Specialty",
        qualification: "B.Tech CSE / MCA / BCA",
        experience: "1+ Years training computer labs",
        benefits: "PF, Tech subscription subsidy",
        status: "Active"
    }
];

const DEFAULT_NOTICES = [
    {
        id: "notice-1",
        date: "2026-05-28",
        title: "Walk-in Interviews: High School Teachers",
        category: "Interview Schedule",
        desc: "Walk-in interviews for Mathematics, Physical Science, and English teachers will be conducted on June 5th & 6th, 2026 from 9:00 AM onwards at the school campus.",
        urgent: true
    },
    {
        id: "notice-2",
        date: "2026-05-25",
        title: "Recruitment Drive 2026-27 Started",
        category: "Hiring Update",
        desc: "Online teacher applications are officially open for academic session 2026-2027. Qualified candidates are encouraged to submit applications online via our career portal.",
        urgent: false
    },
    {
        id: "notice-3",
        date: "2026-05-20",
        title: "Teacher Training Collaboration",
        category: "Announcement",
        desc: "Mayuri Vidyalayam is proud to announce its partnership with leading pedagogical training experts for quarterly skill up-gradation workshops for all onboarded staff.",
        urgent: false
    }
];

const DEFAULT_APPLICATIONS = [
    {
        id: "ref-1001",
        timestamp: "2026-05-28T14:30:00.000Z",
        name: "Satish Kumar Rao",
        fatherName: "Ramana Rao",
        phone: "9848022338",
        email: "satish.maths@gmail.com",
        languages: "English, Telugu, Hindi",
        qualification: "M.Sc Mathematics, B.Ed",
        subject: "Mathematics",
        experience: "5-10 Years",
        currentSchool: "Saraswathi High School, Adilabad",
        prevSchool: "Gautami School (2018-2021) - TGT Math",
        prevSalary: "35,000 / month",
        expSalary: "42,000 / month",
        country: "India",
        state: "Telangana",
        district: "Adilabad",
        portfolio: "https://www.linkedin.com/in/satishkumar",
        area: "Shanti Nagar",
        station: "Adilabad Railway Station",
        relocate: "No",
        verification: "Yes",
        address: "H.No: 4-12/A, Shanti Nagar, Adilabad, Telangana, 504001",
        resumeName: "Satish_Math_Resume.pdf",
        status: "New"
    },
    {
        id: "ref-1002",
        timestamp: "2026-05-27T10:15:00.000Z",
        name: "Priyanka Reddy",
        fatherName: "M. Venkat Reddy",
        phone: "9123456789",
        email: "priyanka.science@outlook.com",
        languages: "English, Telugu",
        qualification: "B.Sc B.Ed (Biological Sciences)",
        subject: "Natural Science / Biology",
        experience: "3-5 Years",
        currentSchool: "St. Joseph Grammar School",
        prevSchool: "Primary Tutor self-employed",
        prevSalary: "22,000 / month",
        expSalary: "28,000 / month",
        country: "India",
        state: "Telangana",
        district: "Adilabad",
        portfolio: "Not Provided",
        area: "Kowthala Mandal Head",
        station: "Mancherial Station",
        relocate: "Yes",
        verification: "Yes",
        address: "Flat 201, Srinivasa Residency, Kowthala, Adilabad, 504299",
        resumeName: "Priyanka_Reddy_CV.docx",
        status: "New"
    }
];

const DEFAULT_GALLERY = [
    {
        url: "./mayuri-school-kowthala-adilabad-schools-n5qbmv8eil.webp",
        title: "School Campus Front Elevation",
        category: "campus"
    },
    {
        url: "./13406889_283928791956173_5892962584065827854_n.jpg",
        title: "School Crest & Logo Branding",
        category: "staff"
    },
    {
        url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
        title: "Modern Classrooms with Smart Boards",
        category: "classrooms"
    },
    {
        url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
        title: "Well Equipped Computer Laboratories",
        category: "classrooms"
    },
    {
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        title: "Interactive Classroom Teaching Sessions",
        category: "classrooms"
    },
    {
        url: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80",
        title: "Academic Reference Library & Study Hall",
        category: "campus"
    },
    {
        url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
        title: "School Annual Day Celebration Events",
        category: "activities"
    },
    {
        url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
        title: "Teacher Skill Enhancement Seminars",
        category: "staff"
    }
];

// --- Application Core State Init ---
const state = {
    settings: JSON.parse(localStorage.getItem("mv_settings")) || DEFAULT_SETTINGS,
    jobs: JSON.parse(localStorage.getItem("mv_jobs")) || DEFAULT_JOBS,
    notices: JSON.parse(localStorage.getItem("mv_notices")) || DEFAULT_NOTICES,
    applications: JSON.parse(localStorage.getItem("mv_applications")) || DEFAULT_APPLICATIONS,
    gallery: JSON.parse(localStorage.getItem("mv_gallery")) || DEFAULT_GALLERY
};

// Sync back to local storage if empty to ensure initial loads work
function syncStateToStorage() {
    localStorage.setItem("mv_settings", JSON.stringify(state.settings));
    localStorage.setItem("mv_jobs", JSON.stringify(state.jobs));
    localStorage.setItem("mv_notices", JSON.stringify(state.notices));
    localStorage.setItem("mv_applications", JSON.stringify(state.applications));
    localStorage.setItem("mv_gallery", JSON.stringify(state.gallery));
}
syncStateToStorage();

// --- DOM Initialization & Loading ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup global elements based on Settings
    updateGlobalSettingsUI();
    
    // 2. Render front-end list panels
    renderJobsList("all");
    renderNoticesList();
    renderGalleryList("all");
    
    // 3. Navigation Scrolling behavior
    setupNavigation();
    
    // 4. File drag/drop listeners
    setupFileZone();
    
    // 5. Submit recruitment form listener
    const applicationForm = document.getElementById("teacher-application-form");
    if (applicationForm) {
        applicationForm.addEventListener("submit", handleFormSubmission);
    }
    
    // 6. Setup gallery lightbox listeners
    setupLightbox();
});

// --- UI Binding Functions ---

// Dynamic updates for branding logos, phone redirects, WhatsApp clicks, headlines
function updateGlobalSettingsUI() {
    // Phone numbers updates
    const callLinks = document.querySelectorAll(".call-btn-link");
    callLinks.forEach(link => {
        link.href = `tel:${state.settings.phone}`;
        // If the inner text is just a placeholder number, change it to match settings
        if (link.textContent.trim().match(/^[0-9+ ]+$/)) {
            link.textContent = state.settings.phone;
        }
    });

    // WhatsApp updates
    const waLinks = document.querySelectorAll(".whatsapp-btn-link");
    waLinks.forEach(link => {
        link.href = `https://wa.me/91${state.settings.whatsapp}`;
        // Match texts inside the tags
        if (link.textContent.includes("WhatsApp: ")) {
            link.innerHTML = `<i class="fa-brands fa-whatsapp"></i> WhatsApp: ${state.settings.whatsapp}`;
        }
    });

    // Logo updates
    const headerLogo = document.getElementById("header-logo");
    if (headerLogo) headerLogo.src = state.settings.logoUrl;
    
    const footerLogo = document.getElementById("footer-logo");
    if (footerLogo) footerLogo.src = state.settings.logoUrl;
    
    const drawerLogo = document.querySelector(".drawer-logo");
    if (drawerLogo) drawerLogo.src = state.settings.logoUrl;

    // Headlines
    const heroTitle = document.getElementById("hero-main-title");
    if (heroTitle) heroTitle.textContent = state.settings.heroTitle;
    
    const heroSub = document.getElementById("hero-sub-title");
    if (heroSub) heroSub.textContent = state.settings.heroSub;

    // Pre-populate settings inputs in Admin panel if they exist
    const setPhoneInput = document.getElementById("settings-phone");
    if (setPhoneInput) setPhoneInput.value = state.settings.phone;
    
    const setWAInput = document.getElementById("settings-whatsapp");
    if (setWAInput) setWAInput.value = state.settings.whatsapp;
    
    const setHeroTitleInput = document.getElementById("settings-hero-title");
    if (setHeroTitleInput) setHeroTitleInput.value = state.settings.heroTitle;
    
    const setHeroSubInput = document.getElementById("settings-hero-sub");
    if (setHeroSubInput) setHeroSubInput.value = state.settings.heroSub;

    const setLogoInput = document.getElementById("settings-logo-url");
    if (setLogoInput) setLogoInput.value = state.settings.logoUrl;

    const setHeroInput = document.getElementById("settings-hero-url");
    if (setHeroInput) setHeroInput.value = state.settings.heroUrl;

    // Hero background update
    const heroSection = document.getElementById("home");
    if (heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(15, 32, 67, 0.85), rgba(15, 32, 67, 0.85)), url('${state.settings.heroUrl}')`;
    }
}

// Render dynamic job openings in Frontend Careers Section
function renderJobsList(filter = "all") {
    const jobsContainer = document.getElementById("jobs-container");
    if (!jobsContainer) return;
    
    jobsContainer.innerHTML = "";
    const activeJobs = state.jobs.filter(j => j.status === "Active");
    const filteredJobs = filter === "all" ? activeJobs : activeJobs.filter(j => j.category === filter);
    
    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="loading-placeholder">
                <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom:12px;"></i>
                <p>No active openings found in this category at this moment. You can submit a general application below.</p>
            </div>
        `;
        return;
    }

    filteredJobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "job-card";
        card.innerHTML = `
            <span class="job-badge">${job.category}</span>
            <h4>${job.title}</h4>
            <ul class="job-meta-list">
                <li><i class="fa-solid fa-graduation-cap"></i> <strong>Req:</strong> ${job.qualification}</li>
                <li><i class="fa-solid fa-clock"></i> <strong>Exp:</strong> ${job.experience}</li>
                <li><i class="fa-solid fa-gift"></i> <strong>Perks:</strong> ${job.benefits || "Standard Benefits"}</li>
            </ul>
            <div class="job-card-actions">
                <button class="btn btn-primary btn-sm" onclick="applyForJob('${job.title}')">Apply Now</button>
            </div>
        `;
        jobsContainer.appendChild(card);
    });
}

// Function triggered when "Apply Now" is clicked on a specific job card
function applyForJob(subjectName) {
    // 1. Scroll to the form section
    const formSection = document.getElementById("apply-form-section");
    if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // 2. Select the matching option in the Subject dropdown
    const subjectSelect = document.getElementById("subject");
    if (subjectSelect) {
        // Try to find a matching option or add a temporary custom one
        let optionFound = false;
        for (let i = 0; i < subjectSelect.options.length; i++) {
            if (subjectName.toLowerCase().includes(subjectSelect.options[i].value.toLowerCase()) || 
                subjectSelect.options[i].value.toLowerCase().includes(subjectName.toLowerCase())) {
                subjectSelect.selectedIndex = i;
                optionFound = true;
                break;
            }
        }
        
        // If not found directly, create a custom subject option
        if (!optionFound) {
            const newOpt = new Option(subjectName, subjectName, true, true);
            subjectSelect.add(newOpt);
        }
    }
}

// Render notices in Frontend timeline board
function renderNoticesList() {
    const noticesContainer = document.getElementById("notices-container");
    if (!noticesContainer) return;
    
    noticesContainer.innerHTML = "";
    
    if (state.notices.length === 0) {
        noticesContainer.innerHTML = `
            <div class="loading-placeholder">
                <i class="fa-solid fa-bullhorn" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom:12px;"></i>
                <p>No active notices or updates are posted right now.</p>
            </div>
        `;
        return;
    }

    state.notices.forEach(notice => {
        // Format date beautifully
        const dateObj = new Date(notice.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        
        const card = document.createElement("div");
        card.className = "notice-card";
        card.innerHTML = `
            <div class="notice-date-badge"><i class="fa-regular fa-calendar-days"></i> ${formattedDate}</div>
            <h4>${notice.title}</h4>
            <p class="notice-desc">${notice.desc}</p>
            <div class="notice-card-footer">
                <span class="notice-category">${notice.category}</span>
                ${notice.urgent ? '<span class="notice-urgent-pulse" title="Urgent Recruitment Announcement"></span>' : ''}
            </div>
        `;
        noticesContainer.appendChild(card);
    });
}

// Render grid gallery images
function renderGalleryList(gFilter = "all") {
    const galleryContainer = document.getElementById("gallery-container");
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = "";
    const filteredImages = gFilter === "all" ? state.gallery : state.gallery.filter(img => img.category === gFilter);
    
    filteredImages.forEach((img, index) => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.innerHTML = `
            <img src="${img.url}" alt="${img.title}" class="gallery-img" onerror="this.src='https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'">
            <div class="gallery-item-overlay">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
                <h4>${img.title}</h4>
                <span>Category: ${img.category}</span>
            </div>
        `;
        // Open Lightbox on click
        item.addEventListener("click", () => {
            openLightboxModal(img.url, img.title);
        });
        galleryContainer.appendChild(item);
    });
}

// --- Navigation & Scroll Handler ---
function setupNavigation() {
    const header = document.getElementById("main-header");
    const navLinks = document.querySelectorAll(".nav-link");
    const drawerLinks = document.querySelectorAll(".drawer-link");
    
    // Header scrolled transformation
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Highlight active navigation link based on scroll section
        let current = "";
        const sections = document.querySelectorAll("section");
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 180)) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Mobile menu drawer toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const drawerClose = document.getElementById("drawer-close");
    
    if (menuToggle && mobileDrawer && drawerClose) {
        menuToggle.addEventListener("click", () => {
            mobileDrawer.classList.add("open");
        });
        
        drawerClose.addEventListener("click", () => {
            mobileDrawer.classList.remove("open");
        });
    }

    // Scroll offset adjustment for anchors
    const scrollLinks = document.querySelectorAll(".scroll-link, .nav-link, .drawer-link");
    scrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                
                // If it is the admin portal page toggle, we handle it separately
                if (targetId === "#admin-portal") {
                    return;
                }

                // Close drawer if open
                if (mobileDrawer) mobileDrawer.classList.remove("open");
                
                const targetSec = document.querySelector(targetId);
                if (targetSec) {
                    const headerHeight = 100;
                    const offsetPosition = targetSec.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Vacancy Filter Buttons
    const jobFilters = document.getElementById("job-filters");
    if (jobFilters) {
        const filterBtns = jobFilters.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderJobsList(btn.dataset.filter);
            });
        });
    }

    // Gallery Filter Buttons
    const galleryFilters = document.querySelector(".gallery-filters");
    if (galleryFilters) {
        const filterBtns = galleryFilters.querySelectorAll(".g-filter-btn");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderGalleryList(btn.dataset.gfilter);
            });
        });
    }
}

// --- File Drag & Drop Setup ---
let uploadedFileObject = null; // Store temp file state

function setupFileZone() {
    const zone = document.getElementById("upload-zone");
    const fileInput = document.getElementById("resume-file");
    const indicator = document.getElementById("file-selected-indicator");
    const content = zone?.querySelector(".upload-zone-content");
    const fileNameTxt = document.getElementById("file-name-text");
    const removeBtn = document.getElementById("remove-file-btn");
    
    if (!zone || !fileInput) return;

    // Handle clicks to open selector
    zone.addEventListener("click", (e) => {
        // Prevent infinite loop if clicking inner elements
        if (e.target !== fileInput && e.target !== removeBtn && !removeBtn?.contains(e.target)) {
            fileInput.click();
        }
    });

    // Handle file change
    fileInput.addEventListener("change", () => {
        handleFileSelect(fileInput.files[0]);
    });

    // Drag-over styling
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.style.borderColor = "var(--accent)";
        zone.style.backgroundColor = "var(--accent-light)";
    });

    zone.addEventListener("dragleave", () => {
        zone.style.borderColor = "var(--border-color)";
        zone.style.backgroundColor = "var(--bg-body)";
    });

    zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.style.borderColor = "var(--border-color)";
        zone.style.backgroundColor = "var(--bg-body)";
        if (e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });

    // Remove file selection click
    if (removeBtn) {
        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Avoid triggering open selector
            fileInput.value = "";
            uploadedFileObject = null;
            indicator.style.display = "none";
            content.style.display = "flex";
        });
    }

    function handleFileSelect(file) {
        if (!file) return;
        
        // Basic Size check (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert("File size exceeds 5MB limit. Please upload a smaller resume.");
            fileInput.value = "";
            return;
        }

        uploadedFileObject = {
            name: file.name,
            size: file.size,
            type: file.type
        };

        // Update indicator text and swap views
        fileNameTxt.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        content.style.display = "none";
        indicator.style.display = "flex";
    }
}

// --- Handle Form Submissions & Applications ---
function handleFormSubmission(event) {
    event.preventDefault();
    
    // Read details
    const name = document.getElementById("name").value.trim();
    const fatherName = document.getElementById("father-name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const languages = document.getElementById("languages").value.trim();
    const qualification = document.getElementById("qualification").value.trim();
    const subject = document.getElementById("subject").value;
    const experience = document.getElementById("experience").value;
    const currentSchool = document.getElementById("current-school").value.trim();
    const prevSchool = document.getElementById("prev-school").value.trim();
    const prevSalary = document.getElementById("prev-salary").value.trim();
    const expSalary = document.getElementById("exp-salary").value.trim();
    const selectedCountry = document.getElementById("country").value.trim();
    const selectedState = document.getElementById("state").value.trim();
    const selectedDistrict = document.getElementById("district").value.trim();
    const portfolio = document.getElementById("portfolio").value.trim() || "Not Provided";
    const area = document.getElementById("area").value.trim();
    const station = document.getElementById("station").value.trim();
    const relocate = document.getElementById("relocate").value;
    const verification = document.getElementById("verification").value;
    const address = document.getElementById("address").value.trim();
    
    // Resume validation (Optional)
    const resumeName = uploadedFileObject ? uploadedFileObject.name : "No resume uploaded";

    const refId = `MV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newApp = {
        id: refId,
        timestamp: new Date().toISOString(),
        name,
        fatherName,
        phone,
        email,
        languages,
        qualification,
        subject,
        experience,
        currentSchool: currentSchool || "N/A",
        prevSchool: prevSchool || "N/A",
        prevSalary: prevSalary || "N/A",
        expSalary,
        country: selectedCountry,
        state: selectedState,
        district: selectedDistrict,
        portfolio,
        area,
        station,
        relocate,
        verification,
        address,
        resumeName,
        status: "New"
    };

    // Save into state
    state.applications.unshift(newApp); // Add to beginning of array
    syncStateToStorage();

    // Compile message for WhatsApp redirect
    const formattedMsg = `*NEW TEACHER APPLICATION - MAYURI VIDYALAYAM*
--------------------------------------------------
*Name:* ${name}
*Father Name:* ${fatherName}
*Phone:* ${phone}
*Email:* ${email}
*Qualification:* ${qualification}
*Subject:* ${subject}
*Experience:* ${experience}
*Current School:* ${currentSchool || 'N/A'}
*Previous School Details:* ${prevSchool || 'N/A'}
*Previous Salary:* ${prevSalary || 'N/A'}
*Expected Salary:* ${expSalary}
*Languages Known:* ${languages}
*Ready to Relocate:* ${relocate}
*Ready for Verification:* ${verification}
*Country:* ${selectedCountry}
*State:* ${selectedState}
*District:* ${selectedDistrict}
*Full Address:* ${address}
*Portfolio Link:* ${portfolio}
*Resume File:* ${resumeName}
--------------------------------------------------
_Please review and acknowledge receipt._`;

    // Open WhatsApp in new tab with prefilled message
    const waUrl = `https://wa.me/919575334335?text=${encodeURIComponent(formattedMsg)}`;
    window.open(waUrl, '_blank');

    // Trigger Success Feedback Modal
    document.getElementById("summary-cand-name").textContent = name;
    document.getElementById("summary-cand-pos").textContent = subject;
    document.getElementById("summary-cand-ref").textContent = refId;
    
    openModal("success-modal");

    // Reset Form
    event.target.reset();
    
    // Reset file zone styling
    const zone = document.getElementById("upload-zone");
    const fileInput = document.getElementById("resume-file");
    const indicator = document.getElementById("file-selected-indicator");
    const content = zone?.querySelector(".upload-zone-content");
    if (fileInput) fileInput.value = "";
    uploadedFileObject = null;
    if (indicator) indicator.style.display = "none";
    if (content) content.style.display = "flex";

    // Refresh Admin views in case it is open in background
    refreshAdminViews();
}

// --- Lightbox Modal Controllers ---
function setupLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const closeBtn = document.getElementById("lightbox-close");
    
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
        });
        
        // Close on clicking outside content
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("open");
            }
        });
    }
}

function openLightboxModal(imgUrl, titleText) {
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    
    if (modal && modalImg && caption) {
        modalImg.src = imgUrl;
        caption.textContent = titleText;
        modal.classList.add("open");
    }
}

// Modal Toggle utilities
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("open");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("open");
}

// --- ADMIN PORTAL LOGIC ---

function openAdminPortal() {
    const adminSec = document.getElementById("admin-portal");
    if (adminSec) {
        adminSec.style.display = "block";
        adminSec.scrollIntoView({ behavior: "smooth" });
        
        // Focus password field automatically if not authenticated yet
        if (document.getElementById("admin-dashboard-panel").style.display === "none") {
            const passcodeField = document.getElementById("admin-passcode");
            if (passcodeField) {
                passcodeField.value = "";
                passcodeField.focus();
            }
        }
    }
    
    // Close mobile drawer menu
    const mobileDrawer = document.getElementById("mobile-drawer");
    if (mobileDrawer) mobileDrawer.classList.remove("open");
}

function closeAdminPortal() {
    const adminSec = document.getElementById("admin-portal");
    if (adminSec) {
        adminSec.style.display = "none";
    }
    // Scroll back to Home
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Verify Passcode
function verifyAdminPasscode() {
    const entered = document.getElementById("admin-passcode").value;
    const errorMsg = document.getElementById("gate-error");
    
    // Check passcode. Simple validation for local-storage demonstration
    if (entered === "rishi@123") {
        errorMsg.style.display = "none";
        document.getElementById("admin-gate").style.display = "none";
        document.getElementById("admin-dashboard-panel").style.display = "flex";
        
        // Refresh and load dashboards
        refreshAdminViews();
        switchAdminTab("overview");
    } else {
        errorMsg.style.display = "block";
        document.getElementById("admin-passcode").value = "";
    }
}

// Switch tabs inside admin workspace
function switchAdminTab(tabName) {
    // Nav highlight
    const tabBtns = document.querySelectorAll(".admin-tab-link");
    tabBtns.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("onclick").includes(tabName)) {
            btn.classList.add("active");
        }
    });

    // Content Display swap
    const contents = document.querySelectorAll(".admin-tab-content");
    contents.forEach(content => {
        content.classList.remove("active");
    });
    
    const activeContent = document.getElementById(`admin-tab-${tabName}`);
    if (activeContent) activeContent.classList.add("active");
}

// Re-render and populate Admin tables and counts
function refreshAdminViews() {
    // 1. Update Metrics
    const activeJobs = state.jobs.filter(j => j.status === "Active").length;
    
    document.getElementById("admin-app-badge").textContent = state.applications.length;
    document.getElementById("metric-apps-count").textContent = state.applications.length;
    document.getElementById("metric-jobs-count").textContent = activeJobs;
    document.getElementById("metric-notices-count").textContent = state.notices.length;

    // 2. Populate Recent Applications (Overview Tab)
    const recentTbody = document.getElementById("recent-apps-tbody");
    if (recentTbody) {
        recentTbody.innerHTML = "";
        const recents = state.applications.slice(0, 5); // top 5
        
        if (recents.length === 0) {
            recentTbody.innerHTML = '<tr><td colspan="5" class="text-center">No applications received yet.</td></tr>';
        } else {
            recents.forEach(app => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td class="candidate-name-cell">${app.name}<span class="candidate-contact-sub">${app.phone}</span></td>
                    <td>${app.subject}</td>
                    <td>${app.qualification}</td>
                    <td>${app.experience}</td>
                    <td><span class="badge-status new">${app.status}</span></td>
                `;
                recentTbody.appendChild(tr);
            });
        }
    }

    // 3. Populate All Applications Tab
    const allAppsTbody = document.getElementById("all-apps-tbody");
    if (allAppsTbody) {
        populateApplicationsTable(state.applications);
    }

    // 4. Populate Job Vacancies Tab
    const jobsTbody = document.getElementById("admin-jobs-tbody");
    if (jobsTbody) {
        jobsTbody.innerHTML = "";
        state.jobs.forEach(job => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${job.title}</strong></td>
                <td>${job.category}</td>
                <td>${job.qualification}</td>
                <td>${job.experience}</td>
                <td>${job.benefits || "Standard"}</td>
                <td><span class="badge-status active-pill">${job.status}</span></td>
                <td>
                    <div class="table-actions">
                        <button class="action-icon-btn delete" onclick="deleteJob('${job.id}')" title="Delete Opening"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            `;
            jobsTbody.appendChild(tr);
        });
    }

    // 5. Populate Announcements Tab
    const noticesTbody = document.getElementById("admin-notices-tbody");
    if (noticesTbody) {
        noticesTbody.innerHTML = "";
        state.notices.forEach(notice => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${notice.date}</td>
                <td><strong>${notice.title}</strong></td>
                <td>${notice.category}</td>
                <td style="max-width:240px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${notice.desc}</td>
                <td>${notice.urgent ? '<span class="required" style="font-weight:700;"><i class="fa-solid fa-circle-exclamation text-danger"></i> Urgent</span>' : 'Normal'}</td>
                <td>
                    <div class="table-actions">
                        <button class="action-icon-btn delete" onclick="deleteNotice('${notice.id}')" title="Delete Notice"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            `;
            noticesTbody.appendChild(tr);
        });
    }
}

// Render candidate list with options
function populateApplicationsTable(appsArray) {
    const tbody = document.getElementById("all-apps-tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    
    if (appsArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center">No applications match current filters.</td></tr>';
        return;
    }

    appsArray.forEach(app => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="candidate-name-cell">
                ${app.name}
                <span class="candidate-contact-sub">${app.email} | ${app.phone}</span>
            </td>
            <td><strong>${app.subject}</strong></td>
            <td>${app.experience}</td>
            <td>${app.relocate}</td>
            <td>${app.verification}</td>
            <td>${app.area}</td>
            <td>${app.expSalary}</td>
            <td>
                <div class="table-actions">
                    <button class="action-icon-btn view" onclick="viewCandidateDossier('${app.id}')" title="View Details"><i class="fa-solid fa-folder-open"></i></button>
                    <button class="action-icon-btn delete" onclick="deleteApplication('${app.id}')" title="Delete Application"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Filter Applications table dynamically
function searchApplications() {
    const val = document.getElementById("app-search-input").value.toLowerCase();
    const filtered = state.applications.filter(app => {
        return app.name.toLowerCase().includes(val) || 
               app.subject.toLowerCase().includes(val) ||
               app.qualification.toLowerCase().includes(val) ||
               app.phone.includes(val);
    });
    populateApplicationsTable(filtered);
}

// Dossier View Modal for Administrator
function viewCandidateDossier(appId) {
    const app = state.applications.find(a => a.id === appId);
    if (!app) return;

    const modalBody = document.getElementById("admin-app-detail-body");
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="dossier-grid">
                <div class="dossier-item">
                    <span class="dossier-label">Applicant ID</span>
                    <span class="dossier-value">${app.id}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Submission Date</span>
                    <span class="dossier-value">${new Date(app.timestamp).toLocaleString()}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Full Name</span>
                    <span class="dossier-value">${app.name}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Father's Name</span>
                    <span class="dossier-value">${app.fatherName}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Phone Number</span>
                    <span class="dossier-value">${app.phone}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Email Address</span>
                    <span class="dossier-value">${app.email}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Languages Known</span>
                    <span class="dossier-value">${app.languages}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Academic Qualification</span>
                    <span class="dossier-value">${app.qualification}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Target Subject</span>
                    <span class="dossier-value">${app.subject}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Teaching Experience</span>
                    <span class="dossier-value">${app.experience}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Current Employer School</span>
                    <span class="dossier-value">${app.currentSchool}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Previous School & Tenure</span>
                    <span class="dossier-value">${app.prevSchool}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Current Monthly Salary</span>
                    <span class="dossier-value">${app.prevSalary}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Expected Monthly Salary</span>
                    <span class="dossier-value">${app.expSalary}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Resident Area / Locality</span>
                    <span class="dossier-value">${app.area}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Nearest Railway Station</span>
                    <span class="dossier-value">${app.station}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Ready to Relocate?</span>
                    <span class="dossier-value">${app.relocate}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Verify Background Check?</span>
                    <span class="dossier-value">${app.verification}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">Country</span>
                    <span class="dossier-value">${app.country || "India"}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">State</span>
                    <span class="dossier-value">${app.state || "Telangana"}</span>
                </div>
                <div class="dossier-item">
                    <span class="dossier-label">District</span>
                    <span class="dossier-value">${app.district || "Adilabad"}</span>
                </div>
                <div class="dossier-item span-2">
                    <span class="dossier-label">Portfolio & Professional Links</span>
                    <span class="dossier-value">${app.portfolio && app.portfolio !== 'Not Provided' ? `<a href="${app.portfolio}" target="_blank" style="color:var(--accent); text-decoration:underline;"><i class="fa-solid fa-link"></i> ${app.portfolio}</a>` : "Not Provided"}</span>
                </div>
                <div class="dossier-item span-2">
                    <span class="dossier-label">Full Communication Address</span>
                    <span class="dossier-value">${app.address}</span>
                </div>
                <div class="dossier-item span-2">
                    <span class="dossier-label">Submitted Resume File</span>
                    <span class="dossier-value" style="color:var(--accent); font-size:1.05rem;"><i class="fa-solid fa-file-pdf"></i> ${app.resumeName} (Screened Safe)</span>
                </div>
            </div>
            <div class="dossier-btn-row">
                <a href="tel:${app.phone}" class="btn btn-primary btn-sm"><i class="fa-solid fa-phone"></i> Call Candidate</a>
                <a href="https://wa.me/91${app.phone}" target="_blank" class="btn btn-whatsapp btn-sm"><i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>
            </div>
        `;
        openModal("admin-app-detail-modal");
    }
}

// Delete functions
function deleteApplication(appId) {
    if (confirm("Are you sure you want to permanently delete this application dossier?")) {
        state.applications = state.applications.filter(a => a.id !== appId);
        syncStateToStorage();
        refreshAdminViews();
    }
}

function deleteJob(jobId) {
    if (confirm("Are you sure you want to delete this job vacancy listing?")) {
        state.jobs = state.jobs.filter(j => j.id !== jobId);
        syncStateToStorage();
        refreshAdminViews();
        renderJobsList("all"); // Refresh frontend list
    }
}

function deleteNotice(noticeId) {
    if (confirm("Are you sure you want to delete this news notice?")) {
        state.notices = state.notices.filter(n => n.id !== noticeId);
        syncStateToStorage();
        refreshAdminViews();
        renderNoticesList(); // Refresh frontend list
    }
}

// Modals management for adding Jobs & Notices
function toggleAddJobModal(show) {
    if (show) {
        document.getElementById("add-job-form").reset();
        openModal("admin-add-job-modal");
    } else {
        closeModal("admin-add-job-modal");
    }
}

function toggleAddNoticeModal(show) {
    if (show) {
        document.getElementById("add-notice-form").reset();
        openModal("admin-add-notice-modal");
    } else {
        closeModal("admin-add-notice-modal");
    }
}

// Add Job submission
function submitAdminJob(event) {
    event.preventDefault();
    const title = document.getElementById("new-job-title").value.trim();
    const category = document.getElementById("new-job-category").value;
    const qualification = document.getElementById("new-job-qual").value.trim();
    const experience = document.getElementById("new-job-exp").value.trim();
    const benefits = document.getElementById("new-job-benefits").value.trim();
    
    const newJob = {
        id: `job-${Date.now()}`,
        title,
        category,
        qualification,
        experience,
        benefits,
        status: "Active"
    };

    state.jobs.unshift(newJob);
    syncStateToStorage();
    
    toggleAddJobModal(false);
    refreshAdminViews();
    renderJobsList("all");
}

// Add Notice submission
function submitAdminNotice(event) {
    event.preventDefault();
    const title = document.getElementById("new-notice-title").value.trim();
    const category = document.getElementById("new-notice-category").value;
    const desc = document.getElementById("new-notice-desc").value.trim();
    const urgent = document.getElementById("new-notice-urgent").checked;
    
    const newNotice = {
        id: `notice-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        title,
        category,
        desc,
        urgent
    };

    state.notices.unshift(newNotice);
    syncStateToStorage();
    
    toggleAddNoticeModal(false);
    refreshAdminViews();
    renderNoticesList();
}

// Save Website Global settings
function saveWebsiteSettings(event) {
    event.preventDefault();
    
    const phone = document.getElementById("settings-phone").value.trim();
    const whatsapp = document.getElementById("settings-whatsapp").value.trim();
    const heroTitle = document.getElementById("settings-hero-title").value.trim();
    const heroSub = document.getElementById("settings-hero-sub").value.trim();
    const logoUrl = document.getElementById("settings-logo-url").value.trim();
    const heroUrl = document.getElementById("settings-hero-url").value.trim();

    state.settings = {
        phone,
        whatsapp,
        heroTitle,
        heroSub,
        logoUrl,
        heroUrl
    };

    syncStateToStorage();
    updateGlobalSettingsUI();
    
    alert("Website configurations updated successfully!");
}

// Export database as JSON download
function downloadAllApplications() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.applications, null, 4));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Mayuri_Vidyalayam_Candidates_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}
