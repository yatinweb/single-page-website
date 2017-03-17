 $(document).ready(function(){
      $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 320,
        loop: true,
        pagination: false
      });
      $(".main section i").on('click', function(e){
        $(".main").moveDown();
      });
		});