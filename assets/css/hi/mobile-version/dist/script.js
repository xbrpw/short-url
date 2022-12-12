const cs = document.querySelector('#cs-home-text-mobile');
const csImg = document.querySelector('.cs-home-img-mobile');
const csText = document.querySelector('.cs-home-we-do-container-mobile');

// preload images
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/dd-500.jpg';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pmtr-500.jpg';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pta-500.jpg';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/rp-500.jpg';
(new Image()).src = 'https://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pft-500.webp';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pb-500.jpg';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/ps-500.jpg';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/varpd-500.jpg';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/ba-500.jpg';
(new Image()).src = 'http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/c-500.jpg';


function addDD() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Due Diligence</h4>Assessment of the condition of any property which includes the current status of existing entitlements, review of title report and define utility service rights.';
  csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/dd-500.jpg')";
}

function addPmor() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Project Management/Owner Representation</h4>Oversight of the Project Team from the Project’s start through to its completion. Owner representative with project team and regulatory officials.';
    csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pmtr-500.jpg')";
}

function addPTA() {
  csText.style.display = 'block';  
  cs.innerHTML='<h4>Project Team Assemblage</h4>Support and assist Ownership with identifying the most qualified professionals to participate in the Project’s progression.';
   csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pta-500.jpg')";
}

function addRP() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Regulatory Processing</h4>Assist with regulatory agency Approvals and Clearances. Negotiate approval contingencies and requirements to the benefit of the Project Objectives.';
    csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/rp-500.jpg')";
}

function addPFT() {
  csText.style.display = 'block';  
  cs.innerHTML='<h4>Project Fast-Tracking</h4>Define permitting and completion objectives with the Owner.  Assess the potential impacts of regulatory processing timelines for approvals and prioritize the need to expedite all or portions of the Project’s entitlements.';
    csImg.style.backgroundImage = "url('https://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pft-500.webp')";
}

function addPB() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Project Budgeting</h4>Assist Ownership with the development of project cost information.';
    csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/pb-500.jpg')";
}

function addPS() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Project Scheduling</h4>Assist Ownership with developing Project schedules.';
    csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/ps-500.jpg')";
}

function addVar() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Value Added Review of Project Documents</h4>Review Project design and entitlement documents to identify potential cost saving changes.';
    csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/varpd-500.jpg')";
}

function addBa() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Bid Administration</h4>Assist Ownership with bidding construction plans. Prepare comprehensive bid results tabulation for Review and Contractor selection.';
    csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/ba-500.jpg')";
}

function addC() {
  csText.style.display = 'block';
  cs.innerHTML='<h4>Construction Management</h4>Manage and supervise contractors. Review pay application requests.';
    csImg.style.backgroundImage = "url('http://ldservices.connect-strategic.com/wp-content/uploads/2022/09/c-500.jpg')";
}

function closeWin(){
  csText.style.display = 'none';
}