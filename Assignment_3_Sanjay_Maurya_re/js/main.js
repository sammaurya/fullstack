$(document).ready(function () {

    $nav = $('.nav2');
    $toggleCollapse = $('.toggle-collpase');

    /** click event on toggle menu **/
    $toggleCollapse.click(function () {
        $nav.toggleClass('.collapse');
    })
});