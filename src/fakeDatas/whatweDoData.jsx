export const sampleData = [
  {
    title: "Empowerment Programs",
    description: "Our empowerment programs provide training and mentorship to young women, equipping them with essential skills.",
    buttonLabel: "Learn More",
    slideshowComponent: "Slideshow"
  },
  {
    title: "Entrepreneurship Training",
    description: "We offer comprehensive training in entrepreneurship, helping women start and manage their businesses.",
    buttonLabel: "Join Now",
    slideshowComponent: "Slideshow2"
  },
  // You can add more data items as needed
];
export const getWhatWeDoData = () => {
  return sampleData.map((item) => ({
    title: item.title,
    description: item.description,
    buttonLabel: item.buttonLabel,
    slideshowComponent: item.slideshowComponent,
  }));
};
// Paragraph data to be included
export const paragraphData = "Igire Rwanda Organization is dedicated to empowering young girls and women, providing them with the skills, resources, and support they need to thrive. Through education, mentorship, and hands-on training programs, Igire Rwanda helps these women unlock their potential, fostering their confidence and capabilities to lead in their communities. By offering opportunities in areas like entrepreneurship, technology, and leadership, the organization accelerates their journey toward economic independence and personal growth. At Igire Rwanda, we believe that empowered women are key to building a brighter, more inclusive future for all.";