<template>
  <header id="sticky-header" class="transparent-menu">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="main-menu">
                    <nav class="navbar navbar-expand-lg">
                        <div class="nav-sticky-custom">
                                <a href="#" class="navbar-brand">
                            <h3 class="logo">Boss<strong>Log</strong></h3>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span class="navbar-icon">MENU</span>
                        </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a class="nav-link" href="#">Demo</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">News</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                                <li class="nav-item"> <button class="btn btn-bosslog-hero filled"><a href="#">Start Free Trial</a></button></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
