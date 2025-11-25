// PulseFeed Demo - Main Application Logic
// Modern SaaS employee feedback platform with real-time features

class PulseFeedApp {
    constructor() {
        this.currentView = 'employee';
        this.posts = [];
        this.settings = {
            keyword_alerts: ['harassment', 'safety', 'violence', 'discrimination'],
            auto_moderation: true
        };
        this.isAdmin = false;
        this.realtimeSubscriptions = [];
        
        // Demo data for initial load
        this.initializeDemoData();
        this.initializeAnimations();
        this.setupEventListeners();
    }

    // Initialize demo data for realistic testing
    initializeDemoData() {
        const demoPosts = [
            {
                id: '1',
                content: 'Love the new flexible hours policy! It\'s made such a difference for my work-life balance. #worklifebalance #flexibility',
                sentiment: 'positive',
                tags: ['worklifebalance', 'flexibility'],
                reactions: { '👍': 12, '👎': 1, '❤️': 8 },
                status: 'approved',
                created_at: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
                avatar_color: '#3B82F6',
                avatar_letter: 'A'
            },
            {
                id: '2',
                content: 'Communication from management has been unclear lately. We need more transparency about the upcoming changes. #communication #management',
                sentiment: 'negative',
                tags: ['communication', 'management'],
                reactions: { '👍': 5, '👎': 3, '❤️': 2 },
                status: 'approved',
                created_at: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
                avatar_color: '#10B981',
                avatar_letter: 'B'
            },
            {
                id: '3',
                content: 'The coffee machine on the 3rd floor is broken again. Can we get this fixed soon? #facilities #maintenance',
                sentiment: 'neutral',
                tags: ['facilities', 'maintenance'],
                reactions: { '👍': 3, '👎': 1, '❤️': 1 },
                status: 'approved',
                created_at: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
                avatar_color: '#8B5CF6',
                avatar_letter: 'C'
            },
            {
                id: '4',
                content: 'Really appreciate how the team came together to meet the project deadline. Great collaboration everyone! #teamwork #appreciation',
                sentiment: 'positive',
                tags: ['teamwork', 'appreciation'],
                reactions: { '👍': 15, '👎': 0, '❤️': 12 },
                status: 'approved',
                created_at: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
                avatar_color: '#F59E0B',
                avatar_letter: 'D'
            },
            {
                id: '5',
                content: 'There have been some concerns about safety protocols in the manufacturing area. We should review these procedures. #safety #protocols',
                sentiment: 'negative',
                tags: ['safety', 'protocols'],
                reactions: { '👍': 7, '👎': 2, '❤️': 4 },
                status: 'flagged',
                created_at: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
                avatar_color: '#06B6D4',
                avatar_letter: 'E'
            },
            {
                id: '6',
                content: 'The new onboarding process is much smoother than before. New team members seem to be integrating faster. #onboarding #improvement',
                sentiment: 'positive',
                tags: ['onboarding', 'improvement'],
                reactions: { '👍': 9, '👎': 1, '❤️': 6 },
                status: 'approved',
                created_at: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
                avatar_color: '#EF4444',
                avatar_letter: 'F'
            },
            {
                id: '7',
                content: 'Can we consider more flexible remote work options? The current policy feels restrictive. #remote #policy',
                sentiment: 'negative',
                tags: ['remote', 'policy'],
                reactions: { '👍': 11, '👎': 2, '❤️': 7 },
                status: 'approved',
                created_at: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
                avatar_color: '#84CC16',
                avatar_letter: 'G'
            },
            {
                id: '8',
                content: 'The diversity and inclusion training was eye-opening. Would love to see more sessions like this. #diversity #training',
                sentiment: 'positive',
                tags: ['diversity', 'training'],
                reactions: { '👍': 13, '👎': 1, '❤️': 9 },
                status: 'approved',
                created_at: new Date(Date.now() - 36 * 60 * 60 * 1000), // 1.5 days ago
                avatar_color: '#F97316',
                avatar_letter: 'H'
            }
        ];

        this.posts = demoPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    // Initialize animation libraries and effects
    initializeAnimations() {
        // Initialize particles background
        if (typeof p5 !== 'undefined') {
            this.initParticles();
        }

        // Initialize text animations
        if (typeof Typed !== 'undefined') {
            this.initTypewriter();
        }

        // Initialize scroll animations
        this.initScrollAnimations();
    }

    // Particle background effect
    initParticles() {
        const sketch = (p) => {
            let particles = [];
            
            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('particles-container');
                canvas.style('position', 'fixed');
                canvas.style('top', '0');
                canvas.style('left', '0');
                canvas.style('z-index', '-1');
                
                // Create particles
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(2, 6),
                        opacity: p.random(0.1, 0.3)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                
                particles.forEach(particle => {
                    // Update position
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    // Wrap around edges
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    // Draw particle
                    p.fill(79, 70, 229, particle.opacity * 255);
                    p.noStroke();
                    p.circle(particle.x, particle.y, particle.size);
                });
            };
            
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        };
        
        new p5(sketch);
    }

    // Typewriter effect for hero text
    initTypewriter() {
        const element = document.getElementById('hero-text');
        if (element) {
            new Typed('#hero-text', {
                strings: [
                    'Share feedback anonymously',
                    'Build better workplace culture',
                    'Voice your opinions safely',
                    'Drive positive change together'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    // Scroll-triggered animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.card, .section').forEach(el => {
            observer.observe(el);
        });
    }

    // Setup global event listeners
    setupEventListeners() {
        // Navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-view]')) {
                this.switchView(e.target.dataset.view);
            }
            
            if (e.target.matches('[data-action]')) {
                this.handleAction(e.target.dataset.action, e.target);
            }
        });

        // Form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.matches('#post-form')) {
                e.preventDefault();
                this.handlePostSubmission(e.target);
            }
            
            if (e.target.matches('#admin-login-form')) {
                e.preventDefault();
                this.handleAdminLogin(e.target);
            }
        });

        // Real-time updates simulation
        this.simulateRealTimeUpdates();
    }

    // Switch between employee and admin views
    switchView(view) {
        this.currentView = view;
        
        if (view === 'admin') {
            this.showAdminLogin();
        } else {
            this.showEmployeeView();
        }
    }

    // Show admin login modal
    showAdminLogin() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">HR Admin Login</h2>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <form id="admin-login-form">
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter admin password" required>
                    </div>
                    <div class="text-sm text-gray-500 mb-4">
                        Demo password: pulse2025
                    </div>
                    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                        Login
                    </button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Focus on password input
        setTimeout(() => {
            modal.querySelector('input[type="password"]').focus();
        }, 100);
    }

    // Handle admin login
    handleAdminLogin(form) {
        const formData = new FormData(form);
        const password = formData.get('password');
        
        if (password === 'pulse2025') {
            this.isAdmin = true;
            this.showAdminDashboard();
            form.closest('.fixed').remove();
        } else {
            this.showNotification('Invalid password. Please try again.', 'error');
        }
    }

    // Show admin dashboard
    showAdminDashboard() {
        window.location.href = 'admin.html';
    }

    // Show employee view
    showEmployeeView() {
        window.location.href = 'employee.html';
    }

    // Handle post submission
    handlePostSubmission(form) {
        const formData = new FormData(form);
        const content = formData.get('content').trim();
        
        if (!content) {
            this.showNotification('Please enter some feedback to share.', 'error');
            return;
        }

        // Create new post
        const newPost = {
            id: Date.now().toString(),
            content: content,
            sentiment: this.analyzeSentiment(content),
            tags: this.extractTags(content),
            reactions: { '👍': 0, '👎': 0, '❤️': 0 },
            status: this.settings.auto_moderation ? 'pending' : 'approved',
            created_at: new Date(),
            avatar_color: this.generateAvatarColor(),
            avatar_letter: this.generateAvatarLetter()
        };

        // Add to posts array
        this.posts.unshift(newPost);
        
        // Clear form
        form.reset();
        
        // Update UI
        this.renderPosts();
        this.showNotification('Feedback shared successfully!', 'success');
        
        // Animate new post
        setTimeout(() => {
            const newPostElement = document.querySelector('[data-post-id="' + newPost.id + '"]');
            if (newPostElement) {
                newPostElement.classList.add('animate-slide-in');
            }
        }, 100);
    }

    // Handle reaction clicks
    handleReaction(postId, reaction) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            post.reactions[reaction] = (post.reactions[reaction] || 0) + 1;
            this.renderPosts();
            
            // Animate reaction
            const reactionButton = document.querySelector(`[data-post-id="${postId}"] [data-reaction="${reaction}"]`);
            if (reactionButton) {
                reactionButton.classList.add('animate-bounce');
                setTimeout(() => {
                    reactionButton.classList.remove('animate-bounce');
                }, 300);
            }
        }
    }

    // Analyze sentiment of post content
    analyzeSentiment(content) {
        const positiveWords = ['love', 'great', 'awesome', 'amazing', 'excellent', 'fantastic', 'wonderful', 'appreciate', 'good', 'best', 'perfect', 'helpful', 'supportive'];
        const negativeWords = ['hate', 'terrible', 'awful', 'horrible', 'bad', 'worst', 'disappointed', 'frustrated', 'angry', 'annoyed', 'concerned', 'broken', 'problem'];
        
        const words = content.toLowerCase().split(/\s+/);
        let positiveCount = 0;
        let negativeCount = 0;
        
        words.forEach(word => {
            if (positiveWords.some(pw => word.includes(pw))) positiveCount++;
            if (negativeWords.some(nw => word.includes(nw))) negativeCount++;
        });
        
        if (positiveCount > negativeCount) return 'positive';
        if (negativeCount > positiveCount) return 'negative';
        return 'neutral';
    }

    // Extract hashtags from content
    extractTags(content) {
        const tags = content.match(/#\w+/g);
        return tags ? tags.map(tag => tag.substring(1).toLowerCase()) : [];
    }

    // Generate random avatar color
    generateAvatarColor() {
        const colors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#06B6D4', '#EF4444', '#84CC16', '#F97316'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Generate random avatar letter
    generateAvatarLetter() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return letters[Math.floor(Math.random() * letters.length)];
    }

    // Format timestamp for display
    formatTimestamp(date) {
        const now = new Date();
        const diff = now - new Date(date);
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${days}d ago`;
    }

    // Render posts in the feed
    renderPosts() {
        const feedContainer = document.getElementById('posts-feed');
        if (!feedContainer) return;

        feedContainer.innerHTML = this.posts.map(post => this.createPostHTML(post)).join('');
    }

    // Create HTML for a single post
    createPostHTML(post) {
        const sentimentColor = {
            positive: 'text-emerald-600',
            negative: 'text-rose-600',
            neutral: 'text-amber-600'
        }[post.sentiment];

        return `
            <div class="card bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4" data-post-id="${post.id}">
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm" 
                             style="background-color: ${post.avatar_color}">
                            ${post.avatar_letter}
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center space-x-2 mb-2">
                            <span class="text-sm font-medium text-gray-900">Anonymous</span>
                            <span class="text-sm text-gray-500">•</span>
                            <span class="text-sm text-gray-500">${this.formatTimestamp(post.created_at)}</span>
                            <span class="text-xs px-2 py-1 rounded-full ${sentimentColor} bg-opacity-10 ${sentimentColor.replace('text-', 'bg-')}">${post.sentiment}</span>
                        </div>
                        <p class="text-gray-800 mb-3 leading-relaxed">${post.content}</p>
                        ${post.tags.length > 0 ? `
                            <div class="flex flex-wrap gap-2 mb-3">
                                ${post.tags.map(tag => `
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        #${tag}
                                    </span>
                                `).join('')}
                            </div>
                        ` : ''}
                        <div class="flex items-center space-x-4">
                            <button onclick="app.handleReaction('${post.id}', '👍')" 
                                    class="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 transition-colors"
                                    data-reaction="👍">
                                <span>👍</span>
                                <span class="text-sm">${post.reactions['👍']}</span>
                            </button>
                            <button onclick="app.handleReaction('${post.id}', '👎')" 
                                    class="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 transition-colors"
                                    data-reaction="👎">
                                <span>👎</span>
                                <span class="text-sm">${post.reactions['👎']}</span>
                            </button>
                            <button onclick="app.handleReaction('${post.id}', '❤️')" 
                                    class="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 transition-colors"
                                    data-reaction="❤️">
                                <span>❤️</span>
                                <span class="text-sm">${post.reactions['❤️']}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Handle generic actions
    handleAction(action, element) {
        switch (action) {
            case 'toggle-view':
                this.switchView(this.currentView === 'employee' ? 'admin' : 'employee');
                break;
            case 'export-data':
                this.exportData();
                break;
            case 'refresh-feed':
                this.renderPosts();
                this.showNotification('Feed refreshed!', 'success');
                break;
        }
    }

    // Export data to CSV
    exportData() {
        const csvContent = this.generateCSV();
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pulsefeed-export-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        
        this.showNotification('Data exported successfully!', 'success');
    }

    // Generate CSV content
    generateCSV() {
        const headers = ['ID', 'Content', 'Sentiment', 'Tags', 'Reactions (👍)', 'Reactions (👎)', 'Reactions (❤️)', 'Status', 'Created At'];
        const rows = this.posts.map(post => [
            post.id,
            `"${post.content.replace(/"/g, '""')}"`,
            post.sentiment,
            post.tags.join(', '),
            post.reactions['👍'],
            post.reactions['👎'],
            post.reactions['❤️'],
            post.status,
            new Date(post.created_at).toISOString()
        ]);
        
        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-emerald-500 text-white' :
            type === 'error' ? 'bg-rose-500 text-white' :
            'bg-indigo-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.transition = 'transform 0.3s ease-out';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Simulate real-time updates
    simulateRealTimeUpdates() {
        setInterval(() => {
            // Randomly add a new post every 30-60 seconds
            if (Math.random() < 0.1) { // 10% chance per interval
                this.addRandomPost();
            }
        }, 30000);
    }

    // Add a random post for demo purposes
    addRandomPost() {
        const samplePosts = [
            'The new wellness program is fantastic! Really helps with stress management. #wellness #stress',
            'Meeting rooms are always booked. Can we add more or improve the booking system? #meetings #facilities',
            'Great work on the latest product launch! The team really delivered under pressure. #teamwork #success',
            'Office temperature is inconsistent between floors. Could we get better climate control? #comfort #facilities',
            'The mentorship program has been incredibly valuable for my professional development. #mentorship #growth'
        ];
        
        const content = samplePosts[Math.floor(Math.random() * samplePosts.length)];
        const newPost = {
            id: Date.now().toString(),
            content: content,
            sentiment: this.analyzeSentiment(content),
            tags: this.extractTags(content),
            reactions: { '👍': Math.floor(Math.random() * 5), '👎': Math.floor(Math.random() * 2), '❤️': Math.floor(Math.random() * 3) },
            status: 'approved',
            created_at: new Date(),
            avatar_color: this.generateAvatarColor(),
            avatar_letter: this.generateAvatarLetter()
        };
        
        this.posts.unshift(newPost);
        this.renderPosts();
        
        // Show notification for new post
        this.showNotification('New feedback shared!', 'info');
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PulseFeedApp();
});

// Utility functions for global use
window.PulseFeedUtils = {
    formatNumber: (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
};