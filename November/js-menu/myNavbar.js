const myNavbar = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="index.html">MyNavbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item ">
      <a class="nav-link" href="szamlalo2.html">Counter </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="szamologep.html">Calculator</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="happy.html">Toggle</a>
    </li>
 
  </ul>
</div>
</nav> `

document.querySelector("header").insertAdjacentHTML("beforebegin", myNavbar)