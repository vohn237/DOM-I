const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2021',
  },
  images: {
    'logo-img': '../mocks/img/logo.png',
    'cta-img': '../mocks/img/cta.png',
    'accent-img': '../mocks/img/accent.png',
  },
};

console.log('project wired!');

//Navaigation Bar

const navBanner = document.querySelector('header');

const services = navBanner.querySelector('nav a:nth-of-type(1)');
services.textContent = siteContent.nav['nav-item-1'];
services.className = 'italic';
services.setAttribute('href', '#');

const product = navBanner.querySelector('nav a:nth-of-type(2)');
product.textContent = siteContent.nav['nav-item-2'];
product.className = 'italic';
product.setAttribute('href', '#');

const vision = navBanner.querySelector('nav a:nth-of-type(3)');
vision.textContent = siteContent.nav['nav-item-3'];
vision.className = 'italic';
vision.setAttribute('href', '#');

const features = navBanner.querySelector('nav a:nth-of-type(4)');
features.textContent = siteContent.nav['nav-item-4'];
features.className = 'italic';
features.setAttribute('href', '#');

const about = navBanner.querySelector('nav a:nth-of-type(5)');
about.textContent = siteContent.nav['nav-item-5'];
about.className = 'italic';
about.setAttribute('href', '#');

const contact = navBanner.querySelector('nav a:nth-of-type(6)');
contact.textContent = siteContent.nav['nav-item-6'];
contact.className = 'italic';
contact.setAttribute('href', '#');

const navLogo = navBanner.querySelector('img');
navLogo.setAttribute('src', siteContent.images['logo-img']);

// hero section

const hero = document.querySelector('.cta');

const heroHeading = hero.querySelector('h1');
heroHeading.textContent = siteContent.cta.h1;

const ctaBtn = hero.querySelector('button');
ctaBtn.textContent = siteContent.cta.button;

const ctaImg = hero.querySelector('img');
ctaImg.setAttribute('src', siteContent.images['cta-img']);
