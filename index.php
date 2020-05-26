<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">

    <title>Hello, world!</title>
  </head>
  <body>
    <header class="container-fluid align-items-center" style="background-color: #003e74; color: #ffffff;">
      <div class="row">
        <div class="col-2">
          <img src="img/HFHS ovalwhite.png" alt="Henry Ford Health System" class="img-fluid py-3" />
        </div>
      </div>
    </header>
    <div class="container">
      <h1>Residents Vote!</h1>
      <form id="mainform">
        <div id="div_current_reg">
          <p>Are you currently registered to vote in Michigan?</p>
          <div class="btn-group" role="group">
            <button type="button" id="current_reg_y" class="btn btn-primary">Yes</button>
            <button type="button" id="current_reg_n" class="btn btn-primary">No</button>
            <button type="button" id="current_reg_u" class="btn btn-primary">Unsure</button>
          </div>
        </div>
        <div id="div_check_reg">
          <p>Please <a href="https://mvic.sos.state.mi.us/" target="_blank">check your registration</a>, then return to this app</p>
        </div>
        <div id="div_absent_app">
          <p>Please complete an Absent Voter Ballot Application</p>
          <ol>
            <li>Enter your information in Section 1</li>
            <li>Check &quot;Both 2020 Elections&quot; and &quot;Future Elections&quot; in Section 2</li>
            <li>Sign and date</li>
            <li>e-mail or mail to <a href="https://mvic.sos.state.mi.us/Clerk" target="_blank">your clerk</a></li>
          </ol>
        </div>
        <div id="div_notregged">
          <div id="div_reg_app">
            <p>Please complete a Voter Registration Application</p>
            <ul><li>Check &quot;I want to vote absentee...&quot; at the bottom of the personal information section on page 2</li></ul>
          </div>
          <div id="div_past_reg">
            <p>In the past, have you ever been registered to vote in Michigan?</p>
            <div class="btn-group" role="group">
              <button type="button" id="past_reg_y" class="btn btn-primary">Yes</button>
              <button type="button" id="past_reg_n" class="btn btn-primary">No/Unsure</button>
            </div>
          </div>
          <div id="div_documentation">
            <p>Enclose a <strong>copy</strong> of <strong>any one of the following</strong> with your application.</p>
            <p>Please make sure this document lists your name and address.</p>
            <ol>
              <li>Driver's license from any state</li>
              <li>State ID card from any state</li>
              <li>Paycheck stub</li>
              <li>Utility bill</li>
              <li>Bank statement</li>
              <li>A government document</li>
            </ol>
          </div>
          <div id="div_mail">
            <p>Mail the completed application to <a href="https://mvic.sos.state.mi.us/Clerk" target="_blank">your clerk</a></p>
          </div>
        </div>
      </form>
    </div>
    <footer class="container-fluid text-right mt-4">
      <small>Please contact <a class="text-white" href='mailto:ngoyal1@hfhs.org'>Nikhil Goyal</a> with any feedback</a></small>  
    </footer>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="index.js"></script>
  </body>
</html>