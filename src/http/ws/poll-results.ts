import { FastifyInstance } from "fastify";
import { voting } from "../../utils/voting-pub-sub";
import z from "zod";

export async function pollResults(app: FastifyInstance) {
    app.get(
        "/polls/:pollId/results",
        { websocket: true },
        (connection, request) => {
            const getPollParams = z.object({
                pollId: z.string().uuid(),
            });

            const { pollId } = getPollParams.parse(request.params);

            console.log("df85760c-800d-411e-81cd-3ad165dc01a4" === pollId);
            voting.subscribe(pollId, (message) => {
                connection.socket.send(JSON.stringify(message));
            });
        }
    );
}
