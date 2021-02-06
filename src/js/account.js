jQuery(document).ready(function(){
    /** account block item */
    const accountItem = $('.account-item');
    
    
    accountItem.click(function(e) {
        if (!e.target.classList.contains('account-item--active')) {
            accountItem.each(function(i, elem) {
                if (elem.classList.contains('account-item--active')) {
                    elem.classList.remove('account-item--active');
                    elem.classList.remove('account-icon--active');
                }
            });
            e.target.classList.add('account-item--active');
            e.target.classList.add('account-icon--active');
        }
    });
});