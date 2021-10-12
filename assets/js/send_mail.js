$('#send-msg').on('click', function(e) {
  e.preventDefault();
  sender_name = $('#name').val();
  email_from = $('#email').val();
  subject = $('#subject').val();
  message = $('#message').val();
  body_message = "Name: "+sender_name+"\nEmail from: "+email_from+"\n\nMessage: "+message+"\n";
  console.log(sender_name,email_from,subject,message)
  window.location = "mailto:yuri.nassar@gmail.com?subject=" + subject + "&body=" + body_message;
});