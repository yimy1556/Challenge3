import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/faqs.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { animateScroll as scroll } from 'react-scroll'
import { useEffect } from 'react'
import callCenter from '../images/callCenter.jpg'
import shipping from '../images/ship.jpg'
import costure from '../images/sewing-machine-square.webp'
import { Card, Row } from 'react-bootstrap'



export default function Faqs() {

  useEffect(() => {
    scrollToTop()
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <>

      <Header></Header>
      <div className="container__super__faqs" style={{ borderTop: '1px solid #111111' }}>
        <p id="title_accordeon">FREQUENTLY ASKED QUESTIONS</p>
        <div className="container__accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How do I find a Pyral retail store near me?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To only display Pyral owned retail stores,
                select the "Pyral Stores" from the check boxes below the map; otherwise,
                the results list will display both Pyral owned retail stores,
                as well as all retailers that carry Pyral products.
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>What are your policies on sales tax and tax exempt orders?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Pyral has a constitutional obligation to collect sales use tax in those states we are licensed to do business.
                Sales tax is calculated using the address where the product is being shipped.
                If for any reason you believe you are exempt from paying sales tax,
                please contact us and we will assist you with processing your order.
                Please have all the proper exemption tax information available.
                Credit cards that do not participate in the verification process will not be accepted.
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>What is the Customer Service phone number and hours of operation?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our hours of operation are: <br />
            Monday through Friday (6 AM – 3:30 PM PST)<br />
            Email: your.pyral@gmail.com<br />
            Call: (855) 909-8267<br />
            Text: (714) 598-1819<br />
            Live chat: when available, the “Live Chat” button is at the top and right side of any page.
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>Do you offer exchanges?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Due to high volume and dynamic inventory fluctuations, we do not currently offer exchanges through Pyral.com.
                You can return your product and reorder.
              <table border="1" cellpadding="15" cellspacing="2">
                  <tbody>
                    <tr>
                    </tr>
                    <tr className="title__table">
                      <td>Returns only by US Postal Service</td></tr>
                    <tr>
                      <td>1. Pack and seal the product securely in your original Pyral box (if possible) or any cardboard shipping box</td>
                    </tr>
                    <tr>
                      <td>2. Write your <b>name</b>, <b>return address</b>, and <b>order number</b> on the return shipping label. Order number(s)
                    can be found in your order history at Pyral.com and in your shipping confirmation email. </td>
                    </tr>
                    <tr>
                      <td>3. Attach the prepaid US Postal Service return label to the outside of the return package (make sure to cover or remove any old shipping labels)</td>
                    </tr>
                    <tr>
                      <td>4. The package can be picked up by the US Postal Service at your mailbox or dropped off at the Post Office or FedEx Retail location</td>
                    </tr>
                    <tr>
                      <td>*Please note, due to COVID-19, shipping carriers have reported delays. Please note, returns may take 8-13 business days to be delivered
                      sback to our DC to process. We appreciate your patience and understanding.</td>
                    </tr>
                    <tr>
                      <td>A full refund, excluding shipping charges, will be issued on unworn merchandise within 30 business days to the original form of payment</td>
                    </tr>
                  </tbody>
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>How are your shoes sized?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our shoes are sized according to the US standard; the size conversion from women's to men's shoes is 1.5 sizes down. <br />
              For example, if you were a size 8 in women's, you'd be a size 6.5 in men's.
              If you fall below men's 6.5, you would fit into the "Kids" category. <br />
              Please note, by design, our high performance skate shoes tend to fit snug, so you may want to select a half size larger. <br />
              Alternatively, if you have a wide foot, you may purchase one size larger to compensate for the width or check out designing your own pair of wide Customs!
              Check out our size charts below: <br />
              Shoe Size Chart: Unisex <br />
              Shoe Size Chart: Infant <br />
              Shoe Size Chart: Toddler <br />
              Shoe Size Chart: Kid

          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>What are the benefits of registering on Pyral.com?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Benefits of registering on Pyral.com: <br />
              • Access to track orders <br />
              • Review your order history <br />
              • Add multiple addresses and payment methods for easy checkout <br />
              • Easy-to-share favorites list <br />
              • Ability to personalize and manage your profile <br />
              • Be the first to know about Pyral product news and special promotions
            </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>What is Pyral Family?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Pyral Family is an experiential loyalty program, our way of inviting you to enjoy Off The Wall experiences designed for our biggest fans. <br />
            As a member of our family, you’ll get insider information, exclusive Customs designs and members-only experiences. <br />
            Earn points from shopping and sharing, and redeem those points for rewards. Still curious? Check out the Pyral Family FAQ page! <br />
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
        <Row style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 5%' }}>
          <Card style={{ width: '18rem', margin:'1rem'}}>
            <Card.Img variant="top" src={costure} />
            <Card.Body>
              <Card.Text>

                We make quality products, taking into account the highest industry standards. We start from the simplest, a good fabric.
         </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin:'1rem' }}>
            <Card.Img variant="top" src={shipping} />
            <Card.Body>
              <Card.Text>
                Locate your order without logging in. Enter the order number, email address, and zip code (billing or shipping) associated with the order you wish to find.
         </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin:'1rem' }}>
            <Card.Img variant="top" src={callCenter} />
            <Card.Body>
              <Card.Text>
                Once you have received your order and have any questions, you can contact us. We are via chat or by phone.
         </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>


      <Footer></Footer>
    </>
  )
}

