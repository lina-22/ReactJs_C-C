import selectedItem from "../../images/imgPage5/image6.png";
import masterImg from "../../images/imgPage1/image_master_card.png";
import paypalImg from "../../images/imgPage1/paypal.png";
import visaImg from "../../images/imgPage1/image_visa.png";

import groupImg from "../../images/contact_images/groupImage.jpg";
import "../../CSS_User/Group.css";

function Group() {
  return (
    <div>
      <div className="mx-auto">
        <div className="Contactlanding">
          <section className="Contactleft">
            
              <section className="Contactheader">
                <header>
                  <h1>
                    <span>Get In</span> <br /> TOUCH WITH OUR TEAM 24/7 j
                  </h1>
                </header>
              </section>
            
            <section className="groupImage">
              <img src={groupImg} alt="" />
            </section>
          </section>
          <section className="Contactright">
            <section className="helpline">
              <section className="helpline">
                <p>
                  <h2>Need Help?</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, ea aliquid?
                </p><br /><hr />
                <p>
                  <h2>Customer Service</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, ea aliquid? Ea, repudiandae Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Error,
                </p>
              </section>
            </section>
          </section>
        </div>

        <div className="hotlinkcontact">
          <h4>Write Us A Message</h4>
          <h6>We will do our best to reply to you as soon as possible</h6>
          <section className="hotlinkinput_grp">
            <section className="hotlinkleft">
              <select name="topic" id="topic" aria-placeholder="Select A Topic">
                <option value="Topic1">topic1</option>
                <option value="Topic2">topic2</option>
                <option value="Topic3">topic3</option>
              </select>
              <br />
              <input type="text" name="" id="" placeholder="Your full name" />
            </section>
            
            <section className="hotlinkright">
              <input type="text" placeholder="Enter your email" />
              <input type="text" placeholder="Order Number (If Applicable)" />
            </section>
          </section>
          <label for="txt">Your Message</label>
          <textarea name="" id="txt" cols="10" rows="5"></textarea>
          <br />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Group;
