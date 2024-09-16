export default function Page() {
  return (
    <div>
      <h1>Systems</h1>
      <p>
        Galaxies are huge, we're still working on exploring one at the moment. But we need a way of storing information about
        these things in the galaxy in a way that they can be easily found, which leads us to our object codes.
      </p>
      <br/>
      <p>RB-02-032</p>
      <br/>
      <p>
        That is a object code. This is given to large objects inside a system. Lets break it down further. The RB is the region 
        name. In this instance, RB stands for Rubicon. We divide up the galaxy we're exploring into regions. Each region consists of 
        100 stars, black holes, or nebulae which the two numbers after the region represent which star that is. This number is assigned in the order
        they were discovered. So RB-23 would be discovered before RB-24. This star id starts at 00 so we can easily fit 100 in there without
        needing to add an extra diget. After the star id, comes the planet or object number. This can range from 000 to 999 but it isn't likely
        to get that high.
      </p>
      <br/>
      <p>
        That covers most of the object codes you'll see out there, but there is a few more we need to brief you on. If there is a nebulae, the only difference is that the star id will be replaced with an N and then some letter after that starting with a. For example, a nebulas id in the capriconian region would be CP-NA. This is the same for black holes, but instead of an N at the beginning, there is a B. If there are objects that don't fit into any of these codes, they are called anomolous and will have an A followed by a three diget number starting at 000. These may be moved into different object ids if we can find a place for them. If they are confined to a specific region, than it might have a region followed by an A and then the id code.
      </p>
      <br/>
      <p>
        Here are some examples:
      </p>
      <br/>
      <p>
        RB-84-012: A planet with the id of 012 orbiting the star 84 in the Rubicon region.
      </p>
      <p>
        RB-ND: A nebulae with the id of D in the Rubicon region 
      </p>
      <p>
        CN-BA: A black hole with the id of A in the Capriconian region
      </p>
      <p>
        A-015: An anomolous object with the id of 015 with no specific region 
      </p>
      <p>
        RB-A-007: An anomolous object with the id of 007 in the Rubicon region 
      </p>
    </div>
  )
}
