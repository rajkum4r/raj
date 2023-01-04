import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExperienceCard from './ExperienceCard';
import cz_logo from "../../images/cz_logo.png"
import cg_logo from "../../images/cg_logo.png"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
type experience = {
  title: string,
  logo: any,
  description: any,
  techs: string,
  time: string
}
const experience: experience[] = [
  {
    title: "Cognizant",
    logo: cz_logo,
    description: [
      "Designed and developed 6+ front-end and back-end applications utilizing React.j, Node.js, and TypeScript",
      "Developed 10+ new application features and distributed services that support high-scale applications",
      "Helped evolve front-end and back-end stack",
      "Worked with Agile team across 4+ application domains",
      "Participated in 100+ weekly code reviews to ensure code quality and system efficiency",
      "Remained up to date with industry-standard technologies and mentored a team of 15+ junior developers",
      "Wrote structured, tested, readable, and maintainable code",
      "Helped maintain code quality, organization, and automatization for 6+ applications",
      "Assisted in developing and implementing systems architecture designs, patterns, and approaches",

    ],
    techs: "Reactjs, Nodejs, Express, React Native, DynamoDB, AWS Amplify, Twilio, Stripe",
    time: "September 2019 -"
  },

  {
    title: "Capgemini",
    logo: cg_logo,
    description: [
  "Developed Open stack API to Integrate with Amazon EC2 cloud based architecture in AWS, including creating machine Images and worked on AWS, High Availability Practices and deploying backup / restore infrastructure", 
  "Done Front - end UI development with Node.js, JavaScript MVC frameworks, Backbone.js, jQuery, Knockout.js, HTML5, CSS3 OO JavaScript, and LESS / SASS",
	"Designed and implemented application using JSP, Spring MVC, JDBC, SQL, Maven, JMS, Oracle, WebLogic, Tomcat", 
  "Designed, configured, and managed public / private cloud infrastructures using Amazon Web Services(AWS), which includes VPC, EC2, S3, Cloud Front, ELB and Elastic Beanstalk",
  "Built production web applications using Agile methodologies and modern technologies like React / Redux, Node.js / Express, ES6, and SQL / NoSQL ORM's",
  "Worked in a team to design the schema for the backend and created a database using Node and Mongo", 
    ],
techs: "Reactjs, Redux, Typescript, Bootstrap, Nodejs, Express, MongoDB, Vults,Digital Ocean",
  time: "August 2015 - September 2019"
  }

]
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'info.dark', color: "info.main" }}>
          <Tabs value={value} onChange={handleChange}
            indicatorColor="secondary" textColor='inherit' aria-label="basic tabs example" centered>
            {experience.map((items, index) => <Tab key={index} label={items.title} {...a11yProps(index)} />)}
          </Tabs>
        </Box>
        <Box >
          {experience.map((items, index) =>

            <TabPanel key={index} value={value} index={index} >
              <ExperienceCard
                logo={items.logo}
                description={items.description}
                techs={items.techs}
                time={items.time}
              />
            </TabPanel>
          )}
        </Box>
      </Box>

    </>
  );
}
