(function(window, document, undefined) {
    var canv = document.getElementById('myCanvas');
    var ctx = canv.getContext('2d');

    var colors = {
        ear: '#522900',
        ear2: '#1f0f00',
        face: '#a35200'
    };
    // ears
    circle(ctx, { x: 110, y: 180 }, 100, colors.ear);
    circle(ctx, { x: 120, y: 190 }, 70, colors.ear2);
    circle(ctx, { x: 690, y: 180 }, 100, colors.ear);
    circle(ctx, { x: 680, y: 190 }, 70, colors.ear2);

    // head
    circle(ctx, { x: 400, y: 400 }, 320, colors.face);

    // left eye
    circle(ctx, { x: 270, y: 350 }, 80, '#fff');
    circle(ctx, { x: 275, y: 345 }, 40);
    circle(ctx, { x: 275, y: 345 }, 15, '#fff');
    // right eye
    circle(ctx, { x: 540, y: 350 }, 80, '#fff');
    circle(ctx, { x: 535, y: 345 }, 40);
    circle(ctx, { x: 535, y: 345 }, 15, '#fff');

    // mouth
    oval(ctx, 0.6, { x: 400, y: 1000 }, 100);

    function circle(ctx, center, radius, fillStyle) {
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = fillStyle || '#000';
        ctx.fill();
    }

    function oval(ctx, scale, center, radius, fillStyle) {
        ctx.scale(1, scale);
        circle(ctx, center, radius, fillStyle);
    }

})(this, document);
