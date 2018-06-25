import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($('.reveal-on-scroll'), '85%');
var stickyHeader = new StickyHeader();
