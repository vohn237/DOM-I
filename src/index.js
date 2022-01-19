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

//middle content

const middleSection = document.querySelector('section.main-content');

const featuresInfo = middleSection.querySelector('div:nth-of-type(1)');
const featuresInfoH4 = featuresInfo.querySelector('h4');
featuresInfoH4.textContent = siteContent['main-content']['features-h4'];
const featuresInfoP = featuresInfo.querySelector('p');
featuresInfoP.textContent = siteContent['main-content']['features-content'];

const aboutInfo = middleSection.querySelector('div:nth-of-type(2)');
const aboutInfoH4 = aboutInfo.querySelector('h4');
aboutInfoH4.textContent = siteContent['main-content']['about-h4'];
const aboutInfoP = aboutInfo.querySelector('p');
aboutInfoP.textContent = siteContent['main-content']['about-content'];

const middleImg = middleSection.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent.images['accent-img']);

// bottomSection
const bottomSection = document.querySelector('section .bottom-content');

const serviceInfo = bottomSection.querySelector('div:nth-of-type(1)');
const serviceInfoH4 = serviceInfo.querySelector('h4');
serviceInfoH4.textContent = siteContent['main-content']['services-h4'];
const serviceInfoP = serviceInfo.querySelector('p');
serviceInfoP.textContent = siteContent['main-content']['services-content'];

const productInfo = bottomSection.querySelector('div:nth-of-type(2)');
const productInfoH4 = productInfo.querySelector('h4');
productInfoH4.textContent = siteContent['main-content']['product-h4'];
const productInfoP = productInfo.querySelector('p');
productInfoP.textContent = siteContent['main-content']['product-content'];

const visionInfo = bottomSection.querySelector('div:nth-of-type(3)');
const visionInfoH4 = visionInfo.querySelector('h4');
visionInfoH4.textContent = siteContent['main-content']['vision-h4'];
const visionInfoP = visionInfo.querySelector('p');
visionInfoP.textContent = siteContent['main-content']['vision-content'];

//contact

const contactSection = document.querySelector('.contact');

const contactHeader = contactSection.querySelector('h4');
contactHeader.textContent = siteContent.contact['contact-h4'];

const contactAddress = contactSection.querySelector('p');
contactAddress.textContent = siteContent.contact['address'];

const contactPhone = contactSection.querySelector('p:nth-of-type(2)');
contactPhone.textContent = siteContent.contact['phone'];

const contactEmail = contactSection.querySelector('p:nth-of-type(3)');
contactEmail.textContent = siteContent.contact['email'];
//footer

const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer['copyright'];
footerLink.className = 'bold';
footerLink.setAttribute('href', '#');
