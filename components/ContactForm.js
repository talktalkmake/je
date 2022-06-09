import { useId, useState } from "react"

const ContactForm = () => {
    const [subject, setSubject] = useState('wedding')
    return (
        <form>
            <nav>
                <ul className="sm:flex">
                    <li className={`cursor:pointer rounded py-1 px-2  sm:mr-4 ${subject === 'wedding' ? `bg-rouge text-white` : `bg-plaster bg-opacity-20`}`}
                        onClick={() => setSubject('wedding')}>Custom wedding stationery</li>
                    <li className={`cursor:pointer rounded py-1 px-2  sm:mr-4 ${subject === 'general' ? `bg-rouge text-white` : `bg-plaster bg-opacity-20`}`}
                        onClick={() => setSubject('general')}>Get in touch</li>
                </ul>
            </nav>
            <h3>Your Contact Details</h3>
            <section className="sm:flex">
                <section className="sm:relative mt-4 mr-4">
                    <label className='block hover:cursor-pointer sm:absolute sm:top-0 sm:bottom-0 sm:left-4 sm:flex sm:items-center'
                        htmlFor={useId()}>Name</label>
                    <input className='block border-2 border-labia px-2 py-1 rounded sm:pl-24'
                        type='text' placeholder="Sarah Smith" id={useId()} />
                </section>
                <section className="sm:relative mt-4">
                    <label className='block hover:cursor-pointer sm:absolute sm:top-0 sm:bottom-0 sm:left-4 sm:flex sm:items-center'
                        htmlFor={useId()}>email</label>
                    <input className='block border-2 border-labia px-2 py-1 rounded sm:pl-24'
                        type='email' placeholder="s.smith@gmail.com" id={useId()} />
                </section>

            </section>
            <section className="mt-8">
                <h4>What type of event do you need custom stationery for?</h4>
                <select className='border-2 border-labia p-2 rounded' onChange={e => setSubject(e.target.value)}>
                    <option>Wedding</option>
                    <option>Something else</option>
                </select>
            </section>
            <h3 className="mt-8">Your {subject === `Wedding` ? subject : `Event`}</h3>
            <section className="sm:relative mt-4">
                <label className='block hover:cursor-pointer sm:absolute sm:top-0 sm:bottom-0 sm:left-4 sm:flex sm:items-center'
                    htmlFor={useId()}>Date</label>
                <input className='block border-2 border-labia px-2 py-1 rounded sm:pl-24'
                    type='date' placeholder="Sarah Smith" id={useId()} />
            </section>
            <section className="sm:relative mt-4">
                <textarea className='block border-2 border-labia px-2 py-1 rounded'
                    placeholder='Tell me more'></textarea>
            </section>
        </form>
    )
}
export default ContactForm