import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Weddings() {
  return (
    <>
      <Head>
        <title>Weddings • Jolly Edition</title>
        <meta name="description" content="Custom wedding stationery by Laura Shema @ Jolly Edition" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/kfh0qus.css" />
      </Head>

      <main className='mb-10 border-t-labia border-t-8 pt-8'>
        <div className='container mx-auto px-4'>
          <header className='flex justify-between mb-16'>
            <Link href="/"><Image src="/jolly-edition-logo.svg" alt="Jolly Edition Logo" width={128} height={23} /></Link>
            <nav>
              <ul className='flex'>
                <li className='uppercase tracking-widest font-bold'><Link href='/'>About</Link></li>
                <li className='uppercase tracking-widest font-bold border-b-2 border-color-ink ml-4'>Weddings</li>
                <li className='uppercase tracking-widest font-bold ml-4'><Link href='/contact'>Contact</Link></li>
              </ul>
            </nav>
          </header>
          <p>Since 2012 Laura Shema has offered the truest custom approach to wedding stationery for hundreds of clients. She sells simple packages which can be tailored to your needs upon request.</p>
          <h3 className='border-t-2 border-color-dusk pt-4 mt-16'>PACKAGES</h3>
          <p>Choose from two simple packages; Design—the essential items; Design + Printing—design plus printing for 100 sets. (Additional sets, and embellishments, can be purchased.)</p>
          <section className='sm:flex'>
            <article className='sm:p-4'>
              <p>DESIGN</p>
              <p>$5,000</p>
              <p>• Save the date.</p>
              <p>• Invite, details card, reply card, map, thank you card.</p>
              <p>• Menu. Program. Drinks menu.</p>
              <Link href='/contact'><a className='bg-ink text-sand rounded p-2 uppercase tracking-widest text-xs inline-block font-bold my-4'>BOOK PACKAGE</a></Link>
            </article>
            <article className='sm:p-4'>
              <p>DESIGN + PRINTING</p>
              <p>$7,000</p>
              <p>• Save the date.</p>
              <p>• Invite, details card, reply card, map, thank you card.</p>
              <p>• Menu. Program. Drinks menu.</p>
              <p>• Printing & address printing for 100 sets included.</p>
              <p>• Assembly, postage stamps, and mailing included.</p>
              <Link href='/contact'><a className='bg-rouge rounded p-2 uppercase tracking-widest text-xs font-bold inline-block my-4'>BOOK PACKAGE</a></Link>
            </article>
          </section>
          <h3>Custom Process</h3>
          <article className='sm:flex sm:justify-around mt-16'>
            <p className='tracking-widest flex sm:justify-around items-center text-base mt-4 sm:mt-0'>
              <span className='bg-ink text-white rounded-full flex w-8 h-8 items-center justify-center mr-4'>1</span>
              RESEARCH
            </p>
            <p className='tracking-widest flex sm:justify-around items-center text-base mt-4 sm:mt-0'>
              <span className='bg-ink text-white rounded-full flex w-8 h-8 items-center justify-center mr-4'>2</span>
              CONCEPT
            </p>
            <p className='tracking-widest flex sm:justify-around items-center text-base mt-4 sm:mt-0'>
              <span className='bg-ink text-white rounded-full flex w-8 h-8 items-center justify-center mr-4'>3</span>
              DESIGN
            </p>
            <p className='tracking-widest flex sm:justify-around items-center text-base mt-4 sm:mt-0'>
              <span className='bg-ink text-white rounded-full flex w-8 h-8 items-center justify-center mr-4'>4</span>
              PRINTING
            </p>
          </article>
          <h3 className='border-t-2 border-color-dusk pt-4 mt-16'>RESEARCH</h3>
          <p>{`The idea of a formal research process can be intimidating to clients new to commissining artwork and design, but the common feedback from clients sounds something like 'this is so much fun, I'm happy to have this space to figure out just what I'd like.' Having been through the wedding planning process herself, Laura makes research the key stage of the project to ensure success through thorough planning. How does she do this?`}</p>

          <h3 className='border-t-2 border-color-dusk pt-4 mt-16'>WRITTEN RESEARCH</h3>
          <p>{`Questions specific to the event—what will it look like? What cannot be overlooked?—are best documented in writing to keep an objective reference to the project. Before Laura makes anything she's careful to understand the clients' needs.`}</p>

          <h3 className='border-t-2 border-color-dusk pt-4 mt-16'>VISUAL RESEARCH</h3>
          <p>{`Adjectives are evocative but subjective; two clients describing a 'rustic yet chic' event likely have very different ideas in mind. Examples of what those adjectives mean to each client using imagery helps inform Laura's concept of the artwork and design.`}</p>

          <p>Each client has enough time to properly understand and contribute to their research. Laura is always there to advise should anything be less than obvious.</p>

          <h3 className='border-t-2 border-color-dusk pt-4 mt-16'>CONCEPT</h3>
          <p>Once the client feels good about their research Laura will review to make sure she has everything she needs to confidently present the idea for the design. That idea is named the Concept. As part of her Concept Laura presents:</p>
          <dl className='my-8'>
            <dt className='sm:text-right sm:w-1/4 sm:inline-block'>Layout Sketch</dt>
            <dd className='sm:w-3/4 sm:pl-4 sm:inline-block'>What goes where, broadly speaking.</dd>
            <dt className='sm:text-right sm:w-1/4 sm:inline-block'>Palette</dt>
            <dd className='sm:w-3/4 sm:pl-4 sm:inline-block'>The key colors.</dd>
            <dt className='sm:text-right sm:w-1/4 sm:inline-block'>Format specifications</dt>
            <dd className='sm:w-3/4 sm:pl-4 sm:inline-block'>The shape and size of any printed goods.</dd>
            <dt className='sm:text-right sm:w-1/4 sm:inline-block'>Embellishments</dt>
            <dd className='sm:w-3/4 sm:pl-4 sm:inline-block'>Special touches to elevate the finsihed product.</dd>
            <dt className='sm:text-right sm:w-1/4 sm:inline-block'>Printing Options</dt>
            <dd className='sm:w-3/4 sm:pl-4 sm:inline-block'>Laura will present the printing options she believes the project will benefit from.</dd>
            <dt className='sm:text-right sm:w-1/4 sm:inline-block'>Timing Specifics</dt>
            <dd className='sm:w-3/4 sm:pl-4 sm:inline-block'>Once the Concept is presented Laura will have more accurate details on exactly when to expect the finished design.</dd>
          </dl>
          <p>{`The point of the Concept is to align expectations between Laura and the client. Because it's such a thorough projection of the design, the only surprises after the Concept should be good ones. Of course, since the Concept is the formative stage, it's important the plan for the following Design stage is sound. It's only natural for clients to have questions or concerns about the ideas presented in the Concept. By delaying the heavy lifting of the artwork and design the planning becomes of greater importance, but the ability to shift ideas and change direction remains possible later. Instead of racing to paint the design Laura's process steadily builds the research into the Concept at a slower pace to avoid the need for changes.`}</p>

          <p>{`Changes are rare with Laura, although she's happy to make simpler changes free of charge to get the design finished.`}</p>

          <h3 className='border-t-2 border-color-dusk pt-4 mt-16'>DESIGN</h3>
          <p>Once the reserach and Concept are agreed the hard work begins for Laura. The nature of custom work means every project is different. Whatever the Design entails, it's Laura's challenge to make the thousands of tiny decisions that combine to make a finished piece; her clients are in expert hands whose decades of experience inform her choices. Only when Laura is happy with her work does she neatly present is to the client.</p>

          <p>{`There's no design without a client and there's no product without the client's invaluable research and buy-in for the Concept. Feedback is an expected part of design and a professional designer can field all the feedback a client shares.`}</p>

          <h3 className='border-t-2 border-color-dusk pt-4 mt-16'>PRINTING</h3>
          <p>100 sets are included with the Design + Printing Package. For Design packages, clients may print separately themselves or purchase prints on an à la carte basis.</p>

          <h3>Questions</h3>
          <p>Ask anything you like via the contact form</p>

          <h3>Instagram</h3>
          <p>Gallery</p>
          <p>Pinterest</p>
          <p>Subscribe for updates:</p>
          <p>your.email@gmail.com</p>
          <p>SUBSCRIBE</p>
          <p>Featured By</p>
          <p>Glamour MagazineMartha Stewart WeddingsGlamour MagazineThe KnotEtsyWashintonian MagazineStyle Me PrettyYou & Your Wedding</p>
          <p>Search Jolly Edition</p>
          <p>e.g. wedding invitation</p>

          <h3>© 2012-2022 Jolly Edition</h3>

          <h3>Made with ♥ in Baltimore</h3>

        </div>
      </main>

      <footer>
      </footer>
    </>
  )
}