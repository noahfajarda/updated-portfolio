async function sendEmailToUser(state) {
  await Email.send({
    Port: import.meta.env.VITE_CLOUD_EMAIL_PORT,
    Host: import.meta.env.VITE_CLOUD_EMAIL_HOST,
    Username: import.meta.env.VITE_CLOUD_EMAIL_USERNAME,
    Password: import.meta.env.VITE_CLOUD_EMAIL_PASSWORD,
    To: state.email,
    From: "akosibaukugan@gmail.com",
    Subject: "Thanks for checking me out!",
    Body: `<h1>Thanks for checking out my portfolio ${state.name}! Your message was sent!</h1>`,
  });
}
async function sendEmailToMe(state) {
  await Email.send({
    Port: import.meta.env.VITE_CLOUD_EMAIL_PORT,
    Host: import.meta.env.VITE_CLOUD_EMAIL_HOST,
    Username: import.meta.env.VITE_CLOUD_EMAIL_USERNAME,
    Password: import.meta.env.VITE_CLOUD_EMAIL_PASSWORD,
    To: "noahfajarda1@gmail.com",
    From: "akosibaukugan@gmail.com",
    Subject: `${state.name} Checked Out Your Portfolio!`,
    Body: `<div>Other Info: 

          <h1>Email: ${state.email}</h1>
          </br>
          <h1>Message: ${state.message}</h1>

        </div>`,
  }).then((message) => alert("Email sent successfully. If you haven't received anything yet, check your spam."));
}

export { sendEmailToUser, sendEmailToMe }