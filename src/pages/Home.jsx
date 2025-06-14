import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle  */}
        <ThemeToggle />

        {/* Background Effects  */}
        <StarBackground/>

        {/* Navbar  */}
        <Navbar />

        {/* Main Content  */}
        <HeroSection/>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection />

        {/* Footer  */}
    </div>
  )
}

export default Home