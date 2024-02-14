import fastify from "fastify";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-results";
import { voteOnPoll } from "./routes/vote-on-poll";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";

const app = fastify();

app.register(cookie, {
    secret: "dfbkmhsdvfkojiu",
    hook: "onRequest",
});
app.register(websocket);

app.register(getPoll);
app.register(createPoll);
app.register(voteOnPoll);
app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
    console.log(`Server is running at port:`, 3333);
});
