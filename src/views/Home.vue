<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import BrandLogoSection from "../components/BrandLogoSection.vue";
import FeaturedCourses from "../components/FeaturedCourses.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    HeroSection,
    BrandLogoSection,
    FeaturedCourses,
    
}
}
</script>

<template>
  <HeroSection></HeroSection>
  <BrandLogoSection></BrandLogoSection>
  <FeaturedCourses></FeaturedCourses>
</template>
