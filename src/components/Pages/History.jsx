import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    root: {
        display: 'flex',
        flexDirection: 'column',
       
    },
    history: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        padding: 20,
        backgroundColor: 'rgba(251, 255, 244, 0.7)',
        border: '3px solid rgba(241, 136, 5)',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
    },
    header: {
      fontFamily: "'A Day Without Sun', cursive",
      fontSize: '5rem',
      textAlign: 'center',
      textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
    },

    historyCard: {
        position: 'absolute',
        // top: '50%',
        // left: '50%',
        width: 'auto',
        height: 'auto',
        padding: 20,
        backgroundColor: 'rgba(251, 255, 244, 0.7)',
        border: '3px solid rgba(241, 136, 5)',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        
    },
    historyTitle: {
        fontSize: '50px',
        width: '30%',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        height: 'auto',
    },
    historyText: {
        fontSize: '20px',
        width: '100%',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        height: 'auto',
    },
});


function History() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Card className={classes.historyCard}>
            <CardContent>
                <Typography className={classes.historyTitle} gutterBottom variant="h5" component="h2">
                   History of birria tacos
                </Typography>
                <Typography className={classes.historyText} variant="body2" color="textSecondary" component="p">
                The History of Birria Tacos

Birria tacos are a flavorful Mexican dish with rich cultural roots that trace back to the state of Jalisco in Western Mexico, specifically in the town of Cocula. While modern versions of birria tacos feature a distinctive preparation involving crispy tortillas and a consommé for dipping, the dish itself originated as a way to address specific culinary needs, community practices, and even historical challenges. Below is a breakdown of the dish’s fascinating journey:

Origins of Birria

	1.	Birth in Jalisco during the Spanish Conquest (1500s):
Birria was born from the necessity to consume goat meat, which was introduced by the Spaniards during the conquest of Mexico. However, goats thrived in excess, and their meat was considered undesirable—tough, gamey, and smelly. In response, locals in Jalisco found ways to tenderize the meat by slow-cooking it in a rich blend of chili-based marinades and stews, giving rise to the dish now known as birria. The slow-cooking method helped break down the meat, making it tender and flavorful.
	2.	What does ‘Birria’ mean?
The term “birria” in Spanish colloquially refers to something of little value or insignificant—possibly a nod to the humble origins of the dish. What started as a solution for tough meat evolved into a treasured delicacy.

Traditional Ingredients of Birria

Birria reflects a fusion of indigenous Mexican and Spanish ingredients. Traditionally, the dish used:

	•	Goat meat or lamb (later, beef became a popular substitute)
	•	Dried chilies (such as guajillo, ancho, or pasilla)
	•	Spices: cumin, cloves, oregano, and bay leaves
	•	Garlic, onion, and vinegar (marinade essentials)
	•	Agave leaves: In early preparations, the meat was slow-cooked in agave pits or clay ovens.

The dish is marinated with chili paste and spices, then slow-cooked or braised, resulting in a savory stew with tender meat, known as birria de res (if made with beef) or birria de chivo (goat birria).

Evolution from Stew to Tacos

In its original form, birria was served as a soup or stew, especially at celebratory occasions like weddings, holidays, or baptisms. The rise of birria tacos likely developed through food vendors in Tijuana in the 2000s who experimented with different ways of serving the dish.

Key Innovations:

	•	Corn Tortillas Dipped in Consommé: Vendors began dipping tortillas in the birria’s fat-laden broth and frying them to add flavor and texture.
	•	Birria Tacos (Tacos de Birria): The tacos were filled with shredded birria meat, typically beef, along with onions, cilantro, and melted cheese (often Oaxaca cheese).
	•	Consommé on the Side: A side of rich, spiced broth—the same one used to cook the birria—was served for dipping the tacos, resulting in an irresistible, juicy bite.

This twist on the original stew quickly became popular across Tijuana’s street food scene and later spread internationally, with birria taco trucks and pop-ups appearing in major cities like Los Angeles, New York, and Chicago.

Why Birria Became Popular

	1.	Affordable and Adaptable: The shift to beef birria made the dish more accessible and easier to prepare for large-scale vendors. It became an ideal street food because it was cheap to make and incredibly flavorful.
	2.	Social Media and Trendiness: Birria tacos’ visually stunning presentation—crispy, reddish tortillas and the indulgent act of dipping them into consommé—played perfectly into the rise of food culture on Instagram, TikTok, and YouTube. Social media propelled the dish into international stardom.
	3.	Fusion of Tradition and Modernity: The tacos maintain a strong connection to traditional Mexican flavors while also appealing to modern food trends through their cheese-stuffed variations (like quesabirria) and bold presentation.

Birria Today: A Symbol of Mexican Ingenuity

Today, birria tacos are enjoyed across the world, but they still hold cultural significance in Jalisco and neighboring regions. They symbolize the resourcefulness of the Mexican people—transforming what was once a problem (an overabundance of goats) into a beloved dish. The dish’s journey from a traditional stew to an international street food sensation reflects the blending of old traditions with new techniques.

In summary, birria tacos are the product of necessity, tradition, and modern reinvention. What began as a humble stew to soften goat meat has transformed into a viral sensation, capturing the hearts and appetites of people worldwide.
                </Typography>
            </CardContent>

        </Card>
        </div>
    );
    }

    export default History; 