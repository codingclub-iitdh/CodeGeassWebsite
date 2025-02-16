import blocksData from '@/types/Block/blockCard.types'

const data = [
  {
    id: '13',
    title: 'DevSprint',
    start_month: 'January 18th, 2025',
    description:
      "An exciting, fast-paced web development competition to create entertaining websites that captivate users. Whether you’re a frontend wizard or a backend guru, there’s a track for you!",
    url: 'https://docs.google.com/document/d/1kKW9FjxnC_uPh2-IKjykp4e_aWlZfNE05NYELP_CHnM/edit',
    image_url: '/Events/pics/devsprint2025.png',
  },
  {
    id: '12',
    title: 'CaptureTheGeese',
    start_month: 'December 27th, 2024',
    description:
      "Presenting CaptureTheGeese! — Get ready for a fun-filled, Jeopardy-style CTF where you can put your skills to the test! If you have a knack for solving puzzles, cracking codes, or thinking outside the box, then CaptureTheGeese is the perfect challenge for you!",
    url: 'https://ctf-codingclub.iitdh.ac.in',
    image_url: '/Events/pics/ctg2024.png',
  },
  {
    id: '11',
    title: 'Industry Lectures - Computer Systems',
    start_month: 'November 2024',
    description:
      "Join us for a series of exciting industry lectures on computer systems, covering Cybersecurity, Cloud Computing, and Compilers! Participate and engage with industry experts along with hands-on sessions and valuable insights that will enhance your knowledge! Don’t miss this opportunity to learn and connect!",
    url: 'https://docs.google.com/document/d/1HESi-4I2TBYckg53PNHLfmKu1l1_aSy-10JysNebi50',
    image_url: '/Events/pics/industry2024.jpg',
  },
  {
    id: '10',
    title: 'Sleepless Coding Saga 2.0',
    start_month: 'October 26-27th 2024',
    description:
      "Presenting...Sleepless Coding Saga 2.0, the revival of a hackathon. An event designed to harness the creative talents of our students and community members to address real-world challenges. Join us on an exciting 36 hour journey to ideate, innovate and build software that impacts the world!",
    url: 'https://sleepless-coding-saga-2.devfolio.co/',
    image_url: '/Events/pics/scs2_2024.png',
  },
  {
    id: '9',
    title: 'Cybersecurity Workshops',
    start_month: 'October 2024',
    description:
      "Join us for a workshop on Cybersecurity, where we cover topics like binary exploitation, web security, encryption, and more! Enhance your skills, learn about the intricacies of a computer system, and deepen your understanding of cybersecurity concepts.",
    url: 'https://tinyurl.com/offsecworkshop2024',
    image_url: '/Events/pics/cyber2024.jpg',
  },
  {
    id: '8',
    title: 'Code Compete Conquer!',
    start_month: 'September 1st, 2024',
    description:
      "Get ready for Code, Compete, Conquer – our exciting online Competitive Programming Contest! Test your skills, tackle fun challenges, and get a chance to win exclusvive goodies! Join us for a thrilling experience that will push your limits and ignite your passion for coding!",
    url: 'https://codeforces.com/',
    image_url: '/Events/pics/c3_2024.png',
  },
  {
    id: '7',
    title: 'Intro to Competitive Programming',
    start_month: 'August 2024',
    description:
      "Join us for a workshop on Competitive Programming featuring Codeforces challenges. Tackle algorithmic problems and connect with fellow coders. It’s a great way to boost your problem-solving abilities and dive into the world of competitive coding!",
    url: 'https://codeforces.com',
    image_url: '/Events/pics/cc2024.png',
  },
  {
    id: '6',
    title: 'Python for Beginners',
    start_month: 'August 2024',
    description:
      "Get ready for an engaging Python programming workshop designed for beginners! Dive into hands-on learning, from variables right up to Object Oriented Programming. With guidance from our experienced mentors, it is sure to be an inspiring experience that will spark your passion for programming!",
    url: 'https://tinyurl.com/pyworkshop2024',
    image_url: '/Events/pics/py2024.png',
  },
  {
    id: '5',
    title: 'Arcadia!',
    start_month: 'August 2024',
    description:
      "Arcadia is an event where your wildest game ideas can come to life! Join forces with fellow designers and storytellers to create captivating games and showcase your talents! Dive deep into the game development process, whether you are a beginner or a seasoned developer, there's something for you in this jam",
    url: 'https://docs.google.com/document/d/1FrgPU6TnbxQVi0AyiPxa297S0ZxGavvyRxogXoXDPhw/',
    image_url: '/Events/pics/arcadia2024.png',
  },
  {
    id: '4',
    title: 'Circuit Chase',
    start_month: 'July 2024',
    description:
      "Welcome to Circuit Chase! Develop, test, and optimize your line-following robot for conquering labyrinthine tracks. Whether you're a beginner or an experienced hobbyist, unleash your ingenuity and master maze navigation. Dive into the competition and elevate your robotics skills!",
    url: 'https://drive.google.com/drive/folders/1UDGr0HSmmfIxMJkF9ZlTsgX2PhBgAOnG',
    image_url: '/Events/pics/circuit.png',
  },
  {
    id: '3',
    title: 'DevShelf',
    start_month: 'June - July 2024',
    description:
      'Create a Library Management System for academic institutions to modernize library operations. Gain valuable experience in software development and boost your project design and problem-solving skills in this casual but interesting challenge.',
    url: 'https://drive.google.com/file/d/1aGR7XAZVzu8ZnD2aSb_VTj5nTL7Z0ssP/view',
    image_url: '/Events/pics/devshelf.png',
  },
  {
    id: '2',
    title: 'Sleepless Coding Saga',
    start_month: 'October 2023',
    description:
      'The "Sleepless Coding Saga" hacktahon, an event designed to harness the creative talents of our students and community members to address real-world challenges in our campus!',
    url: 'https://drive.google.com/file/d/1AK3JeVHrIgZJVNJdmCl1IfupDA52oGGZ/view',
    image_url: '/Events/pics/sleepless2023.jpg',
  },
  {
    id: '1',
    title: 'Bitwise Symphony',
    start_month: 'July 2023',
    description:
      'Unleash your algorithmic prowess, crafting a symphony from integers. Witness the mesmerizing rise of numbers, powered by bitwise sorcery. Seek the harmonies that transcend ordinariness, forging an ascending masterpiece. Dare you compose the ultimate melody, or chase the enigmatic crescendo? Enter the realm of Bitwise Symphony!.',
    url: 'https://drive.google.com/file/d/1oYef04uoGGo2glUbUzRyPpaeH74GXIer/view',
    image_url: '/Events/pics/sar.png',
  },
  {
    id: '0',
    title: 'Toolset Unbounded',
    description:
      'The problem Statement involves developing a GUI frontend with a user-friendly UI/UX. It includes a secure signup/login page with password/OTP protection. Implement a lossless image and text compression/decompression algorithms. Compressed images are stored in a secure database, and a file management system allows users to add/delete their images. You are free to choose various components, and exploration is encouraged.',
    start_month: 'June - July 2023',
    url: 'https://drive.google.com/file/d/15gb-OIBMqm8VlWeJ3AOWYgFbwCTwLM4d/view',
    image_url: '/Events/pics/toolset.jpg',
  },
];

export default data
