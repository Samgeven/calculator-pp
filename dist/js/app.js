console.log('it works!');
$(document).ready(function() {
    $('.btn_nav').click(function() {
        let currentTab = '1';
        if (this.dataset.goto == 'next') {
            currentTab++
            $('.calc-tab-item').dataset.order == currentTab ? $('.calc-tab-item').dataset.order
        }
    });
});