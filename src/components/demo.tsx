import { HeroGeometric } from "./ui/shape-landing-hero"
import classbridgeWordmark from "../assets/classbridge-wordmark.png"

function DemoHeroGeometric() {
    return <HeroGeometric
        badge="ClassBridge"
        badgeLogo={classbridgeWordmark}
        title1="The Bridge to"
        title2="Modern Education"
        subtitle="One platform for students, teachers, and parents—attendance, grades, and communication in one place."
    />
}

export { DemoHeroGeometric }