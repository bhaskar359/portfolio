interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'UMS',
    description: `A WebApp providing a platform for Admins to handle CRUD operations on Users which can be more scalable and easy to use. Integration of Google Forms to the application realx the Admin from data entry.`,
    imgSrc: '/static/images/github-traffic.png',
    href: 'https://github.com/bhaskar359/UMS',
  },
  {
    title: 'Secure Share',
    description: `A CLI tool which allows users to share their files securely using an open and public cloud service.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/S3v3ru5/SummerProject',
  },
]

export default projectsData
