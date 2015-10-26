$(document).ready(function(){
  var hovered_table_td = $('table.table td');
  hovered_table_td.selecting_column();
});

(function($){
  $.fn.selecting_column = function(options){
    var defaults = {
    };

    options = $.extend(defaults, options);

    return this.each(function(){
      var obj = $(this)
        ;
      obj.mouseenter(function(){
        var hovered_index = obj.index()
          , this_table = obj.closest('table')
          ;
        this_table.find('tr').each(function(){
          $(this).children().eq(hovered_index).addClass('hovered');
        })
      });
      obj.mouseleave(function(){
        $('table .hovered').removeClass('hovered');
      });
    });
  }
})(jQuery);