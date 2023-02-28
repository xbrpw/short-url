var aIssues = [
  ['Ã¦','&aelig;'],
  ['Ã¥','&aring;'],
  ['Ã¸','&oslash;'],
  ['Ã¦','&aelig;'],
  ['Ã¦','&aelig;'],
  ['Ã¦','&aelig;']
];
var $raw, $clean, $preview;
  $raw = jQuery('#raw');
  $clean = jQuery('#clean');
  $preview = jQuery('#preview');
  $raw.on('keyup', function() {
    var $this = jQuery(this);
    var sCleaned = $this.val();
    for(var i=0; i<aIssues.length; i++) {
       var issue = aIssues[i];
    sCleaned = sCleaned.replace(new RegExp(issue[0], 'ig'), issue[1]);
    } 

    $clean.val(sCleaned); 
    $preview.html(sCleaned);
  });

