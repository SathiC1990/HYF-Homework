import express from "express";
import fs from "fs/promises";
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

const loadDocuments = async () => {
  try {
    const data = await fs.readFile("documents.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading documents.json:", error);
    return [];
  }
};
app.get("/search", async (req, res) => {
  try {
    const documents = await loadDocuments();
    const query = req.query.q;

    if (!query) {
      // If no query is provided, return all documents
      return res.json(documents);
    }

    // Filter documents where any field contains the query string
    const filteredDocs = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );

    res.json(filteredDocs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/documents/:id", async (req, res) => {
  try {
    const documents = await loadDocuments();
    const document = documents.find((doc) => doc.id === Number(req.params.id));

    if (!document) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

 // POST /search - Search with query and/or specific fields
app.post("/search", async (req, res) => {
  try {
    const documents = await loadDocuments();
    const { q } = req.query;
    const { fields } = req.body;

    // If both q and fields are provided, return a 400 error
    if (q && fields) {
      return res
        .status(400)
        .json({ error: "Cannot provide both 'q' and 'fields' together." });
    }

    let filteredDocs = documents;

    // Handle search by query parameter "q"
    if (q) {
      filteredDocs = documents.filter((doc) =>
        Object.values(doc).some((value) =>
          String(value).toLowerCase().includes(q.toLowerCase())
        )
      );
    }

    // Handle filtering by specific fields from request body
    if (fields) {
      filteredDocs = documents.filter((doc) =>
        Object.entries(fields).every(
          ([key, value]) =>
            String(doc[key]) &&
            String(doc[key]).toLowerCase() === value.toLowerCase()
        )
      );
    }

    res.json(filteredDocs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
