// Navbar Opacity
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.querySelector('nav').style.opacity = 0.9;
  } else {
    document.querySelector('nav').style.opacity = 1;
  }
});

// Initialize and add the map
var map;
function initMap() {
  // Your location
  const loc = {lat: 25.7617, lng: -80.1918};
  // Centered on map location
  map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 8
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map});
};

// jQuery Smooth Scrolling
$('nav a, header a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 68
      },
      800
    );
  }
});