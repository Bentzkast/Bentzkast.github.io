import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(classSelector, offset) {
    this.itemToReveal = classSelector;
    this.offset = offset;
    this.hideElement();
    this.createWaypoints();
  }

  hideElement() {
    this.itemToReveal.addClass('to-reveal');
  }

  createWaypoints() {
    var that = this;
    this.itemToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass('to-reveal--is-visible');
        },
        offset: that.offset
      });
    });
  }
}

export default RevealOnScroll;
