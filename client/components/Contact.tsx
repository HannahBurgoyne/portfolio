import { useState } from 'react'
import Button from './UI/Button'
import nodemailer from 'nodemailer'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Send formData to your server for email processing
    // You'll need server-side code to handle the email sending.
    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    alert('Message sent!') // Replace this with your server-side code

    // Clear the form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-20">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="border border-[1px] rounded-md p-8 flex flex-col justify-center items-center w-96"
      >
        <input
          className="border border-[1px] rounded-md bg-black text-white p-2"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          className="border border-[1px] rounded-md bg-black text-white p-2"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          className="border border-[1px] rounded-md bg-black text-white w-48 h-48 p-2"
          id="message"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <Button>
          <input type="submit" value="Send Message" />
        </Button>
      </form>
    </div>
  )
}
