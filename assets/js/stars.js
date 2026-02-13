(function() {
    var starWidth = Math.max(screen.width, 2000);
    var starHeight = 2000;

    function generateStars(count, color) {
        var shadows = [];
        for (var i = 0; i < count; i++) {
            var x = Math.floor(Math.random() * starWidth);
            var y = Math.floor(Math.random() * starHeight);
            shadows.push(x + 'px ' + y + 'px ' + color);
        }
        return shadows.join(', ');
    }

    var smallStars = generateStars(700, '#FFF');
    var mediumStars = generateStars(200, '#FFF');
    var bigStars = generateStars(100, '#FFF');

    document.documentElement.style.setProperty('--stars-small', smallStars);
    document.documentElement.style.setProperty('--stars-medium', mediumStars);
    document.documentElement.style.setProperty('--stars-big', bigStars);
})();
