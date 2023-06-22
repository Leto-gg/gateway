import * as Realm from "realm-web";
import { RequestPayload } from "./types";

export async function getDbClient(
  appId: string,
  dataSource: string,
  dbName: string
) {
  const realmApp = new Realm.App({ id: appId });
  try {
    const user = await realmApp.logIn({
      providerType: "anon-user",
      payload: {},
      providerName: "anon-user",
    });
    return Promise.resolve(user.mongoClient(dataSource).db(dbName));
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function createResponse(body: any = {}, status: number) {
  let headers = { status };

  // if success response, set browser cache headers
  // if (status.toString().charAt(0) === '2') headers = Object.assign(getResponseHeaders(), headers)

  return Response.json(body, headers);
}

export function getResponseHeaders() {
  const headers = new Headers({});

  // headers.set("Cache-Control", "max-age=300");

  return headers;
}

const MAX_PAYLOAD_LIMIT = 50;

export const validateRequestPayload = (payload: Partial<RequestPayload>) => {
  if (payload.cids == null || payload.cids.length === 0)
    throw new Error("request needs atleast one cid to respond");

  if (!Array.isArray(payload.cids))
    throw new Error("cids need to be sent as a list");

  if (payload.page != null && payload.page! <= 0)
    throw new Error("invalid page");

  if (payload.size != null && payload.size! <= 0)
    throw new Error("invalid size");

  if (payload.size != null && payload.size > MAX_PAYLOAD_LIMIT)
    throw new Error(
      "the supplied data size parameter is currently not supported"
    );
};
