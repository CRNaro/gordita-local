import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: 'center',
        alignItems: "center",
        minHeight: "100vh",
    },
    contactForm: {
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "75%",
        },
        [theme.breakpoints.up("md")]: {
          width: "50%",
        },
        padding: 20,
        backgroundColor: "#F4EDE2",
        border: "3px solid rgba(241, 136, 5)",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
        color: "#111313",
      },
    inputField: {
        width: "50%",
        margin: "auto",
        padding: "1rem",
        border: "1px solid #F18805",
    },
    messageField: {
        width: "100%",
        height: "10rem",
        margin: "auto",
        padding: "1rem",
        border: "1px solid #F18805",
    },
}));


function Contact(){
    const [state, handleSubmit] = useForm("mqkrlavd");
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    if (state.succeeded) {
        return <p>Thank you for contacting me.  I will respond as soon as possible.</p>;
    }
    return(
        <Grid container className={classes.root}>
            <Card className={classes.contactForm}>
            <CardContent>
        <div className="contact-section">
        <h1>Please Contact Us</h1>
        <p>If you have interest in hosting us at your place of business or event please fill the 
            form below with all your info and request.  Thank you!</p>
        <form onSubmit={handleSubmit}>
<CardContent>
          <label>
              <input type="text" 
                      name="name" 
                      className={`${classes.inputField} form-control ${nameTouched && name === "" ? "is-invalid" : ""}`} 
                      placeholder={nameTouched && name === "" ? "Name required" : "Your Name"} 
                      onChange={e => setName(e.target.value)}
                      onBlur={() => setNameTouched(true)}
                      />
          </label>
          </CardContent>
          <CardContent>
          <label htmlFor="email" className="email-field">
           
            <input
              id="email"
              type="email" 
              name="email"
              className={`${classes.inputField} form-control ${emailTouched && email === "" ? "is-invalid" : ""}`} 
              placeholder={emailTouched && email === "" ? "Email required" : "Your Email"} 
              onChange={e => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </label>
          </CardContent>
          <CardContent>
          <label className="message-field" >
              <textarea name="message" 
             className={`${classes.messageField} form-control ${messageTouched && message === "" ? "is-invalid" : ""}`} 
             placeholder={messageTouched && message === "" ? "Message required" : "Your Message"} 
             onChange={e => setMessage(e.target.value)}
              onBlur={() => setMessageTouched(true)}
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
          </label>
          </CardContent>
          <Button type="submit" variant="contained" color="primary" disabled={state.submitting}>
            Submit
            </Button>
          <button type="submit" className="button" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
        </CardContent>
        </Card>
        </Grid>
    );
}

export default Contact;