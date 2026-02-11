const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
// import { random } from 'gsap'
import prisma from './../admin/prismaClient'

const handler = async (req, res) => {
  const { name, email, userHandle } = req.body

  try {
    // const __dirname = path.dirname(new URL(import.meta.url).pathname)
    // const templatePath = path.join(__dirname, 'emailTemplate.ejs')
    // const ejsTemplate = fs.readFileSync(templatePath, 'utf-8')
    // const generateRandom4DigitNumber = () =>
    //   Math.floor(Math.random() * 9000) + 1000

    // const otp = generateRandom4DigitNumber()

    // const existingOtp = await prisma.otp.findUnique({
    //   where: {
    //     email: email,
    //   },
    // })

    // if (existingOtp) {
    //   await prisma.otp.update({
    //     where: {
    //       email: email,
    //     },
    //     data: {
    //       otp: otp.toString(),
    //     },
    //   })
    // } else {
    //   const createdEvent = await prisma.otp.create({
    //     data: {
    //       email: email,
    //       otp: otp.toString(),
    //     },
    //   })
    // }

    // console.log('otp created', otp)

    // const templateData = {
    //   name: name,
    //   email: email,
    //   userHandle: userHandle,
    //   otp: otp,
    // }

    // const htmlTemplate = ejs.render(ejsTemplate, templateData)

    // let transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'pjayasurya2711@gmail.com', // Replace  Gmail address
    //     pass: process.env.EMAIL_PASSWORD, // Replace  Gmail password in .env
    //   },
    // })

    // let message = {
    //   from: 'pjayasurya2711@gmail.com', // change this email address
    //   to: email,
    //   subject: 'OTP for CODE GEASE',
    //   html: htmlTemplate,
    // }

    // await transporter.sendMail(message)

    return res.status(200).json({
      msg: 'Email sending logic is currently commented out for development purposes.',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default handler
