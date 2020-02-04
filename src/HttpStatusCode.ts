export enum HttpStatusCode {
    Ok = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,

    Conflict = 409,
    NotFound = 404,
    Forbidden = 403,
    BadRequest = 400,
    Unauthorized = 401,
    UnprocessableEntity = 422,

    InternalServerError = 500,
    RequestTimedOut = 503
}
