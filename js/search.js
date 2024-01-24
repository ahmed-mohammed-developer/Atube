//عند الضغط على search-fikters-icon
$(document).ready(function() {
         //فتح وإغلاق مرشحات تصفية البحث
     $("#search-filters-icon").click(function () {
          $(".filter-column").slideToggle("slow");
     });


     //اختيار اختيار واحد من كل عمود

      /*اختيار خيار واحد من كل عمود من صناديق التأشير*/
      $("input:checkbox").click(function () {
          let $box = $(this);//تحديد صندوق التأشير الذي تم الضغط عليه
  
          if ($box.is(":checked")) {//إذا حدد صندوق التأشير؟
              //attr الحصول على اسم صندوق التأشير عن طريق الخاصية
              let group = "input:checkbox[name='" + $box.attr("name") + "']";
              $(group).prop("checked", false);//تحديد خطأ لجميع صناديق التأشير الموجودة في المجموعة التي لها الاسم الذي جلبناه في السطر السابق
              $box.prop("checked", true);//تحديد صح فقط لصندوق التأشير الذي ضغطنا عليه
          }
      });
})
