$('.my-form').each(function() {
    // console.log($(this).text());
    $(this).submit(function(e) {
      //prevent the form from submiting so we can post to the google form
      e.preventDefault();
      //AJAX request
    
      // console.log("clicked");
  
      // var value="sd"
      var data=$(this).serialize()
  
      // var data=[]
      // data['entry.775823104_sentinel']=value
    
      // data["entry.775823104"]=value
      var email=this.getElementsByClassName("email")[0].value
      var waitfor=this.getElementsByClassName("wait_for")[0].value
  
  
      // data['entry.1911968125']=email
      // data['entry.775823104']=waitfor
      // console.log(email, waitfor)
      // return
  
      // forms/d/e/1WsAIEVBiVIlC7g24trGNWiNxBYuNwQZQ2o35_UwZEXg/formResponse
      $.ajax({
          url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd1WbBQC2UxvoICbi35KQBztmC5dLYDSP5O43fY3Wzb76x6xg/formResponse',     //The public Google Form url, but replace /view with /formResponse  /forms/u/0/d/e/1FAIpQLSd1WbBQC2UxvoICbi35KQBztmC5dLYDSP5O43fY3Wzb76x6xg/formResponse
          data: data, //Nifty jquery function that gets all the input data
          type: 'POST', //tells ajax to post the data to the url
          dataType: "json", //the standard data type for most ajax requests
          statusCode: { //the status code from the POST request
            0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
              //success
              console.log("Success")
              swal("Weldone!", "You have joined Successfully!", "success");
              // $('#form-success').text('hooray!');
            },
            200: function(data) {//200 is a success code. it went through!
              //success
              console.log("Success")
              swal("Gotcha!", "Pikachu was caught!", "success");
              // $('#form-success').text('hooray!');
            },
            403: function(data) {//403 is when something went wrong and the submission didn't go through
              //error
              alert('Oh no! something went wrong.');
            }
          }  
      });
   
  
    })
  });