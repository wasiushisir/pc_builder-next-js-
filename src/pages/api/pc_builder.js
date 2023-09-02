// xqq7rAzRx7upPqCk

import { useRouter } from "next/router";

// wasiuahmed410

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://wasiuahmed410:xqq7rAzRx7upPqCk@cluster0.w0fjwcc.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const pc_builderCollection = client.db("pc_builder").collection("pc");
    const build_builderCollection = client.db("pc_builder").collection("build");
    if (req?.method === "GET") {
      const { category } = req.query;

      const { id } = req.query;
      // const sendId = id.toString();
      const objectId = new ObjectId(id);

      if (id) {
        const pcs = await pc_builderCollection
          .find({ _id: objectId })
          .toArray();

        res.send({ message: "success", status: 200, data: pcs });
      } else if (category) {
        const pcs = await pc_builderCollection
          .find({ Category: category })
          .toArray();
        res.send({ message: "success", status: 200, data: pcs });
      }

      // const router = useRouter();
      // const { pcId } = router.query;
      else {
        const pcs = await pc_builderCollection.find({}).toArray();
        const builds = await build_builderCollection.find({}).toArray();

        res.status(200).json({ pcs, builds });
      }
    }

    if (req.method === "POST") {
      const { ...data } = req.body;
      const builds = await build_builderCollection.insertOne(data);
      res.send({ message: "success", status: 200, data: builds });
    }

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
