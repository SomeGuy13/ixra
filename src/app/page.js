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
      <h1>Getting Started</h1>
      <p>Perfect for if your new.</p>
      <Link href="/organization/history"><PageRow title={"History"} description={"A brief history of the past 150 years"}></PageRow></Link>
      <Link href="/organization/systems"><PageRow title={"System Organization"} description={"How we organize our systems"} /></Link>
      <Link href="/organization/planet-classes"><PageRow title={"Planet Classes"} description={"The different classes we use for planets"} /></Link>
      <h1>Archives</h1>
      <p>All the data we have collected through years of exploring</p>
      <Link href="/regions"><PageRow title={"Regions"} description={"List of all known regions"}></PageRow></Link>
      <PageRow title={"Corporations"} description={"List of all the corporations who explore for the IXRA"}></PageRow>
      <PageRow title={"Planets"} description={"List of all known planets"}></PageRow>
      <PageRow title={"Anomolous Objects"} description={"List of all anomolous ojects discovered"}></PageRow>
      <PageRow title={"Systems"} description={"List of all discovered systems"}></PageRow>
      <PageRow title={"Logs"} description={"Archives of all submited and discovered logs. Usually people telling of their explorations"}></PageRow>
      <Link href="/organization/history/full-history"><PageRow title={"History"} description={"Detailed history of how we got to where we are now"}></PageRow></Link>
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
