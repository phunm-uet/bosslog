<template>
  <div id="app">
    <Loader :loading="loading" />
    <Header />
    <HeroUnit />
    <VideoSection />
    <Intro/>
    <Pricing />
    <FAQ />
    <Testimonials />
    <CTA />
    <Footer />
    <FooterBottom/>
  </div>
</template>

<script>
import Loader from './components/Loader';
import Header from './components/Header';
import HeroUnit from './components/HeroUnit';
import VideoSection from './components/VideoSection';
import Intro from './components/Intro';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
export default {
  name: 'app',
  data(){
    return{
      loading: true,
    }
  },
  components: {
    Loader,Header,HeroUnit,VideoSection,Intro,Pricing,FAQ,Testimonials,CTA,Footer,FooterBottom
  },
  beforeMount(){
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  mounted(){
    new WOW().init();
  }
}
</script>

<style>
</style>
