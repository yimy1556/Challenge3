import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/about.css'



export default function Faqs() {

  return (
    <div className="container__super__faqs">
      <p id="title_accordeon">Frequent questions</p>
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
      </div>



    </div>

  );
}
