

$( document ).ready(function() {

  // if (!Cookies.get("flag")){
  //  Cookies.set("flag", true)
  //  $('#welcome').fadeOut();

  if(Cookies.get("sugarcookies")){
    sugar = Cookies.get("sugarcookies")
  } else {
    var sugar = Number()
  }
  if(Cookies.get("choccookies")){
    choc = Cookies.get("choccookies")
  } else {
    var choc = Number()
    
  }
    
  if(Cookies.get("lemoncookies")){
     lemon = Cookies.get("lemoncookies")
  } else {
    var lemon = Number()
   
  }
    
    
    


    $('.sugar').text('Congratulations you have ' + Cookies.get("sugarcookies") + " sugar cookies.")
    $('.choc').text('Congratulations you have ' + Cookies.get("choccookies") + " chocolate cookies.")
    $('.lemon').text('Congratulations you have ' + Cookies.get("lemoncookies") + " lemon cookies.")




    $('.incsugar').click(function(e){
          e.preventDefault();

          sugar ++

          Cookies.set("sugarcookies", sugar)

          $('.sugar').text('You now have ' + Cookies.get("sugarcookies") + " sugar cookies.")

      });
    $('.incchoc').click(function(e){
          e.preventDefault();

          choc ++

          Cookies.set("choccookies", choc)

          $('.choc').text('You now have ' + Cookies.get("choccookies") + " chocolate cookies.")

     });

   $('.inclemon').click(function(e){
        e.preventDefault();

        lemon ++

        Cookies.set("lemoncookies", lemon)

        $('.lemon').text('You now have ' + Cookies.get("lemoncookies") + " lemon cookies.")

    });

     $('.decsugar').click(function(e){
          e.preventDefault();

          sugar --

          Cookies.set("sugarcookies", sugar)

          $('.sugar').text('You now have ' + Cookies.get("sugarcookies") + " sugar cookies.")

      });
    $('.decchoc').click(function(e){
          e.preventDefault();

          choc --

          Cookies.set("choccookies", choc)

          $('.choc').text('You now have ' + Cookies.get("choccookies") + " chocolate cookies.")

     });

   $('.declemon').click(function(e){
        e.preventDefault();

        lemon --

        Cookies.set("lemoncookies", lemon)

        $('.lemon').text('You now have ' + Cookies.get("lemoncookies") + " lemon cookies.")

    });


  $('#clear').click(function(e){
    e.preventDefault();

    sugar = 0
    choc = 0
    lemon = 0



    Cookies.set("sugarcookies", sugar)
    Cookies.set("choccookies", choc)
    Cookies.set("lemoncookies", lemon)

    $('.sugar').text('You now have ' + Cookies.get("sugarcookies") + " sugar cookies.")
    $('.choc').text('You have ' + Cookies.get("choccookies") + " chocolate cookies.")
    $('.lemon').text('You have ' + Cookies.get("lemoncookies") + " lemon cookies.")


  });


});

