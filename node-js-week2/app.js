import { on } from "events";
import express from "express";
import fs from "fs";
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

const documents = JSON.parse(fs.readFileSync("./documents.json", "utf-8"));

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.json(documents);
  }
  const filtered = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      String(value).toLowerCase().includes(query.toLowerCase())
    )
  );

  res.json(filtered);
});
app.get("/documents/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid document ID" });
  }

  const document = documents.find((doc) => doc.id === id);

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  res.json(document);
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  // If both q and fields are provided, return a 400 error
  if (query && fields) {
    return res
      .status(400)
      .json({ error: "Cannot provide both 'q' and 'fields' together." });
  }

  // Handle search by query parameter "q"
  if (query) {
    const filteredDocs = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
    return res.json(filteredDocs);
  }

  // Handle filtering by specific fields from request body
  if (fields) {
    const filtered = documents.filter((doc) =>
      Object.entries(fields).every(
        ([key, value]) =>
          doc[key] &&
          String(doc[key]).toLowerCase() === String(value).toLowerCase()
      )
    );
    return res.json(filtered);
  }

  // If no query or fields provided, return all documents
  res.json(documents);
});
