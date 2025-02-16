import blocksData from '@/types/Block/blockCard.types'

import SCA from '@/public/Projects/Images/IMG_1_Stock.png'
import gd from '@/public/Projects/Images/Gaming Image.jpg'

const data: blocksData = [
  {
    id: '0',
    title: 'Student Companion App',
    description:
      "We're developing an inclusive mobile app for an educational institution, providing personalized timetables, \
      instant notifications, in-class quizzes, and admin interaction. Key features: accessible timetables, real-time updates, \
      in-class quizzes, and an admin dashboard. The app ensures secure communication, user profiles, and resource sharing, \
      boosting student engagement, efficient communication, administrative efficiency, and tech integration. It centralizes \
      academic resources, creating a dynamic learning environment and improving student-admin interaction.",
    url:
      'https://docs.google.com/document/d/1Xg70yNGxvFGi6nF9kM9sy2WNs6MPmpqwWJGSUkJJ5DY/edit?usp=sharing',
    image_url: SCA.src,
    start_month: 'FOSS',
  },
  {
    id: '1',
    title: '2D-Platformer Game',
    description:
      'Currently we are developing a 2D top down game ,based on the theme of ruin exploration, set on a fictional stage. \
      This game boasts a rich world filled with exploration and adventure.',
    url:
      'https://docs.google.com/document/d/1QNEcDAQeoi_AZt7qXQF7T2RmdZCxovqfjODHy5joCzw/edit?usp=sharing',
    image_url: gd.src,
    start_month: 'Game Dev',
  },
]

export default data
