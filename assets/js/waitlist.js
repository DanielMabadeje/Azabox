//selector from your HTML form
// var forms=document.getElementsByClassName("my-form");
// for (let index = 0; index < forms.length; index++) {
   
    
// }

$('#my-form').submit(function(e) {
    //prevent the form from submiting so we can post to the google form
    e.preventDefault();
    //AJAX request
  
    // console.log("clicked");

    swal("What do you want to wait for?", {
        buttons: {
          Individual: "Individual",
          catch: {
            text: "Corporate",
            value: "Business",
          },
          Both:"Both",
        //   defeat: true,
        },
      })
      .then((value) => {

        // alert(value);

        var data=$('#my-form').serialize()
        // data['entry.775823104_sentinel']=value

        data["entry.775823104"]=value
        $.ajax({
            url: 'https://docs.google.com/forms/d/e/1WsAIEVBiVIlC7g24trGNWiNxBYuNwQZQ2o35_UwZEXg/formResponse',     //The public Google Form url, but replace /view with /formResponse
            data: data, //Nifty jquery function that gets all the input data
            type: 'POST', //tells ajax to post the data to the url
            dataType: "json", //the standard data type for most ajax requests
            statusCode: { //the status code from the POST request
              0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
                //success
                $('#form-success').text('hooray!');
              },
              200: function(data) {//200 is a success code. it went through!
                //success
                $('#form-success').text('hooray!');
              },
              403: function(data) {//403 is when something went wrong and the submission didn't go through
                //error
                alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
              }
            }  
          });
        // switch (value) {
       
        //   case "defeat":
        //     swal("Pikachu fainted! You gained 500 XP!");
        //     break;
       
        //   case "catch":
        //     swal("Gotcha!", "Pikachu was caught!", "success");
        //     break;
       
        //   default:
        //     swal("Got away safely!");
        // }
      });
    //   entry.1911968125 email
    // entry.775823104 wait for
  
    // return
    $.ajax({
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSd1WbBQC2UxvoICbi35KQBztmC5dLYDSP5O43fY3Wzb76x6xg/formResponse',     //The public Google Form url, but replace /view with /formResponse
      data: $('#my-form').serialize(), //Nifty jquery function that gets all the input data
      type: 'POST', //tells ajax to post the data to the url
      dataType: "json", //the standard data type for most ajax requests
      statusCode: { //the status code from the POST request
        0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
          //success
          $('#form-success').text('hooray!');
        },
        200: function(data) {//200 is a success code. it went through!
          //success
          swal("Gotcha!", "Pikachu was caught!", "success");
          $('#form-success').text('hooray!');
        },
        403: function(data) {//403 is when something went wrong and the submission didn't go through
          //error
          alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
        }
      }  
    });
  });