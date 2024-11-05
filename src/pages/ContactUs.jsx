import github from '../images/icons/github_black.svg'
import twitter from '../images/icons/twitter_black.svg'
import linkedin from '../images/icons/linkedin_black.svg'
import { useRef, useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import emailjs from '@emailjs/browser'


function ContactUs () {

  const form = useRef()

  function messageTimer() {
    return setTimeout(() => {
      setAlert(false)
    }, 7000)
  }
  async function submitForm(e) {    
    e.preventDefault()
    try {
      
      if(!name) {
        setNameErr(true) 
        return
      }
      if(!message) {
        setMessageErr(true)  
        return
      }
      if(!isEmail(email)) {
        setEmailErr(true)
        return
      }
      setLoading(true)
      const sendEmail = await emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE, form.current, import.meta.env.VITE_APP_API_KEY)
      messageTimer()
      setAlert(true)
      setLoading(false)
      setSuccessMsg('Message Sent')
      clearFields()
    } catch(err) {
      setLoading(false)
      setAlert(true)
      setSuccessMsg('Something went wrong')
      messageTimer()
      clearFields()
    }
  }

  function clearFields() {
    setName('')
    setEmail('')
    setMessage('')
  }
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameErr, setNameErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false) 
  const [emailErr, setEmailErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [alert, setAlert] = useState(false)

  return (
    <div className="contactus container">
      <div className="contactus--getintouch">
        <div className="contactus--getintouch__title">
          <h3>Get in Touch</h3>
        </div>
        <div className="contactus--getintouch__text">
          <p>
            I’d love to hear about what you’re working on and how I could help. I’m currently 
            looking for a new role and am open to a wide range of opportunities. My preference 
            would be to find a position in a company in London. But I’m also happy to hear about 
            opportunites that don’t fit that description. I’m a hard-working and positive person 
            who will always approach each task with a sense of purpose and attention to detail. 
            Please do feel free to check out my online profiles below and get in touch using the form.
          </p>
          <div className="contactus--getintouch__text-social">
            <img src={github} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>


      </div>
      <div className="contactus--form">
        <div className="contactus--form__title">
          <h3>Contact Me</h3>
        </div>
        <form className="contactus--form__data" onSubmit={submitForm} ref={form}>
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder='Jane Appleseed' 
              id='name' 
              name='from_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameErr(false)}
            />
            {nameErr && <p className="name__error">This field is required</p>}
          </div>
          <div className="form__group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              placeholder='email@example.com' 
              id='email' 
              name='from_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailErr(false)}
            />
            {emailErr && <p className="name__error">A valid email is required</p>}
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea name="message" 
              id="message" 
              cols="30" 
              rows="6" 
              placeholder='How can I help?'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setMessageErr(false)}
            >
            </textarea>
            {messageErr && <p className="massage__error">This field is required</p>}
          </div>
          <div className="form__group--btn">
            <button className="btn">
              {loading ? <span className="loader"></span> : 'Send Message'}
            </button>
          </div>
        </form>
        <div className={`contactus--form__completion ${alert ? '' : 'hidden'}`}>
          <p>{successMsg}</p>
        </div>
      </div>
    </div>
  )
}


export default ContactUs