var Lightbox = require('react-lightbox-component').Lightbox;

var LightboxView = React.createClass({
    render: function() {
        var images = [{
            src: 'some image url',
            title: 'image title',
            description: 'image description'
        }];
        return (
            <Lightbox images={images} />
        );
    },
});

module.exports = LightboxView
