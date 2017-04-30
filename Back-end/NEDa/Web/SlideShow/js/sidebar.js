/**
 * Created by eduar on 11-Apr-17.
 */

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// (function ($) {
//     $('.spinner .btn:first-of-type').on('click', function() {
//         $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
//     });
//     $('.spinner .btn:last-of-type').on('click', function() {
//         $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
//     });
// })(jQuery);
