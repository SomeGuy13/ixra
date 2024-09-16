import PageRow from "@/components/PageRow";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl py-3 sm:pt-7">Intersteller Exploration and Research Authority</h1>
      <p>
        Welcome explorer. I see you yearn to reach the stars, to explore the universe,
        and tread where no man has tred beofre. Good. Thats who we need. Below are some 
        guids and training to get you started on your adventures. See you in the stars 
        explorer.
      </p>
      <Link href="/organization/history"><PageRow title={"History"} description={"A brief history of the past 150 years"}></PageRow></Link>
      <Link href="/organization/systems"><PageRow title={"System Organization"} description={"How we organize our systems"} /></Link>
      <Link href="/organization/planet-classes"><PageRow title={"Planet Classes"} description={"The different classes we use for planets"} /></Link>
      <h1>What actually is this?</h1>
      <p>
        This is a little writing project I'm working on, and I figured it would be fun to 
        make this with my web dev skills and add fun styles and such to it. So yea. None of it 
        is real though. My goal with this is to try to create worlds that truely feel alien.
      </p>
      <br/>
      <p>If you have any ideas or feedback, I would love to hear your thoughts! Email me at <a>viking77mech@gmail.com</a>!</p>
    </div>
  );
}
