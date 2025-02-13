export type FeedbackFormServiceProps = {
  name: string;
  phone: string;
  email: string;
};

export async function POST(_request: Request) {
  const body: FeedbackFormServiceProps = await _request.json();

  const { name, phone, email } = body;

//   var mailOptions = {
//     from: process.env.NMUSER,
//     to: process.env.NMUSER,
//     text: `email: ${email}`,
//   };

  try {
    // await transporter.sendMail(mailOptions);
  } catch (error) {
    return Response.json({ error }), {
      status: 500,
    };
  }
  return Response.json(body);
}
