
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

$(window).load(function () {
    "use strict";
    setTimeout(function () {
        $("#loading").addClass("animated-middle fadeOut")
    }, 1000),
        setTimeout(function () {
            setTimeout(function () {
                $(".text-intro").each(function (e) {
                    !function (n) {
                        setTimeout(function () {
                            $(n).addClass("animated-middle fadeInUp").removeClass("opacity-0")
                        }, 150 * e + 150)
                    }(this)
                })
            }, 0)
        }, 2000),
        setTimeout(function () {
            $(".bar-intro").addClass("animated-middle slideInDown").removeClass("opacity-0")
        }, 3000),
        setTimeout(function () {
            $("#loading").remove()
        }, 3000),
        setTimeout(function () {
            $(".text-intro").removeClass("animated-middle fadeInUp")
        }, 4000)
}),
    $(document).ready(function () {
        "use strict";
        $("#loading").removeClass("dark-back"),
            $(".loading-text").addClass("animated-middle fadeIn").removeClass("opacity-0")
    });