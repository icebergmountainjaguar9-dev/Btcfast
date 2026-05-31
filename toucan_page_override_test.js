// toucan_page_override_test.js

document.body.innerHTML += `
<div style="
position:fixed;
top:20px;
left:20px;
background:red;
color:white;
padding:20px;
font-size:30px;
z-index:999999;">
🦜 TOUCAN SCRIPT ACTIVE
</div>
`;

document.body.style.background = "#ffeeee";

alert("TOUCAN SCRIPT ACTIVE");