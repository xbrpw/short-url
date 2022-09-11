<?php /*
luis@gmail.com
luis@hotmail.com
contract-1662200053.php
data:image/png;base64,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ARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCUisuhsyARMgQIAAAQKtCkisWh0ZcREgQIAAAQLdCXSXWN1zzz1/EREv705awAQIECBAgMBUgQ/eunXr+6cedM39JVbX1HduAgQIECBA4CYBiZXrgwABAgQIECCwVYHuZqy2OlD6TYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQiILHqZKCESYAAAQIECLQvILFqf4xESIAAAQIECHQi8N+10Y21lKDLGAAAAABJRU5ErkJggg==

###################################
1. If you got this file from GitHub and its name is still contract.php, you should RENAME the file to something harder to guess.
The 4th line is a timestamp outputed by the online generator and an example of a more secure filename.

2. The 2nd and 3rd lines (the emails) are read by this PHP script (from itself).
When a signature is submitted, this script will send both parties an email with a link to the signed contract.

3. The 5th line ($lines[4] below) is the data for $DEV_SIGNATURE.
If you got this file from GitHub, the default developer signature just says "John Doe".
You can generate a new signature @ http://cdpn.io/JYpjvE and replace the data above.

4. The $CLIENT_SIGNATURE is received by this script from itself when Client signs the contract.
*/
$CLIENT_SIGNATURE = isset($_POST['client_signature']) ? $_POST['client_signature'] : null;
if (substr( $CLIENT_SIGNATURE, 0, 22 ) === 'data:image/png;base64,') {
    $CLIENT_SIGNATURE = '<img id="hk" src="' . htmlspecialchars($CLIENT_SIGNATURE) . '" >';
} else {
  $CLIENT_SIGNATURE = null;
}

$lines = file(__FILE__);
$clientEmail = trim($lines[1]);
$devEmail = trim($lines[2]);
$DEV_SIGNATURE = trim($lines[4]);
$DEV_SIGNATURE = '<img id="dev_signature" src="' . $DEV_SIGNATURE . '" >';

$phpName  = basename($_SERVER['PHP_SELF']) ? basename($_SERVER['PHP_SELF']) : 'index.php';
$fileName = substr($phpName , 0, -4);
$htmlName = $fileName.'.html';

// If the filename is (or starts with) "test" or "demo" the PHP file won't delete itself, nor will it redirect to the HTML contract (when one exists)
if ( substr($fileName,0,4) == 'test' || substr($fileName,0,4) == 'demo' ) { $selfDelete = 0; }
else { $selfDelete = 1; }

/**
The HTML code (and some PHP) is kept in PHP variables like $HEADER, $CONTRACT_HTML, $FOOTER_UNSIGNED, and $FOOTER_SIGNED_PHP.
**/
$HEADER ='<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Signed Contract</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="robots" content="noindex">
<style>
@import url(http://fonts.googleapis.com/css?family=Libre+Baskerville:400,700,400italic);
@import url(http://fonts.googleapis.com/css?family=Arapey);
@import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700);
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800);
body {
    font-family: "Libre Baskerville", serif;
    font-size:16px;
    line-height:1.5em;
    color:#000;
    margin:0;
    background:#fff;
}
@media (max-width:600px) {
    body { font-size:14px; }
}
@media print {
   .noprint { display:none !important; }
}
.hidden {
    display:none;
}
#content {
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 3em;
    padding: 0 2em;
    background: #fff;
}
h1 {
    font-size: 2em;
    line-height: 1.2em;
    letter-spacing: 0.15em;
    font-family: "Arapey", serif;
    font-weight: normal;
    margin: 1em 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    padding: .5em 0;
}
h2 {
    font-size:1.2em;
    line-height:1.2em;
    letter-spacing:.05em;
    font-family:"Open Sans Condensed",sans-serif;
    font-weight:700;
}
#signature {
    width:auto;
    border:dashed 2px #53777A;
    margin:0;
    text-align:center;
}
#hk,
#dev_signature {
    max-width:333px;
    display:block;
}
#date-ip {
    font-size:1.2em;
    line-height:1.2em;
    letter-spacing:.05em;
    font-family:"Open Sans Condensed",sans-serif;
    font-weight:400;
}
#print-pdf {
    text-align:center;
    padding:1.5em 0;
    margin-top:2em;
    border-top:solid 1px #ccc;
}
.buttons {
    text-align:center;
    margin:1.5em auto;
}
button {
    margin: 0 .5em;
    font-size:1.2em;
    line-height:1.5em;
    font-family: "Open Sans Condensed",sans-serif;
    font-weight: 700;
    text-transform:uppercase;
    color: #0a3666;
}
button:hover {
    color: #136fd2;
}
</style>
</head>

<body>

<div id="content">

';
$CONTRACT_HTML='<h1>Contract of work for website design and development</h1>
<p>Between <strong>Alice</strong>, referred to below as "Designer", and <strong>Bob</strong>, referred to below as "Customer".</p>
<h2>1. Agreement of parties</h2>
<p>Customer hires Designer to redesign the current website, <strong>bobswebsite.com</strong>, for the estimated total price of <strong>$PRICE</strong>. Designer agrees to provide quality service and to answer to the Customers requests in a timely manner.</p>
<p>The agreed payment plan is at the end of the document.</p>
<h2>2. Legal matters and copyrights</h2>
<p>The Customer will guarantee to the Designer that any elements of text, graphics, photos, trademarks or other artwork that the Customer provides for inclusion in the website are either owned by him or that he has the permission to use them. When the Designer receives the final payment, copyright is automatically assigned as follows: Customer will own the graphics, virtual elements, text content photographs and other data provided, unless someone else owns them. The Designer owns the XHTML markup, CSS and other code and he licenses it to the Customer for use on only this project. Designer can reserve the right to display, with Customer\'s consent, the work as part of the portfolio.</p>
<h2>3. Term and termination</h2>
<ol style="list-style-type: lower-alpha;">
<li>This contract shall commence upon the first payment, as outlined in the payment plan and shall remain effective until the services are completed and delivered.</li>
<li>This contract may be terminated at any time by either party effective immediately upon notice, or the mutual agreement of the parties.</li>
<li>In the event of termination, Designer shall be compensated for the service performed through the date of termination in the amount (a) any advanced payment, (b) a prorated portion of the fees due, or (c) hourly fees for work performed by the Designer at the time of the termination, whichever is greater, together with any additional costs incurred trough and up to the date of cancellation.</li>
<li>This Contract may be modified by parties; any modification must be in writing.</li>
<li>All notices to be given hereunder shall be transmitted in writing by electronic mail and will only be effective upon return confirmation.</li>
</ol>
<h2>4. Force majeure</h2>
<p>Designer shall not be deemed in breach of this contract if Designer is unable to complete the services or any portion by reason of fire, earthquake, labor dispute, illness, internet breaches or any technical issues that may appear beyond Designer\'s control. Upon occurrence of any Force Majeure Event, Designer shall give notice to the Customer of his inability to perform or of delay in completing the services and shall propose revisions to the schedule for completion of the services.</p>
<h2>5. Payment plan</h2>
<p>Payment shall be done as follows:</p>
<ul>
<li>50% of total estimated fee will be required to commence work, after this contract has been approved and signed by both parties.</li>
<li>50% upon project closure.</li>
</ul>
<p>Any extra time required outside the project timeline/services mentioned at point 1 of this contract, will be billed at a rate of <strong>$FEE</strong> per hour.</p>
<h2>Both parties agree to the terms stipulated above:</h2>';
$FOOTER_UNSIGNED = '
  <form method="post" class="noprint" id="signature_form">
    <div id="signature">
      <!-- Client Signature Canvas -->
    </div>

    <div class="buttons">
      <button id="reset" type="button">Reset</button>
      <button id="submit" type="submit">Done &rarr;</button>
    </div>

    <input type="hidden" id="client_signature" name="client_signature" />
  </form>

</div> <!-- #content -->

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- https://github.com/brinley/jSignature/blob/master/README.md -->
<script src="https://cdn.rawgit.com/willowsystems/jSignature/master/libs/jSignature.min.js"></script>
<script>
$(document).ready(function() {
  $("#signature").jSignature();
  var $sigdiv = $("#signature");
  var datapair = $sigdiv.jSignature("getData", "svgbase64");

  $("#signature").bind("change", function(e) {
    var data = $("#signature").jSignature("getData");
    $("#client_signature").val(data);
  });

  $("#reset").click(function(e){
    $("#signature").jSignature("clear");
    var data = $("#signature").jSignature("getData");
    $("#client_signature").val("");
    e.preventDefault();
  });

  $("#submit").click(function(e) {
    $("#signature_form").slideUp(200);
    //$(".buttons").slideUp(300);
    $("#signature_form").after("<img id=\"hk\" class=\"hidden\" />");
    var data = $("#signature").jSignature("getData");
    $("#hk").attr("src", data );
    $("#hk").slideDown(200);
    // Loading text
    $("#dev_signature").css("opacity",".625")
    $("#content").css({"color":"#aaa","list-style-color":"#aaa !important"}).append("<div id=\"loading_area\"></div>");
    $("#loading_area").append("<h2 id=\"loading\" style=\"text-align:center; color:green; display:none;\">Saving Contract…</h2>");
    $("#loading_area").append("<p id=\"loading2\" style=\"text-align:center; color:#222; display:none;\">This shouldn\'t take more than a minute.</p>");
    $("#loading").slideDown(300, function() {
		 		$("#loading2").delay(2000).slideDown(300);
  	});
	});
});
</script>
</body>
</html>';

if ($CLIENT_SIGNATURE) { $FOOTER_SIGNED_PHP ='
  $phpName  = basename($_SERVER["PHP_SELF"]) ? basename($_SERVER["PHP_SELF"]) : "index.php";
  $fileName = substr($phpName , 0, -4);
  $htmlName = $fileName.".html";
  $pdfName = $fileName.".pdf";
  ?>

  <div id="date-ip">
    <strong>Signed on:</strong> <?php echo date("j F Y"); ?>
    <br><strong>IP address:</strong>
    <?php echo get_client_ip_env(); ?><br>
  </div>

  <?php // Function to get the client ip address
  function get_client_ip_env() {
  	$ipaddress = "";
  	if (getenv("HTTP_CLIENT_IP"))
  		$ipaddress = getenv("HTTP_CLIENT_IP");
  	else if(getenv("HTTP_X_FORWARDED_FOR"))
  		$ipaddress = getenv("HTTP_X_FORWARDED_FOR");
  	else if(getenv("HTTP_X_FORWARDED"))
  		$ipaddress = getenv("HTTP_X_FORWARDED");
  	else if(getenv("HTTP_FORWARDED_FOR"))
  		$ipaddress = getenv("HTTP_FORWARDED_FOR");
  	else if(getenv("HTTP_FORWARDED"))
  		$ipaddress = getenv("HTTP_FORWARDED");
  	else if(getenv("REMOTE_ADDR"))
  		$ipaddress = getenv("REMOTE_ADDR");
  	else
  		$ipaddress = "UNKNOWN";
  	return $ipaddress;
  } ?>

  <div class="noprint" id="print-pdf">
    <button id="print" type="button" class="button-secondary" onclick="printContract()">
    Print contract
    </button>
    <button id="pdf" type="button" class="button-secondary" onclick="generatePdf()">
    Download as PDF
    </button>
  </div>

</div> <!--#content-->

<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> -->
<script>
function printContract() {
  window.print();
}
function generatePdf() {
  // http://pdfcrowd.com/save-to-pdf/
  window.location.href = "//pdfcrowd.com/url_to_pdf/?use_print_media=1&height=-1&pdf_name=<?php echo $pdfName; ?>";
}
</script>

</body>
</html>';
} else $FOOTER_SIGNED_PHP = null;


if($CLIENT_SIGNATURE==null) {
  if ( $selfDelete && file_exists($htmlName) ) {
    header('Location: '.$htmlName.'#hk');
    die();
  }
  /** Waiting for Client to sign: include signature elements and javascript **/
  echo $HEADER;
  echo $CONTRACT_HTML;
  echo $DEV_SIGNATURE;
  eval (' ?>'. $FOOTER_UNSIGNED .'<?php ');
}
else {
  /** Contract was just signed: put $CLIENT_SIGNATURE and the other parts in the .html file **/
  file_put_contents($htmlName, $HEADER);
  file_put_contents($htmlName, $CONTRACT_HTML, FILE_APPEND | LOCK_EX);
  file_put_contents($htmlName, $DEV_SIGNATURE, FILE_APPEND | LOCK_EX);
  file_put_contents($htmlName, $CLIENT_SIGNATURE, FILE_APPEND | LOCK_EX);
  ob_start();
  eval($FOOTER_SIGNED_PHP); // https://cgd.io/2008/how-to-execute-php-code-in-a-php-string/
  $FOOTER_SIGNED_COMPILED = ob_get_contents();
  ob_end_clean();
  file_put_contents($htmlName, $FOOTER_SIGNED_COMPILED, FILE_APPEND | LOCK_EX);

  // Email client & dev, delete php, redirect to html
  if ($clientEmail) {
    $headers = "From: " . $devEmail . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $msg = 'The contract was signed. You can <a href="' .getUrl(). '">view or download this contract from here</a>.';
    mail($clientEmail,'Contract signed', $msg, $headers);
  }
  if ($devEmail) {
    $headers = "From: " . $clientEmail . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $msg = '<p>A new contract was signed. You can <a href="' .getUrl(). '">view or download this contract from here</a>.</p>';
    $msg.= 'The contract was signed by: ' .$clientEmail;
    mail($devEmail,'Contract signed!', $msg, $headers);
  }
  if ($selfDelete) unlink(__FILE__);
  header('Location: '.$htmlName.'#hk');
  die();
}

// Get the current file URL and replaces the .php extension with .html
function getUrl() {
  $url  = @( $_SERVER["HTTPS"] != 'on' ) ? 'http://'.$_SERVER["SERVER_NAME"] :  'https://'.$_SERVER["SERVER_NAME"];
  $url .= ( $_SERVER["SERVER_PORT"] !== 80 ) ? ":".$_SERVER["SERVER_PORT"] : "";
  $url .= $_SERVER["REQUEST_URI"];
  $url = substr($url,0,-4) . '.html';
  return $url;
}
?>
