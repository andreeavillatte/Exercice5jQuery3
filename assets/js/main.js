
//je defini les propriétés de base de mon carré
var height = 10;
var color = 'red';
//je defini le css de base de mon carré
$('.square').css({
    'width': '10px',
    'height': height,
    'background-color': color
});

// Quand le document est ready
$(function () {
    //si je clique sur le bouton button1
    // $('#growHeight').click(function () {

        
    $(document).keydown(function(event) {
        switch (event.keyCode) {
            case 37: alert('left key pressed'); break;
            case 38: alert('up key pressed'); break;
            case 39: alert('right key pressed'); break;
            case 40: alert('down key pressed'); break;
        }
    });
})