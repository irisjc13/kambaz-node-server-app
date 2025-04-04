export default function PathParameters(app) {
    app.get("/lab5/add/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) + parseInt(b);
      res.send(sum.toString());
    });
    app.get("/lab5/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) - parseInt(b);
      res.send(sum.toString());
    });

    app.get("/lab5/multiply/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const result = parseInt(a) * parseInt(b);
        res.send(result.toString());
    });

    app.get("/lab5/divide/:a/:b", (req, res) => {
       const { a, b } = req.params;
        // Handle divide-by-zero case
        if (parseInt(b) === 0) {
          res.status(400).send("Division by zero is not allowed.");
        } else {
          const result = parseInt(a) / parseInt(b);
          res.send(result.toString());
        }
    });

  };
  