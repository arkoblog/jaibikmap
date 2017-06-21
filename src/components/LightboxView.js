var React = require('react');
var Lightbox = require('react-lightbox-component').Lightbox;

var LightboxView = React.createClass({
  render: function() {
    var images = [
      {
        src: 'https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/inception/1.jpg',
        title: 'image title',
        description: 'image description'
      }
    ];
    return (
      <Lightbox images={images} />
    );
  },
});

module.exports = LightboxView