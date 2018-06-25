import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($('.reveal-on-scroll'), '85%');
