import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Profile() {
    const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
        <div>
            <h1 className='text-3xl font-light tracking-wider border-b-2 text-black mt-5 mx-20'>Student Profile</h1>
            <section className='flex justify-center items-center mt-6 px-10 gap-5'>
                <div className='bg-orange-100 text-[#2d2d2e] py-5 px-10 text-2xl rounded-xl shadow-xl hover:shadow-none font-semibold'>CLASS 9</div>
                <div className='bg-green-100 text-[#2d2d2e] py-5 px-10 text-2xl rounded-xl shadow-xl font-semibold hover:shadow-none'>SECTION C</div>
                <div className='bg-cyan-100 text-[#2d2d2e] py-5 px-10 text-2xl rounded-xl shadow-xl font-semibold hover:shadow-none'>Roll No. - 09915603120</div>
            </section>
            <section className='my-10 mx-20 '>
                <div className='bg-white w-max py-4 px-10 rounded-xl shadow-lg mx-auto hover:shadow-xl'>
                    <div className='text-xl'>Class Teacher :</div>
                    <div className='flex items-center gap-4'>
                        <img className='w-12 h-12 rounded-full' src='https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' />
                        <div className='text-2xl'>Mr. Mamta Kulkarni</div>
                    </div>
                </div>
            </section>
            <section className='px-20'>
                <h1 className='text-xl py-2 border-b-2 mb-2'>Subject Curriculum</h1>
                <Accordion
                    expanded={expanded === "panel1"}
                    sx={{ boxShadow: 0 }}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography
                            className=""
                            variant="h6"
                            sx={{ width: "95%", flexShrink: 0, fontSize: "20px" }}
                        >
                            Mathematics
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h6"
                            sx={{ color: "text.secondary", fontSize: "16px" }}
                        >
                            Real Numbers, Polynomials, Introduction to Euclid's Geometry, Lines and Angles, Triangles, Coordinate Geometry, Areas, Linear Equations in Two Variables, Quadrilaterals, Circles, Constructions, Surface Areas and Volumes, Statistics, Probability.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel2"}
                    sx={{ boxShadow: 0 }}
                    onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography
                            className=""
                            variant="h6"
                            sx={{ width: "95%", flexShrink: 0, fontSize: "20px" }}
                        >
                            Science
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h6"
                            sx={{ color: "text.secondary", fontSize: "16px" }}
                        >
                            Real Numbers, Polynomials, Introduction to Euclid's Geometry, Lines and Angles, Triangles, Coordinate Geometry, Areas, Linear Equations in Two Variables, Quadrilaterals, Circles, Constructions, Surface Areas and Volumes, Statistics, Probability.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel3"}
                    sx={{ boxShadow: 0 }}
                    onChange={handleChange("panel3")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography
                            className=""
                            variant="h6"
                            sx={{ width: "95%", flexShrink: 0, fontSize: "20px" }}
                        >
                            Social Science
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h6"
                            sx={{ color: "text.secondary", fontSize: "16px" }}
                        >
                            Real Numbers, Polynomials, Introduction to Euclid's Geometry, Lines and Angles, Triangles, Coordinate Geometry, Areas, Linear Equations in Two Variables, Quadrilaterals, Circles, Constructions, Surface Areas and Volumes, Statistics, Probability.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel4"}
                    sx={{ boxShadow: 0 }}
                    onChange={handleChange("panel4")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography
                            className=""
                            variant="h6"
                            sx={{ width: "95%", flexShrink: 0, fontSize: "20px" }}
                        >
                            English
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h6"
                            sx={{ color: "text.secondary", fontSize: "16px" }}
                        >
                            Real Numbers, Polynomials, Introduction to Euclid's Geometry, Lines and Angles, Triangles, Coordinate Geometry, Areas, Linear Equations in Two Variables, Quadrilaterals, Circles, Constructions, Surface Areas and Volumes, Statistics, Probability.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel5"}
                    sx={{ boxShadow: 0 }}
                    onChange={handleChange("panel5")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography
                            className=""
                            variant="h6"
                            sx={{ width: "95%", flexShrink: 0, fontSize: "20px" }}
                        >
                            Hindi
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h6"
                            sx={{ color: "text.secondary", fontSize: "16px" }}
                        >
                            Real Numbers, Polynomials, Introduction to Euclid's Geometry, Lines and Angles, Triangles, Coordinate Geometry, Areas, Linear Equations in Two Variables, Quadrilaterals, Circles, Constructions, Surface Areas and Volumes, Statistics, Probability.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel6"}
                    sx={{ boxShadow: 0 }}
                    onChange={handleChange("panel6")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography
                            className=""
                            variant="h6"
                            sx={{ width: "95%", flexShrink: 0, fontSize: "20px" }}
                        >
                            Information Technology
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h6"
                            sx={{ color: "text.secondary", fontSize: "16px" }}
                        >
                            Real Numbers, Polynomials, Introduction to Euclid's Geometry, Lines and Angles, Triangles, Coordinate Geometry, Areas, Linear Equations in Two Variables, Quadrilaterals, Circles, Constructions, Surface Areas and Volumes, Statistics, Probability.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </section>
        </div>
    )
}

export default Profile