!function(e){jQuery.fn.exists=function(){return jQuery(this).length},e(function(){e(".phonefield").exists()&&e(".phonefield").mask("+38 (999) 999-99-99"),e(".form_check").exists()&&e(".form_check").each(function(){function s(){l.find(".rfield").each(function(){if(e(this).hasClass("phonefield")){var s=e(this);-1!=s.val().indexOf("_")||""==s.val()?s.addClass("empty_field"):s.removeClass("empty_field")}else if(e(this).hasClass("mailfield")){var i=e(this);/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test(i.val())?i.removeClass("empty_field"):i.addClass("empty_field")}else if(e(this).is(":checkbox")){var l=e(this);l.is(":checked")?l.removeClass("empty_field"):l.addClass("empty_field")}else""!=e(this).val()?e(this).removeClass("empty_field"):e(this).addClass("empty_field")})}if("uk"==$("html").attr("lang"))var i='<span class="rfield_error">Заповніть це поле</span>';else i='<span class="rfield_error">Заполните это поле</span>';var l=e(this),d=l.find(".btnsubmit");l.find(".rfield").addClass("empty_field").parents(".rline").append(i),d.addClass("disabled"),setInterval(function(){if(s(),l.find(".empty_field").length>0){if(d.hasClass("disabled"))return!1;d.addClass("disabled")}else d.removeClass("disabled")},500),d.click(function(){return e(this).hasClass("disabled")?(l.find(".empty_field").addClass("rf_error"),l.find(".empty_field").parents(".rline").find(".rfield_error").css({visibility:"visible"}),setTimeout(function(){l.find(".empty_field").removeClass("rf_error"),l.find(".empty_field").parents(".rline").find(".rfield_error").css({visibility:"hidden"})},5e3),!1):void l.addClass("ok")})})})}(jQuery);