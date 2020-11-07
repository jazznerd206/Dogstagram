// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.body);
  console.log(req.method);
  // console.log(req.query);
  // res.statusCode = 200;
  // res.json({ name: 'John Doe' });
  res.status(200).json({ name: 'John Doe' });
  res.end();
}
