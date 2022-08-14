// import _ from 'lodash'
// import html from './index.html'
// import { test } from './test.js'
import './scss/style.scss'
import './images/1x1.png'
import './images/1x1.webp'
import './images/hero-bg.png'
import './images/hero-bg@2x.png'
import './images/hero-bg@2x.webp'

/*-----------------------------------------------------------------------------------*/
/* Lazy Load
-------------------------------------------------------------------------------------*/


const imgObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoad(entry.target);
            self.unobserve(entry.target);
        }
    });
});
document.querySelectorAll('.lazy').forEach((picture) => {
    imgObserver.observe(picture);
});


const lazyLoad = (picture) => {
    const img = picture.querySelector('img');
    const sources = picture.querySelectorAll('source');

    sources.forEach((source) => {
        source.srcset = source.dataset.srcset;
        source.removeAttribute('data-srcset');
    });

    img.src = img.dataset.src;
    img.srcset = img.dataset.srcset;
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
}
