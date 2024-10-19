import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section className="top-section">
        <div className="top-left">
          <Image src='/hero.jpg' width={700} height={400} alt="hero"/>
          <h1>Israeli foreign minister claims Hamas leader Yahya Sinwar killed in Gaza operation</h1>
          <p>The audience on Wednesday was sent rolling in the aisles when the murder-espionage dramedy The 39 Steps opened on the 21st day of the ongoing World Culture Festival at the Arts Council of Pakistan (ACP) in Karachi</p>
        </div>
        <div className="top-right">
          <div className="story-block">
            <Image src='/left1.jpg' width={236} height={165} alt="first image"/>
            <div>
              <h2>Senate session, cabinet meeting set to begin as efforts underway to pass constitutional amendment</h2>
              <button className="btn">Read More</button>
            </div>
          </div>
          <div className="story-block">
            <Image src='/left2.jpg' width={236} height={165} alt="first image"/>
            <div>
              <h2>World Culture Festival: Audience takes 'The 39 Steps' for laughs of their lives</h2>
              <button className="btn">Read More</button>
            </div>
          </div>
          <div className="story-block">
            <Image src='/left3.jpg' width={236} height={165} alt="first image"/>
            <div>
              <h2>Steve Martin drops mysterious clue on Martin Short, Meryl Steep's romance</h2>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
