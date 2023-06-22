/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { RequestPayload } from "./types";
import { createResponse, getDbClient, validateRequestPayload } from "./utils";

export interface Env {
  REALM_APP_ID: string;
  MONGO_DATASOURCE: string;
  MONGO_DATABASE_NAME: string;
  MONGO_METRICS_COLLECTION: string;
}

let dbClient: Realm.Services.MongoDBDatabase;

const requestDefaults: Partial<RequestPayload> = {
  size: 10,
  page: 1
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const start = Date.now();
    if (request.method !== "POST") {
      return new Response(null, { status: 405 });
    }
    const payload: RequestPayload = await request.json();

    try {
      validateRequestPayload(payload);
    } catch (error: any) {
      return createResponse({ success: false, message: error?.message }, 400);
    }

    const { cids, size, page }: RequestPayload = Object.assign({}, requestDefaults, payload)

    // init db client
    if (dbClient == null) {
      try {
        dbClient = await getDbClient(
          env.REALM_APP_ID,
          env.MONGO_DATASOURCE,
          env.MONGO_DATABASE_NAME
        );
        console.log("db client initialised successfully");
      } catch (error) {
        console.log("Error initializing Database client, reason:", error);
        return createResponse(
          { success: false, message: "Could not redirect" },
          500
        );
      }
    }

    let results: Array<any>;
    try {
      results = await dbClient
        .collection(env.MONGO_METRICS_COLLECTION)
        .aggregate([
          { $match: { cid: { $in: cids.slice(0, size + 1) } } },
          { $project: { _id: 0 } },
          {
            $facet: {
              metadata: [{ $count: "total" }, {  $addFields: { page } }],
              data: [{ $skip: (page-1)*size }, { $limit: size }]
            }
          },
        ])
    } catch (error) {
      console.warn("query failed, reason: ", error);
      return createResponse(
        { success: false, message: "failed to process the query" },
        500
      );
    }

    const requestTime = Date.now() - start;

    console.log(`request took ${requestTime}ms`);
    return createResponse({ success: true, data: results! }, 200);
  },
};
