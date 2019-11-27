$(function() {
   const $tabs = $('[role="tab"]');
   const $tabList = $('[role="tablist"]');
   const $tabPanels = $('[role="tabpanel"]') ;

   let changeTabs = function(e) {
       const $target = $(this);

       console.log($target);

       $tabs.each(function () {
           $(this).attr('aria-selected', false);
           $(this).parent().removeClass('active');
       })

       $target.attr('aria-selected', true);
       $target.parent().addClass('active');
       $tabPanels.each(function () {
           $(this).hide();
       })

       let targetDiv = $target.attr('id');
       $('[aria-labelledby="'+targetDiv+'"]').show();
   }

   $tabs.each(function () {
       $(this).on('click', changeTabs);
   })

   let tabFocus = 0;
   let rightArrow = 39;
   let leftArrow = 37;

   $tabList.on('keydown', function (e) {
       if(e.which === rightArrow || e.which === leftArrow) {

           console.log('Tab focus is', tabFocus);
           let $currentTab = $($tabs.get(tabFocus));

           $currentTab.attr("tabindex", -1);

           if(e.which === rightArrow) {
               tabFocus++;
                // If we're at the end, go to the start
               if(tabFocus >= $tabs.length) {
                   tabFocus = 0;
               }
           }
           else if(e.which === leftArrow) {
               tabFocus--;
               // If we're at the start, move to the end
               if (tabFocus < 0) {
                   tabFocus = $tabs.length - 1;
               }
           }

           $currentTab = $($tabs.get(tabFocus));

           $currentTab.attr("tabindex", 0);
           $currentTab.focus();
       }
   });
});
