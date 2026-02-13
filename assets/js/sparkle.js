(function() {
    var throttle = 0;

    document.addEventListener('mousemove', function(e) {
        var now = Date.now();
        if (now - throttle < 50) return;
        throttle = now;

        var spark = document.createElement('div');
        spark.className = 'sparkle';

        var offset = Math.random() * 12 - 6;
        spark.style.left = (e.clientX + offset) + 'px';
        spark.style.top = (e.clientY + offset) + 'px';

        var size = Math.random() * 2 + 1.5;
        spark.style.width = size + 'px';
        spark.style.height = size + 'px';
        spark.style.opacity = Math.random() * 0.5 + 0.3;

        document.body.appendChild(spark);

        setTimeout(function() {
            spark.remove();
        }, 600);
    });
})();
