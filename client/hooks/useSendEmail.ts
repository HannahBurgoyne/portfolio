import { useMutation } from '@tanstack/react-query'

async function sendEmail(emailData) {
  const response = await fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  })

  if (!response.ok) {
    throw new Error('Email sending failed')
  }

  return response.json()
}

export function useSendEmailMutation() {
  return useMutation(sendEmail)
}
