import './contact.css'

export  default function Contact () {
 
  return (
    <div id='contact' className='about' align="center">
      <br/>
      <div align="center" >
         <h1 >CANTACT</h1>
         <hr className='titleDecoration'/>
        </div>
    
    <div align="center" className="contact__form-container">
          <form action="#" className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>

            <button id='submitbtn' className='morebtn' align="center">
              Submit
            </button>
       
          </form>
        </div>
        <br/>
        <br/>
        </div> 
  );
};
