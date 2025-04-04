const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };

const module = {
    id: "CS101",
    name: "Web Development",
    description: "Learn how to build web apps with React and Node",
    course: "Software Engineering",
};

export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });

    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    // Get full module object
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });

    // Get module name
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });

    // Update module name
    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });

    // Update module description
    app.get("/lab5/module/description/:newDesc", (req, res) => {
        const { newDesc } = req.params;
        module.description = newDesc;
        res.json(module);
    });

    // Update assignment score
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = parseInt(newScore);
        res.json(assignment);
    });

    // Update assignment completed
    app.get("/lab5/assignment/completed/:status", (req, res) => {
        const { status } = req.params;
        assignment.completed = status === "true";
        res.json(assignment);
    });

  };
  