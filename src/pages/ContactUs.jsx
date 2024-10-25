import github from '../images/icons/github_black.svg'
import twitter from '../images/icons/twitter_black.svg'
import linkedin from '../images/icons/linkedin_black.svg'




function ContactUs () {
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

        <form className="contactus--form__data">
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Jane Appleseed' id='name' name='name'/>
          </div>
          <div className="form__group">
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder='email@example.com' id='email' name='email'/>
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="6" placeholder='How can I help?'></textarea>
          </div>
          <div className="form__group--btn">
            <button className="btn">Send Message</button>
          </div>

        </form>

      </div>

    </div>
  )
}


export default ContactUs