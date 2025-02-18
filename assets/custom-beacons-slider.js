$(document).ready(function () {
  if ($(".itg-beacons").length == 1) {
    if ($(window).width() > 750) {
      var inputVal = $(".beacons_slider .label_led input").val();
      $(".beacons_slider .led_item").hide();
      $(".beacons_slider .led_item").each(function () {
        var checkedVal = $(this).data("title");
        if (inputVal == checkedVal) {
          $(this).show();
        }
      });

      $(".beacons_slider .item_led").removeClass("active-slide");
      $(".beacons_slider .item_led").each(function () {
        var checkedVal = $(this).data("index");
        if (inputVal == checkedVal) {
          $(this).addClass("active-slide");
        }
      });

      $(document).on("change", ".beacons_slider .label_led input", function () {
        var inputVal = $(this).val();

        $(".beacons_slider .item_led").removeClass("active-slide");
        $(".beacons_slider .item_led").each(function () {
          var checkedVal = $(this).data("index");
          if (inputVal == checkedVal) {
            $(this).addClass("active-slide");
          }
        });

        $(
          ".beacons_slider .custom_titles_parents_head .custom_title-text"
        ).hide();
        $(
          ".beacons_slider .custom_titles_parents_head .custom_title-text"
        ).each(function () {
          var textMacth = $(this).data("attr");
          if (textMacth == inputVal) {
            $(this).show();
          }
        });

        $(".beacons_slider .led_item").hide();
        $(".beacons_slider .led_item").each(function () {
          var checkedVal = $(this).data("title");
          if (inputVal == checkedVal) {
            $(this).show();
          }
        });
      });
    }

    if ($(window).width() < 750) {
      var inputVal = $(".beacons_slider .label_led input").val();
      $(".beacons_slider .custom_h").hide();
      $(".beacons_slider .led_item").hide();
      // $('.beacons_slider .item_led').find("img.main_img").css("display","block");
      // $('.beacons_slider .item_led').find("img.hover_img").css("display","none");
      $(".beacons_slider .item_led").css(
        "border-bottom",
        "2px solid #88888875"
      );
      $(".beacons_slider .item_led").removeClass("active-slide");
      $(".beacons_slider .item_led").each(function () {
        var checkedVal = $(this).data("index");
        if (inputVal == checkedVal) {
          $(this).addClass("active-slide");
          $(this).css("border-bottom", "unset");
        }
      });

      $(".custom_h").each(function () {
        var checkedVal = $(this).data("index");
        if (inputVal == checkedVal) {
          $(this).show();
        }
      });

      $(".beacons_slider .led_item").each(function () {
        var checkedVal = $(this).data("title");
        if (inputVal == checkedVal) {
          $(this).show();
        }
      });

      $(document).on("change", ".beacons_slider .label_led input", function () {
        var inputVal = $(this).val();
        $(".beacons_slider .custom_h").hide();
        $(".beacons_slider .led_item").hide();
        $(".beacons_slider .item_led").removeClass("active-slide");
        $(".beacons_slider .item_led").css(
          "border-bottom",
          "2px solid #88888875"
        );

        $(".beacons_slider .item_led").each(function () {
          var checkedVal = $(this).data("index");
          if (inputVal == checkedVal) {
            $(this).addClass("active-slide");
            $(this).css("border-bottom", "unset");
          }
        });

        $(".custom_h").each(function () {
          var checkedVal = $(this).data("index");
          if (inputVal == checkedVal) {
            $(this).show();
          }
        });

        $(".beacons_slider .led_item").each(function () {
          var checkedVal = $(this).data("title");
          if (inputVal == checkedVal) {
            $(this).show();
          }
        });
      });
    }
  } else {
    if ($(window).width() > 750) {
      var inputVal = $(".landing_grid .label_led input").val();
      $(".landing_grid .led_item").hide();
      $(".landing_grid .led_item").each(function () {
        var checkedVal = $(this).data("title");
        if (inputVal == checkedVal) {
          $(this).show();
        }
      });
      $(".landing_grid .item_led").each(function () {
        var checkedVal = $(this).data("index");
        if (inputVal == checkedVal) {
          $(this).find("img.main_img").css("display", "none");
          $(this).find("img.hover_img").css("display", "block");
        }
      });

      $(document).on("change", ".landing_grid .label_led input", function () {
        var inputVal = $(this).val();
        var inputVal_lowerCase = inputVal.toUpperCase().trim();
        $(this)
          .parents(".custom_grid-led")
          .find("img.main_img")
          .css("display", "block");
        $(this)
          .parents(".custom_grid-led")
          .find("img.hover_img")
          .css("display", "none");
        if ($(this).is(":checked")) {
          $(this)
            .parents(".item_led")
            .find("img.main_img")
            .css("display", "none");
          $(this)
            .parents(".item_led")
            .find("img.hover_img")
            .css("display", "block");
        }

        $(".custom_titles_parents_head .custom_title-text").hide();
        $(".custom_titles_parents_head .custom_title-text").each(function () {
          if ($(this).hasClass(inputVal_lowerCase)) {
            $(this).show();
          }
        });

        //    if($(window).width() < 750) {
        //      if($(this).is(':checked')){
        //  $(this).parents(".custom_grid-led").find(".for_small_screen").css("display","none");
        //  $(this).parents(".item_led").find(".for_small_screen").css("display","block");
        //  $(this).parents(".custom_grid-led").find(".item_led").css("border-bottom","2px solid #88888875");
        //  $(this).parents(".item_led").css("border-bottom","unset");
        // }
        //   }

        $(".landing_grid .led_item").hide();
        $(".landing_grid .led_item").each(function () {
          var checkedVal = $(this).data("title");
          if (inputVal == checkedVal) {
            $(this).show();
          }
        });
      });
    }

    if ($(window).width() < 750) {
      var inputVal = $(".label_led input").val();
      $(".for_small_screen").hide();
      $(".led_item").hide();
      $(".item_led").find("img.main_img").css("display", "block");
      $(".item_led").find("img.hover_img").css("display", "none");
      $(".item_led").css("border-bottom", "2px solid #88888875");
      $(".item_led").each(function () {
        var checkedVal = $(this).data("index");
        if (inputVal == checkedVal) {
          $(this).find("img.main_img").css("display", "none");
          $(this).find("img.hover_img").css("display", "block");
          $(this).css("border-bottom", "unset");
          $(this).find(".for_small_screen").show();
          $(".led_item").each(function () {
            var checkedVal = $(this).data("title");
            if (inputVal == checkedVal) {
              $(this).show();
            }
          });
        }
      });

      // $('.item_led').find("img.main_img").css("display","block");
      // $('.item_led').find("img.hover_img").css("display","none");
      $(document).on("change", ".label_led input", function () {
        var inputVal = $(this).val();
        $(".for_small_screen").hide();
        $(".led_item").hide();
        $(".item_led").find("img.main_img").css("display", "block");
        $(".item_led").find("img.hover_img").css("display", "none");
        $(".item_led").css("border-bottom", "2px solid #88888875");

        $(".item_led").each(function () {
          var checkedVal = $(this).data("index");
          if (inputVal == checkedVal) {
            $(this).find("img.main_img").css("display", "none");
            $(this).find("img.hover_img").css("display", "block");
            $(this).css("border-bottom", "unset");
            $(this).find(".for_small_screen").show();
            $(".led_item").each(function () {
              var checkedVal = $(this).data("title");
              if (inputVal == checkedVal) {
                $(this).show();
              }
            });
          }
        });
      });
    }
  }

  $(".item_led").each(function () {
    var $this = $(this);

    if ($this.find(".main_img-slide").length > 0) {
      $this.find(".main_img-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: $this.find(".thumnil_slider"),
        prevArrow:
          '<button type="button" class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-e8e137d1-ef9b-4f8e-a26f-2ed221e422b7, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><polyline points="15 18 9 12 15 6"></polyline></svg></button>',
        nextArrow:
          '<button type="button" class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-e8e137d1-ef9b-4f8e-a26f-2ed221e422b7, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><polyline points="9 18 15 12 9 6"></polyline></svg></button>',
      });
    }

    if ($this.find(".thumnil_slider").length > 0) {
      $this.find(".thumnil_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: $this.find(".main_img-slide"),
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        prevArrow:
          '<button type="button" class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-e8e137d1-ef9b-4f8e-a26f-2ed221e422b7, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><polyline points="15 18 9 12 15 6"></polyline></svg></button>',
        nextArrow:
          '<button type="button" class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-e8e137d1-ef9b-4f8e-a26f-2ed221e422b7, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><polyline points="9 18 15 12 9 6"></polyline></svg></button>',
      });
    }
  });
});
